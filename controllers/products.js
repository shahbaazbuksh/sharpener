const products = [];

exports.getAddProduct = (req, res, next) => {
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
};

exports.postAddProduct = (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  res.render("shop", {
    prods: products,
    pageTitle: "Shop",
    path: "/",
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true,
  });
};

exports.getError = (req, res, next) => {
  res.status(404).render("404", { pageTitle: "Page Not Found" });
};

exports.getContact = (req, res) => {
  res.render("contact-us", { path: "/contact-us", pageTitle: "Contact Us" });
};

exports.postContact = (req, res) => {
  res.redirect("/admin/success");
};

exports.getSuccess = (req, res) => {
  res.send("Form filled successfully.");
};
