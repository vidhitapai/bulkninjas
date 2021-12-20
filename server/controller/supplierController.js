// Importing modules
const multer = require('multer');
const sharp = require('sharp');
const Product = require("../model/product.js");

// <-------------------- Create New Product Listing -------------------->
const createNewProductListing = async (req, res) => {
    const newProduct = new Product(req.body);
    try {
        // Saving supplier's id in each product in database
        newProduct.userID = req.params.userid;
        await newProduct.save();

        // Display success message
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


// Configuring multer for file upload
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
        // Finding product to upload picture for
        const product = await Product.findById(req.params.productid);
        
        // Formatting the uploaded file
        const buffer = await sharp(req.file.buffer).resize({ width: 250, height: 250 }).png().toBuffer();
        
        // Saving the file in database
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


// <-------------------- View Products by Supplier -------------------->
const viewProducts = async (req, res) => {
    try {
        // Finding the user whose products are to be displayed
        const userid = req.params.userid
        const sellerProducts = await Product.find({userID: userid});

        // Checking if products exist for user
        if (sellerProducts.length === 0) {
            res.status(404).json({
                message: "No products found"
            });
            return;
        }
        
        // Sending and displaying the products found
        res.status(200).json({
            message: "Products found",
            data: sellerProducts
        });
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};


// <-------------------- View Buyers buying particular Product -------------------->
// ******To be checked after creating buyerRoutes******
const viewBuyers = async (req, res) => {
    try{
        const productid = req.params.productid
        const users = await Product.find({_id: productid});
        res.send(users);
    } catch (error) {
        res.status(400).json({
            message: error.message
        });  
    }
};

// Exporting modules
module.exports = {
    createNewProductListing,
    upload,
    uploadProductPicture,
    viewProducts,
    viewBuyers
}