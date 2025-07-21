// pages/Product.js
import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/Product.css';

const Product = ({ addToCart }) => {
  const { id } = useParams();
  
  // Sample product data
  const product = {
    id: 1,
    name: 'Grid King Tee',
    price: 45,
    description: 'Premium cotton tee with bold F1 grid pattern. Regular fit, unisex sizing.',
    image: 'tee1',
    sizes: ['S', 'M', 'L', 'XL']
  };

  const handleAddToCart = () => {
    addToCart({ ...product, quantity: 1 });
  };

  return (
    <div className="product">
      <div className="product-container">
        <div className={`product-image-large ${product.image}`}></div>
        
        <div className="product-details">
          <h1>{product.name}</h1>
          <p className="price">${product.price}</p>
          <p className="description">{product.description}</p>
          
          <div className="size-selector">
            <label>Size:</label>
            <select>
              {product.sizes.map(size => (
                <option key={size} value={size}>{size}</option>
              ))}
            </select>
          </div>
          
          <button onClick={handleAddToCart} className="add-to-cart-btn">ADD TO CART</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
