import requests
import os
import json
from fuzzywuzzy import fuzz

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

def tickerOptions1(word):
    #read data.json and filter by stock input
    with open('Datasets/data.json', 'r') as json_file:
        data = json.load(json_file)
        
        #by first letter of word and label
        dataload = list(filter(lambda x: x['label'].startswith(word[0].upper()), data))

        # Define a function to calculate the similarity score
        def similarity_score(item):
            # Modify this scoring as needed
            value_similarity = fuzz.token_sort_ratio(word.lower(), item['value'].lower())
            label_similarity = fuzz.token_sort_ratio(word.lower(), item['label'].lower())
            if len(item)>3:
                return value_similarity*1.5 + label_similarity
            else:
                return value_similarity + label_similarity*1.5

        # Sort the data based on similarity score in descending order
        sorted_data = sorted(dataload, key=similarity_score, reverse=True)
        # Return the top 20 matches
        return sorted_data[:20]

def quoteEndpoint(stock):
    print("quoteEndpoint:" + stock)
    # replace the "demo" apikey below with your own key from https://www.alphavantage.co/support/#api-key
    url = 'https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol={}&apikey={}'.format(stock, key)
    print( url)
    r = requests.get(url)
    data = r.json()

    print(data)

    return data