import expressAsyncHandler from "express-async-handler";
import { ObjectId } from "mongoose";
import Order from "../../models/order.js";

const getOrderDetails = expressAsyncHandler(async (req, res) => {
  const { orderId } = req.params;
  const userId = req.user._id;
  let order = await Order.findById(orderId);

  if (!order) {
    res.status(400);
    throw new Error("Order does not exists");
  }
  // check wether the order is of that user only

  if (userId.equals(order._id)) {
    res.status(400);
    throw new Error("Not Authorized");
  }

  res.status(200).json({ success: true, order });
});

export default getOrderDetails;
