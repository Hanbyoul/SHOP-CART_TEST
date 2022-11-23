import { productActions } from "../reducers/productReducer";

function getProducts() {
  return async (dispatch) => {
    let url =
      "https://my-json-server.typicode.com/Hanbyoul/hanbyoul-shop/products";
    let res = await fetch(url);
    let data = await res.json();
    data.sort((a, b) => b.score - a.score);
    dispatch(productActions.getProducts({ data }));
  };
}

export const productAction = { getProducts };
