import expressAsyncHandler from "express-async-handler"
import Product from "../../models/product.js";


const searchProduct = expressAsyncHandler(async(req, res)=>{
    const name = req.params.name;
    const regex = new RegExp(name,"i");
    const products = await Product.find({name:regex}) 
    if(products.length === 0){
        res.status(400)
        throw new Error(`No products with name ${name}`);
    }
    res.status(200).json({success:true, products})
})

export default searchProduct;