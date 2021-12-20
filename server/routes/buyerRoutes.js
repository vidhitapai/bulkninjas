// Importing modules
const express = require("express");
const router = express.Router();
const {
    placeOrder,
    searchResults
} = require("../controller/buyerController.js");

// Route for searching for a product
router.post("/search", searchResults);

// Route for placing an order
router.post("/placeorder", placeOrder);

//Exporting the router
module.exports = router;