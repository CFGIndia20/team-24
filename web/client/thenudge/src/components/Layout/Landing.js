import React from 'react';
import { Link } from 'react-router-dom';

function Landing() {
    return (
      <div className="container mt-5 pt-5">

        <div className="jumbotron pb-3">
          <h1 className="display-4">Welcome to Allotify!</h1>
          <p className="lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
          <hr />
          <Link to="/login" className="btn btn-primary mb-0">
            Login
          </Link>
        </div>
      </div>
    );
}

export default Landing;
