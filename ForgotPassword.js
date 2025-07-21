// pages/ForgotPassword.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Auth.css';

const ForgotPassword = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleSendOtp = () => {
    // In a real app, this would send OTP to email
    setStep(2);
  };

  const handleVerifyOtp = () => {
    // In a real app, this would verify OTP
    setStep(3);
  };

  const handleResetPassword = () => {
    // In a real app, this would reset password
    alert('Password reset successful!');
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <h1>Forgot Password</h1>
        
        {step === 1 && (
          <form onSubmit={(e) => { e.preventDefault(); handleSendOtp(); }}>
            <div className="form-group">
              <label>Email</label>
              <input 
                type="email" 
                placeholder="Enter your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="auth-btn">SEND OTP</button>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={(e) => { e.preventDefault(); handleVerifyOtp(); }}>
            <p>We've sent an OTP to your email. Please enter it below.</p>
            <div className="form-group">
              <label>OTP</label>
              <input 
                type="text" 
                placeholder="Enter OTP" 
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="auth-btn">VERIFY OTP</button>
          </form>
        )}

        {step === 3 && (
          <form onSubmit={(e) => { e.preventDefault(); handleResetPassword(); }}>
            <div className="form-group">
              <label>New Password</label>
              <input 
                type="password" 
                placeholder="Enter new password" 
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Confirm New Password</label>
              <input 
                type="password" 
                placeholder="Confirm new password" 
                required
              />
            </div>
            <button type="submit" className="auth-btn">RESET PASSWORD</button>
          </form>
        )}

        <div className="auth-links">
          <Link to="/login">Back to Login</Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
