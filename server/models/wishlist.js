import mongoose from "mongoose";

const wishListSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      require: [true, "please provide user"],
    },
    product: {
      type: {},
      require: [true, "product required"],
    },
  },
  { timestamps: true }
);

const WishList = mongoose.model("wishlists", wishListSchema);

export default WishList;
