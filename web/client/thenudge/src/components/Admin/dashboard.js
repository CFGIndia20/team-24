import React, { Component } from 'react';
import SidebarComponent from "../Layout/SidebarComponent"
class AdminDashboard extends Component {
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
            </>
        );
    }
}

export default AdminDashboard;