import expressAsyncHandler from "express-async-handler"
import Address from "../../models/address.js";
 

const getAllAddress = expressAsyncHandler(async(req,res)=>{
    const userId = req.user._id;

    const addresses = await Address.find({user:userId})

    res.status(200).json({success:true, addresses})
})

export default getAllAddress;