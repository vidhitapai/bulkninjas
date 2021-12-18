// Importing modules
const Buyer = require("../model/buyermodel.js");
const { generateOTP, sendSMS } = require("../utility/otp.js");

// Creating a new user
const createNewBuyer = async (req, res) => {
    try {
        let { name, email, phone } = req.body;
        
        // Checking if phone number and email id already exits
        const phoneExists = await Buyer.findOne({ phone });
        if (phoneExists) {
            res.status(400).json({
                message: "Phone number already registered"
            }); 
            return;
        }

        const newBuyer = new Buyer({
            name,
            email,
            phone
        });
        
        // Saving buyer details in database
        const buyer = await newBuyer.save();
        // Generating the OTP
        const otp = generateOTP(6);
        // Saving the OTP in database
        buyer.phoneOTP = otp;
        await buyer.save();
        
        // Sending the otp through sms
        await sendSMS({
            message: `Your OTP for registration is ${otp}`,
            contactNumber: buyer.phone
        });

        // Sending a response back
        res.status(200).json({
            message: "OTP sent",
            data: {
                buyerID: buyer._id
            }
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