import React from 'react'
import Avatar from '../../assets/Images/avtar.jpg'

export default function DeveloperCard() {
  return (
    <div className='developer-card'>
      <img src={Avatar} className="developer-card-image"/>
      <div className="developer-card-title">Developer Name</div>
      <div className="developer-card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum aliquid odit voluptatem.</div>
    </div>
  )
}
