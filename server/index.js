const express = require("express");

const PORT = process.env.PORT || 8001;

const app = express();


app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

// Starting the server
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
