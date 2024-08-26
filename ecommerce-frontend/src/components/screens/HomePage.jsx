import React, { useEffect } from "react";
import Header from "../Header";
import { Container } from "react-bootstrap";
import Footer from "../Footer";
import { useState } from "react";
import axios from "axios";
import { Row, Col } from "react-bootstrap";
import Product from "../Product";


function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const {data} = await axios.get("/api/products/");
        console.log(data);
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchProducts();
  }, []);
  return (
    <Container>
      <br />
      <h1>Products</h1>
      <Row>
        {products.map((product) => {
          return <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product}/>
          </Col>;
        })}
      </Row>
    </Container>
  );
}

export default HomePage;
