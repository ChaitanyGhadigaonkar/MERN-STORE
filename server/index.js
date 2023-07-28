import express from "express";
import {
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRETE,
  CLOUDINARY_CLOUD_NAME,
  PORT,
} from "./config/index.js";
import userRouter from "./routes/userRoutes.js";
import productRouter from "./routes/productRoutes.js";
import connectDB from "./db/conn.js";
import errorHandler from "./middleware/errorHandler.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import cartRouter from "./routes/cartRoutes.js";
import cloudinary from "cloudinary";
import addressRouter from "./routes/addressRoutes.js";
import orderRouter from "./routes/orderRouter.js";
import wishListRouter from "./routes/wishListRoutes.js";
import moreUserRouter from "./routes/moreUserInfo.js";

connectDB();

const app = express();

cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRETE,
});

const corsOptions = {
  origin: true,
  credentials: true, //access-control-allow-credentials:true
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// routes
app.use("/api/auth", userRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/address", addressRouter);
app.use("/api/order", orderRouter);
app.use("/api/wishlist", wishListRouter);
app.use("/api/userInfo", moreUserRouter);

// error handler
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
