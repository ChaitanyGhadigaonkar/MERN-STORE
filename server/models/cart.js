import mongoose, { Schema, model } from "mongoose";

const cartSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      require: [true, "Please provide user"],
    },
    products: [],
  },
  { timestamps: true }
);
/*
    product will be like this 
    product = {
        name:"",
        price:"",
        imageUrl:"",
        quantity:""
    } 

*/

const Cart = model("Cart", cartSchema, "carts");
export default Cart;
