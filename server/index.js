// Importing modules
const express = require("express");
const db = require("./connection.js");

// Initialising express app
const app = express();

// Setting the port
const PORT = process.env.PORT || 8001;

// Importing routes
const buyerRouter = require("./routes/buyerRoutes");
const supplierRouter = require("./routes/supplierRoutes");

// Formatting incoming data
app.use(express.json());

// Routes
app.use("/buyer", buyerRouter);
app.use("/supplier", supplierRouter);

// Starting the server
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
