import expressAsyncHandler from "express-async-handler"
import Product from "../../models/product.js";


const getProduct = expressAsyncHandler(async(req, res)=>{
    const slug = req.params.slug;

    const product = await Product.findOne({slug});
    if(!product){
        res.status(400)
        throw new Error("No product matching with give slug")
    }
    res.status(200).json({success:true, product})
})

export default getProduct;