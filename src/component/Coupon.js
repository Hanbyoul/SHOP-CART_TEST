import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { couponsAction } from "../redux/actions/couponsAction";
import { cartListAction } from "../redux/actions/cartListAction";

const Coupon = () => {
  const { coupons } = useSelector((state) => state.coupon);
  const { checkedLists, cartList } = useSelector((state) => state.cart);
  const [checkedcoupon, setCheckedCoupon] = useState("none");
  const dispatch = useDispatch();
  const couponType = useSelector((state) => state.coupon.couponType);
  const disabled =
    checkedLists.length === 0 ||
    checkedLists.every((item) => item.availableCoupon === false);

  const RadioOnChange = (e) => {
    setCheckedCoupon(e.target.value);

    const selectCoupon = e.target.value;
    dispatch(couponsAction.selectedCoupon(selectCoupon));
  };

  const SelectedDelete = () => {
    const cart = cartList.filter((item) => !checkedLists.includes(item));
    const newchekList = [];
    dispatch(cartListAction.putcartList(cart));
    dispatch(cartListAction.pushChecked(newchekList));
  };

  const AllDelete = () => {
    const cart = [];
    const newchekList = [];
    dispatch(cartListAction.putcartList(cart));
    dispatch(cartListAction.pushChecked(newchekList));
  };

  useEffect(() => {
    setCheckedCoupon(couponType);
  }, [couponType]);

  return (
    <div>
      <div className="delete-cart">
        <button onClick={SelectedDelete}>선택삭제</button>
        <button onClick={AllDelete}>장바구니 비우기</button>
      </div>
      <div>
        <div
          className="coupons"
          defaultValue={"none"}
          onChange={(e) => RadioOnChange(e)}
        >
          <label value="쿠폰 미사용">
            <input
              type="radio"
              disabled={disabled}
              value={"쿠폰 미사용"}
              checked={"쿠폰 미사용" === checkedcoupon}
            />
            쿠폰 미사용
          </label>
          {coupons?.map((item) => (
            <label value={item.title} key={item.type}>
              <input
                type={"radio"}
                value={item.type}
                disabled={disabled}
                checked={item.type === checkedcoupon}
              />
              {item.title}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Coupon;
