from flask_login import LoginManager, UserMixin, login_user, login_required, logout_user, current_user
from flask import Flask, render_template, request, jsonify, flash, redirect, url_for
from werkzeug.security import generate_password_hash, check_password_hash
from flask_cors import CORS, cross_origin
import requests

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'



@app.route('/')
@cross_origin()
def hello():
    return jsonify({'status': 'Home Route'})


@app.route('/teacherlogin', methods=['POST'])
@cross_origin()
def student_login():

    data = request.get_json()
    Email = data['Email']
    Password = data['Password']
    with sqlite3.connect('users.db') as con:
        cur=con.cursor()
        cur.execute('SELECT userEmail FROM EnrolledUsers where userEmail=?', (Email,))
        rows=cur.fetchall()
        if rows==[]: #failed case
            return jsonify({'status' : 'ERROR , email doesnt exist'})
        else:
            cur.execute('SELECT userPassword FROM EnrolledUsers where userEmail=?', (Email,))
            hashPass = cur.fetchall()[0][0]
            if check_password_hash(hashPass, Password):
                #time to instantiate the User object
                cur.execute('SELECT id FROM EnrolledUsers where userEmail=?', (Email,))
                id = cur.fetchall()[0][0]
                cur.execute('SELECT userName FROM EnrolledUsers where userEmail=?', (Email,))
                Name = cur.fetchall()[0][0]
                cur.execute('SELECT userDescription FROM EnrolledUsers where userEmail=?', (Email,))
                Desc = cur.fetchall()[0][0]
                print("All details fetched!")
                user = User(id,Name,Email,Password, phoneNo, dob,None, None, None, teacher_assigned_slot,"Teacher")
                login_user(user)
                return jsonify({'status' : 'Teacher Login successful'})
            else:
                return jsonify({'status' : 'Teacher Wrong password'})

    return jsonify({'status' : 'Teacher Login unsuccessful'})




@app.route('/studentlogin', methods=['POST'])
@cross_origin()
def teacher_login():

    data = request.get_json()
    Email = data['Email']
    Password = data['Password']
    with sqlite3.connect('users.db') as con:
        cur=con.cursor()
        cur.execute('SELECT userEmail FROM EnrolledUsers where userEmail=?', (Email,))
        rows=cur.fetchall()
        if rows==[]: #failed case
            return jsonify({'status' : 'ERROR , email doesnt exist'})
        else:
            cur.execute('SELECT userPassword FROM EnrolledUsers where userEmail=?', (Email,))
            hashPass = cur.fetchall()[0][0]
            if check_password_hash(hashPass, Password):
                #time to instantiate the User object
                cur.execute('SELECT id FROM EnrolledUsers where userEmail=?', (Email,))
                id = cur.fetchall()[0][0]
                cur.execute('SELECT userName FROM EnrolledUsers where userEmail=?', (Email,))
                Name = cur.fetchall()[0][0]
                cur.execute('SELECT userDescription FROM EnrolledUsers where userEmail=?', (Email,))
                Desc = cur.fetchall()[0][0]


                user = User(id,Name,Email,Password, phoneNo, dob,attendance, starting_score, student_assigned_slot, None,"Student")
                login_user(user)
                return jsonify({'status' : 'Student Login successful'})
            else:
                return jsonify({'status' : 'Student Wrong password'})

    return jsonify({'status' : 'Student Login unsuccessful'})


@app.route('/adminlogin', methods=['POST'])
@cross_origin()
def admin_login():
    data = request.get_json()
    Email = data['Email']
    Password = data['Password']

    #fetch email from Admin database where admin_email = Email
    if response is []:
        return jsonify({'status':'Admin Email doesnt exist'})
    else:
        #fetch password from Admin database (which will be in a hash form) where admin_email = Email
        #store the above result in variable hashPass

        if check_password_hash(hashPass, Password):
            #fetch the unique id of our admin where admin_email = Email and store it in id
            user = User(id,None,Email,Password, None, None,None, None, None, None,"Admin")
            login_user(user)
            return jsonify({'status' : 'Admin Login successful'})




#defines  the USER class
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

@login_manager.user_loader
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
        user = User(id,None,Email,Password, None, None,None, None, None, None,"Admin")
        return user

#LOGOUT ROUTES
@app.route('/logout')
#@login_required
def logout():
    logout_user()
    return redirect(url_for('hello'))

if __name__ == '__main__':
    app.run(debug=True)
