import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./index.css"
class SidebarComponent extends Component {
    render() {
        return (
            <div className="sidenav">
                <Link to="/schedule"><a><i className="fa fa-calendar" aria-hidden="true"></i>  Schedule</a></Link>
                <Link to="/jobs"><a><i className="fa fa-briefcase" aria-hidden="true"></i>  Job Listing</a></Link>
                <Link to="/profile"><a><i className="fa fa fa-user-o" aria-hidden="true"></i>  Profile</a></Link>
                <Link to="/leaderboard"><a><i className="fa fa-calendar-o" aria-hidden="true"></i>  Leaderboard</a></Link>
                <Link to="/"><a><i class="fa fa-sign-out" aria-hidden="true"></i>  Log out</a></Link>
            </div>
        );
    }
}

export default SidebarComponent;
