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
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={RegisterComponent} />
        <Route path="/student" component={StudentDashboard}></Route>
        <Route path="/leaderboard" component={LeaderBoard}></Route>
        <Route path="/jobs" component={JobListing}></Route>
        <Route path="/profile" component={Profile}></Route>
        <Route path="/schedule" component={Schedule}></Route>
      </Switch>
    </Router>
  );
}

export default App;
