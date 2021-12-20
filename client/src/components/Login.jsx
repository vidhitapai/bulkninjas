import React from 'react';
import { InputGroup } from 'react-bootstrap';
// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../signup.css';

function Login() {
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
               
                <div className="form-group">
                  
                </div>
                <div className="form-group">
                  <label for="email" className="sr-only">
                    Email or Phone Number
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control"
                    placeholder="Email address or Phone Number"
                  />
                </div>
               
                
                <input
                  name="getOTP"
                  id="getOTP"
                  className="btn btn-block login-btn mb-4"
                  type="button"
                  value="GET OTP"
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
