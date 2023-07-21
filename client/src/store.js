import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import productReducer from "./slices/productSlice";
import userReducer from "./slices/userSlice";
import wishlistReducer from "./slices/wishlistSlice";
const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
    user: userReducer,
    wishlist: wishlistReducer,
  },
});
export default store;
