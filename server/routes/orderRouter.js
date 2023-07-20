import { Router } from "express";
import getAllOrders from "../controllers/order/getAllOrders.js";
import protect from "../middleware/authMiddleware.js";
import addRouter from "../controllers/order/addOrder.js";
import getOrderDetails from "../controllers/order/getOrderDetails.js";

const orderRouter = Router();

// get all orders
orderRouter.get("/", protect, getAllOrders);

orderRouter.get("/:orderId", protect, getOrderDetails);

orderRouter.post("/", protect, addRouter);

export default orderRouter;
