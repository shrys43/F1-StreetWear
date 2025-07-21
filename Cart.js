// pages/Cart.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Cart.css';

const Cart = ({ items, updateQuantity }) => {
  const subtotal = items.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);

  return (
    <div className="cart">
      <h1>Your Cart</h1>
      
      {items.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty</p>
          <Link to="/category/tees" className="shop-btn">SHOP NOW</Link>
        </div>
      ) : (
        <div className="cart-container">
          <div className="cart-items">
            {items.map((item, index) => (
              <div key={index} className="cart-item">
                <div className={`item-image ${item.image}`}></div>
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p>${item.price}</p>
                  <div className="quantity-control">
                    <button 
                      onClick={() => updateQuantity(index, (item.quantity || 1) - 1)}
                      disabled={(item.quantity || 1) <= 1}
                    >
                      -
                    </button>
                    <span>{item.quantity || 1}</span>
                    <button onClick={() => updateQuantity(index, (item.quantity || 1) + 1)}>
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="cart-summary">
            <h3>Order Summary</h3>
            <div className="summary-row">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Shipping</span>
              <span>Calculated at checkout</span>
            </div>
            <button className="checkout-btn">PROCEED TO CHECKOUT</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
