import expressAsyncHandler from "express-async-handler";
import Order from "../../models/order.js";

const addRouter = expressAsyncHandler(async (req, res) => {
  const userId = req.user._id;
  const { products, total } = req.body;
  // product = {slug, name, image, size, price, quantity}

  // default status will be pending

  const order = await Order.create({ user: userId, products: products, total });

  res.status(201).json({ success: true, order });
});

export default addRouter;
