import React from 'react'
import Rating from './Rating'
import {Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function Product({product}) {
  return (
    <Card className='my-3 p-3 rounded'>
        <Link to={`/product/${product._id}`}>
          <Card.Img src={product.image}></Card.Img>
        </Link>
        <Card.Body>
          <Link to={`/product/${product._id}`}>
            <Card.Title as="div">
              {product.productname}
            </Card.Title>
          </Link>
        </Card.Body>
    </Card>
  )
}

export default Product
