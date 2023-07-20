import expressAsyncHandler from "express-async-handler";
import Order from "../../models/order.js";

const getAllOrders = expressAsyncHandler(async (req, res) => {
  const userId = req.user._id;

  const orders = await Order.find({ user: userId });
  res.status(200).json({ success: true, orders });
});

export default getAllOrders;
