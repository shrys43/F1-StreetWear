// pages/Category.js
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../styles/Category.css';

const Category = () => {
  const { category } = useParams();
  const [searchQuery, setSearchQuery] = useState('');
  
  // Sample products data
  const products = [
    { id: 1, name: 'Grid King Tee', price: 45, image: 'tee1' },
    { id: 2, name: 'Podium Black Tee', price: 50, image: 'tee2' },
    { id: 3, name: 'Checkered Flag Tee', price: 48, image: 'tee3' },
    { id: 4, name: 'Racing Stripes Tee', price: 52, image: 'tee4' },
    { id: 5, name: 'Pit Stop Crew', price: 55, image: 'tee5' },
    { id: 6, name: 'Championship White', price: 49, image: 'tee6' },
  ];

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="category">
      <h1>{category.charAt(0).toUpperCase() + category.slice(1)}</h1>
      
      <div className="search-container">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {filteredProducts.length === 0 ? (
        <div className="empty-state">
          <p>No products match your search.</p>
        </div>
      ) : (
        <div className="product-grid">
          {filteredProducts.map(product => (
            <Link to={`/product/${product.id}`} key={product.id} className="product-card">
              <div className={`product-image ${product.image}`}></div>
              <h3>{product.name}</h3>
              <p>${product.price}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Category;
