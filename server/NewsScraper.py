from requests_html import HTMLSession
import json
import yaml

async def scrape(query):
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
            # publisher = item.find('div')[1].element.find('a').text
            # print(publisher)
            title = newsitem.text
            link = list(newsitem.absolute_links)[0]
            newsarticle = {
                'title': title,
                'link': link, 
                'datetime': timestamp,
                # 'publisher': "publisher", 
            }
            newslist.append(newsarticle)
        except Exception as e:
            # print(e)
            pass 
    newslist = sorted(newslist, key=lambda x:x["datetime"], reverse=True)
    json_str = json.dumps(list(newslist))
    return json_str
     