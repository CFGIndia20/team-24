import React, { Component } from 'react';
import SidebarComponent from "../Layout/SidebarComponent"
import "./index.css"
class StudentDashboard extends Component {
    state = {}
    render() {
        return (
            <>
                <SidebarComponent />
                <div className="main">
                    <div className="container main-content">
                        hello
                    </div>
                </div>
            </>);
    }
}

export default StudentDashboard;