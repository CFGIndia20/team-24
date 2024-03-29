import React from 'react';
import Login from "./components/Auth/Login.js"
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import HeaderComponent from "./components/Layout/HeaderComponent"
import { BrowserRouter as Router, Switch, Route, withRouter } from "react-router-dom"
import RegisterComponent from './components/Auth/RegisterComponent';
import Landing from './components/Layout/Landing';
import SidebarComponent from './components/Layout/SidebarComponent';
import StudentDashboard from './components/Student/Dashboard';
import LeaderBoard from "./components/Student/Leaderboard"
import JobListing from './components/Student/JobListing';
import Profile from "./components/Student/Profile"
import Schedule from './components/Student/Schedule';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import UserProfile from './components/Student/UserProfile';
import TeacherProfile from "./components/Teacher/TeacherProfile";
import StudentRoute from './components/Common/StudentRoute';
import AdminRoute from "./components/Common/AdminRoute";
import TeacherRoute from "./components/Common/TeacherRoute";
import AddJob from './components/Admin/addjob';
import { PersistGate } from 'redux-persist/lib/integration/react';
import AdminDashboard from './components/Admin/dashboard';
import Notify from "./components/Admin/notify";

function App() {

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <Router>
          <Switch>
            <Route exact path="/" component={() => { return (<><HeaderComponent /><Landing /></>) }} />
            <Route exact path="/login" component={() => { return (<><HeaderComponent /><Login /></>) }} />
            <Route exact path="/register" component={() => { return (<><HeaderComponent /><RegisterComponent /></>) }} />
            <StudentRoute exact path="/student" component={StudentDashboard} />
            <StudentRoute exact path="/leaderboard" component={LeaderBoard} />
            <StudentRoute exact path="/jobs" component={JobListing} />
            <StudentRoute exact path="/schedule" component={Schedule} />
            <StudentRoute exact path="/userprofile" component={UserProfile} />
            <TeacherRoute exact path="/teacherprofile" component={TeacherProfile} />
            <AdminRoute exact path="/adminprofile" component={AddJob} />
            <AdminRoute exact path="/admin-dashboard" component={AdminDashboard} />
            <AdminRoute exact path="/addjob" component={AddJob} />
            <AdminRoute path="/notifications" component={Notify} />
          </Switch>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
