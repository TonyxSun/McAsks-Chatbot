import json
from urllib.request import urlopen
from datetime import datetime

def get_weather(location, time):
    if time == "current":
        file = "http://api.weatherapi.com/v1/current.json?key=569022aa1e364e8f9f6105030222301&q=" + location + "&aqi=no"
        response = urlopen(file)
        data_json = json.loads(response.read())
        cond = "Hello! The condition today is " + data_json['current']['condition']['text'] + ". "
        windsp = "The wind speed is " + str(data_json['current']["wind_kph"]) +  "kph in a "
        winddir = data_json['current']["wind_dir"] + " direction. "
        precip = "The precipitation is " + str(data_json['current']["precip_mm"]) + " mm, while the cloud coverage is "
        cloud = str(data_json['current']["cloud"]) + " percent. "
        feelslike = "It feels like " + str(data_json['current']["feelslike_c"]) + " degrees C. "
        return cond + windsp + winddir + precip+cloud+feelslike

    elif time == "forecast":
        print ("gerge")
        file = "http://api.weatherapi.com/v1/forecast.json?key=569022aa1e364e8f9f6105030222301&q=" + location + "&days=3&aqi=no&alerts=no"
        response = urlopen(file)
        data_json = json.loads(response.read())

        weather = ""
        count = 0
        for day in data_json['forecast']['forecastday']:
            if count == 0:
                weather = weather + "Tomorrow, on "
            if count == 1:
                weather = weather + "On "
            if count == 2:
                weather = weather + "Finally, on "
            date = datetime.strptime(day['date'], "%Y-%m-%d").strftime("%a, %b. %-d")
            weather = weather + date + ", there will be " + day['day']['condition']['text'].lower() + " with an average temperature of " + str(day['day']['avgtemp_c']) + " degrees C and " + str(day['day']["totalprecip_mm"]) + " mm of precipitation. The chance of rain is " + str(day['day']["daily_chance_of_rain"]) + " and the chance of snow is " +  str(day['day']["daily_chance_of_snow"]) + ".\n"
            count += 1
        return weather

    else:
        return ("Hmm, that doesn't seem to be a service we provide. Try typing \"weather\", [city], [current/forecast]")