import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
import { STATUSES } from "../utils/status";
import { VITE_API_URL } from "../config";
import FetchRequest from "../utils/fetch";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    status: "idle",
    total: 0,
  },
  reducers: {
    setInitialTotal(state, action) {
      state.total = action.type;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCarts.pending, (state, action) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(fetchCarts.fulfilled, (state, action) => {
        state.cart = action.payload;
        let total = 0;
        state.cart.forEach((product) => {
          total += product.price;
        });
        state.total = total;
        state.status = STATUSES.IDLE;
      })
      .addCase(fetchCarts.rejected, (state, action) => {
        state.status = STATUSES.ERROR;
      })
      .addCase(removeCartProduct.fulfilled, (state, action) => {
        state.cart = action.payload.products;
        state.total -= action.payload.price;
        toast.success("Item removed successfully");
      })
      .addCase(addCartProduct.fulfilled, (state, action) => {
        const { product } = action.payload;
        if (!product) {
          toast.error("product already exists");
          return;
        }
        state.cart.push(product);
        state.total += product.price;
        toast.success("Product added successfully");
      })
      .addCase(addCartProduct.rejected, (state, action) => {
        toast.error("something went's wrong");
      })

      .addCase(clearAllProducts.fulfilled, (state, action) => {
        state.cart = [];
        state.total = 0;
      });
  },
});

// thunks

export const fetchCarts = createAsyncThunk(
  "carts/fetch",
  async (state, action) => {
    const { products } = await FetchRequest("cart", "GET", null);
    if (products === undefined) {
      return [];
    }
    return products;
  }
);

export const removeCartProduct = createAsyncThunk(
  "remove/product",
  async (productName) => {
    const { cart } = await FetchRequest(
      `cart/delete`,
      "DELETE",
      JSON.stringify({
        product: {
          name: productName,
        },
      })
    );
    return cart;
  }
);
export const addCartProduct = createAsyncThunk(
  "add/product",
  async (product) => {
    const result = await FetchRequest(
      `cart/add`,
      "POST",
      JSON.stringify({
        product: {
          name: product.name,
          slug: product.slug,
          price: product.price,
          imageUrl: product.imageUrl[0],
          size: product.size,
          quantity: 1,
        },
      })
    );
    return { success: result.success, product: result.product };
  }
);

export const clearAllProducts = createAsyncThunk("add/clearAll", async () => {
  const result = await FetchRequest("cart/clearAll", "PUT", null);
  return result;
});

export const { setInitialTotal } = cartSlice.actions;

export default cartSlice.reducer;
