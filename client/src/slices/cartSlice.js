import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUSES } from "../utils/status";
import {VITE_API_URL} from "../config"

const cartSlice = createSlice({
  name: "cart",
  initialState:{ 
      cart: [],
      status: 'idle'
  },
  reducers: {
    addItemToCart(state, action) {
        state.cart.push(action.payload)
    },
    removeItemFromCart(state, action) {
      return state.cart.filter((item) => {
        console.log(action.payload)
        item._id === action.payload._id;
      });
    },
    clearCart(state, action){
      return []
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCarts.pending, (state, action) => {
        state.status = STATUSES.LOADING
      })
      .addCase(fetchCarts.fulfilled, (state, action) => {
        state.cart = action.payload;
        state.status = STATUSES.IDLE
      })
      .addCase(fetchCarts.rejected, (state, action) => {
        console.log("rejected")
        state.status = STATUSES.ERROR
      });
  },
});

// thunks

export const fetchCarts = createAsyncThunk("carts/fetch", async () => {
  const res = await fetch(`${VITE_API_URL}/product`);
  const {products} = await res.json();
  return products;
});

export const { addItemToCart, removeItemFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
