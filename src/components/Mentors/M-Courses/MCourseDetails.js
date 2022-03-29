import React from 'react'
import ThreeDots from '../../../assets/Icons/ThreeDots.svg'
import StarIcon from '../../../assets/Icons/starIcon.svg'
import SmallCircleIcon from '../../../assets/Icons/smallCircle.svg'
import ClockIcon from '../../../assets/Icons/clockIcon.svg'
import CalenderIcon from '../../../assets/Icons/calender.svg'

export default function MCourseDetails() {
  return (
    <div className='MCourse-details-page'>
      <div className="mcd-background-box"></div>
      <div className='mcd-content-container'>
        <div className='mcd-title-section'>
          <div className='mcd-title'>HTML complete course form the  scratch </div>
          <img src={ThreeDots} alt="three dots icon"/>
        </div>
        <div className='mcd-rate-student-level-section'>
          <div className='mcd-rating'><span className='mcd-rating-text'>4</span> <img src={StarIcon} alt="" /> </div>
          <div className="mcd-students"><img src={SmallCircleIcon} alt="small circle icon" /><span style={{marginLeft:10}} >15</span> Learners Enroled </div>
          <div className="mcd-students"><img src={SmallCircleIcon} alt="small circle icon" /><span style={{marginLeft:10}} >15</span> Beginner Level course</div>
        </div>
        <div className='mcd-section'>
          <img src={ClockIcon} alt="" />
          <div className='mcd-time' >display the time here</div>
        </div>
        <div className='mcd-section'>
          <img src={CalenderIcon} alt="" />
          <div className='mcd-time' >display the date here</div>
        </div>
        <div className='mcd-section'>
          <img src={CalenderIcon} alt="" />
          <div className='mcd-time' >display the date here</div>
        </div>
      </div>
    </div>
  )
}
