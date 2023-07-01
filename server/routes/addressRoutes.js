import { Router } from "express";
import protect from "../middleware/authMiddleware.js";
import getAllAddress from "../controllers/address/getAllAddress.js";
import addAddress from "../controllers/address/addAddress.js";
import updateAddress from "../controllers/address/updateAddress.js";
import deleteAddress from "../controllers/address/deleteAddress.js";

const addressRouter = Router()

addressRouter.get("/", protect, getAllAddress)
addressRouter.post("/", protect, addAddress)
addressRouter.put("/:addressId", protect, updateAddress).delete("/:addressId", protect, deleteAddress)

export default addressRouter;