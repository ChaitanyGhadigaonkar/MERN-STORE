import expressAsyncHandler from "express-async-handler";
import User from "../../models/user.js";
import Order from "../../models/order.js";
import Product from "../../models/product.js";

const confirmOrder = expressAsyncHandler(async (req, res) => {
  const userId = req.user._id;
  const user = await User.findById(userId);
  if (user.role !== "admin") {
    res.status(400);
    throw new Error("Not authorized");
  }

  const { orderId } = req.params;

  const order = await Order.findById(orderId);
  if (!order) {
    res.status(400);
    throw new Error("No order found");
  }

  // decreasing the quantity of the product

  order.products.forEach(async (product) => {
    const orderProductQuantity = product.quantity;
    let mainProduct = await Product.findOne({ slug: product.slug });
    let prod = await Product.findOneAndUpdate(
      { slug: product.slug },
      { quantity: mainProduct.quantity - orderProductQuantity }
    );
  });

  const updatedOrder = await Order.findByIdAndUpdate(
    orderId,
    { status: "success" },
    { new: true }
  );

  res.status(200).json({ success: true, order: updatedOrder });
});

export default confirmOrder;
