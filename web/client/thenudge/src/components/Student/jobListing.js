import React, { Component } from 'react';
import SidebarComponent from "../Layout/SidebarComponent"
import CardComponent from "../Common/CardComponent"
import Badge from "../Common/Badge"
class JobListing extends Component {
    state = {
        jobs: [
            { company: "JP morgan", role: "Analyst", posted: "Today", description: "Hey there" },
            { company: "JP morgan", role: "Analyst", posted: "Today", description: "Hey there" },
            { company: "JP morgan", role: "Analyst", posted: "Today", description: "Hey there" },
            { company: "JP morgan", role: "Analyst", posted: "Today", description: "Hey there" },
            { company: "JP morgan", role: "Analyst", posted: "Today", description: "Hey there" },
        ]
    }
    render() {
        return (<>
            <SidebarComponent />
            <div className="main">
                <div className="container main-content">
                    <div className="row no-gutters justify-content-between " style={{ padding: "0px 100px" }}>
                        <Badge title="All" />
                    </div>
                    <div className="row no-gutters justify-content-between" style={{ padding: "0px 100px" }}>
                        {this.state.jobs.map(job => (
                            <div className="hover-magnify">
                                <CardComponent
                                    info={job} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>);
    }
}

export default JobListing;