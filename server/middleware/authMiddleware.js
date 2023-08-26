import jwt from "jsonwebtoken";
import User from "../models/user.js";
import expressAsyncHandler from "express-async-handler";

const protect = expressAsyncHandler(async (req, res, next) => {
  let token;
  // token = req.cookies.jwt;  // not working on the render & vercel due to public domain
  token = req.header("authToken");

  if (token) {
    const { id } = jwt.verify(token, process.env.JWT_SECRETE);
    req.user = await User.findById(id).select("-password");
    next();
  } else {
    res.status(400);
    throw new Error("Not authorized");
  }
});

export default protect;
