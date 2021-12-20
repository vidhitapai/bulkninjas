// Importing modules
const express = require("express");

const router = express.Router();
const { 
    createNewUser,
    verifyPhoneOTP,
    verifyEmailOTP,
    userLogin,
    verifyUserLogin,
    verifyGSTIN
} = require("../controller/authController.js");

// Route to register a new user
router.post("/register", createNewUser);

// Route to authenticate phone OTP
router.post("/authenticate/phoneotp", verifyPhoneOTP);

// Route to authenticate email OTP
router.post("/authenticate/emailotp", verifyEmailOTP);

//Route to login user
router.post("/login", userLogin);

//Route to verify user login
router.post("/verifylogin", verifyUserLogin);

// Route to verify the GST Identification Number
router.post("/verify/gstin", verifyGSTIN);

// Exporting modules
module.exports = router;