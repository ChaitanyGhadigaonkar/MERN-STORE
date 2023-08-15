import expressAsyncHandler from "express-async-handler";
import User from "../../models/user.js";
import Order from "../../models/order.js";

const getAllOrdersAdmin = expressAsyncHandler(async (req, res) => {
  const userId = req.user._id;

  const user = await User.findById(userId);

  if (user.role !== "admin") {
    res.status(400);
    throw new Error("Not Authorized");
  }

  let { page, limit, isPending, oldestFirst } = req.query;
  page = parseInt(page);
  limit = parseInt(limit);

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  let filters = {};
  if (isPending) {
    filters = { status: isPending };
  }
  let orders;
  if (oldestFirst !== "yes") {
    orders = await Order.find(filters)
      .sort({ createdAt: -1 })
      .limit(limit)
      .skip(startIndex)
      .exec();
  } else {
    orders = await Order.find(filters).limit(limit).skip(startIndex).exec();
  }

  res.status(200).json({
    success: true,
    orders,
    prev: startIndex > 0 ? page - 1 : null,
    next:
      endIndex < (await Order.find(filters).countDocuments().exec())
        ? page + 1
        : null,
  });
});
export default getAllOrdersAdmin;
