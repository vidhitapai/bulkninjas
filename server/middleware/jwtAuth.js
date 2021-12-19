// Importing modules
const User = require("../model/user.js");
const { verifyJWT } = require("../utility/token.js");

const JWTauth = async (req, res, next) => {
    try {
        // Looking for auth header from client
        const header = req.headers.authorization;
        
        // Checking if authorization header present
        if(!header) {
            res.status(400).json({
                message: "Authorization header missing"
            });
            return;
        }

        // Extracting the token from the header
        const token = header.split("Bearer ")[1];

        // Checking if token present
        if (!token) {
            res.status(400).json({
                message: "Token missing"
            });
            return;
        }

        // Verifying if token is valid
        const userID = verifyJWT(token);

        // Checking if user is authenticated
        if (!userID) {
            res.status(401).json({
                message: "User not authenticated"
            });
            return;
        }

        // Finding the user
        const user = await User.findById(userID);

        // Checking if corresponding user exists
        if (!user) {
            res.status(400).json({
                message: "User does not exist"
            });
            return;
        }

        // Authorization display message
        res.status(200).json({
            message: "User Authorized",
            data: {
                token,
                user
            }
        });

        next();
    } catch (error) {
        res.status(400).json({
            message: error.message
        });

        next();
    }
}

// Exporting module
module.exports = JWTauth;