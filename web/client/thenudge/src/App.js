import React from 'react';
import './App.css';
import Login from "./components/Auth/Login.js"
import "bootstrap/dist/css/bootstrap.css"
import HeaderComponent from "./components/Layout/HeaderComponent"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import RegisterComponent from './components/Auth/RegisterComponent';
import StudentDashboard from './components/Student/dashboard';
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login}></Route>
        <Route path="/register" component={RegisterComponent}></Route>
        <Route path="/student" component={StudentDashboard}></Route>
      </Switch>
    </Router>
  );
}

export default App;
