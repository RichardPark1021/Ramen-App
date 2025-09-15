import React from 'react'
import Ramen from '../assets/video/ramen.mp4'
import './HeroSection.css'
import { Button } from './Button'

function HeroSection() {

  return (
    <div className='hero-container'>
      <div className='video-container'>
        <video autoPlay loop muted className='video-background'>
          <source src={Ramen} type='video/mp4'/>
        </video>
      </div>
      <div className='content-container'>
        <h1>Ichiman Ramen</h1>
        <p>World's Best Ramen</p>
        <div className='hero-btns'>
          <Button buttonStyle='btn--outline' buttonSize='btn--large'>Menu</Button>
        </div>
      </div>
    </div>
  )
}

export default HeroSection