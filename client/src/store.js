import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import productReducer from "./slices/productSlice";
import userReducer from "./slices/userSlice";
import wishlistReducer from "./slices/wishlistSlice";
import addressReducer from "./slices/addressSlice";
import orderReducer from "./slices/admin/orderSlice";
import adminProductReducer from "./slices/admin/productSlice";
const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
    user: userReducer,
    wishlist: wishlistReducer,
    address: addressReducer,
    adminOrders: orderReducer,
    adminProducts: adminProductReducer,
  },
});
export default store;
