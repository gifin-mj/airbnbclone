import React from 'react'

import star from '../Images/Star 1.png'

function Card(props) {

  let badgetext
  if (props.openSpots === 0)
    badgetext="SOLD OUT"
  else if (props.country === 'Online')
    badgetext="ONLINE"  

  return (
    
       <div className='card'>
          {badgetext && <div className='card--badge'>{badgetext}</div>}
            <img src={require(`../Images/${props.image}`)} className="main-img" alt="wefw"/>
                    <div className='card-content'>
                    <img src={star}  className="star" alt=''/>
                    <span> {props.rating}</span>
                    <span className='gray'> ({props.review}) </span>
                    <span className='gray'>• {props.country}</span>
                    <p>{props.short}</p>
                    <p> <span className='bold'>From ${props.price} </span>/ person</p>
                </div>
        </div>
    
  )
} 

export default Card 