import express from "express";
import getProduct from "../controllers/product/getProduct.js";
import getProducts from "../controllers/product/getProducts.js";
import createProduct from "../controllers/product/createProduct.js";
import updateProduct from "../controllers/product/updateProduct.js";
import deleteProduct from "../controllers/product/deleteProduct.js";
import searchProduct from "../controllers/product/searchProduct.js";
import protect from "../middleware/authMiddleware.js";
import pagination from "../controllers/product/pagination.js";
import singleUpload from "../middleware/multer.js";

const productRouter = express.Router();

productRouter.get("/", getProducts);

productRouter.get("/products", pagination); //change it to pagination

productRouter.get("/:slug", getProduct);

productRouter.get("/search/:name", searchProduct);

// protected routes
productRouter.post("/", singleUpload, createProduct);
productRouter
  .put("/:slug", protect, updateProduct)
  .delete("/:slug", protect, deleteProduct);

export default productRouter;
