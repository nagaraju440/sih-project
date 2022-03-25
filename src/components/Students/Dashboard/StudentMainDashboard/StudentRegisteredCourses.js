import React from 'react'
import '../StudentMainDashboard/StudentRegisterCourses.css'
import image from '../../../../assets/Images/studentdashboard.png'
export default function StudentRegisteredCourses() {
  return (
    <div >
      <div className="card">
        <div className="Card_image">
          <img src={image}></img>
        </div>
        <div className="Card_Name"> C programming</div>
        <div className="Card_secondpart">
          <div className="Card_text">-By Tejawini</div>
          <div className="Card_dot">•</div>
          <div className="Card_time">5pm - 7pm</div>
        </div>
        <div className="Card_button">
          <button className="Card_buttontext" >Join Class</button>
        </div>
      </div>
      
    </div>
  )
}
