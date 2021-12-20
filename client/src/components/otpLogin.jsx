import React from 'react';
import { InputGroup } from 'react-bootstrap';
// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../signup.css';

function OtpLogin() {
    return (
      <main className="d-flex align-items-center min-vh-100 py-3 py-md-0">
        <div className="container">
          <div className="card login-card">
            <div className="card-body">
              <div className="brand-wrapper">
                <h2>
                  Verify OTP
                  
                </h2>
              </div>
              <p className="login-card-description"></p>
              <form action="#!">
               
                <div className="form-group">
                  
                </div>
                <div className="form-group">
                  <label for="Verify OTP" className="sr-only">
                    Enter OTP 
                  </label>
                  <input
                    type="text"
                    name="verify OTP"
                    id="OTP"
                    className="form-control"
                    placeholder="Enter OTP"
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
             
              <nav className="login-card-footer-nav"></nav>
            </div>
          </div>
        </div>
      </main>
    );
}

export default OtpLogin
