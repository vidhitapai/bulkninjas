import React from 'react';
import { InputGroup } from 'react-bootstrap';
// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../signup.css';

function Signup() {
    return (
      <main class="d-flex align-items-center min-vh-100 py-3 py-md-0">
        <div class="container">
          <div class="card login-card">
            <div class="card-body">
              <div class="brand-wrapper">
                <h2>
                  Welcome User
                  <h2>Create Your Account</h2>
                </h2>
              </div>
              <p class="login-card-description"></p>
              <form action="#!">
                <p>Are you a buyer or a seller?</p>
                <label style={{ margin: "-5px 5px 0 0" }}>Buyer</label>
                <InputGroup.Radio aria-label="Buyer" />
                <label style={{ margin: "-5px 5px 0 50px" }}>Seller</label>
                <InputGroup.Radio aria-label="Seller" />
                <hr style={{ borderTop: "1px solid #bdbdbd" }} />
                <div class="form-group">
                  <label for="Name" class="sr-only">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    class="form-control"
                    placeholder="Name"
                  />
                </div>
                <div class="form-group">
                  <label for="email" class="sr-only">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    class="form-control"
                    placeholder="Email address"
                  />
                </div>
                <div class="form-group mb-4">
                  <label for="password" class="sr-only">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    class="form-control"
                    placeholder="+91"
                  />
                </div>
                <input
                  name="getOTP"
                  id="getOTP"
                  class="btn btn-block login-btn mb-4"
                  type="button"
                  value="GET OTP"
                />
              </form>
              <p class="login-card-footer-text">
                Already Have an account?{" "}
                <a href="#!" class="text-reset">
                  Log In
                </a>
              </p>
              <nav class="login-card-footer-nav"></nav>
            </div>
          </div>
        </div>
      </main>
    );
}

export default Signup
