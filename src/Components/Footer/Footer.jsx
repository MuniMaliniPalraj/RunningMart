import React from 'react'
import './Footer.css'
import runningcart_1 from '../Assets/runningcart_1.jpg'
import instagram_icon from '../Assets/instagram_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={runningcart_1} alt="" />
      </div>
      <ul className="footer-links">
        <Link to='/about' style={{ textDecoration: 'none' }}><li>About</li></Link>
        <Link to='/contact' style={{ textDecoration: 'none' }}><li>Contact</li></Link>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <img src={instagram_icon} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={whatsapp_icon} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2024 - All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer
