import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import FetchRequest from "../utils/fetch";
import { STATUSES } from "../utils/status";
import { toast } from "react-hot-toast";

const initialState = {
  address: [],
  status: STATUSES.IDLE,
};

// async tasks
export const fetchAddress = createAsyncThunk(
  "wishlist/fetch",
  async (state, action) => {
    const { addresses } = await FetchRequest("address", "GET", null);
    return addresses;
  }
);

export const addAddress = createAsyncThunk("add/address", async (input) => {
  const { address } = await FetchRequest(
    "address",
    "POST",
    JSON.stringify(input)
  );
  return address;
});

export const removeAddress = createAsyncThunk(
  "remove/address",
  async (addressId) => {
    const { address } = await FetchRequest(
      `address/${addressId}`,
      "DELETE",
      null
    );
    return address;
  }
);

export const updateAddress = createAsyncThunk(
  "update/address",
  async (input) => {
    const { addressId, formData } = input;
    const { address } = await FetchRequest(
      `address/${addressId}`,
      "PUT",
      JSON.stringify(formData)
    );
    return address;
  }
);

const addressSlice = createSlice({
  name: "address",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchAddress.fulfilled, (state, action) => {
        state.address = action.payload;
        state.status = STATUSES.IDLE;
      })
      .addCase(addAddress.fulfilled, (state, action) => {
        state.address.push(action.payload);
        state.status = STATUSES.IDLE;
        toast.success("Address added successfully");
      })
      .addCase(updateAddress.fulfilled, (state, action) => {
        state.address = state.address.map((address) =>
          address._id === action.payload._id ? action.payload : address
        );
        toast.success("Address update successfully");
      })
      .addCase(removeAddress.fulfilled, (state, action) => {
        const newArray = state.address.filter(
          (item) => item._id !== action.payload._id
        );
        state.address = newArray;
        state.status = STATUSES.IDLE;
        toast.success("Item removed from the wishlist");
      });
  },
});

export const {} = addressSlice.actions;

export default addressSlice.reducer;
