import expressAsyncHandler from "express-async-handler";
import Cart from "../../models/cart.js";


const removeProductFromCart = expressAsyncHandler(async(req,res)=>{
    const {_id} = req.user._id;
    
    const {product} = req.body;

    const productName = product.name
    const cart = await Cart.findOne({user:_id})
    if(!cart){
        res.status(400)
        throw new Error("cart does not exists")
    }
    const productsArray = cart.products;
    
    const newArray = productsArray.filter((product)=>{
         return product.name !== productName
    })

    const result = await Cart.findByIdAndUpdate( cart._id, {products : newArray})

    res.status(201).json({success:true, msg:"Remove from the cart successfully"})
})

export default removeProductFromCart