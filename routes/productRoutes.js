const express = require("express");
const { getAllProducts } = require("../controllers/productController");
const { getProductById } = require("../controllers/productController");
const { createProduct } = require("../controllers/productController");
const { updateProduct } = require("../controllers/productController");
const { deleteProduct } = require("../controllers/productController");
const { isAuth, isAdmin } = require("../middlewares/authMiddlewares");

const productRoutes = express.Router();

productRoutes.get("/products", isAuth, getAllProducts);

productRoutes.get("/products/:id", getProductById);

productRoutes.post("/products", isAuth, isAdmin, createProduct);

productRoutes.put("/products/:id", isAuth, isAdmin, updateProduct);

productRoutes.delete("/products/:id", isAuth, isAdmin, deleteProduct);

module.exports = productRoutes;
