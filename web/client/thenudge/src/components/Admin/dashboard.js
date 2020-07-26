import React, { Component } from 'react';
import SidebarComponent from "../Layout/SidebarComponent";
import ChartComponent from '../Common/ChartComponent';
import { getStudents } from '../../redux/actions/studentActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Axios from 'axios';

class AdminDashboard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            students: null
        }
    }

    componentDidMount() {
        this.props.getStudents();

        Axios.get('http://localhost:5000/allocateBatch')
        .then(res => {
            console.log(res.data);
        });
    }

    render() {

        return (
<<<<<<< HEAD
          <>
            <SidebarComponent user="admin" />
            <div className="main">
              <div className="container main-content">
                <div className="row ">
                  <div className="col-6">
                    <h1 className="display-4">Student Insights</h1>
                    <hr />
                    <ChartComponent
                      labels={[
                        "9-10 A.M.",
                        "10-11 A.M.",
                        "11-12 Noon",
                        "12-1 P.M.",
                        "2-3 P.M.",
                        "3-4 P.M.",
                        "5-6 P.M.",
                        "6-7 P.M.",
                      ]}
                      dataset={[
                        {
                          title: "Time Slot Preference",
                          values: [
                            "12",
                            "10",
                            "35",
                            "45",
                            "32",
                            "49",
                            "23",
                            "19",
                          ],
                          color: "#1f4068",
                        },
                      ]}
                    />
                  </div>
                </div>
                </div>
                <div className="row">
=======
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
                                        "9-10 A.M.",
                                        "10-11 A.M.",
                                        "11-12 Noon",
                                        "12-1 P.M.",
                                        "2-3 P.M.",
                                        "3-4 P.M.",
                                        "5-6 P.M.",
                                        "6-7 P.M."
                                    ]}
                                    dataset={[
                                        {
                                            title: "Time Slot Preference",
                                            values: ['12', '10', '35', '45', '32', '49', '23', '19'],
                                            color: "#000",
                                        }
                                    ]}
                                />
                            </div>
                        </div>
                    </div>
>>>>>>> 3ed3d18e08db5dea55c039ea5530b7b799738866
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