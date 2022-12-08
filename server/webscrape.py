from flask import Flask
from NewsScraper import scrape

app = Flask(__name__)

@app.route("/")
def hello_world():
    return {'Hello': 'batman'}

@app.route('/query/<query>')
async def search(query):
    result = await scrape(query)
    return result

if __name__ == "__main__":
    app.run(debug=True)