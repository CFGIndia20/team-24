import React, { Component } from 'react';
import TextFieldGroup from '../Common/TextFieldGroupComponent';

class RegisterComponent extends Component {
  state = {
    name: "",
    email: "",
    aadhar: "",
    password: "",
    password2: "",
    errors: ""
  }

  render() {
    let errors = this.state.errors
    return (
      <div className="container mt-5">
        <h1 className="display-4 text-center">Register</h1>
        <div className="row justify-content-center">
          <div className="col-md-4 col-lg-4 mt-5">
            <form className="form-container" noValidate>
              <TextFieldGroup
                name="name"
                type="text"
                error={errors.name}
                onChange={this.onChange}
                placeholder="Name"
                value={this.state.name}
              />
              <TextFieldGroup
                name="email"
                type="email"
                error={errors.email}
                onChange={this.onChange}
                placeholder="Email"
                value={this.state.email}
              />
              <TextFieldGroup
                name="aadhaar"
                type="text"
                error={errors.aadhaar}
                onChange={this.onChange}
                placeholder="Aadhaar Number"
                value={this.state.aadhaar}
              />
              <TextFieldGroup
                name="password"
                type="password"
                error={errors.password}
                onChange={this.onChange}
                placeholder="Password"
                value={this.state.password}
              />
              <TextFieldGroup
                name="password2"
                type="password"
                error={errors.password2}
                onChange={this.onChange}
                placeholder="Confirm Password"
                value={this.state.password2}
              />
              <button type="submit" className="p-1 btn btn-lg btn-primary btn-block">
                Register
                  </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default RegisterComponent;
