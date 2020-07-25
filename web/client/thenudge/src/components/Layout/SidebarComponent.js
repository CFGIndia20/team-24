import React, { Component } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./index.css"
const SidebarComponent = (props) => {
    let location = useLocation()
    let path = location.pathname
    console.log(props)
    let user = props.user ? props.user : "student"
    if (user == "student") {
        return (
            <div className="sidenav">
                <Link to="/schedule" style={{ textDecoration: "none" }}><span className={path === "/schedule" ? "selected-nav" : ""}><i className="fa fa-calendar" aria-hidden="true"></i>  Schedule</span></Link>
                <Link to="/jobs" style={{ textDecoration: "none" }}><span className={path === "/jobs" ? "selected-nav" : ""}><i className="fa fa-briefcase" aria-hidden="true"></i>  Job Listing</span></Link>
                <Link to="/userprofile" style={{ textDecoration: "none" }}><span className={path === "/userprofile" ? "selected-nav" : ""}><i className="fa fa fa-user-o" aria-hidden="true"></i>  Profile</span></Link>
                <Link to="/leaderboard" style={{ textDecoration: "none" }}><span className={path === "/leaderboard" ? "selected-nav" : ""}><i className="fa fa-calendar-o" aria-hidden="true"></i>  Leaderboard</span></Link>
                <Link to="/" style={{ textDecoration: "none" }}><span><i class="fa fa-sign-out" aria-hidden="true"></i>  Log out</span></Link>
            </div >
        );
    }
    if (user == "teacher") {
        return (
            <div className="sidenav">
                <Link to="/schedule" style={{ textDecoration: "none" }}><span className={path === "/schedule" ? "selected-nav" : ""}><i className="fa fa-calendar" aria-hidden="true"></i>  Schedule</span></Link>
                <Link to="/teacherprofile" style={{ textDecoration: "none" }}><span className={path === "/teacherprofile" ? "selected-nav" : ""}><i className="fa fa fa-user-o" aria-hidden="true"></i>  TeacherProfile</span></Link>
                <Link to="/" style={{ textDecoration: "none" }}><span><i class="fa fa-sign-out" aria-hidden="true"></i>  Log out</span></Link>
            </div >
        )
    }
}

export default SidebarComponent;
