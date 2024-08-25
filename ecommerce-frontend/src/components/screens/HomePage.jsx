import React, { useEffect } from "react";
import Header from "../Header";
import { Container } from "react-bootstrap";
import Footer from "../Footer";
import { useState } from "react";
import axios from "axios";
import { Row, Col, Card } from "react-bootstrap";

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
            <Card className="my-3 p-3 rounded">
              <img src={product.image} />
            </Card>
            <h1>{product.productname}</h1>
            <h6>{product.category}</h6>
            <p>{product.price}</p>
            <p>{product.productinfo}</p>
          </Col>;
        })}
      </Row>
    </Container>
  );
}

export default HomePage;
