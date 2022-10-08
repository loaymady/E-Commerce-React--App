import React from "react";
import "./SignUp.css";

const SignUp = () => {
  return (
    <div className="Auth-form-containerr">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Create Your Account</h3>
          <div className="row">
            <div className="col">
              <label>First Name</label>
              <input
                type="name"
                className="form-control mt-1"
                placeholder="Enter fname"
              />
            </div>
            <div className="col">
              <label>Last Name</label>
              <input
                type="name"
                className="form-control mt-1"
                placeholder="Enter lname"
              />
            </div>
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
            />
          </div>
          <div className="form-group mt-3">
            <label>Rep Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Repeat Your Password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-info mt-3">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
