// Importing modules
const express = require("express");
const router = express.Router();
const {
    createNewProductListing,
    upload,
    uploadProductPicture,
    viewProducts,
    viewBuyers
} = require("../controller/supplierController.js");

// Route to create new product listing
router.post("/create/product/:userid", createNewProductListing);

// Route to upload display picture for product
router.post("/upload/product/picture/:userid", upload.single('picture'), uploadProductPicture);

// Route to view all products from a specific supplier
router.get("/view/products/:userid", viewProducts);

// Route to view buyers for a particular product
router.get("/view/product/buyer/:productid", viewBuyers);

// Exporting the router
module.exports = router;