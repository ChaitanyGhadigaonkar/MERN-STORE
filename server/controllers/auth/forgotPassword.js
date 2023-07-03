import expressAsyncHandler from "express-async-handler"
import User from "../../models/user.js"
import { JWT_SECRETE,BACKEND_URL } from "../../config/index.js";
import jwt from "jsonwebtoken"

const forgotPassword = expressAsyncHandler(async (req,res)=>{
    const { email } = req.body;

    // check if email is exist

    const user = await User.findOne({email}).select("-password");

    if(!user){
        res.status(400)
        throw new Error("Email does not exists")
    }

    const payload = { _id : user._id};

// creating a unique link for reset password
     const content = jwt.sign(payload, JWT_SECRETE, {expiresIn: "15m"})
    const uniqueLink = `${BACKEND_URL}/api/auth/reset-password/${content}`
    res.status(200).json({link:uniqueLink});

})

export default forgotPassword;