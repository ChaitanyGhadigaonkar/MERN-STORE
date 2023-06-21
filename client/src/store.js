import {configureStore} from "@reduxjs/toolkit"
import cartReducer from "./slices/cartSlice"
import productReducer from "./slices/productSlice";
const store = configureStore({
    reducer:{
        cart : cartReducer,
        product : productReducer,
    },

})
export default store;