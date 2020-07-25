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
import LeaderBoard from "./components/Student/leaderboard"
import JobListing from './components/Student/jobListing';
import Profile from "./components/Student/Profile"
import Schedule from './components/Student/schedule';
import { Provider } from 'react-redux';
import store from './redux/store';
import UserProfile from './components/Student/UserProfile';
import TeacherProfile from "./components/Teacher/TeacherProfile";
import StudentRoute from './components/Common/StudentRoute';
import AdminRoute from "./components/Common/AdminRoute";
import TeacherRoute from "./components/Common/TeacherRoute";
import AddJob from './components/Admin/addjob';
import TeacherSchedule from './schedule';
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            component={() => {
              return (
                <>
                  <HeaderComponent />
                  <Landing />
                </>
              );
            }}
          />
          <Route
            exact
            path="/login"
            component={() => {
              return (
                <>
                  <HeaderComponent />
                  <Login />
                </>
              );
            }}
          />
          <Route
            exact
            path="/register"
            component={() => {
              return (
                <>
                  <HeaderComponent />
                  <RegisterComponent />
                </>
              );
            }}
          />
          <StudentRoute exact path="/student" component={StudentDashboard} />
          <StudentRoute exact path="/leaderboard" component={LeaderBoard} />
          <StudentRoute exact path="/jobs" component={JobListing} />
          <StudentRoute exact path="/schedule" component={Schedule} />
          <StudentRoute exact path="/userprofile" component={UserProfile} />
          <TeacherRoute
            exact
            path="/teacherprofile"
            component={TeacherProfile}
          />
          <AdminRoute path="/adminprofile" component={AddJob} />
          <AdminRoute path="/adminprofile" component={StudentDashboard} />
         
        </Switch>
        <Route exact path="/teacherdash" component={TeacherSchedule} />
      </Router>
    </Provider>
  );
}

export default App;
