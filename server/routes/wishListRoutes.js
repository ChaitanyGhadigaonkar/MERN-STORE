import { Router } from "express";
import protect from "../middleware/authMiddleware.js";
import getWishListItems from "../controllers/wishlist/getAllItems.js";
import addItem from "../controllers/wishlist/addItem.js";
import removeItemFromWishList from "../controllers/wishlist/remove.js";

const wishListRouter = Router();

wishListRouter.get("/", protect, getWishListItems);

wishListRouter.post("/", protect, addItem);

wishListRouter.delete("/:wishlistId", protect, removeItemFromWishList);



export default wishListRouter;
