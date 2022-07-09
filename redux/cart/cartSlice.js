import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  itemsInCart: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state) => {
      state.itemsInCart++;
    },
  },
});

export const { addItemToCart } = cartSlice.actions;

export const cartSelector = (state) => state.cart;

export default cartSlice.reducer;
