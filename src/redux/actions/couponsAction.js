import { couponActions } from "../reducers/couponsReducer";

function couponAction() {
  return async (dispatch) => {
    let url =
      "https://my-json-server.typicode.com/Hanbyoul/hanbyoul-shop/coupons";
    let res = await fetch(url);
    let data = await res.json();
    dispatch(couponActions.getCoupons({ data }));
  };
}

function selectedCoupon(selectCoupon) {
  return (dispatch) => {
    dispatch(couponActions.selectedCoupon(selectCoupon));
  };
}

export const couponsAction = { couponAction, selectedCoupon };
