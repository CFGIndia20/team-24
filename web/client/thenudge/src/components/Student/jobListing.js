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
            <SidebarComponent user="student" />
            <div className="main">
                <div className="container main-content">
                    <h2 className="display-4">Job Lists</h2>
                    <hr />
                    <div className="row no-gutters justify-content-between card-responsive ">
                        <Badge title="All" />
                    </div>
                    <div className="row no-gutters justify-content-between card-responsive" >
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