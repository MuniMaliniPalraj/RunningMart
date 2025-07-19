import React from 'react'
import './Hero.css';
import hand_icon from '../Assets/hand_icon.png';
import arrow_icon from '../Assets/arrow.png';
import front_1 from '../Assets/front_1.png';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>SHOP FOR FASHION OUTFITS</h2>
        <div>
          <div className="hero-hand-icon">
            <p>Cart Full Of Dreams, </p>
          </div>
          <p>Wallet Full Of Possibilities🚀</p>
        </div>
        <div className="hero-latest-btn">
          <div>Trendy Collection</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="hero-right">
        <img className='img_5' src={front_1} alt="" />
      </div>
    </div>
  )
}

export default Hero
