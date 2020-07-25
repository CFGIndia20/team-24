import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavbarComponent extends Component {
    render() {
        return (
          <div className="navbar navbar-expand-md navbar-light bg-light box-shadow-down-black">
            <div className="container">
              <Link to="#" className="navbar-brand">
                Allotify
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <Link className="nav-link" to="/register">
                      Register
                    </Link>
                  </li>
                  <li className="nav-item active">
                    <Link className="nav-link" to="/login">
                      Login
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );
    }
}

export default NavbarComponent;
