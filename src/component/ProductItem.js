import React, { useEffect, useState } from "react";
import { Row, Col, Container, Button, Badge } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { cartListAction } from "../redux/actions/cartListAction";

let cart = [];
const ProductItem = ({ product }) => {
  const { cartList } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [cartadd, setCartadd] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addItem = () => {
    if (cartList.length < 3) {
      cart = [...cart, product];
      setCartadd(true);
    } else {
      handleShow();
    }

    dispatch(cartListAction.getcartList(cart));
  };

  const deleteItem = () => {
    const delcart = [...cart];
    const index = cart.findIndex(
      (cart) => cart.item_name === product.item_name
    );
    delcart.splice(index, 1);
    cart = delcart;
    setCartadd(false);

    dispatch(cartListAction.putcartList(cart));
  };

  const clickCart = () => {
    cartadd ? deleteItem() : addItem();
  };

  useEffect(() => {
    if (cart.length !== cartList.length) {
      cart = cartList;
    }

    if (cart) {
      cart.map(
        (cart) => cart.item_name === product.item_name && setCartadd(true)
      );
    }
  }, [product, cart]);

  return (
    <Container>
      <Row className="product">
        <Col className="product-first">
          <img src={product?.detail_image_url} alt="" />
        </Col>
        <Col className="product-second">
          <div>
            <h2>{product?.item_name}</h2>
          </div>
          <div>
            <h2>₩{product?.price}</h2>
          </div>
          <div>
            <Button
              variant={cartadd ? "danger" : "dark"}
              value={product}
              onClick={clickCart}
            >
              {cartadd ? "장바구니 빼기" : "장바구니 담기"}
            </Button>
          </div>
          <Badge pill bg="danger">
            {product?.availableCoupon === false ? "쿠폰사용 불가" : ""}
          </Badge>
        </Col>
      </Row>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            장바구니가 가득찼습니다.
            <p>상품은 3개까지 담을 수 있습니다.</p>
          </Modal.Title>
        </Modal.Header>
      </Modal>
    </Container>
  );
};

export default ProductItem;
