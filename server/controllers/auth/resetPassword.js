import expressAsyncHandler from "express-async-handler";
import User from "../../models/user.js";
import jwt from "jsonwebtoken";
import { JWT_SECRETE } from "../../config/index.js";



const resetPassword = expressAsyncHandler(async (req, res)=>{
    const {content} = req.params;

    const { _id } = jwt.verify(content, JWT_SECRETE)

    let user = await User.findById(_id).select("-password")
    if(!user){
        res.status(400)
        throw new Error("Not authorized")
    }

    const {password} = req.body;
    user.password = password
    user = await user.save()
    res.status(200).json({success : true , user})
})

export default resetPassword