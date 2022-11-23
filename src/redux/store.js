import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducers/productReducer";
import cartListReducer from "./reducers/cartListReducer";
import couponsReducer from "./reducers/couponsReducer";

const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartListReducer,
    coupon: couponsReducer,
  },
});

export default store;
