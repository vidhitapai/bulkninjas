// Importing modules
const Buyer = require("../model/buyer.js");
const { generateOTP, sendSMS, sendEmail} = require("../utility/otp.js");
const { generateJWT } = require("../utility/token.js");

// <-------------------- Create New User -------------------->
const createNewBuyer = async (req, res) => {
    try {
      let { name, email, phone } = req.body;

      // Checking if phone number and email id already exits
      const phoneExists = await Buyer.findOne({ phone });
      const emailExists = await Buyer.findOne({ email });
      if (phoneExists) {
        res.status(400).json({
          message: "Phone number already registered",
        });
        return;
      }
      if (emailExists) {
        res.status(400).json({
          message: "Email already registered",
        });
        return;
      }
      if(phoneExists && emailExists) {
        res.status(400).json({
          message: "User already exists"
        });
        return;
      }

      const newBuyer = new Buyer({
        name,
        email,
        phone,
      });

      // Saving buyer details in database
      const buyer = await newBuyer.save();
      // Generating the OTP
      const phoneOtp = generateOTP(6);
      const emailOtp = generateOTP(6);

      // Saving the OTP in database
      buyer.phoneOTP = phoneOtp;
      buyer.emailOTP = emailOtp;
      await buyer.save();

      // Sending the otp through sms
      await sendSMS({
        message: `Your OTP for registration is ${phoneOtp}`,
        contactNumber: buyer.phone,
        phoneOtp
      });

      // Sending the otp through email
      await sendEmail ({
        message: `Dear ${name}, your OTP for registration is ${emailOtp}`,
        emailId: buyer.email,
      });

      // Sending a response back
      res.status(200).json({
        message: "OTPs sent to Email and Phone",
        data: {
          buyerID: buyer._id,
        },
      });
    } catch(error) {
        res.status(400).json({
            message: error.message
        });
    }
}


// <-------------------- Phone OTP Verification -------------------->
const verifyPhoneOTP = async (req, res) => {
  try {
    // Finding the buyer
    const { checkPhoneOTP, buyerID } = req.body;
    const buyer = await Buyer.findById(buyerID);

    // Checking if buyer exists
    if (!buyer) {
      res.status(400).json({
        message: "User not found"
      });
      return;
    }
    
    // Verifying the OTP sent & entered by user
    if (buyer.phoneOTP !== checkPhoneOTP) {
      res.status(400).json({
        message: "Incorrect OTP"
      });
      return;
    };
    
    // Generating JWT 
    const token = generateJWT({ buyerID: buyer._id });
    
    // Deleting used OTP from database
    buyer.phoneOTP = "";
    await buyer.save();
    
    // Verification display message
    res.status(201).json({
      message: "OTP verified!", 
      type: "success",
      data: {
        token,
        buyer
      }
    });
  } catch (error) {
    res.status(400).json({
      message: error.message
    });
  }
};


// <-------------------- Email OTP Verification -------------------->
const verifyEmailOTP = async (req, res) => {
  try {
    // Finding the buyer
    const { checkEmailOTP, buyerID } = req.body;
    const buyer = await Buyer.findById(buyerID);

    // Checking if buyer exists
    if (!buyer) {
      res.status(400).json({
        message: "User not found"
      });
      return;
    }

    // Verifying the OTP sent & entered by user
    if (buyer.emailOTP !== checkEmailOTP) {
      res.status(400).json({
        message: "Incorrect OTP"
      });
    }
    
    // Generating JWT 
    const token = generateJWT({ buyerID: buyer._id });

    // Deleting used OTP from database
    buyer.emailOTP = "";
    await buyer.save();

    // Verification display message
    res.status(201).json({
      message: "OTP verified!", 
      type: "success",
      data: {
        token,
        buyer
      }
    });
  } catch (error) {
      res.status(400).json({
        message: error.message
      });
  }
};

// Exporting modules
module.exports = {
    createNewBuyer,
    verifyPhoneOTP,
    verifyEmailOTP
};