import React from 'react';
import {useState} from "react";
import { InputGroup } from 'react-bootstrap';
import '../signup.css';
import { signupPost } from "../data/api";
import { authenticate } from "../data/authoriseFunctions";
import { Navigate } from "react-router";

function Signup(props) {

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [gstin, setGst] = useState("");
  const [role, setRole] = useState("BUYER")
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);
  const sendSignupRequest = async () => {
    console.log({ name, phone, email, address, gstin, role});

    const receivedData = await signupPost({ name, phone, email, address, gstin, role });
    console.log("Signing up done");
    if (receivedData.data) {
      props.setUser({ id: receivedData.data.userID });
      setDone(true);
      
    } else {
      setError(receivedData.message);
    }
    
  };

  
  
     return (
       <>
         {done ? (
           <Navigate to={{ pathname: "/verificationsignup" }} />
         ) : (
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
                   <form onSubmit={(event) => event.preventDefault()}>
                     <p id="para">Are you a buyer or a seller?</p>
                     <label className="lab1" style={{ margin: "-5px 5px 0 0" }}>
                       Buyer
                     </label>
                     <InputGroup.Radio
                       aria-label="Buyer"
                       value="Buyer"
                       name="ans"
                       onChange={(event) => setRole("BUYER")}
                     />
                     <label
                       className="lab1"
                       style={{ margin: "-5px 5px 0 50px" }}
                     >
                       Seller
                     </label>
                     <InputGroup.Radio
                       aria-label="Seller"
                       value="Seller"
                       name="ans"
                       onChange={(event) => setRole("SUPPLIER")}
                     />
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
                         onChange={(event) => {
                           setName(event.target.value);
                         }}
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
                         onChange={(event) => {
                           setEmail(event.target.value);
                         }}
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
                         onChange={(event) => {
                           setPhone(event.target.value);
                         }}
                       />
                       {role === "SUPPLIER" ? (
                         <>
                           <label for="address" className="sr-only">
                             Address
                           </label>
                           <input
                             type="address"
                             name="address"
                             id="address"
                             className="form-control"
                             placeholder="Home, Apt, etc."
                             onChange={(event) => {
                               setAddress(event.target.value);
                             }}
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
                             onChange={(event) => {
                               setGst(event.target.value);
                             }}
                           />
                         </>
                       ) : null}
                     </div>
                     <p>{error}</p>
                     <input
                       name="getOTP"
                       id="getOTP"
                       className="btn btn-block login-btn mb-4"
                       type="button"
                       value="GET OTP"
                       onClick={sendSignupRequest}
                     />
                   </form>
                   <p className="login-card-footer-text">
                     Already Have an account?
                     <a href="/login" className="text-reset">
                       Log In
                     </a>
                   </p>

                   <nav className="login-card-footer-nav"></nav>
                 </div>
               </div>
             </div>
           </main>
         )}
       </>
     );
}

export default Signup
