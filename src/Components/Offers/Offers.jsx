import React from 'react'
import './Offers.css'
import exclusive_image from '../Assets/exclusive_image.png'
import { Link } from 'react-router-dom'
const Offers = () => {
  return (
    <div className='offers'>
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offers for You</h1>
        <p>ONLY ON BEST SELLERS PRODUCT</p>
        <Link to='/womens'><button>Check Now!</button></Link>
      </div>
      <div className="offers-right">
        <img src={exclusive_image} alt="" className='img_2' />
      </div>
    </div>
  )
}

export default Offers
