import requests
import yaml
import math
# dic = yaml.safe_load(open("config.yaml"))
# API_URL = "https://api-inference.huggingface.co/models/ProsusAI/finbert"
# headers = {"Authorization": "Bearer {}".format(dic["Token"])}

import joblib

model = joblib.load("model.sav")

def HFquery(payload):
	try:
		val = model([payload])[0]
		return val["label"]
	except:
		return "Neutral"

output = HFquery("I like you")

print(output)