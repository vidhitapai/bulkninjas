// Importing modules
const res = require("express/lib/response");
const fast2sms = require("fast-two-sms");
const dotenv = require('dotenv').config();
const nodemailer = require("nodemailer");

// Generating OTP
const generateOTP = (otpLength) => {
    let digits = "0123456789";
    let OTP = "";
    for (let i = 0; i < otpLength; i++) {
        OTP += digits[Math.floor(Math.random()*10)];
    }
    return OTP;
};

// Sending OTP via SMS
const sendSMS = async ({ message, contactNumber}) => {
    try {
        const res = await fast2sms.sendMessage({
            authorization: process.env.API_KEY,
            message,
            numbers: [contactNumber]
        });
        console.log(res);
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
        console.log(error);
    }
};

const sendEmail = async ({message, emailId}) => {
    try {
       let transporter = nodemailer.createTransport({
         service: "gmail",
         auth: {
           type: "OAuth2",
           user: process.env.MAIL_USERNAME,
           pass: process.env.MAIL_PASSWORD,
           clientId: process.env.OAUTH_CLIENT_ID,
           clientSecret: process.env.OAUTH_CLIENT_SECRET,
           refreshToken: process.env.OAUTH_REFRESH_TOKEN
         },
       });
       let mailOptions = {
         from: "socialmigraine@gmail.com",
         to: emailId,
         subject: "OTP for Registration",
         text: message
       };
       transporter.sendMail(mailOptions, function (err, data) {
         if (err) {
           console.log("Error " + err);
         } else {
           console.log("Email sent successfully");
         }
       });
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
      console.log(error);
    }
}



// Exporting modules
module.exports = {
    generateOTP,
    sendSMS,
    sendEmail
}