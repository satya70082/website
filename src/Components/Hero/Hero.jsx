import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'

const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero__left'>
            <h2>New Arrival are Avalable</h2>
            <div>
                <div className='hero-hand-icon'>
                   <p>New</p>
                    <img src={hand_icon} alt='hand-icon' />

                </div>
                <p>Collections</p>
                <p>for everyone</p>
            </div>
            <div className='hero-latest-btn'>
                <div>Latest Collection</div>
                <img src={arrow_icon} alt='arrow' />
            </div>
            
        </div>
        <div className='hero__right'>
            <img src={hero_image} alt='hero' />

            </div>
      
    </div>
  )
}

export default Hero