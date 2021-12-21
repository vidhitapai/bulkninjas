// Importing modules
const express = require("express");

const router = express.Router();
const { 
    createNewUser,
    verifyPhoneOTP,
    verifyEmailOTP,
    userLogin,
    verifyUserLogin,
    updateUser,
    deleteUser
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

//Route to update user
router.post("/update/:userid", updateUser);

//Route to verify user login
router.post("/delete/:userid", deleteUser);

// Exporting modules
module.exports = router;