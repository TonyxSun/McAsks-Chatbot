from inspect import Parameter
from flask import Flask, request, render_template
import requests
from twilio.twiml.messaging_response import MessagingResponse
from requests.structures import CaseInsensitiveDict
from dotenv import load_dotenv
import os
from directions import getDirections
import search
import weather

load_dotenv()

config = {
    "DEBUG": True  # run app in debug mode
}

# define common header for all M3O access
headers = CaseInsensitiveDict()
headers["Content-Type"] = "application/json"
headers["Authorization"] = "Bearer %s" % os.environ['M3O_TOKEN']

app = Flask(__name__)
app.config.from_mapping(config)


@app.route('/bot', methods=['POST'])
def bot():
    # obtain body of request
    incoming_msg = request.values.get('Body', '').lower()
    incoming_number = request.values.get('From', '')
    incoming_number = incoming_number.replace('+', '', 1)

    print('Message: {msg} from {number}'.format(
        msg=incoming_msg, number=incoming_number))
    # prepare response object
    resp = MessagingResponse()
    msg = resp.message()
    responded = False
    split_msg = incoming_msg.split(',')
    if len(split_msg) == 3:
        parameter1 = split_msg[1]
        parameter2 = split_msg[2]
        print(parameter1, parameter2)

    greetings = ["hi", "hello", "hey", "helloo", "hellooo", "g morining", "gmorning", "good morning", "morning", "good day", "good afternoon", "good evening", "greetings", "greeting", "good to see you", "its good seeing you", "how are you", "how're you", "how are you doing", "how ya doin'", "how ya doin", "how is everything", "how is everything going", "how's everything going", "how is you", "how's you", "how are things", "how're things", "how is it going", "how's it going", "how's it goin'", "how's it goin", "how is life been treating you", "how's life been treating you", "how have you been", "how've you been", "what is up", "what's up", "what is cracking", "what's cracking", "what is good", "what's good", "what is happening", "what's happening", "what is new", "what's new", "what is neww", "g’day", "howdy"]

    for word in greetings:
        if word in incoming_msg and not responded:
            msg.body("Hello! How can I help you? Type \"about\" for instructions")
            responded = True

    if 'about' in incoming_msg:
        msg.body("Hello and welcome! For directions, follow the format " +
                "\"directions\", [street city], [street city]. For weather, follow the format" +
                " \"weather\", [location], [forecast/current]. For information, type the word " +
                 "for whatever you're curious about. To see this message again, type \"about\". ")
        responded = True

    if 'quote' in incoming_msg:
        # return a quote
        r = requests.get('https://api.quotable.io/random')
        if r.status_code == 200:
            data = r.json()
            quote = f'{data["content"]} ({data["author"]})'
        else:
            quote = 'I could not retrieve a quote at this time, sorry.'
        msg.body(quote)
        responded = True

    if 'cowsay' in incoming_msg:
        text = " __________________________\n" + "/ Why are cows always broke? \\\n" +  "\ Someone’s always milking     /\n" + "/ them dry.                                  \\\n" +   "__________________________\n" + "            \   ^__^                       \n" +  "             \  (oo)\_____                 \n" + "                 (__)\       )\/\\          \n" + "                     ||----w |             \n"  +"                     ||          ||               "
        msg.body(text)
        responded = True

    if 'cat' in incoming_msg:
        # return a cat pic
        msg.media('https://cataas.com/cat')
        responded = True

    if "joke" in incoming_msg:
        # get joke
        url = "https://api.m3o.com/v1/joke/Random"
        data = {
            'count': '1'
        }
        resp = requests.post(url, headers=headers, json=data)
        # send back msg
        url = "https://api.m3o.com/v1/emoji/Send"
        data_msg = {
            "from": "your assistant McAsks",
            "message": "{}".format(resp.json()['jokes'][0]['body']+ "\n"),
            "to": "{}".format(incoming_number)
        }
        resp = requests.post(url, headers=headers, json=data_msg)
        responded = True

    if 'directions' in incoming_msg:
        try:
            resp.message(getDirections(parameter1, parameter2))

        except:
            msg.body("For directions, follow the format \"directions\", [street city], [street city].")
        responded = True

    if 'weather' in incoming_msg:
        try:
            split_msg = incoming_msg.split(",")
            x = weather.get_weather(split_msg[1].strip(), split_msg[2].strip())
            msg.body(x)

        except:
            msg.body("For weather, follow the format \"weather\", [city], [current/forecast].")
        responded = True

    if len(incoming_msg.split()) == 1 and not responded:
        try:
            msg.body(search.search(incoming_msg))
        except:
            pass
        responded = True

    if not responded:
        msg.body('I don\'t know how to answer that, sorry! Type \"about\" for instructions.')

    return str(resp)


if __name__ == '__main__':
    app.run(port="8080")
