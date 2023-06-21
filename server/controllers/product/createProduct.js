import expressAsyncHandler from "express-async-handler";
import Product from "../../models/product.js";

const createProduct = expressAsyncHandler(async (req, res) => {
  const { name, slug, category, imageUrl, description, quantity, price } = req.body;
  if (!name || !slug || !imageUrl || !description || !category || !quantity || !price) {
    res.status(400);
    throw new Error("All fields are required");
  }
  let product = await Product.findOne({ slug });
  if (product) {
    res.status(400);
    throw new Error("slug must be unique");
  }
  product = await Product.create({
    name,
    slug,
    imageUrl,
    description,
    category,
    quantity,
    price,
  });
  res.status(201).json({ success: true, product });
});

export default createProduct;
