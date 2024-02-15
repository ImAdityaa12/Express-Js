const express = require("express");
const app = express();
app.use((req, res, next) => {
  console.log("Middleware runs First");
  next();
});
app.get("/", function (req, res) {
  res.send("Home Page");
});
app.get("/products", function (req, res) {
  res.send("Products");
});

app.listen(3000);
