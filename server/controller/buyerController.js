// Importing modules
const Order = require("../model/order.js");
const Product = require ("../model/product.js");

// <-------------------- Placing New Order -------------------->
const placeOrder = async (req, res) => {
    try {
        // Saving the order placed by buyer in database
        const newOrder = new Order({ orderItems: req.body });
        await newOrder.save();
        console.log(newOrder);

        // Storing and counting number of products ordered
        const orderItems = req.body;
        console.log(orderItems);
        const count = orderItems.length;
        console.log("Count: " + count);

        let subtotal = 0;
        let id = 0;
        let product = 0;
        let price = 0;

        // Finding the subtotal price for all products
        for(let i = 0; i < count; i++) {
            id = orderItems[i].productID;
            product = await Product.findById(id);
            price = product.discountedPrice;
            console.log(price);
            subtotal += orderItems[i].quantity * price;
            console.log("st " + subtotal);
        }

        // Calculating discount applicable
        let discount = 0;
        if(count > 1 && count < 4) {
            discount = (3/100)*subtotal;
            console.log("disc: " + discount);
        } else if(count > 3) {
            discount = (5/100)*subtotal;
        }

        // Calculating final price after discount
        let total = subtotal - discount;
        console.log(total);

        // Storing final price and order status in database
        newOrder.totalPrice = total;
        newOrder.status = "PLACED";
        await newOrder.save();

        // Successful display message
        res.status(201).json({
            message: "Order Placed",
            data: {
                newOrder,
                subtotal,
                discount,
                total
            }
        });
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
}

// <-------------------- Searching for products -------------------->
const searchResults = async (req, res) => {
    try {
        const { query } = req.body;
        // let results = [];

        // Declaring arrays to store filtered products
        let nameMatches = [];
        let categoryMatches = [];

        // Finding the products in the database according to the filter 
        nameMatches = await Product.find({ name: query });
        categoryMatches = await Product.find({ category: query });

        // Combining arrays and displaying results
        const results = nameMatches.concat(categoryMatches);
        if (results.length === 0) {
          res.status(400).json({
            message: "No results found",
          });
        } else {
          res.status(200).json({
            message: results.length + " results found",
            data: results,
          });
        }
    } catch (error) {
        res.status(400).json({
        message: error.message,
        });
    }
}

// Exporting modules
module.exports = {
    placeOrder,
    searchResults
};