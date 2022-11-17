#import what we need
from requests_html import HTMLSession
from flask import Flask
import json
import yaml
from hf_api import HFquery

app = Flask(__name__)

@app.route("/")
def hello_world():
    return {'Hello': 'batman'}

@app.route('/query/<query>')
async def search(query):

    session = HTMLSession()
    
    #use session to get the page
    r = session.get('https://news.google.com/search?q={}'.format(query))

    #render the html, sleep=1 to give it a second to finish before moving on. scrolldown= how many times to page down on the browser, to get more results. 5 was a good number here
    r.html.arender(sleep=1, scrolldown=1)
    #find all the articles by using inspect element and create blank list
    articles = r.html.find('article')
    newslist = []
    session.close()
    
    #loop through each article to find the title and link. try and except as repeated articles from other sources have different h tags.
    for item in articles:
        try:
            newsitem = item.find('h3', first=True)
            timestamp = item.find('time', first=True).attrs['datetime']
            publisher = item.find('div')[1].element.find('a').text
            title = newsitem.text
            link = list(newsitem.absolute_links)[0]
            senti = HFquery(title)
            newsarticle = {
                'title': title,
                'link': link, 
                'datetime': timestamp,
                'publisher': publisher, 
                'sentiment': senti
            }
            newslist.append(newsarticle)
        except:
            pass 

    json_str = json.dumps(list(newslist))

    return json_str

