import React, { Component } from "react";


class UserProfile extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="settings">
        <div className="img-container">
          <img
            src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
            alt="user-dp"
          />
        </div>

        <div className="field">
          <div className="field-label">Name</div>
          <div className="field-value">Some name</div>
        </div>

        <div className="field">
          <div className="field-label">Email</div>
          <div className="field-value">test@test.com</div>
        </div>

        <div className="field">
          <div className="field-label">DOB</div>
          <div className="field-value">dateofbirth</div>
        </div>

        {/* <div className="btn-grp">
          <button className="button save-btn">Add Friend</button>
        </div> */}
      </div>
    );
  }
}

export default UserProfile;
