from requests_html import HTMLSession

def search(query:str):

    session = HTMLSession()

    #use session to get the page
    r = session.get('https://news.google.com/search?q={}'.format(query))

    #render the html, sleep=1 to give it a second to finish before moving on. scrolldown= how many times to page down on the browser, to get more results. 5 was a good number here
    r.html.arender(sleep=1, scrolldown=1)
    #find all the articles by using inspect element and create blank list
    articles = r.html.find('article')
    newslist = []

    #loop through each article to find the title and link. try and except as repeated articles from other sources have different h tags.
    for item in articles:
        try:
            newsitem = item.find('h3', first=True)
            timestamp = item.find('time', first=True).attrs['datetime']
            publisher = item.find('div')[1].element.find('a').text
            title = newsitem.text
            link = newsitem.absolute_links
            newsarticle = {
                'title': title,
                'link': link, 
                'datetime': timestamp,
                'publisher': publisher
            }
            newslist.append(newsarticle)
        except:
            pass
    
    session.close()

    return {"number_of_articles":len(newslist), "search_topic": newslist }

print(search('google'))
