import React, { Component } from 'react';
import SidebarComponent from "../Layout/SidebarComponent";
import ChartComponent from '../Common/ChartComponent';
import axios from 'axios';

class AdminDashboard extends Component {

    constructor(props){
        super(props);

        this.state
    }



    render() {
        return (
            <>
                <SidebarComponent />
                <div className="main">
                    <div className="container main-content">
                        <div className="row bg-light">
                            <div className="col">
                                <h1></h1>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default AdminDashboard;