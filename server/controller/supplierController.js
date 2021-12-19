// Importing modules
const multer = require('multer');
const sharp = require('sharp');
const Product = require("../model/product.js");

// <-------------------- Create New Product Listing -------------------->
const createNewProductListing = async (res, req) => {
    const newProduct = new Product(req.body);
    try {
        await newProduct.save();

        res.status(201).json({
            message: "Product listing created",
            data: newProduct
        });
    } catch(error) {
        res.status(400).json({
            message: error.message
        });
    }
};


//
const upload =  multer({
    limits: {
      fileSize: 1500000
    },
    fileFilter(req, file, callback) {
        if(!file.originalname.match(/\.jpg|jpeg|png/)) {
            return callback(new Error('Please upload the correct file format!'));
        }
        callback(undefined, true);
    }
});


// <-------------------- Uploading Product Picture -------------------->
const uploadProductPicture = async (req, res) => {
    try {
        const product = await Product.findById(req._id);
        const buffer = await sharp(req.file.buffer).resize({ width: 250, height: 250 }).png().toBuffer();
        product.picture = buffer;
        await product.save();
        res.status(201).json({
            message: "Picture Successfully Uploaded"
        });
    }
    catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};

// Exporting modules
module.exports = {
    createNewProductListing,
    upload,
    uploadProductPicture
}