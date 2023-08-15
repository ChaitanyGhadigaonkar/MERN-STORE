import mongoose from "mongoose";

// changing the order schema

const orderProductSchema = new mongoose.Schema({
  slug: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  imageUrl: {
    type: String,
    require: true,
  },
  size: {
    type: String,
    require: true,
    enum: ["S", "M", "L", "XL", "XXL"],
  },
  price: {
    type: Number,
    require: true,
  },
  quantity: {
    type: Number,
    require: true,
  },
});

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      require: [true, "Please provide user"],
    },
    products: {
      type: [orderProductSchema],
      require: true,
    },
    total: {
      type: Number,
      require: [true, "Total is required"],
    },
    status: {
      type: String,
      enum: ["pending", "success"],
      default: "pending",
    },
  },
  { timestamps: true }
);
const Order = mongoose.model("orders", orderSchema);
export default Order;
