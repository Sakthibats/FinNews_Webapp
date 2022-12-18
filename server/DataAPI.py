from flask import Flask
from NewsScraper import scrape
from StockInfo import timeseries
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

if __name__ == "__main__":
    app.run(debug=True)