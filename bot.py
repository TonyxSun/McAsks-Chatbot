from flask import Flask, request, render_template
import requests
from twilio.twiml.messaging_response import MessagingResponse
from requests.structures import CaseInsensitiveDict
from dotenv import load_dotenv
import os

from search import *

load_dotenv()

app = Flask(__name__)

# app name
@app.errorhandler(404)
  
# inbuilt function which takes error as parameter
def not_found(e):
# defining function
    return render_template("404.html")

@app.route('/bot', methods=['POST'])
def bot():
    # obtain body of request
    incoming_msg = request.values.get('Body', '').lower()

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

    if "giraffe" in incoming_msg:
        ''' the below uses M3O's API to send the message. It will come from a different number but won't contain the annoying Twilio line'''
        url = "https://api.m3o.com/v1/emoji/Send"
        headers = CaseInsensitiveDict()
        headers["Content-Type"] = "application/json"
        headers["Authorization"] = "Bearer %s"%os.environ['M3O_TOKEN']
        data = """
        {
        "from": "McAsks",
        "message": "let's grab a :giraffe:",
        "to": "6812990111"
        }
        """
        resp = requests.post(url, headers=headers, data=data)
        responded = True

    if not responded:
        ans = run_json(incoming_msg)
        msg.body(ans)

    return str(resp)


if __name__ == '__main__':
    app.run()