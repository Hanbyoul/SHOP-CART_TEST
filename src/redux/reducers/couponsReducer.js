import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  coupons: [],
  couponType: "",
};

const couponSlice = createSlice({
  name: "coupon",
  initialState,
  reducers: {
    getCoupons(state, action) {
      state.coupons = action.payload.data;
    },
    selectedCoupon(state, action) {
      state.couponType = action.payload;
    },
  },
});

export default couponSlice.reducer;
export const couponActions = couponSlice.actions;
