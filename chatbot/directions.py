import json
import requests


def getDirections(address, address2):
    # To get long and lat for first addy
    url = "https://api.geoapify.com/v1/geocode/autocomplete?text=" + \
        address+"&type=street&apiKey=5b09bb7d174f4c0cb5aded67d38bc0b8"

    payload = {}
    headers = {}

    response = requests.request("GET", url, headers=headers, data=payload)

    # print(response.text)

    j = response.text

    jsonStr = json.loads(j)

    long = jsonStr['features'][0]['properties']['lon']

    # print(long)

    lat = jsonStr['features'][0]['properties']['lat']

    # print(lat)

    # To get long and lat for second addy
    url2 = "https://api.geoapify.com/v1/geocode/autocomplete?text=" + \
        address2+"&type=street&apiKey=5b09bb7d174f4c0cb5aded67d38bc0b8"

    payload = {}
    headers = {}

    response2 = requests.request("GET", url2, headers=headers, data=payload)

    # print(response2.text)

    j2 = response2.text

    jsonStr2 = json.loads(j2)

    long2 = jsonStr2['features'][0]['properties']['lon']

    # print(long2)

    lat2 = jsonStr2['features'][0]['properties']['lat']

    # print(lat2)

    url = "https://api.geoapify.com/v1/routing?waypoints="+str(lat)+","+str(long)+"|"+str(
        lat2)+","+str(long2)+"&mode=walk&lang=en&apiKey=5b09bb7d174f4c0cb5aded67d38bc0b8"

    payload = {}
    headers = {}

    response = requests.request("GET", url, headers=headers, data=payload)

    d = response.text

    stepsjson = json.loads(d)

    instructions = stepsjson['features'][0]['properties']['legs'][0]['steps']

    print('###########################')

    directions = []

    for item in instructions:
        x = item['instruction']['text']
        y = item['distance']
        z = str(x) + " - " + "Distance " + str(y) + " Metres"
        directions.append(z)

    removesqbrackl = str(directions).replace("[", "")

    removesqbrackr = removesqbrackl.replace("]", "")

    removeqs = removesqbrackr.replace("'", "\n")

    removecomma = removeqs.replace(",", "")

    print(removecomma)

    return str(removecomma)
