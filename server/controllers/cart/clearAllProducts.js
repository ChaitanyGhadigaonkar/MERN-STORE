import expressAsyncHandler from "express-async-handler"
import Cart from "../../models/cart.js";

const clearAllProducts = expressAsyncHandler(async(req, res)=>{
    const _id = req.user._id;
    let cart = await Cart.findOne({user : _id})
    if(!cart){
        res.status(400)
        throw new Error("Cart does not exists")
    }
    cart = await Cart.findByIdAndUpdate(cart._id, {products : []},{new:true})

    res.status(201).json({msg:"cart is cleared successfully", cart})
})

export default clearAllProducts;