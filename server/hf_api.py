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
		# response = requests.post(API_URL, headers=headers, json=payload)
		# val = response.json()[0]
		# score = 0
		# for i in val:
		# 	if i["label"]=='positive':
		# 		score += i['score']
		# 	elif i["label"]=='negative':
		# 		score -= i['score']
		# return round(score, 2)
		val = model([payload])[0]
		# print(val)
		return val["label"]
	except:
		return "Neutral"


output = HFquery("I like you")

print(output)