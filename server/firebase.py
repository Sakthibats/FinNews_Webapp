
from firebase_admin import credentials
from firebase_admin import firestore


cred = credentials.Certificate("ServiceAccountKey.json")
firebase_admin.initialize_app(cred)
db = firestore.client()

def adduser(name, email):
    city = {
        u'name': "u{}".format(name),
        u'email': "u{}".format(email)
    }
    update_time, city_ref = db.collection(u'cities').add(city)