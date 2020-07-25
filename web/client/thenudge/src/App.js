import React from 'react';
import './App.css';
import Login from "./components/Auth/Login.js"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login}></Route>
      </Switch>
    </Router>
  );
}

export default App;
