// Importing the modules
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const connectionParameters = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

// Connecting to the database
const uri = process.env.MONGODB_URI;
const connection = mongoose.connect(uri, connectionParameters)
    .then(() => {
        console.log("Connected to database");
    })
    .catch((error) => {
        console.log(error);
    });

// exporting the module
module.exports = connection;