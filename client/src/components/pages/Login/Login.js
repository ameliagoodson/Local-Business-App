import React, { Component } from "react";
import { loginUser } from "../../UserFunctions/userFunctions";
import "./Login.css";
import { Link, useLocation } from "react-router-dom";
import LoginIcon from "../assets/login.png";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password,
    };
    loginUser(user).then(res => {
      if (res) {
        this.props.history.push("/dashboard");
      } else {
        console.log("Incorrect email or password");
      }
    });
  }

  render() {
    // const location = useLocation();
    return (
      <div className="container-login">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.onSubmit} className="loginForm">
              <div>
                <h1 className="h3 mb-3 font-weight normal signupText">
                  Please sign in or
                </h1>
                <button className="btn btn-lg btn-primary signupBtn">
                  <Link
                    to="/register"
                    // className={location.pathname === "/register"}
                    className="Signup"
                  >
                    Sign up
                  </Link>
                </button>
                <img
                  className="icon-login"
                  src={LoginIcon}
                  alt="website logo"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter Email"
                  value={this.state.email}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Enter Password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block btnin"
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
