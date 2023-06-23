import express from "express";
import register from "../controllers/auth/register.js";
import loginController from "../controllers/auth/login.js";
import logoutController from "../controllers/auth/logout.js";
import profileController from "../controllers/auth/profile.js";
import updateController from "../controllers/auth/update.js";
import protect from "../middleware/authMiddleware.js";


const userRouter = express.Router()


// register a user 
userRouter.post("/register", register)

userRouter.post("/login", loginController)

userRouter.get("/logout", logoutController)

// protected routes
userRouter.put("/update", protect, updateController)

userRouter.get("/profile", protect, profileController)




export default userRouter