import React, { useState } from "react";
import { verifyEmailOtp, verifyPhoneOtp } from "../data/api";
import { Navigate } from "react-router";
// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "../signup.css";

function OtpSignup(props) {
  const [phoneOtp, setPhoneOtp] = useState("");
  const [emailOtp, setEmailOtp] = useState("");
  const [done, setDone] = useState(0);
  const submitPhone = async (event) => {
    
      const receivedData = await verifyPhoneOtp({
        userID: props.user.id,
        checkPhoneOTP: phoneOtp,
      });
      if (receivedData.data) {
        if (done ===1) {
          props.setUser(receivedData.data.user);
        }
        setDone(done+1);

      } else {
        console.log(receivedData.message);
      }


    }
   
 const submitEmail = async (event) => {
   const receivedData = await verifyEmailOtp({
     userID: props.user.id,
     checkEmailOTP: emailOtp,
   });
   if (receivedData.data) {
     if (done === 1) {
       props.setUser(receivedData.data.user);
     }
     setDone(done + 1);
      
   } else {
     console.log(receivedData.message);
   }
 };

  return ( <> {done === 2 ? <Navigate to={{ pathname: "/search" }} /> : 
      <main className="d-flex align-items-center min-vh-100 py-3 py-md-0">
        <div className="container">
          <div className="card login-card">
            <div className="card-body">
              <div className="brand-wrapper">
                <h2>Verify OTP</h2>
              </div>
              <p className="login-card-description"></p>
              <form onSubmit={(event) => event.preventDefault()}>
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
                    onChange={(event) => setEmailOtp(event.target.value)}
                  />
                </div>
                <input
                  name="verifyEmail"
                  id="verfiyEmail"
                  className="btn btn-block login-btn mb-4"
                  type="button"
                  value="Verify Email OTP"
                  onClick={submitEmail}
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
                    onChange={(event) => setPhoneOtp(event.target.value)}
                  />
                </div>

                <input
                  name="verifyOTP"
                  id="verfiyOTP"
                  className="btn btn-block login-btn mb-4"
                  type="button"
                  value="Verify Phone OTP"
                  onClick={submitPhone}
                />
              </form>
              <nav className="login-card-footer-nav"></nav>
            </div>
          </div>
        </div>
      </main>
    
  }
  
  </> )
}

export default OtpSignup;
