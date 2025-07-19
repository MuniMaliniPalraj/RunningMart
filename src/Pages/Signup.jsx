import React from 'react'
import './CSS/Signup.css'
import { Link } from 'react-router-dom'
import images from '../Components/Assets/runningcart_1.jpg';
const Signup = () => {
  return (
    <div className='bg_img1'>
    <div className="content"> 
    <div className="text">Sign Up</div>
    <form action="#">
      <div className="field">
      <input type="text" placeholder="User Name"/>
      <label for="Name"></label>
      </div>
      <div className="field">
      <input type="text" placeholder="Email or Phone"/>
      <label for="Email or Phone"></label>
      </div>
      <br></br>
      <div className="field">
        <label for="Password"></label>
        <input type="password" placeholder="Password"/>
      </div>
      <br></br>
      <div className="field">
        <label for="Password"></label>
        <input type="password" placeholder="Confirm Password"/>
      </div>
      <br></br>
      <Link to="/login"><button className='but_2'>Submit</button></Link>
    </form>
</div>
    </div>
  )
}

export default Signup