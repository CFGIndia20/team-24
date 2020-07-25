import React, { Component } from 'react';
import SidebarComponent from "../Layout/SidebarComponent"
import "./index.css"
import { connect } from "react-redux"
class Schedule extends Component {
    state = {}
    render() {
        return (
            <>
                <SidebarComponent user={this.props.auth.role} />
                <div className="main">
                    <div className="container main-content">
                        hello
                    </div>
                </div>
            </>);
    }
}
const mapStatetoProps = (state) => ({
    auth: state.auth
})
export default connect(mapStatetoProps, null)(Schedule);