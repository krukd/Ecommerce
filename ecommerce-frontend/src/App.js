import Footer from "./components/Footer";
import Header from "./components/Header";
// import { Container } from "react-bootstrap";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/screens/HomePage";
import SignupPage from "./components/screens/SignupPage";
import LoginPage from "./components/screens/LoginPage";
import CartPage from "./components/screens/CartPage";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />}></Route>
        </Routes>
        <Routes>
          <Route exact path="/login" element={<LoginPage />}></Route>
        </Routes>
        <Routes>
          <Route exact path="/signup" element={<SignupPage />}></Route>
        </Routes>
        <Routes>
          <Route exact path="/cart" element={<CartPage />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
