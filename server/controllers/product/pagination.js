import expressAsyncHandler from "express-async-handler";
import Product from "../../models/product.js";

const pagination = expressAsyncHandler(async(req, res)=>{
    const page = parseInt(req.query.page)
    const limit = parseInt(req.query.limit)
    const category = req.query.category || null;

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const products = category ? await Product.find({category}).limit(limit).skip(startIndex).exec() : await Product.find().limit(limit).skip(startIndex).exec()
    res.status(200).json({products, 
        previous : startIndex > 0 ? {page:page-1}: null,
        next : endIndex < (category ? await Product.find({category}).countDocuments().exec(): await Product.find().countDocuments().exec() ) ? {page : page + 1} : null
    })
})
export default pagination;