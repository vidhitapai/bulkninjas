// Importing modules
const User = require("../model/user.js");
const { generateOTP, sendSMS, sendEmail} = require("../utility/otp.js");
const { generateJWT } = require("../utility/token.js");
const dotenv = require("dotenv").config();
const gstAPI = new (require("gst-verification"))(process.env.GSTIN_SECRET);
const validate = require("validator");
const Product = require("../model/product.js");

// <-------------------- Create New User -------------------->
const createNewUser = async (req, res) => {
    try {
      let { name, email, phone, role, address, gstin } = req.body;

      // Checking if phone number and email id already exits
      const phoneExists = await User.findOne({ phone });
      const emailExists = await User.findOne({ email });
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

      // Verifying the supplier's GST Identification Number
      if(gstin !== "") {
        let data;
        gstAPI.verifyGST(gstin).then((data)=>{
          data = data;
        });
      
        if(data === NULL) {
          res.status(400).json({
           message: "Invalid GSTIN"
          });
        }
      }

      // Creating new user after verification
      const newUser = new User({ 
        name, 
        email, 
        phone, 
        role, 
        address,
        gstin 
      });

      // Saving user details in database
      const user = await newUser.save();
      // Generating the OTP
      const phoneOtp = generateOTP(6);
      const emailOtp = generateOTP(6);

      // Saving the OTP in database
      user.phoneOTP = phoneOtp;
      user.emailOTP = emailOtp;
      await user.save();

      // Sending the otp through sms
      await sendSMS({
        message: `Your OTP for registration is ${phoneOtp}`,
        contactNumber: user.phone,
        phoneOtp
      });

      // Sending the otp through email
      await sendEmail ({
        message: `Dear ${name}, your OTP for registration is ${emailOtp}`,
        emailId: user.email,
      });

      // Sending a response back
      res.status(200).json({
        message: "OTPs sent to Email and Phone",
        data: {
          userID: user._id,
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
    // Finding the user
    const { checkPhoneOTP, userID } = req.body;
    const user = await User.findById(userID);

    // Checking if user exists
    if (!user) {
      res.status(400).json({
        message: "User not found"
      });
      return;
    }
    
    // Verifying the OTP sent & entered by user
    if (user.phoneOTP !== checkPhoneOTP) {
      res.status(400).json({
        message: "Incorrect OTP"
      });
      return;
    }
    
    // Generating JWT 
    const token = generateJWT({ userID: user._id });
    
    // Deleting used OTP from database
    user.phoneOTP = "";
    await user.save();
    
    // Verification display message
    res.status(201).json({
      message: "OTP verified!", 
      type: "success",
      data: {
        token,
        user
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
    // Finding the user
    const { checkEmailOTP, userID } = req.body;
    const user = await User.findById(userID);

    // Checking if user exists
    if (!user) {
      res.status(400).json({
        message: "User not found"
      });
      return;
    }

    // Verifying the OTP sent & entered by user
    if (user.emailOTP !== checkEmailOTP) {
      res.status(400).json({
        message: "Incorrect OTP"
      });
    }
    
    // Generating JWT 
    const token = generateJWT({ userID: user._id });

    // Deleting used OTP from database
    user.emailOTP = "";
    await user.save();

    // Verification display message
    res.status(201).json({
      message: "OTP verified!", 
      type: "success",
      data: {
        token,
        user
      }
    });
  } catch (error) {
      res.status(400).json({
        message: error.message
      });
  }
};


// <-------------------- User Login -------------------->
const userLogin = async (req, res) => {
	try {
        const { username } = req.body;
        let user;
        
        // Checking if user has chosen to enter email or phone
        if (validate.isEmail(username)) {
          user = await User.findOne({email: username});
        } else {
          user = await User.findOne({phone: username});
        }
      
        // Checking if user exists
        if (!user) {
            res.status(400).json({
            message: "User not found"
            });
            return;
        }

        // Verifying by phone otp
        if (username == user.phone) {
            // Generating the OTP
            const phoneOtp = generateOTP(6);

            // Saving the OTP in database
            user.phoneOTP = phoneOtp;
            await user.save();

            // Sending the otp through sms
            await sendSMS({
                message: `Your OTP for registration is ${phoneOtp}`,
                contactNumber: user.phone,
                phoneOtp
            });

            // Sending a response back
            res.status(200).json({
                message: "OTP sent Phone",
                data: {
                    userID: user._id,
                }
            });
        }

        // Verifying by email otp
        if (username == user.email) {
            // Generating the OTP
            const emailOtp = generateOTP(6);

            // Saving the OTP in database
            user.emailOTP = emailOtp;
            await user.save();

            // Sending the otp through email
            await sendEmail ({
                message: `Dear ${user.name}, your OTP for registration is ${emailOtp}`,
                emailId: user.email,
            });

            // Sending a response back
            res.status(200).json({
                message: "OTP sent to Email",
                data: {
                    userID: user._id,
                }
            });
        }
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
}


// <-------------------- Verify User OTP Login -------------------->
const verifyUserLogin = async (req, res) => {
    try {
        // Finding the user
        const { checkOTP, userID } = req.body;
        const user = await User.findById(userID);

        // Checking for incorrect OTP
        if (checkOTP !== user.phoneOTP && checkOTP !== user.emailOTP) {
            res.status(400).json({
                message: "Incorrect OTP"
            });
        }

        // Verifying otp entered
        if (checkOTP == user.phoneOTP || checkOTP == user.emailOTP) {
            // Verifying if phone otp entered
            if (checkOTP == user.phoneOTP) {
                // Deleting used OTP from database
                user.phoneOTP = "";
                await user.save();
            }

            // Verifying if email otp entered
            if (checkOTP == user.emailOTP) {
                // Deleting used OTP from database
                user.emailOTP = "";
                await user.save();
            }

            // Generating JWT 
            const token = generateJWT({ userID: user._id });
            
            // Verification display message
            res.status(201).json({
                message: "OTP verified!", 
                type: "success",
                data: {
                    token,
                    user
                }
            });
        }
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
}


// <-------------------- User Update -------------------->
const updateUser = async (req, res) => {
  try {
      // Searching for the user with given id & updating
      const user = await User.findByIdAndUpdate(req.params.userid, req.body, {new: true});
      // Checking if user exists
      if (!user) {
          res.status(404).json({
              message: "User does not exist"
          });
      } else {
          res.status(201).json({
              message: "User details updated",
              data: user
          });
      }
  } catch(error) {
      res.status(400).json({
          message: error.message
      });
  }
};


// <-------------------- User Delete -------------------->
const deleteUser = async (req, res) => {
  try {
    // let user = await User.findById(req.params.userid); 

    // if (user.role === "SUPPLIER") {
    //   await Product.deleteMany({ userid: req.params.userid });
    // } else if (user.role === "BUYER") {

    // }

    // Searching & deleting the user 
    const user = await User.findByIdAndDelete(req.params.userid);

    // Checking is user exists
    if (!user) {
        res.status(404).json({
            message: "User does not exist"
          });
      } else {
          res.status(201).json({
              message: "User has been deleted"
          });
      }
  } catch(error) {
      res.status(400).json({
          message: error.message
      });
  }
};


// <-------------------- Verify GSTIN for supplier -------------------->
// const verifyGSTIN = async (req, res) => {
//   try {
//     const gstnumber = req.body;

//     // Verifying GST Identification Number 
//     gstAPI.verifyGST(gstnumber).then((data)=>{
//       res.send(data);
//     });
//   } catch (error) {
//       res.status(400).json({
//         message: error.message
//       });
//   }
// }


// Exporting modules
module.exports = {
    createNewUser,
    verifyPhoneOTP,
    verifyEmailOTP,
    userLogin,
    verifyUserLogin,
    updateUser,
    deleteUser
    //verifyGSTIN
};