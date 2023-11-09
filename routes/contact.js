const path = require("path");

const express = require("express");

const router = express.Router();

const productsController = require("../controllers/products");

router.get("/contact-us", productsController.getContact);

router.post("/contact-us", productsController.postContact);

router.get("/success", productsController.getSuccess);

module.exports = router;
