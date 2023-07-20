import expressAsyncHandler from "express-async-handler";
import Order from "../../models/order.js";

const addRouter = expressAsyncHandler(async (req, res) => {
  const { products } = req.body;
  let total = 0;
  products.forEach((product) => (total += product.price * product.quantity));

  const userId = req.user._id;
  const order = await Order.create({ user: userId, products: products, total });

  res.status(201).json({ success: true, order });
});

export default addRouter;
