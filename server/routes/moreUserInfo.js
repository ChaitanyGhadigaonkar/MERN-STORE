import { Router } from "express";
import getUserInfo from "../controllers/moreUserInfo/getUserInfo.js";
import protect from "../middleware/authMiddleware.js";
import addMoreUserInfo from "../controllers/moreUserInfo/addMoreUserInfo.js";

const moreUserRouter = Router();

moreUserRouter.get("/", protect, getUserInfo);

moreUserRouter.post("/", protect, addMoreUserInfo);

export default moreUserRouter;
