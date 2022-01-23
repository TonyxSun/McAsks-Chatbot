# McAsks-Chatbot


Your personal assistant :) . Made with ❤️ at McHacks 2022.

## Requirements
- ngrok (install from website)
- flask
- python 3.x
- twilio
- requests
- dotenv

## Instructions

### Set up

1. Set up virtual environment (optional) and make sure all dependencies are installed. 
2. Run the Flask app: `python3 bot.py`
3. Create a public facing URL with ngrok by typing `./ngrok http [port number]` 
4. Create a Twilio account, and add a phone number
5. Copy the `https://...` address generated by ngrok into the field `A MESSAGE COMES IN:` in the phone number configuration page. Remember to add `/bot/` to the end of the URL
6. Create an account on M3O and get an API key. Create a `.env` file and store your API key locally.


### Supported actions
- `cat`
- `quote`
- `joke`
- `cowsay`
- `Directions, [street city departure], [street city arrival]`
- `Weather, [city], [current/forecast]`
- `term`*(search)*
-  more to come!!!!!
