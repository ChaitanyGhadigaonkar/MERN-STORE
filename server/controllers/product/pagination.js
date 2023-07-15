import expressAsyncHandler from "express-async-handler";
import Product from "../../models/product.js";

const pagination = expressAsyncHandler(async(req, res)=>{
    let { page, limit, category, maxPrice, minPrice } = req.query;
    page = parseInt(req.query.page)
    limit = parseInt(req.query.limit)
    
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const filter = {}
    if(category){
        if(category !== "all"){
            filter.category = category
        }
    }

    if(minPrice){
        filter.price = {$gte : minPrice}
    }
    if(maxPrice){
        filter.price = { ...filter.price, $lte : maxPrice}
    }
    let products = await Product.find(filter) 
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
    products = Object.keys(productsWithSizes).map(product=>{return productsWithSizes[product]}).slice(startIndex,endIndex)
    res.status(200).json({products, 
        previous : startIndex > 0 ? {page:page-1}: null,
        next : endIndex < ( Object.keys(productsWithSizes).length ) ? {page : page + 1} : null
    })
})
export default pagination;