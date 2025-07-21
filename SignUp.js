// pages/SignUp.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Auth.css';

const SignUp = () => {
  return (
    <div className="auth-page">
      <div className="auth-container">
        <h1>Sign Up</h1>
        <form>
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" placeholder="Enter your full name" />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Create a password" />
          </div>
          <button type="submit" className="auth-btn">SIGN UP</button>
        </form>
        <div className="auth-links">
          <span>Already have an account? <Link to="/login">Login</Link></span>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
