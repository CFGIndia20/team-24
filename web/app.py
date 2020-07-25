from flask_login import LoginManager, UserMixin, login_user, login_required, logout_user, current_user
from flask import Flask, render_template, request, jsonify, flash, redirect, url_for
from werkzeug.security import generate_password_hash, check_password_hash
from flask_cors import CORS, cross_origin
import requests
from firebase_admin import credentials, firestore, initialize_app
app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
app.secret_key = 'secret-key'
cred = credentials.Certificate('service.json')
default_app = initialize_app(cred)
db = firestore.client()
login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = "login"

teachers_ref = db.collection('teachers')
students_ref=db.collection('students')
admins_ref=db.collection('admins')
jobs_ref = db.collection('jobs')
complaints_ref=db.collection('complaints')




#test Route
@app.route('/')
def home():
    return jsonify({'status' : 'home'})


#student signup route
@app.route('/studentsignup', methods=['POST'])
@cross_origin()
def student_signup():
    data = request.get_json()
    student_name = data['Name']
    student_email = data['Email']
    #check if email exists in student database, if yes
    students_data = students_ref.get()
    student=None
    for row in students_data:
        student_dict=row.to_dict()
        if student_dict['email'] == student_email:
            student=student_dict
            break
    if student!=None:
        return jsonify({'status': 'Duplicate signup. Failed'}), 418
    #If no duplicate signup then
    # student_phno = data['PhoneNo']
    student_phno = "9876543210"
    student_password = data['Password']
    hashedPassword = generate_password_hash(student_password, method='sha256')
    student_dob = data['dob']
    student_attendance = 100
    student_starting_score = data['student_starting_score']
    assigned_slot = 0
    preference1 = data['pref1']
    preference2 = data['pref2']
    preference3 = data['pref3']

    #add all these values as a single record of a student in the Student database
    try:
        students_ref.document().set({
            "name": student_name,
            "password":hashedPassword ,
            "email":student_email,
            "phoneNo":student_phno,
            "dob":student_dob ,
            "student_attendance":student_attendance,
            "starting_score":student_starting_score,
            "student_assigned_slot":assigned_slot,
            "preference1":preference1,
            "preference2":preference2,
            "preference3":preference3
        })
    except:
        return jsonify({'status': 'student Unsignup successful'}), 418
    return jsonify({'status': 'student signup successful'}), 200



#teacher signup route
@app.route('/teachersignup', methods=['POST'])
@cross_origin()
def teacher_signup():
    data = request.get_json()
    teacher_name = data['Name']
    teacher_email = data['Email']
    #check if email exists in tea database, if yes
    #if email exists:
    teachers_data = teachers_ref.get()
    teacher=None
    for row in teachers_data:
        teacher_dict=row.to_dict()
        if teacher_dict['email']==teacher_email:
            teacher=teacher_dict
            break
    if teacher!=None:
        return jsonify({'status': 'Duplicate signup. Failed'}), 418
    teacher_phno = "9876543210"
    teacher_password = data['Password']
    hashedPassword = generate_password_hash(teacher_password, method='sha256')
    teacher_dob = data['dob']
    teacher_assigned_slot = []
    #add all these values as a single record of a teacher in the teacher database
    try:
        teachers_ref.document().set({
        "name": teacher_name,
        "password":hashedPassword,
        "email":teacher_email,
        "phoneNo":teacher_phno,
        "dob":teacher_dob ,
        "teacher_assigned_slot":teacher_assigned_slot
        })
    except:
        return jsonify({'status': 'teacher signup Unsuccessful'}), 418
    return jsonify({'status': 'teacher signup successful'}), 200


