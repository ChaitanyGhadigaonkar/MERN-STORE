import expressAsyncHandler from "express-async-handler"
import User from "../../models/user.js";
import Product from "../../models/product.js";


const deleteProduct = expressAsyncHandler(async(req, res)=>{
    const slug = req.params.slug
    const _id = req.user._id;

    const user = await User.findById({_id});
    if(!user){
        res.status(400)
        throw new Error("user does not exists")
    }
    const role = user.role;
    if(role !== "admin"){
        res.status(400)
        throw new Error("Don't have access for the customers")
    }
    let product = await Product.findOne({slug});
    if(!product){
        res.status(400)
        throw new Error(`No product with the slug ${slug}`)
    }
    // the person is admin 
    product = await Product.findOneAndDelete({slug})
    res.status(200).json({success:true, msg:"product deleted successfully"})
})

export default deleteProduct;