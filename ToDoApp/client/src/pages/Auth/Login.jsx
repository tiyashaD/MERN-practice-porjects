import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './authStyles.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //login function
  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      alert('Login Data' + email + ' ' + password)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="form-container">
      <div className="form">
        <div className="mb-3">
          <i className='fa-solid fa-circle-user'></i>
        </div>
        <div className="mb-3">
          <input type="email" className="form-control" placeholder='Enter your email' value={email} onChange={ (e) => setEmail(e.target.value)}/>
        </div>
        <div className="mb-3">
          <input type="password" className="form-control" placeholder='Enter your password' value={password} onChange={ (e) => setPassword(e.target.value)}/>
        </div>
        <div className="form-bottom">
          <p className='text-center'>
            not a user? please
            <Link to="/register">Register</Link>
          </p>
          <button type="submit" className='login-btn' onClick={handleSubmit}> LOGIN </button>
        </div>
      </div>
    </div>
  )
}

export default Login