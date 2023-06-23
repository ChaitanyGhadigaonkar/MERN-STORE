import expressAsyncHandler from "express-async-handler";
import Cart from "../../models/cart.js";


const updateQuantity = expressAsyncHandler(async(req,res)=>{
    const {_id} = req.user._id;
    
    const {product} = req.body;

    const productName = product.name
    const quantity = product.quantity
    const cart = await Cart.findOne({user:_id})
    if(!cart){
        res.status(400)
        throw new Error("cart does not exists")
    }
    const productsArray = cart.products;
    productsArray.forEach((product)=>{
        if( product.name === productName) {
           product.quantity = quantity
        }
   })

    const result = await Cart.findByIdAndUpdate( cart._id, {products : productsArray})

    res.status(201).json({success:true, msg:"Update the cart successfully"})
})

export default updateQuantity