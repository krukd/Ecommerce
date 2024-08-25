import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import {Container} from "react-bootstrap"


function App() {
  return (
    <>
    <div>
      <Navbar/>
      <Container>
        <h1>Welcome here!</h1>
      </Container>
      <Footer/>
    </div>
    
    
    </>
  );
}

export default App;
