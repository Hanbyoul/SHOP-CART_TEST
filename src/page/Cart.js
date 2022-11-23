import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import CartItem from "../component/CartItem";
import Cartputer from "../component/Cartputer";
import { cartListAction } from "../redux/actions/cartListAction";

const Cart = () => {
  const { cartList, checkedLists } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const Allchecked = (checked) => {
    if (checked) {
      const getcheck = cartList;
      dispatch(cartListAction.getChecked(getcheck));
    } else if (!checked) {
      const newchekList = [];
      dispatch(cartListAction.pushChecked(newchekList));
    }
  };

  if (cartList.length === 0) {
    return (
      <Container>
        <Row className="cart-none">
          장바구니가 비어있습니다. 상품을 담아주세요.
        </Row>
      </Container>
    );
  }
  return (
    <Container>
      <Row className="cart-area">
        <Col className="cart-title">
          <div className="cart-title-check">
            <input
              className="cart-title-check-input"
              type={"checkbox"}
              onChange={(event) => Allchecked(event.target.checked)}
              checked={cartList.length === checkedLists.length ? true : false}
              disabled={cartList.length === 0}
            />
            <span>전체선택</span>
          </div>
          <div>상품정보</div>

          <div className="cart-title-price">상품금액</div>
        </Col>
      </Row>
      {cartList.map((item) => (
        <CartItem key={item.item_no} item={item} />
      ))}
      <Cartputer />
    </Container>
  );
};

export default Cart;
