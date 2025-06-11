import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './authStyles.css';
import AuthServices from '../../Services/AuthService';
import toast from 'react-hot-toast';
import { getErrorMessage } from '../../Utils/ErrorMessage';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  //login function
  const handleSubmit = async(e) => {
    try {
      e.preventDefault();
      const data = { email, password };
      const res = await AuthServices.loginUser(data);
      toast.success(res.data.message);
      navigate("/home");
      localStorage.setItem('todoapp', JSON.stringify(res.data));
      console.log(res.data);
    } catch (err) {
      toast.error(getErrorMessage(err));
      console.log(err);
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

export default Login;