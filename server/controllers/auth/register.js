import expressAsyncHandler from "express-async-handler"
import User from "../../models/user.js";
import Cart from "../../models/cart.js";


const register = expressAsyncHandler(async (req,res)=>{
    const {name, email, password} = req.body;
    if(!email || !password || !name){
        res.status(400)
        throw new Error("All fields required")
    }
    const alreadyExist = await User.findOne({email});
    if(alreadyExist){
        res.status(400)
        throw new Error("User already Exists")
    }else{
        const user = await User.create({name, email, password})

        // after success full registration we can create its cart which is empty

        const newCart = await Cart.create({
            user: user._id
        })
        console.log("cart is successfully created")
        res.status(201).json({success:true, msg:"Registered successfully"})
    }
})

export default register