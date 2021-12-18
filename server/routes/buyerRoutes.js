// Importing modules
const express = require("express");
const router = express.Router();
const { createNewBuyer } = require("../controller/authController.js");

// Route to register a new buyer
router.post("/register", createNewBuyer);

// Exporting modules
module.exports = router;