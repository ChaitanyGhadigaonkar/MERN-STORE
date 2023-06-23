import express from "express";
import protect from "../middleware/authMiddleware.js";
import getAllProductsFromCart from "../controllers/cart/getAllProducts.js";
import addProductToTheCart from "../controllers/cart/addProductToTheCart.js";
import createCart from "../controllers/cart/createCart.js";
import removeProductFromCart from "../controllers/cart/removeProductFromCart.js";
import updateQuantity from "../controllers/cart/updateQuantity.js";


const cartRouter = express.Router();


// get all products present inside cart of particular user 
//all router are protected routes

cartRouter.get("/",protect, getAllProductsFromCart)

cartRouter.post("/",protect, createCart)

cartRouter.post("/add",protect, addProductToTheCart)

cartRouter.delete("/delete", protect, removeProductFromCart)

cartRouter.put("/update", protect, updateQuantity)


export default cartRouter;