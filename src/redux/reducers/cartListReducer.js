import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  cartList: [],
  checkedLists: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    getcartList(state, action) {
      state.cartList = action.payload;
    },
    putcartList(state, action) {
      state.cartList = action.payload;
    },
    getCount(state, action) {
      state.cartList = action.payload;
    },
    getChecked(state, action) {
      state.checkedLists = action.payload;
    },
    pushChecked(state, action) {
      state.checkedLists = action.payload;
    },
  },
});

export const cartListActions = cartSlice.actions;
export default cartSlice.reducer;
