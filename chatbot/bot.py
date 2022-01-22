from flask import Flask, request, render_template
import requests
from twilio.twiml.messaging_response import MessagingResponse
from requests.structures import CaseInsensitiveDict
from dotenv import load_dotenv
import os
import search

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

    if not responded:
        body = search.run_json(incoming_msg)
        if body == "":
            msg.body('I don\'t know how to answer that, sorry!')
        else:
            msg.body(search.run_json(incoming_msg))
    return str(resp)


if __name__ == '__main__':
    app.run()
