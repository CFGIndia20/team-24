import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./index.css"
class SidebarComponent extends Component {
    render() {
        return (
            <div className="sidenav">
                <a href="#"><i class="fa fa fa-user-o" aria-hidden="true"></i>  Profile</a>
                <a href="#"><i class="fa fa-calendar" aria-hidden="true"></i>  My Slots</a>
                <a href="#"><i class="fa fa-briefcase" aria-hidden="true"></i>  Job Listing</a>
            </div>
        );
    }
}

export default SidebarComponent;
