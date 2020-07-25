import React, { Component } from 'react';
import SidebarComponent from "../Layout/SidebarComponent"
import "./index.css"
import { Switch, Route, Link } from "react-router-dom";
import UserProfile from './UserProfile';

class StudentDashboard extends Component {
  state = {
    user: "student"
  }
  render() {
    return (
      <>
        <SidebarComponent user={this.state.user} />

      </>
    );
  }
}

export default StudentDashboard;