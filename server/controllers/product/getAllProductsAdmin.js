import expressAsyncHandler from "express-async-handler";
import User from "../../models/user.js";
import Product from "../../models/product.js";

const getAllProductsAdmin = expressAsyncHandler(async (req, res) => {
  const userId = req.user._id;
  const user = await User.findById(userId);

  if (user.role !== "admin") {
    res.status(400);
    throw new Error("Not authorized");
  }

  let { page, limit, category, size, sortByPrice, searchTerm } = req.query;

  page = parseInt(page);
  limit = parseInt(limit);

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  let filter = {};

  if (category !== "all") {
    filter.category = { $in: category };
  }
  if (size !== "all") {
    filter.size = size;
  }
  if (searchTerm !== "") {
    const regex = new RegExp(searchTerm, "i");
    filter.name = regex;
  }
  let products;
  if (sortByPrice !== "default") {
    products = await Product.find(filter)
      .sort({ price: sortByPrice })
      .limit(limit)
      .skip(startIndex)
      .exec();
  } else {
    products = await Product.find(filter).limit(limit).skip(startIndex).exec();
  }

  const totalDocuments = await Product.find(filter).countDocuments().exec();
  const prev = startIndex > 0 ? page - 1 : null;
  const next = totalDocuments > endIndex ? page + 1 : null;
  res.status(200).json({
    success: true,
    products,
    total: Math.ceil(totalDocuments / limit),
    prev,
    next,
  });
});
export default getAllProductsAdmin;
