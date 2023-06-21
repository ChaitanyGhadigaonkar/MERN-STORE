import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import { STATUSES } from "../utils/status";
import { VITE_API_URL } from "../config";

const productSlice = createSlice({
    name:"products",
    initialState:{
        products: [],
        status:'idle'
    },
    reducers:{

    },
    extraReducers:(builder)=>{
        builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = STATUSES.LOADING
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.status = STATUSES.IDLE
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = STATUSES.ERROR
      });
    }
})


//thunk
export const fetchProducts=createAsyncThunk("fetch/products",async(state, action)=>{
    const res = await fetch(`${VITE_API_URL}/product`);
    const {products} = await res.json();
    return JSON.parse(JSON.stringify(products));
})

export const { } = productSlice.actions;

export default productSlice.reducer;

