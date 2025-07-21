// pages/Login.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Auth.css';

const Login = () => {
  return (
    <div className="auth-page">
      <div className="auth-container">
        <h1>Login</h1>
        <form>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" />
          </div>
          <button type="submit" className="auth-btn">LOGIN</button>
        </form>
        <div className="auth-links">
          <Link to="/forgot-password">Forgot password?</Link>
          <span>Don't have an account? <Link to="/signup">Sign up</Link></span>
        </div>
      </div>
    </div>
  );
};

export default Login;
