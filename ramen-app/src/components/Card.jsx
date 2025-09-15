import React from 'react'
import "./Card.css"

function Card(props) {
  return (
    <div className='card-container'>
      <div className='card-img'>
        <img src={props.picture} alt="" />
      </div>
      
      <div className='card-content'>
        <h1>{props.name}</h1>
        <p>{props.summary}</p>
      </div>
    </div>
  )
}

export default Card