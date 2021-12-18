// Importing modules
const express = require("express");
const db = require("./connection.js");

// Initialising express app
const app = express();

// Setting the port
const PORT = process.env.PORT || 8001;

// Importing routes
const buyerRouter = require("./routes/buyerRoutes");

// Formatting incoming data
app.use(express.json());

// Routes
app.use("/buyer", buyerRouter);

// Starting the server
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
