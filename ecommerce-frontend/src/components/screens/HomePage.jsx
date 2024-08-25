import React from 'react'
import Header from '../Header'
import { Container } from 'react-bootstrap'
import Footer from '../Footer'


function HomePage() {
  return (
    <div>
      <Header/>
      <Container>
        <h1>Welcome here!</h1>
      </Container>
      <Footer/>
    </div>
  )
}

export default HomePage
