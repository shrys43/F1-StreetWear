// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Category from './pages/Category';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgotPassword';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const updateQuantity = (index, newQuantity) => {
    const updatedItems = [...cartItems];
    updatedItems[index].quantity = newQuantity;
    setCartItems(updatedItems);
  };

  return (
    <Router>
      <div className="app">
        <header>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/category/tees">Shop</Link>
            <div className="nav-icons">
              <Link to="/cart">Cart ({cartItems.length})</Link>
              <Link to="/login">Account</Link>
            </div>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:category" element={<Category />} />
          <Route path="/product/:id" element={<Product addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart items={cartItems} updateQuantity={updateQuantity} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>

        <footer>
          <p>© 2023 F1 Streetwear. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
