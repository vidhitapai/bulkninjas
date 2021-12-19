// Importing required models
const mongoose = require("mongoose");
const User = require("./user.js");

// Creating the schema
const orderSchema = new mongoose.Schema(
    {
        totalPrice: {
            type: Number,
            trim: true,
            required: true,
        },

        status: {
            type: String,
            trim: true,
            required: true,
            enum: ["PLACED", "FULFILLED"],
            default: "PLACED"
        },

        orderItems: [{
            quantity: {
                type: Number,
                required: true,
                trim: true
            },

            productID: {
                type: [mongoose.Schema.Types.ObjectId],
                ref: 'User'
            }
        }]
    }, 

    { timestamps: true }
);

const Order = mongoose.model('Order', orderSchema);

// Exporting the module
module.exports = Order;