#teacher login route
@app.route('/teacherlogin', methods=['POST'])
@cross_origin()
def teacher_login():

    data = request.get_json()
    Email = data['Email']
    Password = data['Password']
    teachers_data = teachers_ref.get()
    teacher=None
    for row in teachers_data:
        teacher_dict=row.to_dict()
        if teacher_dict['email']==Email:
            teacher=teacher_dict
            break
    if teacher==None:
        return jsonify({'status' : 'ERROR ,Teacher email doesnt exist'}), 418
    hashPass=teacher['password']      #If the user info is present in database
    if check_password_hash(hashPass, Password):     #Checking the password is valid or not
        Email=teacher['email']
        Name=teacher['name']
        phoneNo=teacher['phoneNo']
        dob=teacher['dob']
        teacher_assigned_slot=teacher['teacher_assigned_slot']
        print("All details fetched!")
        user = User(Name,Email,Password, phoneNo, dob,None, None, None, teacher_assigned_slot,"Teacher")
        login_user(user)

        return jsonify({'data' : teacher, 'role':'teacher'}), 200

    else:
        return jsonify({'status' : 'Teacher Wrong password'}), 418




#student login route
@app.route('/studentlogin', methods=['POST'])
@cross_origin()
def student_login():

    data = request.get_json()
    Email = data['Email']
    Password = data['Password']
    students_data = students_ref.get()
    student=None
    for row in students_data:
        student_dict=row.to_dict()
        if student_dict['email']==Email:
            student=student_dict
            break
    if student==None:
        return jsonify({'status' : 'ERROR ,Student email doesnt exist'}), 418
    hashPass=student['password']
    if check_password_hash(hashPass, Password):  #Checking the password is valid or not

        Email=student['email']
        Name=student['name']
        phoneNo=student['phoneNo']
        dob=student['dob']
        starting_score=student['starting_score']
        student_assigned_slot=student['student_assigned_slot']
        print("All details fetched!")
        user = User(Name,Email,Password, phoneNo, dob,None, starting_score, student_assigned_slot, None,"Student")
        login_user(user)
        return jsonify({'data' : student, 'role':'student'}), 200
    else:
        return jsonify({'status' : 'Student Wrong password'}), 418



#admin login route
@app.route('/adminlogin', methods=['POST'])
@cross_origin()
def admin_login():
    data = request.get_json()
    Email = data['Email']
    Password = data['Password']
    admins_data = admins_ref.get()
    admin=None
    for row in admins_data:
        admin_dict=row.to_dict()
        if admin_dict['email']==Email:
            admin=admin_dict
            break
    if admin==None:
        return jsonify({'status' : 'ERROR ,Admin email doesnt exist'}), 418
    hashPass=admin['password']
    #if check_password_hash(hashPass, Password):
    if hashPass == Password:
        user = User(None,Email,Password, None, None,None, None, None, None,"Admin")
        login_user(user)
        return jsonify({'role' : 'admin'}), 200
    else:
        return jsonify({'status' : 'Admin Wrong password'}), 418





#defines  the USER class common to all 3 stakeholders - for simplicity
class User(UserMixin):

    def __init__(self,name,email,password, phoneNo, dob,attendance, starting_score, student_assigned_slot, teacher_assigned_slot,role,active = True):
        self.name = name
        self.id = email
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
    student = students_ref.document(id).get()    #Check if the id is in student database
    if student!=None:
        student=student.to_dict()
        Email=student['email']
        Name=student['name']
        phoneNo=student['phoneNo']
        dob=student['dob']
        starting_score=student['starting_score']
        student_assigned_slot=student['student_assigned_slot']
        Password=""
        user = User(Name,Email,Password, phoneNo, dob,None, starting_score, student_assigned_slot, None,"Student")
        return user

    teacher = teachers_ref.document(id).get()  ##Check if the id is in teacher database
    if(teacher!=None):
        teacher=teacher.to_dict()
        Email=teacher['email']
        Name=teacher['name']
        phoneNo=teacher['phoneNo']
        dob=teacher['dob']
        teacher_assigned_slot=teacher['teacher_assigned_slot']
        Password=""
        user = User(Name,Email,Password, phoneNo, dob,None, None, None, teacher_assigned_slot,"Teacher")
        return user

    admin = admins_ref.document(id).get()  ##Check if the id is in admin database
    if admin!=None:
        admin=admin.to_dict()
        Name=admin['name']
        Password=""
        user = User(Name,Email,Password, None, None,None, None, None, None,"Admin")
        return user

