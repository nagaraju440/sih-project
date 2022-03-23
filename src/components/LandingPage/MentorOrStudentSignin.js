import React, { Component, useState, useEffect } from 'react'
 import styles from './MentorOrStu.css'
import LandingPageImg from '../../assets/Images/LandingPage.png'
import Micon from '../../assets/Icons/Micon.png'

import {
  Routes, Route, Link, BrowserRouter as Router,
  Switch, withRouter,useNavigate  
} from "react-router-dom";

export default function MentorOrStu() {
   
  const navigate=useNavigate();
  
  return (
    <>
      <div className='Sc-MainContainer'>
          
          <div className='Sc-inner-container'>
          <div className='Sc-left-section'>
              <h2 className='Sc-left-section-text'>Struggling with learning</h2>
           
              <img src={LandingPageImg} alt="Image over here"/>


          </div>
          <div className='Sc-right-section'>
          <h2 className='Sc-right-section-text-1'>Teaching is</h2>
          <h2 className='Sc-right-section-text-2'>to learn twice over</h2>
          <div className='Sc-right-section-icon'>
          <img src={Micon} alt="logo" className="imgStyles"/>
          </div >
          {/* hii */}

         <div className='Sc-right-section-text-3'>
         What do you wish to signin for?
         </div>

          <div className='Ms-right-section-button-1'>
          <button type='submit' onClick={()=>{
                 navigate('/mentor/signin')
          }} className='button-text'>Mentor</button>
          </div>
          <div className='Ms-right-section-button-2'>
          <button type='submit'  onClick={()=>{
                 navigate('/student/signin')
          }} className='button-text'>Student</button>
          </div>
          {/* <div className='Sc-bottom-text-1'>Already Registered? Sign  in </div> */}
          <div className='Sc-bottom-text-2'>Know More About Us  </div>

           

          </div>
          </div>
      </div>
    </>
  )
}
