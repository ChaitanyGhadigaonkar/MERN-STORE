import expressAsyncHandler from "express-async-handler";
import Cart from "../../models/cart.js";


const createCart = expressAsyncHandler(async (req,res)=>{
    const _id = req.user._id;
    const alreadyHasCart = await Cart.findOne({user:_id});
    if(alreadyHasCart){
        res.status(400)
        throw new Error("User already has cart")
    }
    
    const newCart = await Cart.create({
        user: _id
    })

    res.status(201).json({success:true,msg:newCart})

})

export default createCart