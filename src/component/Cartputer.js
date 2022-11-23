import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinusSquare } from "@fortawesome/free-regular-svg-icons";
import { faEquals } from "@fortawesome/free-solid-svg-icons";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { couponsAction } from "../redux/actions/couponsAction";
import Coupon from "./Coupon";

const Cartputer = () => {
  const dispatch = useDispatch();
  const { checkedLists } = useSelector((state) => state.cart);
  const couponType = useSelector((state) => state.coupon.couponType);
  const [couponprice, setCouponPrice] = useState(0);

  let price = checkedLists.reduce((acc, cur) => acc + cur.price * cur.count, 0);

  useEffect(() => {
    dispatch(couponsAction.couponAction());
  }, [dispatch]);

  useEffect(() => {
    const CouponSections = () => {
      if (couponType === "rate") {
        const availableList = checkedLists.filter(
          (item) => item.availableCoupon !== false
        );

        if (availableList.length === 0) return setCouponPrice(0);
        const discountRate = availableList.reduce(
          (acc, cur) => acc + cur.price * cur.count,
          0
        );
        return setCouponPrice(Math.floor(discountRate * 0.1));
      } else if (couponType === "amount") {
        return setCouponPrice(10000);
      } else {
        return setCouponPrice(0);
      }
    };
    CouponSections();
  }, [couponType, couponprice, checkedLists]);

  return (
    <>
      <Row className="price-area">
        <Col className="price">주문금액</Col>
        <Col className="price">₩{price.toLocaleString()}</Col>
      </Row>
      <Row>
        <div>
          <Coupon />
        </div>
        <div className="price-puter">
          <span>상품 금액 {price.toLocaleString()}</span>
          <span className="icon-font">
            <FontAwesomeIcon icon={faMinusSquare} />
          </span>
          <span className="font-red">
            할인 금액 {couponprice.toLocaleString()}
          </span>
          <span className="icon-font">
            <FontAwesomeIcon icon={faEquals} />
          </span>
          <span>{`총 주문 금액  ₩${(
            price - couponprice
          ).toLocaleString()}`}</span>
        </div>
      </Row>
    </>
  );
};

export default Cartputer;
