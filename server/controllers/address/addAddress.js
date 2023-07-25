import expressAsyncHandler from "express-async-handler";
import Address from "../../models/address.js";

const addAddress = expressAsyncHandler(async (req, res) => {
  const userId = req.user._id;
  const { address, country, state, city, pinCode } = req.body;
  if (!address && !country && !state && !city && !pinCode) {
    res.status(400);
    throw new Error("All fields required");
  }
  const newAddress = await Address.create({
    user: userId,
    address,
    state,
    country,
    city,
    pinCode,
  });
  res.status(201).json({ success: true, address: newAddress });
});

export default addAddress;
