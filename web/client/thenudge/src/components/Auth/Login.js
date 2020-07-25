import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
//import { loginUser } from '../../redux/actions/authActions';
import TextFieldGroup from '../Common/TextFieldGroupComponent';
import SelectFieldGroup from "../Common/SelectFieldGroupComponent"
//import { setTitle } from "../../redux/actions/titleActions";
import CardComponent from "../Common/CardComponent"
import "./login.css"
class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            errors: {},
            designation: "",
            options: [{ label: "Student", value: "student" }, {
                label: "Teacher", value: "teacher"
            }, {
                label: "Admin", value: "admin"
            }]
        }
        //this.onChange = this.onChange.bind(this);
        //this.onSubmit = this.onSubmit.bind(this);
    }

    /* componentDidMount() {

        // If user is already logged in redirect to Gossips page
        if (this.props.auth.isAuthenticated) this.props.history.push('/gossips');
        this.props.setTitle('Login');

    }

    componentWillReceiveProps(nextProps) {

        if (nextProps.auth.isAuthenticated) {
            this.props.history.push('/gossips');
        }

        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors });
        }

    }

    onChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }
    onSubmit(event) {
        event.preventDefault();

        const loginData = {
            email: this.state.email,
            password: this.state.password
        }

        this.props.loginUser(loginData);
    } */

    render() {
        const { errors } = this.state;

        return (
<<<<<<< HEAD
          <div className="container mt-5 text-cream bg-main">
            <h1 className="display-4 mt-5 text-center">Login</h1>
            <div className="row justify-content-center">
              <div className="col-md-4 col-lg-4 mt-5">
                <form
                  className="form-container"
                  onSubmit={this.onSubmit}
                  noValidate
                >
                  <TextFieldGroup
                    name="email"
                    type="email"
                    error={errors.email}
                    onChange={this.onChange}
                    placeholder="Email"
                    value={this.state.email}
                  />
                  <TextFieldGroup
                    name="password"
                    type="password"
                    error={errors.password}
                    onChange={this.onChange}
                    placeholder="Password"
                    value={this.state.password}
                  />
                  <SelectFieldGroup
                    name="designation"
                    type="text"
                    error={errors.designation}
                    onChange={this.onChange}
                    placeholder="Designation"
                    value={this.state.designation}
                    options={["Student", "Admin", "Teacher"]}
                  />
                  <button
                    type="submit"
                    className="btn-primary  p-1 btn btn-lg btn-block mb-5"
                  >
                    Login
                  </button>
                </form>
              </div>
=======
            <div className="container mt-5 text-cream bg-main">
                <h1 className="display-4 mt-5 text-center">Login</h1>
                <div className="row justify-content-center">
                    <div className="col-md-4 col-lg-4 mt-5">
                        <form className="form-container" onSubmit={this.onSubmit} noValidate>
                            <TextFieldGroup
                                name="email"
                                type="email"
                                error={errors.email}
                                onChange={this.onChange}
                                placeholder="Email"
                                value={this.state.email}
                            />
                            <TextFieldGroup
                                name="password"
                                type="password"
                                error={errors.password}
                                onChange={this.onChange}
                                placeholder="Password"
                                value={this.state.password}
                            />
                            <SelectFieldGroup
                                name="designation"
                                type="text"
                                error={errors.designation}
                                onChange={this.onChange}
                                placeholder="Designation"
                                value={this.state.designation}
                                options={this.state.options}
                            />
                            <button type="submit" className="form-button p-1 btn btn-lg btn-block mb-5">
                                Login
                            </button>
                        </form>
                    </div>
                </div>
>>>>>>> 9be12fc6d6971d1eda1e677bfdb20eac7e2840df
            </div>
          </div>
        );
    }
}

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    setTitle: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
})


//export default connect(mapStateToProps,{loginUser,setTitle})((Login));

export default Login;