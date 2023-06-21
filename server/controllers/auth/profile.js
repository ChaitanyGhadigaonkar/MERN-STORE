import expressAsyncHandler from "express-async-handler"
import { User } from "../../models/index.js"


const profile = expressAsyncHandler(async (req,res)=>{
    const {_id} = req.user;
    let user = await User.findById(_id).select("-password");
    if(user){
        res.status(200).json({success: true, user})
    }else{
        res.status(400)
        throw new Error("User does not exists")
    }
})

export default profile