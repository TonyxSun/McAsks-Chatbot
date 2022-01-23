import json
from urllib.request import urlopen
import nltk
from nltk.corpus import stopwords

def is_question(text):
    q_words = ["what", "where", "who", "how", "when", "why"]
    for word in q_words:
        if word in text:
            return True
    return False

def get_word(text):
    stop_words = set(stopwords.words('english'))
    word_tokens = nltk.word_tokenize(text)
    filtered_sentence = [w for w in word_tokens if not w.lower() in stop_words]
    return filtered_sentence

def search(term):
    """
    new_search_term = ""
    search_term = term.split()
    for i in range(len(search_term)):
        if i == 0:
            new_search_term = search_term[i]
        else:
            new_search_term = new_search_term + "+" + search_term[i]
    """
    term = get_word(term)[0]
    term = term.strip(' \n?')
    file = "http://api.duckduckgo.com/?q=" + term + "&format=json"

    response = urlopen(file)

    data_json = json.loads(response.read())

    resp = data_json['Abstract']

    if resp == "":
        resp = data_json['RelatedTopics'][0]['Text']

    return str(resp)

if __name__ == "__main__":

    x = run_json("beachball")
    print (x)

