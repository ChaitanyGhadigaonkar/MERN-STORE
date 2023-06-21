import expressAsyncHandler from "express-async-handler"
import Product from "../../models/product.js";


const getProducts = expressAsyncHandler(async(req, res)=>{
    const products = await Product.find();
    res.status(200).json({success:true, products})
})

export default getProducts;