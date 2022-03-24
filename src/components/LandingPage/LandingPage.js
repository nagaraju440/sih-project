import React, { Component, useState, useEffect } from 'react'
import styles from './LandingPage.css'
import Landingpage3 from '../../assets/Images/landingpage3.png'
import Landingpage4 from '../../assets/Images/Landingpage4.png'
import Micon from '../../assets/Icons/Micon.png'

import {
  Routes, Route, Link, BrowserRouter as Router,
  Switch, withRouter, useNavigate
} from "react-router-dom";
import NavBar from '../Students/Authentication/NavBar';
export default function LandingPage() {  
  const navigate=useNavigate();
  return (
    <>
    <NavBar/>
      <div className='MainContainer'>
        <div className='inner-container'>
          <div className='left-section'>
            {/* <div className='left-section-1'> */}

            <h2 className='left-section-text'>Struggling with learning</h2>

             <img src={Landingpage3} className='image1' alt="Image over here" /> 


          </div>
          <div className='right-section'>
            <h1 className='right-section-text'><b style={{color: '#004E89'}}>Teaching </b>is<br></br>to learn <b style={{color: '#004E89'}}>twice</b> over</h1>
            <div className='right-section-icon'>
              <img src={Micon} alt="logo" className="imgStyles" />
            </div>
            <div className='right-section-button'>
              <button type='submit' onClick={() => {
                navigate('/selectCollege')
              }} className='button-text'>Register</button>
            </div>
            <div className='bottom-text-1' onClick={() => {
              navigate('/signin')
            }}> Already Registered? Sign  in </div>
            <div className='bottom-text-2'>Know More About Us  </div>

           

          </div>
        </div>
        <div>
              <img src={Landingpage4} 
                className="image2"
              ></img>
            </div>
      </div>
    </>
  )
}
