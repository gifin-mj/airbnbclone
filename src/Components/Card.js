import React from 'react'
import card1 from '../Images/image 12.png'
import star from '../Images/Star 1.png'

function Card() {
  return (
      <section>
        <div className='card'>
            <img src={card1} className="main-img" alt=""/>
                <div className='card-content'>
                    <img src={star}  className="star" alt=''/>
                    <span >5.0</span>
                    <span className='gray'> (6) </span>
                    <span className='gray'>• USA</span>
                    <p>Life lessons with Katie Zaferes</p>
                    <p> <span className='bold'>From $136 </span>/ person</p>
                </div>
        </div>
    </section>
  )
} 

export default Card 