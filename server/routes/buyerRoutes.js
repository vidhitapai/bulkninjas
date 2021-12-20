// Importing modules
const express = require("express");
const router = express.Router();
const {
    placeOrder
} = require("../controller/buyerController.js");

// Route for placing an order
router.post("/placeorder", placeOrder);

//Exporting the router
module.exports = router;