import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import ProductItem from "../component/ProductItem";
import { useDispatch, useSelector } from "react-redux";
import { productAction } from "../redux/actions/productAction";
import Pagenation from "../component/Pagenation";

const Products = () => {
  const dispatch = useDispatch();
  const { productList } = useSelector((state) => state.product);
  const [page, setPage] = useState(1);

  const limit = 5;
  const offset = (page - 1) * limit;
  const productItem = productList.slice(offset, offset + limit);

  useEffect(() => {
    dispatch(productAction.getProducts());
  }, []);

  return (
    <Container>
      {productItem.map((product) => (
        <ProductItem key={product.item_no} product={product} />
      ))}
      <Pagenation
        page={page}
        setPage={setPage}
        limit={limit}
        totalItem={productList.length}
      />
    </Container>
  );
};

export default Products;
