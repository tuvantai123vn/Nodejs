const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    res.render('add-product', 
    {pageTitle: "Add product", 
    path: '/admin/add-product', 
    formCSS: true, 
    productsCSS: true});
};

exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect("/");
};

exports.getProduct =  (req, res, next) => {
    const products = Product.fetchAll((products) => {
    res.render('shop', {
        prods: products, 
        pageTitle: 'shop', 
        path:'/', 
        hasProducts: products.length > 0, 
        activeShop: true, 
        productCSS: true
    });
    });
};