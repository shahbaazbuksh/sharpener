const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/add-product", (req, res, next) => {
  res.send(
    "<form action='/add-product' method='POST'><input type='text' name='product'><input type='text' name='size'><button type='submit'>Submit</button></form>"
  );
});

app.post("/add-product", (req, res, next) => {
  console.log(req.body.product);
  console.log(req.body.size);
  res.redirect("/");
});

app.use((req, res, next) => {
  res.send("<h1>Hello from Express!</h1>");
});

app.listen(3000);
