import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './authStyles.css';
import AuthServices from '../../Services/AuthService';
import toast from 'react-hot-toast';
import { getErrorMessage } from '../../Utils/ErrorMessage';


const Register = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  //login function
  const handleSubmit = async(e) => {
    try {
      e.preventDefault();
      const data = { email, password, username };
      const res = await AuthServices.registerUser(data);
      toast.success(res.data.message);
      navigate("/login");
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
          <input type="username" className="form-control" placeholder='Enter your username' value={username} onChange={ (e) => setUsername(e.target.value)}/>
        </div>
        <div className="mb-3">
          <input type="password" className="form-control" placeholder='Enter your password' value={password} onChange={ (e) => setPassword(e.target.value)}/>
        </div>
        <div className="form-bottom">
          <p className='text-center'>
            Already a user? please
            <Link to="/login">Login</Link>
          </p>
          <button type="submit" className='login-btn' onClick={handleSubmit}> REGISTER </button>
        </div>
      </div>
    </div>
  )
}

export default Register