import expressAsyncHandler from "express-async-handler";
import Address from "../../models/address.js";

const updateAddress = expressAsyncHandler(async (req, res) => {
  const userId = req.user._id;
  const addressId = req.params.addressId;

  const { address, country, state, city, pinCode } = req.body;
  if (!address && !country && !state && !city && !pinCode) {
    res.status(400);
    throw new Error("All fields required");
  }
  const oldAddress = await Address.findById(addressId);
  if (!oldAddress) {
    res.status(400);
    throw new Error("No such address is present");
  }
  if (!oldAddress.user.equals(userId)) {
    res.status(400);
    throw new Error("User not belongs to this address");
  }

  const update = await Address.findByIdAndUpdate(
    addressId,
    { address, country, state, city, pinCode },
    { new: true }
  );
  res.status(200).json({ success: true, address: update });
});

export default updateAddress;
