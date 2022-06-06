import React from 'react'
import grid from '../Images/Group 77.png'
function Hero() {
  return (
    <section className='hero'>
        <img src={grid} alt="" />
        <h1>Online Experiences</h1>
        <p>Join unique interactive activities led by one-of-a-kind hosts—all 
            without leaving home.
        </p>
    </section>
  )
}

export default Hero