#for job portal
@app.route('/getStudentDetails')
@cross_origin()
def getStudentDetails():

    students_data = students_ref.get()
    student=[]
    for row in students_data:
        student_dict=row.to_dict()
        student.append(student_dict)
    data = {"data":student}
    return jsonify(data), 200

@app.route('/getTeacherDetails')
@cross_origin()
@login_required
def getTeacherDetails():
    if current_user.role=='Student':
        return jsonify({'status':'Not Allowed'}), 403
    teachers_data = teachers_ref.get()
    teacher=[]
    for row in teachers_data:
        teachers_dict=row.to_dict()
        teacher.append(teachers_dict)
    data = {"data":teacher}
    return jsonify(data), 200

#for job portal
@app.route('/getJobDetails')
@login_required
@cross_origin()
def getJobDetails():
    if current_user.role == "Teacher":
        return jsonify({'status':"Not allowed"}), 403
    jobs_data = jobs_ref.get()
    job=[]
    for row in jobs_data:
        job_dict=row.to_dict()
        job.append(job_dict)
    data = {"data":job}
    return jsonify(data)




#leader_board
@app.route('/leaderboard',methods=['POST'])
@cross_origin()
def get_leader_board():
    data = request.get_json()
    batch= data['Batch'] 
    students_data = students_ref.get()
    student_leaderboard={}
    for row in students_data:
        student_dict=row.to_dict()
        if student_dict['student_assigned_slot']==batch:   #Finding the students in that batch
            email=student_dict['email']
            if email not in student_leaderboard.keys():   #storing email as key in the dictionary
                student_leaderboard[email]=[student_dict['name'],(student_dict['attendance']+student_dict['starting_score'])/2]
    return jsonify(student_leaderboard)

    
#job addition route
@app.route('/addjob', methods=['POST'])
@cross_origin()
def addjob():
    data = request.get_json()
    title = data['title']
    company=data['company']
    skills = data['skills']
    #add all these values as a single record of a job in the Jobs database
    try:
        jobs_ref.document().set({
            "title": title,
            "company":company ,
            "skills":skills
        })
    except:
        return jsonify({'status': 'job is not added'}), 418
    return jsonify({'status': 'job is added successful'}), 200


#complaint route
@app.route('/complaint',methods=['POST'])
@cross_origin()
def issue_complaint():
    if current_user.role != "Teacher":
        return jsonify({'status':"Not allowed"}), 403
    data = request.get_json()
    complaint= data['complaint'] 
    teacher_email=data['email']
    try:
        complaints_ref.document().set({
            "email":teacher_email,
            "complaint": complaint,
            "solved": False
        })
    except:
        return jsonify({'status': 'Complaint is not added'}), 418
    return jsonify({'status': 'Complaint is added'}), 200

    
    
#Get complaints list
@app.route('/getcomplaints')
@cross_origin()
def get_complaint():
    if current_user.role != "Admin":
        return jsonify({'status':"Not allowed"}), 403
    complaints_data = complaints_ref.get()
    unresolved_complaints=[]
    for row in complaints_data:
        complaint_dict=row.to_dict()
        if complaint_dict['solved']==False:   #Finding the only the unresolved complaints
            unresolved_complaints.append([complaint_dict['email'],complaint_dict['complaint']])
            
    return jsonify(unresolved_complaints)


#LOGOUT ROUTES
@app.route('/logout')
#@login_required
def logout():
    logout_user()
    return redirect(url_for('home'))

if __name__ == "__main__":
    app.run(debug=True)
