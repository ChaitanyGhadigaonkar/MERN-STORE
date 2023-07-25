import expressAsyncHandler from "express-async-handler";
import WishList from "../../models/wishlist.js";
import Product from "../../models/product.js";

const addItem = expressAsyncHandler(async (req, res) => {
  const userId = req.user._id;

  let { product } = req.body;

  const allWishlists = await WishList.find();
  allWishlists.forEach((wishlist) => {
    if (wishlist.product.name === product.name) {
      res.status(400);
      throw new Error("product already exists in the wishlist");
    }
  });
  let products = await Product.find();
  let productsWithSizes = {};
  products.forEach((product) => {
    if (product.name in productsWithSizes) {
      if (product.quantity > 0) {
        productsWithSizes[product.name].size.push(product.size);
      }
    } else {
      productsWithSizes[product.name] = JSON.parse(JSON.stringify(product));
      if (product.quantity > 0) {
        productsWithSizes[product.name].size = [product.size];
      }
    }
  });

  Object.keys(productsWithSizes).forEach(async (item) => {
    if (item === product.name) {
      const wishlist = await WishList.create({
        user: userId,
        product: productsWithSizes[item],
      });
      res.status(201).json({ success: true, wishlist });
      return;
    }
  });
});

export default addItem;
