import expressAsyncHandler from "express-async-handler";
import Product from "../../models/product.js";
import getDataUri from "../../utils/dataUriParser.js";
import cloudinary from "cloudinary"

const createProduct = expressAsyncHandler(async (req, res) => {
  const { name, slug, category, image, description, quantity, price } = req.body;
  if (!name || !slug || !image || !description || !category || !quantity || !price) {
    res.status(400);
    throw new Error("All fields are required");
  }
  const multerFile = req.file;
  const fileUri = getDataUri(multerFile);

  const cloudinary = await cloudinary.v2.uploader.upload(fileUri.content);

  let product = await Product.findOne({ slug });
  if (product) {
    res.status(400);
    throw new Error("slug must be unique");
  }
  product = await Product.create({
    name,
    slug,
    image:cloudinary.secure_url,
    description,
    category,
    quantity,
    price,
  });
  res.status(201).json({ success: true, product });
});

export default createProduct;
