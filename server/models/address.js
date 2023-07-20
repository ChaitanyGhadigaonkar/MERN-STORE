import mongoose from "mongoose";

const addressSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      require: [true, "user is required"],
    },
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
  },
  { timestamps: true }
);

const Address = mongoose.model("Address", addressSchema);

export default Address;
