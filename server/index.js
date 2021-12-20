// Importing modules
const express = require("express");
const db = require("./connection.js");

// Initialising express app
const app = express();

// Setting the port
const PORT = process.env.PORT || 8001;

// Importing routes
const authRouter = require("./routes/authRoutes.js");
const supplierRouter = require("./routes/supplierRoutes.js");
const buyerRouter = require("./routes/buyerRoutes.js");

// Formatting incoming data
app.use(express.json());

// Routes
app.use("/api/user", authRouter);
app.use("/api/supplier", supplierRouter);
app.use("/api/buyer", buyerRouter);

// Starting the server
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
