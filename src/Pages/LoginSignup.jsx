import React, { useState } from 'react';
import './CSS/LoginSignup.css';
import runningcart from '../Components/Assets/runningcart_1.jpg'
import { Link, useNavigate } from 'react-router-dom'
function LoginSignup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const navigate = useNavigate()
  const HandleLogin = (event) => {
    event.preventDefault();

    const isValidEmail = emailRegex.test(email);
    setEmailError(isValidEmail ? '' : 'Invalid email format');
   
    if (isValidEmail) {
      const isConfirmed = window.confirm('Welcome User!');
      if (isConfirmed) {
        // Perform any additional actions if needed
   
       
        navigate('/')
      }
    } else {
      alert('Invalid Username or Password');
    }
  };

  return (
    <div className='bg_img'>
      <div className="content">
        <div>
          <div className="text">Login</div>
          <form onSubmit={HandleLogin}>
            <div className="field">
              <input
                type="text"
                placeholder="Email or Phone"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailError(''); // Clear the error when the user types
                }}
              />
              <label htmlFor="emailOrPhone"></label>
            </div>
            {emailError && <div className="error">{emailError}</div>}
            <div className="field">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label htmlFor="password"></label>
            </div>
         <button className='but_1' type="button" onClick={HandleLogin}>
              Sign in
            </button>
            <div className="signup">
              Not a member? <Link style={{ textDecoration: 'none' }} to='/signup'>Sign up now</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginSignup;
