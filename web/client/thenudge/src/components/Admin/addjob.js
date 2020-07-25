import React, { Component } from 'react';
import SidebarComponent from "../Layout/SidebarComponent"
class AddJob extends Component {
    state = {}
    render() {
        return (
            <>
                <SidebarComponent user="admin" />
                <div className="main">
                    <div className="container main-content">
                        hello
                    </div>
                </div>
            </>
        );
    }
}

export default AddJob;