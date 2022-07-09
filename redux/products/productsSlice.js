import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "../../data/data";

export const initialState = {
  loading: false,
  hasErrors: false,
  products: {},
  filteredProducts: {},
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    filterProducts: (state, action) => {
      state.filteredProducts = state.products.filter(
        (product) =>
          product.color.toLowerCase() === action.payload.color.toLowerCase() ||
          product.material.toLowerCase() ===
            action.payload.material.toLowerCase() ||
          product.size.toLowerCase() === action.payload.size.toLowerCase()
      );
    },
    getProductsData: (state) => {
      state.loading = true;
    },
    getProductsSuccess: (state, { payload }) => {
      state.products = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    getProductsFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

export const {
  getProductsData,
  getProductsSuccess,
  getProductsFailure,
  filterProducts,
} = productsSlice.actions;

export const productsSelector = (state) => state.products;

export default productsSlice.reducer;

export function fetchProducts() {
  return async (dispatch) => {
    dispatch(getProductsData());

    try {
      const data = await getProducts();

      dispatch(getProductsSuccess(data));
    } catch (error) {
      dispatch(getProductsFailure());
    }
  };
}
