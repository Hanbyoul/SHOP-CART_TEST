import { cartListActions } from "../reducers/cartListReducer";

function getcartList(cart) {
  return (dispatch) => {
    dispatch(cartListActions.getcartList(cart));
  };
}

function putcartList(cart) {
  return (dispatch) => {
    dispatch(cartListActions.putcartList(cart));
  };
}

function getCount(getcount) {
  return (dispatch) => {
    dispatch(cartListActions.getCount(getcount));
  };
}

function getChecked(getcheck) {
  return (dispatch) => {
    dispatch(cartListActions.getChecked(getcheck));
  };
}

function pushChecked(newchekList) {
  return (dispatch) => {
    dispatch(cartListActions.pushChecked(newchekList));
  };
}

export const cartListAction = {
  getcartList,
  putcartList,
  getCount,
  getChecked,
  pushChecked,
};
