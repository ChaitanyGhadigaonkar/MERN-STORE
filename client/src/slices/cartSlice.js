import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {toast} from "react-hot-toast"
import { STATUSES } from "../utils/status";
import {VITE_API_URL} from "../config"

const cartSlice = createSlice({
  name: "cart",
  initialState:{ 
      cart: [],
      status: 'idle',
      total:0
  },
  reducers: {
    addItemToCart(state, action) {
        let isExists = false
        state.cart.forEach((product)=>{
          if(product.name === action.payload.name){
              isExists = true
          }
        })
        if(isExists){
          toast.error("Item already in the cart")
          return state
        }else{
          state.cart.push(action.payload)
          state.total+= action.payload.price
          toast.success("Item added successfully")
        }
    },
    removeItemFromCart(state, action) {
      const newArray = state.cart.filter((product) => product.name !== action.payload.name);
        toast.success("Item removed successfully")
        state.total -= action.payload.price
        state.cart = newArray
      },
    clearCart(state, action){
      state.cart = []
      state.total = 0
    },
    setInitialTotal(state, action){
      state.total = action.type
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCarts.pending, (state, action) => {
        state.status = STATUSES.LOADING
      })
      .addCase(fetchCarts.fulfilled, (state, action) => {
        state.cart = action.payload;
        let total = 0;
        state.cart.forEach((product)=>{
            total += product.price 
        })
        state.total = total
        state.status = STATUSES.IDLE
      })
      .addCase(fetchCarts.rejected, (state, action) => {
        state.status = STATUSES.ERROR
      });
  },
});

// thunks

export const fetchCarts = createAsyncThunk("carts/fetch", async (state, action) => {
  const res = await fetch(`${VITE_API_URL}/cart`,{
    headers:{
      "content-type":"application/json",
    },
    credentials:"include"
  });
  const {products} = await res.json();
  if (products === undefined){
      return []
  }
  return products;
});

export const { addItemToCart, removeItemFromCart, clearCart,setInitialTotal } = cartSlice.actions;

export default cartSlice.reducer;
