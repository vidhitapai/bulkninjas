// Importing modules
const express = require("express");

const router = express.Router();
const { 
    createNewUser,
    verifyPhoneOTP,
    verifyEmailOTP,
    userLogin,
    verifyUserLogin
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

// Exporting modules
module.exports = router;