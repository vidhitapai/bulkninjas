// Importing modules
const Buyer = require("../model/buyer.js");
const { generateOTP, sendSMS, sendEmail} = require("../utility/otp.js");

// Creating a new user
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

module.exports = {
    createNewBuyer
}