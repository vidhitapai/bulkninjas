// Importing modules
const express = require("express");
const router = express.Router();
const { 
    payment,
    success
 } = require("../controller/paymentController");


router.post("/payment", payment);

router.post("/success", success);

//router.post()

//Exporting the router
module.exports = router;