import expressAsyncHandler from "express-async-handler";
import Product from "../../models/product.js";

const pagination = expressAsyncHandler(async(req, res)=>{
    const page = parseInt(req.query.page)
    const limit = parseInt(req.query.limit)

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const products = await Product.find().limit(limit).skip(startIndex).exec()
    res.status(200).json({products, 
        previous : startIndex > 0 ? {page:page-1}: null,
        next : endIndex < await Product.countDocuments().exec() ? {page : page + 1} : null
    })
})
export default pagination;