import expressAsyncHandler  from  "express-async-handler";
import Cart from "../../models/cart.js";


const addProductToTheCart = expressAsyncHandler(async(req,res)=>{
    const {_id} = req.user._id;
    
    const {product} = req.body;
    const productName = product.name

    const cart = await Cart.findOne({user:_id}) 
    if(!cart){
        res.status(400)
        throw new Error("cart does not exists")
    }
    
    const productsArray = cart.products;
    
    // check if that product already exist
    let isExist= false
    productsArray.forEach((product)=>{
         if( product.name === productName) {
            isExist = true
         }
    })
    if(isExist){
        res.status(400)
        throw new Error("product already exists")
    }
    productsArray.push(product)

    const result = await Cart.findByIdAndUpdate( cart._id, {products : productsArray})

    res.status(200).json({success:true, msg:"Added to the cart successfully",product})
})

export default addProductToTheCart