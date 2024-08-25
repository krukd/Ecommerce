import React, { useEffect } from "react";
import Header from "../Header";
import { Container } from "react-bootstrap";
import Footer from "../Footer";
import {useState} from 'react'
import axios from 'axios'


function HomePage() {

    const [products, setProducts] = useState()

    useEffect(() => {
        async function fetchProducts(){
            const data = await axios.get('/api/products/')
            setProducts(data)
        }

        fetchProducts()
    })
  return (
    <Container>
      <h1>Products</h1>
    </Container>
  );
}

export default HomePage;
