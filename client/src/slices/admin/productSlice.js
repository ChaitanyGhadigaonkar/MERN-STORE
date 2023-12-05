import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import FetchRequest from "../../utils/fetch";
import toast from "react-hot-toast";

const initialState = {
  products: [],
  total: 0,
  next: null,
  prev: null,
};

const adminProductSlice = createSlice({
  name: "adminProducts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAdminProducts.fulfilled, (state, action) => {
        const { products, next, prev, total } = action.payload;
        state.products = products;
        state.next = next;
        state.prev = prev;
        state.total = total;
      })
      .addCase(getAdminProducts.rejected, (state, action) => {
        toast.error(action.payload.msg);
      });
  },
});

export const getAdminProducts = createAsyncThunk(
  "getProducts",
  async (input) => {
    const { page, limit, size, category, sortByPrice, searchTerm } = input;
    const result = await FetchRequest(
      `product/admin/getProducts?limit=${limit}&page=${page}&size=${size}&category=${category}&sortByPrice=${sortByPrice}&searchTerm=${searchTerm}`,
      "GET",
      null
    );
    return result;
  }
);

const {} = adminProductSlice.actions;
export default adminProductSlice.reducer;
