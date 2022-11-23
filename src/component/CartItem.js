import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { useSelector, useDispatch } from "react-redux";
import { cartListAction } from "../redux/actions/cartListAction";

const CartItem = ({ item }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { cartList, checkedLists } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const [price, setPrice] = useState(0);

  const increase = (event) => {
    if (
      checkedLists.some((check) => {
        return check.item_name === item.item_name;
      })
    ) {
      handleShow();
    } else {
      setCount(event.target.value);

      const getcount = cartList.map((cart) => {
        if (cart.item_name === item.item_name) {
          return { ...cart, count: event.target.valueAsNumber };
        } else {
          return { ...cart };
        }
      });
      dispatch(cartListAction.getCount(getcount));
    }
  };

  const checkItem = (checked, item) => {
    if (checked) {
      const getcheck = [...checkedLists, item];

      dispatch(cartListAction.getChecked(getcheck));
    } else if (!checked) {
      const newchekList = checkedLists.filter(
        (check) => check.item_name !== item.item_name
      );

      dispatch(cartListAction.pushChecked(newchekList));
    }
  };

  useEffect(() => {
    const getcount = cartList.map((cart) => {
      if (cart.count === undefined) {
        return { ...cart, count: count };
      } else {
        return { ...cart };
      }
    });

    dispatch(cartListAction.getCount(getcount));
  }, [count]);

  useEffect(() => {
    setPrice(item.price * count);
  }, [item.price, count]);

  return (
    <Row className="cart-area">
      <Col className="cart-img-check" lg={4} md={5}>
        <input
          className="check-box"
          type={"checkbox"}
          checked={checkedLists?.some(
            (check) => check.item_name === item.item_name
          )}
          onChange={(event) => checkItem(event.target.checked, item)}
          readOnly
        />
        <img width={200} src={item.detail_image_url} alt={"상품이미지"} />
      </Col>
      <Col lg={3} md={3}>
        <h2>{item.item_name}</h2>

        <span className="availableCoupon">
          {item.availableCoupon !== false ? "쿠폰사용 가능" : ""}
        </span>
      </Col>
      <Col lg={1} md={2}>
        수량
        <input
          className="count"
          type={"number"}
          min={1}
          value={item.count !== undefined ? item.count : count}
          onChange={(event) => increase(event)}
        />
      </Col>
      <Col lg={3} md={2}>
        {price.toLocaleString() + "원"}
      </Col>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>체크 해제후 수량을 변경해주세요!</Modal.Title>
        </Modal.Header>
      </Modal>
    </Row>
  );
};

export default CartItem;
