// Importing modules 
const Razorpay = require("razorpay");
const dotenv = require("dotenv").config();

// Initialized razorpay 
const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEYID,
    key_secret: process.env.RAZORPAY_KEYSECRET
});

const payment = async (req, res) => {

    let options = {
       amount: (req.body.total) * 100, // converting rupees to paise
       currency: "INR"
   };

   razorpay.orders.create(options, (error, order) => {
       if(error) {
           res.status(400).json({
               message: error.message
           });
           return;
       } else {
           res.status(200).json(order);
           return;
       }
   });
};