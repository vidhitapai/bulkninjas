import React, {useState} from 'react';
import { InputGroup } from 'react-bootstrap';
import '../signup.css';
import { loginPost } from "../data/api";
import { Navigate } from "react-router";

function Login() {
  const [username, setUsername] = useState("");
  
  const [error, setError] = useState("");


  const usernameChange = (event) => {
    setUsername(event.target.value);
  };
 
  const sendLoginRequest = async () => {
    const receivedData = await loginPost({
      username
    });
    console.log("done logging in");
    if (receivedData.data) {
      <Navigate to={{ pathname: "/verificationlogin" }} />;
     
    } else {
      setError(receivedData.message);
    
    }
  };
    return (
      <main className="d-flex align-items-center min-vh-100 py-3 py-md-0">
        <div className="container">
          <div className="card login-card">
            <div className="card-body">
              <div className="brand-wrapper">
                <h2>
                  Welcome Back User
                  <h2>Log into Your Account</h2>
                </h2>
              </div>
              <p className="login-card-description"></p>
              <form action="#!">
                <div className="form-group"></div>
                <div className="form-group">
                  <label for="loginInput" className="sr-only">
                    Email or Phone Number
                  </label>
                  <input
                    type="text"
                    name="loginInput"
                    className="form-control"
                    placeholder="Email address or Phone Number"
                    onChange={usernameChange}
                  />
                </div>

                <p>{error}</p>
                <input
                  name="getOTP"
                  id="getOTP"
                  className="btn btn-block login-btn mb-4"
                  type="button"
                  value="GET OTP"
                  onClick={sendLoginRequest}
                />
              </form>
              <p className="login-card-footer-text">
                Don't have an Account?{" "}
                <a href="/register" className="text-reset">
                  Sign Up
                </a>
              </p>
              <nav className="login-card-footer-nav"></nav>
            </div>
          </div>
        </div>
      </main>
    );
}

export default Login
