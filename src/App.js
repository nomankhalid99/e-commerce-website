import './App.css'
import React,{useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navigation from './components/Navbar';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Footer from './components/Footer';
import Login from './pages/Login';
import Checkout from './pages/Checkout';
import Contact from './pages/Contact';

function App() {

  const getLocalStorageData = () => {
    let localCartData = localStorage.getItem('myCart');
    if (!localCartData) {
      return [];
    } else {
      return JSON.parse(localCartData);
    }
  }
  
  
  const [cart, setCart] = useState(getLocalStorageData());
  const [totalQuantity, setTotalQuantity] = useState(0); 
  console.log(cart)

  useEffect(() => {
    const newTotalQuantity = cart.reduce((total, product) => total + (product.quantity || 1), 0);
    setTotalQuantity(newTotalQuantity);
  }, [cart]);

  return (
    <>    
      <Router>
      <Navigation cart={cart} totalQuantity={totalQuantity} />
        <Routes>
          <Route path="/" element={<Home cart= {cart} setCart={setCart}/>}/>
          <Route path="/cart" element={<Cart cart={cart} setTotalQuantity={setTotalQuantity}/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/checkout" element={<Checkout cart={cart}/>}/>
          {/* <Route path="/contact" element={<Contact/>}/> */}
        </Routes>
      </Router>
      <Footer/>
    </>
  );
}

export default App;
