const express = require("express");

const router = express.Router();

router.get("/contact-us", (req, res) => {
  res.render("contact-us", {
    pageTitle: "Contact Us",
    path: "/contact-us",
  });
});

router.post("/success", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  console.log(name, email);
  res.redirect("/success");
});

router.get("/success", (req, res) => {
  res.send("<h1>Form successfully filled</h1>");
});

module.exports = router;
