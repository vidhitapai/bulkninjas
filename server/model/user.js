// Importing required modules
const mongoose = require("mongoose");
const validate = require("validator");

// Creating the schema
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      validate(value) {
        if (!validate.isEmail(value)) {
          throw new Error("Invalid email");
        }
      },
    },
    phone: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      maxlength: [10, "Invalid phone number"],
      minlength: [10, "Invalid phone number"],
    },

    phoneOTP: {
      type: String,
    },
    emailOTP: {
      type: String,
    }
  },
  { timestamps: true }
);

const User = mongoose.model('User',userSchema);

// Exporting the module
module.exports = User;