import expressAsyncHandler from "express-async-handler";
import WishList from "../../models/wishlist.js";

const removeItemFromWishList = expressAsyncHandler(async (req, res) => {
  const { wishlistId } = req.params.wishlistId;
  const userId = req.user._id;
  let wishlist = await WishList.findById(wishlistId);

  if (!wishlist) {
    res.status(400);
    throw new Error("wishlist not exists");
  }

  if (!userId.equals(wishlist._id)) {
    res.status(400);
    throw new Error("not authorized");
  }
  wishlist = await WishList.findByIdAndDelete(wishlistId);
  res.status(200).json({ success: true, msg: "Deleted successfully" });
});

export default removeItemFromWishList;
