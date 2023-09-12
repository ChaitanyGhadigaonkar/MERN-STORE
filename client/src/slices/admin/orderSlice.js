import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import FetchRequest from "../../utils/fetch";

const initialState = {
  orders: [],
  prev: null,
  next: null,
  total: 0,
};

const orderSlice = createSlice({
  name: "orders",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllOrders.fulfilled, (state, action) => {
      state.orders = action.payload.orders;
      state.next = action.payload.next;
      state.prev = action.payload.prev;
      state.total = action.payload.total;
    });
    builder.addCase(getAllOrders.rejected, (state, action) => {
      state.orders = [];
    });
  },
});

export const getAllOrders = createAsyncThunk(
  "fetch/getAllOrders",
  async (input) => {
    const { isPending, limit, page, oldestFirst } = input;
    const { orders, prev, next, total } = await FetchRequest(
      `order/admin/all?isPending=${isPending}&limit=${limit}&page=${page}&oldestFirst=${oldestFirst}`,
      "GET",
      null
    );
    console.log(orders, total, prev, next);
    return { orders, prev, next, total };
  }
);

export const {} = orderSlice.actions;
export default orderSlice.reducer;
