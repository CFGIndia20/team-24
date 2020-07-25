import React, { Component } from 'react';
import SidebarComponent from "../Layout/SidebarComponent";
import ChartComponent from '../Common/ChartComponent';
import { getStudents } from '../../redux/actions/studentActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class AdminDashboard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            students: []
        }
    }

    componentDidMount() {
        this.props.getStudents();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.students.users) {
            this.setState({ students: nextProps.students })
        }
    }


    render() {

        const students = this.state.students;
        let pref1 = [];
        let pref2 = [];
        let pref3 = [];

        if (students.students && students.students[0].preference[0]) {

            pref1 = students.students.map(
                (unit) => unit.preference[0]
            );
            pref2 = students.students.map(
                (unit) => unit.preference[1]
            );
            pref3 = students.students.map(
                (unit) => unit.preference[2]
            );

        }

        return (
            <>
                <SidebarComponent user="admin" />
                <div className="main">
                    <div className="container main-content">
                        <h1 className="display-4">Student Insights</h1>
                        <hr />
                        <div className="row ">
                            <div className="col-6 bg-light">
                                <ChartComponent
                                    labels={[
                                        "8-9 A.M.",
                                        "9-10 A.M.",
                                        "10-11 A.M.",
                                        "11-12 Noon",
                                        "12-1 P.M.",
                                        "1-2 P.M.",
                                        "2-3 P.M.",
                                        "3-4 P.M.",
                                        "4-5 P.M.",
                                        "5-6 P.M.",
                                        "6-7 P.M.",
                                        "7-8 P.M.",
                                    ]}
                                    dataset={[
                                        {
                                            title: "First Preference",
                                            values: pref1,
                                            color: "#000",
                                        },
                                        {
                                            title: "Second Preference",
                                            values: pref2,
                                            color: "#eedede",
                                        },
                                        {
                                            title: "Third Preference",
                                            values: pref3,
                                            color: "#4ebbaa",
                                        },
                                    ]}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

AdminDashboard.propTypes = {
    students: PropTypes.object.isRequired,
    getStudents: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    students: state.students
})

export default connect(mapStateToProps, { getStudents })(AdminDashboard);