import requests
import os

key = os.environ.get("ALPHA_VANTAGE_KEY")

def timeseries(stock):
    # replace the "demo" apikey below with your own key from https://www.alphavantage.co/support/#api-key
    url = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol={}&interval=5min&apikey={}'.format(stock, key)
    r = requests.get(url)
    data = r.json()

    return data


def tickerOptions(stock):
    # replace the "demo" apikey below with your own key from https://www.alphavantage.co/support/#api-key
    url = 'https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords={}&apikey={}'.format(stock, key)
    print(url)
    r = requests.get(url)
    data = r.json()
    print(data)

    return data

def quoteEndpoint(stock):
    print("quoteEndpoint:" + stock)
    # replace the "demo" apikey below with your own key from https://www.alphavantage.co/support/#api-key
    url = 'https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol={}&apikey={}'.format(stock, key)
    print( url)
    r = requests.get(url)
    data = r.json()

    print(data)

    return data