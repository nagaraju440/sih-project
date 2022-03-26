import React from 'react'
import Avatar from '../../assets/Images/avtar.jpg'
import './CardStyles.css'
import Profile from '../../assets/Icons/profile.svg'

export default function DeveloperCard(props) {
  return (
    <div className='developer-card'>
      <img src={Profile} className="developer-card-image"/>
      <div className="developer-card-title">{props.name}</div>
      <div className="developer-card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum aliquid odit voluptatem. Lorem ipsum dolor sit amet. </div>
    </div>
  )
}
