from flask import Flask
from NewsScraper import scrape
from StockInfo import timeseries, tickerOptions,tickerOptions1,quoteEndpoint
app = Flask(__name__)

@app.route("/")
def hello_world():
    return {'Hello': 'batman'}

@app.route('/query/<query>')
async def search(query):
    result = await scrape(query)
    return result

@app.route('/stockinfo/<stock>')
def TS_data(stock):
    result = timeseries(stock)
    return result

@app.route('/Utility/tickerOptions/<stock>')
def TickerOptions(stock):
    result = tickerOptions(stock)
    return result

@app.route('/Utility/tickerOptions1/<stock>')
def TickerOptions1(stock):
    result = tickerOptions1(stock)
    return result

@app.route('/Utility/QuoteEndpoint/<stock>')
def QuoteEndpoint(stock):
    result = quoteEndpoint(stock)
    return result

if __name__ == "__main__":
    app.run(debug=True)