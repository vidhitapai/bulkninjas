import React, { useState } from "react";
import { InputGroup } from "react-bootstrap";
// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "../signup.css";

function OtpSignup() {
  const [phoneOtp, setPhoneOtp] = useState("");




  return (
    <main className="d-flex align-items-center min-vh-100 py-3 py-md-0">
      <div className="container">
        <div className="card login-card">
          <div className="card-body">
            <div className="brand-wrapper">
              <h2>Verify OTP</h2>
            </div>
            <p className="login-card-description"></p>
            <form action="#!">
              <div className="form-group"></div>
              <div className="form-group">
                <label for="OTP" className="sr-only">
                  Email OTP
                </label>
                <input
                  type="text"
                  name="OTP"
                  id="OTP"
                  className="form-control"
                  placeholder="Verify Email OTP"
                />
              </div>
              <input
                name="verifyEmail"
                id="verfiyEmail"
                className="btn btn-block login-btn mb-4"
                type="button"
                value="Verify Email OTP"
              />
              <div className="form-group">
                <label for="OTP" className="sr-only">
                  Phone OTP
                </label>
                <input
                  type="text"
                  name="OTP"
                  id="OTP"
                  className="form-control"
                  placeholder="Phone OTP"
                />
              </div>

              <input
                name="verifyOTP"
                id="verfiyOTP"
                className="btn btn-block login-btn mb-4"
                type="button"
                value="Verify Phone OTP"
              />
            </form>
            <nav className="login-card-footer-nav"></nav>
          </div>
        </div>
      </div>
    </main>
  );
}

export default OtpSignup;
