const express = require("express");
const path = require("path");
const rootDir = require("../until/path");
const adminData = require("./admin");

const router = express.Router();

const productsController = require('../controllers/products')

router.get("/", productsController.getProduct);

module.exports = router;