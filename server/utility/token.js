// Import modules
const jwt = require("jsonwebtoken");
const dot = require("dotenv").config();

// Generate JWT Token 
const generateJWT = (payload) => {
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "12h"});
    return token;
};

// Verify JWT Token
const verifyJWT = (token) => {
    try {
        const { userID } = jwt.verify(token, process.env.JWT_SECRET);
        return userID;
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};

// Export modules
module.exports = {
    generateJWT,
    verifyJWT
}