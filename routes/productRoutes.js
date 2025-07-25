const express = require("express");
const { getAllProducts } = require("../controllers/productController");
const { getProductById } = require("../controllers/productController");
const { createProduct } = require("../controllers/productController");
const { updateProduct } = require("../controllers/productController");
const { deleteProduct } = require("../controllers/productController");

const productRoutes = express.Router();

productRoutes.get("/products", getAllProducts);

productRoutes.get("/products/:id", getProductById);

productRoutes.post("/products", createProduct);

productRoutes.put("/products/:id", updateProduct);

productRoutes.delete("/products/:id", deleteProduct);

module.exports = productRoutes;
