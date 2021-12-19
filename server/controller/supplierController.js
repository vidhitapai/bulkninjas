// Importing modules
const product = require("../model/product.js");

const uploadProduct = async (res, req) => {
    const newProduct = req.body;
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