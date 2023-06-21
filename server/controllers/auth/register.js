import expressAsyncHandler from "express-async-handler"
import User from "../../models/user.js";

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
        const result = await User.create({name, email, password})
        res.status(201).json({success:true, msg:"Registered successfully"})
    }
})

export default register