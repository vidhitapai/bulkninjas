import React from 'react';
import { InputGroup } from 'react-bootstrap';
//import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../signup.css';

function Signup() {
     return (
      <main className="d-flex align-items-center min-vh-100 py-3 py-md-0">
        <div className="container">
          <div className="card login-card">
            <div className="card-body">
              <div className="brand-wrapper">
                <h2>
                  Welcome User
                  <h2>Create Your Account</h2>
                </h2>
              </div>
              <p className="login-card-description"></p>
              <form action="#!">
                <p>Are you a buyer or a seller?</p>
                <label style={{ margin: "-5px 5px 0 0" }}>Buyer</label>
                <InputGroup.Radio aria-label="Buyer" value="Buyer" name="ans" />
                <label style={{ margin: "-5px 5px 0 50px" }}>Seller</label>
                <InputGroup.Radio aria-label="Seller" value="Seller" name="ans" />
                <hr style={{ borderTop: "1px solid #bdbdbd" }} />
                <div className="form-group">
                  <label for="Name" className="sr-only">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="form-control"
                    placeholder="Name"
                  />
                </div>
                <div className="form-group">
                  <label for="email" className="sr-only">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control"
                    placeholder="Email address"
                  />
                </div>
                <div className="form-group mb-4">
                  <label for="tel" className="sr-only">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    className="form-control"
                    placeholder="+91"
                  />
                  <label for="address" className="sr-only">
                    Address
                  </label>
                  <input
                    type="address"
                    name="address"
                    id="address"
                    className="form-control"
                    placeholder="Home, Apt, etc."
                  />
                  <label for="GST" className="sr-only">
                    GST Number
                  </label>
                  <input
                    type="text"
                    name="GST"
                    id="GST"
                    className="form-control"
                    placeholder="GST No."
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
                Already Have an account?{" "}
                <a href="/login" className="text-reset">
                  Log In
                </a>
              </p>
              <nav className="login-card-footer-nav"></nav>
            </div>
          </div>
        </div>
      </main>
    );
}

export default Signup
