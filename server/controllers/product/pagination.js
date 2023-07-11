import expressAsyncHandler from "express-async-handler";
import Product from "../../models/product.js";

const pagination = expressAsyncHandler(async(req, res)=>{
    let { page, limit, category, maxPrice, minPrice,   } = req.query;
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
    const products = await Product.find(filter).limit(limit).skip(startIndex).exec() 

    res.status(200).json({products, 
        previous : startIndex > 0 ? {page:page-1}: null,
        next : endIndex < ( await Product.find(filter).countDocuments().exec() ) ? {page : page + 1} : null
    })
})
export default pagination;