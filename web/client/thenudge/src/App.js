import React from 'react';
import './App.css';
import Login from "./components/Auth/Login.js"
import "bootstrap/dist/css/bootstrap.css"
import HeaderComponent from "./components/Layout/HeaderComponent"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
function App() {
  return (
    <Router>
      <HeaderComponent />
      <Switch>
        <Route path="/login" component={Login}></Route>
      </Switch>
    </Router>
  );
}

export default App;
