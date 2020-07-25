import React from 'react';
import './App.css';
import Login from "./components/Auth/Login.js"
import "bootstrap/dist/css/bootstrap.css"
import HeaderComponent from "./components/Layout/HeaderComponent"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import RegisterComponent from './components/Auth/RegisterComponent';
import Landing from './components/Layout/Landing';
import SidebarComponent from './components/Layout/SidebarComponent';
import StudentDashboard from './components/Student/dashboard';
import UserProfile from './components/Student/UserProfile';
import TeacherProfile from "./components/Teacher/TeacherProfile";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={RegisterComponent} />
        <Route path="/student" component={StudentDashboard}></Route>
        <Route path="/userprofile" component={UserProfile}></Route>
        <Route path="/teacherprofile" component={TeacherProfile}></Route>
      </Switch>
    </Router>
  );
}

export default App;
