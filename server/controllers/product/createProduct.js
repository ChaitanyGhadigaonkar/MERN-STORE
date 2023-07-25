import expressAsyncHandler from "express-async-handler";
import Product from "../../models/product.js";
import getDataUri from "../../utils/dataUriParser.js";
import cloudinary from "cloudinary";

const createProduct = expressAsyncHandler(async (req, res) => {
  const { name, slug, category, description, size, quantity, price } = req.body;
  if (
    !name ||
    !size ||
    !slug ||
    !description ||
    !category ||
    !quantity ||
    !price
  ) {
    res.status(400);
    throw new Error("All fields are required");
  }
  let imageUrl = [];
  let product = await Product.findOne({ slug });
  if (product) {
    res.status(400);
    throw new Error("slug must be unique");
  }
  const files = req.files;
  let fileDataUris = [];

  for (let i = 0; i < files.length; i++) {
    fileDataUris.push(getDataUri(files[i]));
  }

  for (let i = 0; i < fileDataUris.length; i++) {
    const cloud = await cloudinary.v2.uploader.upload(fileDataUris[i].content);
    imageUrl.push(cloud.url);
  }

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
  res.status(201).json({ success: true, product });
});

export default createProduct;
