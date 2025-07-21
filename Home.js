// pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <h1>F1 STREETWEAR</h1>
        <p>Race-inspired apparel for the streets</p>
        <Link to="/category/tees" className="view-all-btn">VIEW ALL</Link>
      </section>

      <section className="categories">
        <h2>SHOP BY CATEGORY</h2>
        <div className="category-grid">
          <Link to="/category/tees" className="category-card">
            <div className="category-image tees"></div>
            <h3>Tees</h3>
          </Link>
          <div className="category-card">
            <div className="category-image jackets"></div>
            <h3>Jackets</h3>
          </div>
          <div className="category-card">
            <div className="category-image caps"></div>
            <h3>Caps</h3>
          </div>
          <div className="category-card">
            <div className="category-image accessories"></div>
            <h3>Accessories</h3>
          </div>
          <div className="category-card">
            <div className="category-image limited"></div>
            <h3>Limited</h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
