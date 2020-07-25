import React, { Component } from 'react';
import SidebarComponent from "../Layout/SidebarComponent"
class Profile extends Component {
    state = {}
    render() {
        return (<>
            <SidebarComponent />
            <div className="main">
                <div className="container main-content">
                    hello
                    </div>
            </div>
        </>);
    }
}

export default Profile;