import Footer from "./components/Footer";
import Header from "./components/Header";
import {Container} from "react-bootstrap"
import {HashRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from "./components/screens/HomePage";


function App() {
  return (
    <>
    <div>
      <Header/>
      <Container>
        <h1>Welcome here!</h1>
      </Container>
      <Footer/>
    </div>
    
    
    </>
  );
}

export default App;
