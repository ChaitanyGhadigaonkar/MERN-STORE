import expressAsyncHandler from "express-async-handler";
import Product from "../../models/product.js";
import getDataUri from "../../utils/dataUriParser.js";
import cloudinary from "cloudinary"

const createProduct = expressAsyncHandler(async (req, res) => {
  const { name, slug, category, description, quantity, price } = req.body;
  if (!name || !slug || !description || !category || !quantity || !price) {
    res.status(400);
    throw new Error("All fields are required");
  }
  
  let product = await Product.findOne({ slug });
  if (product) {
    res.status(400);
    throw new Error("slug must be unique");
  }
  const multerFile = req.files;
  console.log(multerFile)
  // const fileUri = getDataUri(multerFile);
  // const cloud = await cloudinary.v2.uploader.upload(fileUri.content)
  // product = await Product.create({
  //   name,
  //   slug,
  //   imageUrl:cloud.secure_url,
  //   description,
  //   category,
  //   quantity,
  //   price,
  // });
  res.status(201).json({ success: true});
});

export default createProduct;
