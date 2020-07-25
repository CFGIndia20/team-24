import React, { Component } from 'react';
import SidebarComponent from "../Layout/SidebarComponent"
import "./index.css"
import { Switch, Route, Link} from "react-router-dom";
import UserProfile from './UserProfile';

class StudentDashboard extends Component {
    state = {}
    render() {
        return (
          <>
            <SidebarComponent />
           
          </>
        );
    }
}

export default StudentDashboard;