from flask import Flask, render_template, request, jsonify, flash, redirect, url_for
import requests
from firebase_admin import credentials, firestore, initialize_app
from werkzeug.security import generate_password_hash, check_password_hash
import random

app = Flask(__name__)
cred = credentials.Certificate('service.json')
default_app = initialize_app(cred)
db = firestore.client()


teachers_ref = db.collection('teachers')
students_ref=db.collection('students')


#test Route
@app.route('/')
def home():
    return jsonify({'status' : 'home'})

'''@app.route('/addTeacher')
def add_teacher():
    for i in range(1,15):

            teachers_ref.document().set({
            "name": "Name" + str(i),
            "password": generate_password_hash("P"+str(i), method='sha256'),
            "email": "E" +str(i)+"@gmail.com",
            "phoneNo":str(i),
            "dob": "1/01/01",
            "teacher_assigned_slot":[]
            })

    return jsonify({'status': 'teacher signup successful'}), 200
'''
@app.route('/addStudent')
def add_student():
    for i in range(1, 841):

        try:
            students_ref.document().set({
                "name": "N" + str(i),
                "password":generate_password_hash("SP"+str(i), method='sha256'),
                "email":"SE" +str(i)+"@gmail.com",
                "phoneNo":'9191919191',
                "dob":'01/01/01',
                "student_attendance": random.randint(60, 100),
                "starting_score": random.randint(50, 100),
                "student_assigned_slot":None,
                "preference1":(i%13)+1,
                "preference2":((i+1)%13)+1,
                "preference3":((i+2)%13) + 1
            })
        except:
            return jsonify({'status': 'student Unsignup successful'}), 418
    return jsonify({'status': 'student signup successful'}), 200

if __name__ == "__main__":
    app.run(debug=True)
