const express = require("express");
const cors = require("cors");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(3001, () => {
  console.log("Server running");
});
