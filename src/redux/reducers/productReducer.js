import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  productList: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProducts(state, action) {
      state.productList = action.payload.data;
    },
  },
});

export default productSlice.reducer;
export const productActions = productSlice.actions;
