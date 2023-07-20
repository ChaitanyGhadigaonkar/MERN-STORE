import expressAsyncHandler from "express-async-handler";
import WishList from "../../models/wishlist.js";

const addItem = expressAsyncHandler(async (req, res) => {
  const userId = req.user._id;

  const { product } = req.body;

  const wishlist = await WishList.create({ user: userId, product });
  res.status(201).json({ success: true, wishlist });
});

export default addItem;
