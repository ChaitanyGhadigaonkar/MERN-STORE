import expressAsyncHandler from "express-async-handler"
import Cart from "../../models/cart.js";

const getAllProductsFromCart =expressAsyncHandler(async(req,res)=>{
    const {_id } = req.user;
    const cart = await Cart.findOne({user:_id})
    if(!cart){
        res.status(400)
        throw new Error("cart does not exist")
    }
    res.status(200).json({success:true,products:cart.products})
})


export default getAllProductsFromCart