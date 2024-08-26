import React, { useEffect } from "react";
import Header from "../Header";
import { Container } from "react-bootstrap";
import Footer from "../Footer";
import { useState } from "react";
import axios from "axios";
import { Row, Col } from "react-bootstrap";
import Product from "../Product";
import { listProducts } from "../../actions/productsActions";
import { useDispatch, useSelector } from "react-redux";

function HomePage() {
  const dispatch = useDispatch();
  const productsList = useSelector((state) => state.productsList);
  const { error, loading, products } = productsList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  return (
    <Container>
      <br />
      <h1>Products</h1>
      <Row>
        {products.map((product) => {
          return (
            <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default HomePage;
