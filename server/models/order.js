import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      require: [true, "Please provide user"],
    },
    products: {
      type: [],
      require: [true, "There must be one product for ordering"],
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
