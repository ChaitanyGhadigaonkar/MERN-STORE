import expressAsyncHandler from "express-async-handler";
import Address from "../../models/address.js";


const deleteAddress = expressAsyncHandler(async(req, res)=>{
    const userId = req.user._id
    const addressId = req.params.addressId

    const oldAddress = await Address.findById(addressId)
    if(!oldAddress){
        res.status(400)
        throw new Error("No such address is present")
    }
    if(!oldAddress.user.equals(userId)){
        res.status(400)
        throw new Error("User not belongs to this address")
    }
    
    const deleteAddress = await Address.findByIdAndDelete(addressId)
    res.status(200).json({msg : "Deleted successfully"})

})

export default deleteAddress