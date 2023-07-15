import expressAsyncHandler from "express-async-handler"
import Product from "../../models/product.js";


const getProducts = expressAsyncHandler(async(req, res)=>{
    const products = await Product.find();
    let productsWithSizes = {}
    products.forEach(product =>{
        if(product.name in productsWithSizes){
            if(product.quantity > 0){
            productsWithSizes[product.name].size.push(product.size)
            }
        }else{
            productsWithSizes[product.name] = JSON.parse(JSON.stringify(product))
            if(product.quantity > 0){
                productsWithSizes[product.name].size = [product.size]
            }
        }
    })

    res.status(200).json({success:true, products : productsWithSizes})
})

export default getProducts;