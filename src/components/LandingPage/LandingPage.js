import React, { Component, useState, useEffect } from 'react'
import styles from './LandingPage.css'
import LandingPageImg from '../../assets/Images/LandingPage.png'
import Micon from '../../assets/Icons/Micon.png'

import {
  Routes, Route, Link, BrowserRouter as Router,
  Switch, withRouter,useNavigate  
} from "react-router-dom";
export default function LandingPage() {  
  const navigate=useNavigate();
  return (
    <>
      <div className='MainContainer'>
          <div className='inner-container'>
          <div className='left-section'>
              <h2 className='left-section-text'>Struggling with learning</h2>
           
              <img src={LandingPageImg} alt="Image over here"/>


          </div>
          <div className='right-section'>
          <h2 className='right-section-text-1'>Teaching is</h2>
          <h2 className='right-section-text-2'>to learn twice over</h2>
          <div className='right-section-icon'>
          <img src={Micon} alt="logo" className="imgStyles"/>
          </div>
          <div className='right-section-button'>
          <button type='submit' onClick={()=>{
                   navigate('/selectCollege')  
          }}  className='button-text'>Register</button>
          </div>
          <div className='bottom-text-1' onClick={()=>{
             navigate('/mentorOrStudent_signin')
          }}> Already Registered? Sign  in </div>
          <div className='bottom-text-2'>Know More About Us  </div>

           

          </div>
          </div>
      </div>
    </>
  )
}
