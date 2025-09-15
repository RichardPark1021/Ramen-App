import React from 'react'
import Ramen from '../assets/pictures/banner.jpg'
import './Banner.css';

function Banner(props) {
  return (
    <div className='banner-container'>
      <div className='image-container'>
        <img src={Ramen} className='image-background'/>
      </div>
      <div className='banner-content'>
        <h1>{props.title}</h1>
        <p>World's Best Ramen</p>
      </div>
    </div>
  )
}

export default Banner