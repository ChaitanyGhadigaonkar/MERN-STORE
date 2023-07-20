import expressAsyncHandler from "express-async-handler";
import WishList from "../../models/wishlist.js";

const getWishListItems = expressAsyncHandler(async (req, res) => {
  const userId = req.user._id;

  const wishList = await WishList.find({ user: userId });
  res.status(200).json({ success: true, wishlist: wishList });
});

export default getWishListItems;
