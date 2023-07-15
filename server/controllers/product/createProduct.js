import expressAsyncHandler from "express-async-handler";
import Product from "../../models/product.js";
import getDataUri from "../../utils/dataUriParser.js";
import cloudinary from "cloudinary"

const createProduct = expressAsyncHandler(async (req, res) => {
  const { name, slug, imageUrl, category, description, size, quantity, price } = req.body;
  if (!name || !size || !slug || !description || !category || !quantity || !price) {
    res.status(400);
    throw new Error("All fields are required");
  }
  
  let product = await Product.findOne({ slug });
  if (product) {
    res.status(400);
    throw new Error("slug must be unique");
  }
  // const fileUri = getDataUri(multerFile);
  // const cloud = await cloudinary.v2.uploader.upload(fileUri.content)
  product = await Product.create({
    name,
    slug,
    imageUrl,
    description,
    category,
    size,
    quantity,
    price,
  });
  res.status(201).json({ success: true});
});

export default createProduct;
