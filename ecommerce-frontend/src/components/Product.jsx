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
          <Link to={`/product/${product._id}`} className='text-dark'>
            <Card.Title as="h3">
              {product.productname}
            </Card.Title>
          </Link>
        </Card.Body>
        <Card.Text as="div">
          <div className='mt-3'>
            {product.rating} from {product.numReviews} views
          </div>
        </Card.Text>
        <Card.Text as="h6">
          {product.price}
        </Card.Text>
        <Rating 
          value={product.rating}
          text={` ${product.numReviews} views`}
          color={"#f8e825"}
        
        />
    </Card>
  )
}

export default Product
