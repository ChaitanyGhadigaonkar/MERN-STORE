import mongoose, { mongo } from "mongoose";

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

// order address schema

const orderAddressSchema = mongoose.Schema({
  address: {
    type: String,
    require: [true, "address is required"],
  },
  city: {
    type: String,
    require: [true, "city is required"],
  },
  state: {
    type: String,
    require: [true, "state is required"],
  },
  pinCode: {
    type: Number,
    require: [true, "pinCode is required"],
  },
  country: {
    type: String,
    require: [true, "country is required"],
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
    addressDetails: {
      type: orderAddressSchema,
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
