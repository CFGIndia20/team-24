import React, { Component } from 'react';
import SidebarComponent from "../Layout/SidebarComponent"
import CardComponent from "../Common/CardComponent"
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
                        <span style={{
                            width: "100px", height: "30px", fontSize: "18px",
                            backgroundColor: "#96c7e8", cursor: "pointer"
                        }}
                            className="badge " onClick={e => this.handleEvent(e, "All")}>All</span>
                    </div>
                    <div className="row no-gutters justify-content-between" style={{ padding: "0px 100px" }}>
                        {this.state.jobs.map(job => (
                            <CardComponent
                                info={job} />
                        ))}
                    </div>
                </div>
            </div>
        </>);
    }
}

export default JobListing;