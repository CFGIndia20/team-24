from flask_login import LoginManager, UserMixin, login_user, login_required, logout_user, current_user
from flask import Flask, render_template, request, jsonify, flash, redirect, url_for
from werkzeug.security import generate_password_hash, check_password_hash
from flask_cors import CORS, cross_origin
import requests
from firebase_admin import credentials, firestore, initialize_app
app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
cred = credentials.Certificate('service.json')
default_app = initialize_app(cred)
db = firestore.client()

teachers_ref = db.collection('teachers')
students_ref=db.collection('students')
admins_ref=db.collection('admins')
@app.route('/')
@cross_origin()
def hello():
    return jsonify({'status': 'Home Route'})


#student signup route
@app.route('/studentsignup', methods=['POST'])
@cross_origin()
def student_signup():
    data = request.get_json()
    student_name = data['Name']
    student_email = data['Email']
    #check if email exists in student database, if yes
    #if email exists:
    if email in student_database:
        return jsonify({'status': 'Duplicate signup. Failed'})

    student_phno = data['PhoneNo']
    student_password = data['Password']
    hashedPassword = generate_password_hash(student_password, method='sha256')
    student_dob = data['dob']
    student_attendance = data['attendance']
    student_starting_score = data['student_starting_score']
    assigned_slot = data['student_assigned_slot']

    #add all these values as a single record of a student in the Student database


    return jsonify({'status': 'student signup successful'})



#teacher signup route
@app.route('/teachersignup', methods=['POST'])
@cross_origin()
def teacher_signup():
    data = request.get_json()
    teacher_name = data['Name']
    teacher_email = data['Email']
    #check if email exists in tea database, if yes
    #if email exists:
    if teacher_email in teacher_database:
        return jsonify({'status': 'Duplicate signup. Failed'})

    teacher_phno = data['PhoneNo']
    teacher_password = data['Password']
    hashedPassword = generate_password_hash(teacher_password, method='sha256')
    teacher_dob = data['dob']
    teacher_assigned_slot = data['teacher_assigned_slot']

    #add all these values as a single record of a teacher in the teacher database

    return jsonify({'status': 'teacher signup successful'})


#teacher login route
@app.route('/teacherlogin', methods=['POST'])
@cross_origin()
def teacher_login():

    data = request.get_json()
    Email = data['Email']
    Password = data['Password']
    teachers_data = teachers_ref.get()
    teacher=None
    for teacher in teachers_data:
        teacher=teacher.to_dict()
        if teacher['email']==Email:
            break
    if teacher==None:
        return jsonify({'status' : 'ERROR , email doesnt exist'})
    hashPass=teacher['password']
    if check_password_hash(hashPass, Password):
        id=teacher.id
        Email=teacher['email']
        Name=teacher['name']
        phoneNo=teacher['phoneNo']
        dob=teacher['dob']
        teacher_assigned_slot=teacher['teacher_assigned_slot']
        print("All details fetched!")
        user = User(id,Name,Email,Password, phoneNo, dob,None, None, None, teacher_assigned_slot,"Teacher")
        login_user(user)
        return jsonify({'status' : 'Teacher Login successful'})
    else:
        return jsonify({'status' : 'Teacher Wrong password'})




#student login route
@app.route('/studentlogin', methods=['POST'])
@cross_origin()
def student_login():

    data = request.get_json()
    Email = data['Email']
    Password = data['Password']
    students_data = students_ref.get()
    student=None
    for student in students_data:
        student=student.to_dict()
        if student['email']==Email:
            break
    if student==None:
        return jsonify({'status' : 'ERROR ,Student email doesnt exist'}), 404
    hashPass=student['password']
    if check_password_hash(hashPass, Password):
        id=student.id
        Email=student['email']
        Name=student['name']
        phoneNo=student['phoneNo']
        dob=student['dob']
        starting_score=student['starting_score']
        student_assigned_slot=student['student_assigned_slot']
        print("All details fetched!")
        user = User(id,Name,Email,Password, phoneNo, dob,None, starting_score, student_assigned_slot, None,"Student")
        login_user(user)
        return jsonify({'status' : 'Student Login successful'}), 200
    else:
        return jsonify({'status' : 'Student Wrong password'}), 400



#admin login route
@app.route('/adminlogin', methods=['POST'])
@cross_origin()
def admin_login():
    data = request.get_json()
    Email = data['Email']
    Password = data['Password']
    admins_data = admins_ref.get()
    admin=None
    for admin in admins_data:
        admin=admin.to_dict()
        if admin['email']==Email:
            break
    if admin==None:
        return jsonify({'status' : 'ERROR ,Admin email doesnt exist'})
    hashPass=admin['password']
    if check_password_hash(hashPass, Password):
        id=admin.id
        Name=admin['name']
        user = User(id,Name,Email,Password, None, None,None, None, None, None,"Admin")
        login_user(user)
        return jsonify({'status' : 'Admin Login successful'})
    else:
        return jsonify({'status' : 'Admin Wrong password'})





#defines  the USER class common to all 3 stakeholders - for simplicity
class User(UserMixin):

    def __init__(self,id,name,email,password, phoneNo, dob,attendance, starting_score, student_assigned_slot, teacher_assigned_slot,role,active = True):
        self.id = id
        self.name = name
        self.email = email
        self.password = password
        self.phoneNo = phoneNo
        self.dob = dob
        self.attendance=attendance
        self.starting_score=starting_score
        self.student_assigned_slot=student_assigned_slot
        self.teacher_assigned_slot = teacher_assigned_slot
        self.role=  role
        self.active = active

    def is_authenticated(self):
        return True
        #return true if user is authenticated, provided credentials

    def is_active(self):
        return True
    #return true if user is activte and authenticated

def is_annonymous(self):
    return False
    #return true if annon, actual user return false


#@login_manager.user_loader
@cross_origin()
def load_user(id):
    #check if id is in student,  teachers or admin table.
    #whichever returns a non empty query

    if id in Student:
        #fetch  name, email, phone, password, dob, attendance, starting_score, student_assigned_slot from STUDENTS TABLE
        user =User(id,name,email,password, phone, dob,attendance, starting_score, student_assigned_slot, None, "Student")
        return user
    if id in Teacher:
        #fetch name, email, phone, password, dob, teacher_assigned_slot from TEACHERS TABLE
        user =User(id,name,email,password, phone, dob,None, None, None, teacher_assigned_slot, "Teacher")
        return user
    if id in Admin:
        #fetch only email and id from admin table where admin_id = id
        user = User(id,name,Email,Password, None, None,None, None, None, None,"Admin")
        return user
