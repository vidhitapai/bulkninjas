// Importing modules
const express = require("express");
const router = express.Router();
const {
    createNewProductListing,
    upload,
    uploadProductPicture,
    viewProducts
} = require("../controller/supplierController.js");

// Route to create new product listing
router.post("/create/product/:userid", createNewProductListing);

// Route to upload display picture for product
router.post("/upload/picture/:userid", upload.single('picture'), uploadProductPicture);

// Route to view all products from a specific supplier
router.get("/view/product/:id", viewProducts);

// Exporting the router
module.exports = router;