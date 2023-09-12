import { Router } from "express";
import getAllOrders from "../controllers/order/getAllOrders.js";
import protect from "../middleware/authMiddleware.js";
import addRouter from "../controllers/order/addOrder.js";
import getOrderDetails from "../controllers/order/getOrderDetails.js";
import confirmOrder from "../controllers/order/confirmOrder.js";
import getAllOrdersAdmin from "../controllers/order/getAllOrdersAdmin.js";

const orderRouter = Router();

// get all orders
orderRouter.get("/", protect, getAllOrders);

orderRouter.get("/:orderId", protect, getOrderDetails);

orderRouter.post("/", protect, addRouter);

// admin route

orderRouter.put("/admin/:orderId", protect, confirmOrder);

orderRouter.get("/admin/all", protect, getAllOrdersAdmin);

export default orderRouter;
