import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import FetchRequest from "../utils/fetch";
import { STATUSES } from "../utils/status";
import { toast } from "react-hot-toast";

const initialState = {
  wishlist: [],
  status: STATUSES.IDLE,
};

// async tasks
export const fetchWishlistItems = createAsyncThunk(
  "cart/fetch",
  async (state, action) => {
    const { wishlist } = await FetchRequest("wishlist", "GET", null);
    return wishlist;
  }
);

export const addItem = createAsyncThunk("add/wishlist", async (product) => {
  const { wishlist } = await FetchRequest(
    "wishlist",
    "POST",
    JSON.stringify({ product })
  );
  return wishlist;
});

export const removeItem = createAsyncThunk(
  "remove/wishlist",
  async (productId) => {
    const { wishlist } = await FetchRequest(
      `wishlist/${productId}`,
      "DELETE",
      null
    );
    return wishlist;
  }
);

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchWishlistItems.fulfilled, (state, action) => {
        state.wishlist = action.payload;
        state.status = STATUSES.IDLE;
      })
      .addCase(addItem.fulfilled, (state, action) => {
        state.wishlist.push(action.payload);
        state.status = STATUSES.IDLE;
        toast.success("Item added to the wishlist");
      })
      .addCase(removeItem.fulfilled, (state, action) => {
        const newArray = state.wishlist.filter(
          (item) => item._id !== action.payload._id
        );
        state.wishlist = newArray;
        toast.success("Item removed from the wishlist");
        state.status = STATUSES.IDLE;
      });
  },
});

export const {} = wishlistSlice.actions;

export default wishlistSlice.reducer;
