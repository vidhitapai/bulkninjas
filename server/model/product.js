// Importing required modules
const mongoose = require("mongoose");
const User = require("./user.js");

// Creating the schema 
const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true,
            maxlength: [50, "Character limit exceeded"]
        },

        mrp: {
            type: Number,
            trim: true,
            required: true,
            maxlength: [10, "Character limit exceeded"]
        },

        discountedPrice: {
            type: Number,
            trim: true,
            required: true,
            maxlength: [10, "Character limit exceeded"]
        },

        picture: {
            type: Buffer
        },

        totalQuantity: {
            type: Number,
            trim: true,
            required: true,
            maxlength: [10, "Character limit exceeded"],
            min: 50
        },
        
        ordersPlaced: {
            type: Number,
            trim: true
        },

        category: {
            type: String,
            trim: true,
            required: true,
            maxlength: [20, "Character limit exceeded"]
        },

        userID: {
            type: [mongoose.Schema.Types.ObjectId],
            ref: 'User'
        },

        orderID: {
            type: [mongoose.Schema.Types.ObjectId],
            ref: 'Order'
        }
})

const Product = mongoose.model('Product', productSchema);

// Exporting the module
module.exports = Product;