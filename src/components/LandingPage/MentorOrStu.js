import React, { Component, useState, useEffect } from 'react'
 import styles from './MentorOrStu.css'
import LandingPageImg from '../../assets/Images/LandingPage.png'
import Micon from '../../assets/Icons/Micon.png'
import Landingpage3 from '../../assets/Images/landingpage3.png'
import Landingpage4 from '../../assets/Images/Landingpage4.png'
import {
  Routes, Route, Link, BrowserRouter as Router,
  Switch, withRouter,useNavigate ,useLocation 
} from "react-router-dom";
import NavBar from '../Students/Authentication/NavBar';
export default function MentorOrStu() {
 

  const navigate=useNavigate();
  var location=useLocation();
  console.log("selected college name is",location.state.collegeName) 
  return (
    <>
    {/* <NavBar/> */}
    <div className='MainContainer'>
        <div className='inner-container'>
          <div className='left-section'>
            {/* <div className='left-section-1'> */}

            <h2 className='left-section-text'>Struggling with learning</h2>

             <img src={Landingpage3} className='image1' alt="Image over here" /> 


          </div>
          <div className='right-section'>
           <div>
             <div className='rs-heading-container'>
             <div className='right-section-icon'>
              <img src={Micon} alt="logo" className="imgStyles" />
            </div>
           <h1 className='right-section-text'><b style={{color: '#004E89'}}>Teaching </b>is <br></br>to learn <b style={{color: '#004E89'}}>twice</b> over</h1>
             </div>
           <div className='below-text'>
           <div className='Sc-right-section-text-3'>
         What do you wish to register for?
         </div>
         <div className='Ms-right-section-button-1'>
          <button type='submit' onClick={()=>{
                 navigate('/mentor/signup',{state:{collegeName:location.state.collegeName}})
          }} className='button-text'>Mentor</button>
          </div>
          <div className='Ms-right-section-button-2'>
          <button type='submit'  onClick={()=>{
                 navigate('/student/signup',{state:{collegeName:location.state.collegeName}})
          }} className='button-text'>Student</button>
          </div>
            {/* <div className='right-section-button'>
              <button type='submit' onClick={() => {
                navigate('/selectCollege')
              }} className='button-text'>Register</button>
            </div> */}
           

           </div>
           <div className='bottom-text-1' onClick={() => {
              navigate('/signin')
            }}> Already Registered? Sign  in </div>
            <div className='bottom-text-2'>Know More About Us  </div>
           </div>

          </div>
        </div>
        <div>
              <img src={Landingpage4} 
                className="image2"
              ></img>
            </div>
      </div>
      {/* <div className='Sc-MainContainer'>
          
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

         <div className='Sc-right-section-text-3'>
         What do you wish to register for?
         </div>

          <div className='Ms-right-section-button-1'>
          <button type='submit' onClick={()=>{
                 navigate('/mentor/signup',{state:{collegeName:location.state.collegeName}})
          }} className='button-text'>Mentor</button>
          </div>
          <div className='Ms-right-section-button-2'>
          <button type='submit'  onClick={()=>{
                 navigate('/student/signup',{state:{collegeName:location.state.collegeName}})
          }} className='button-text'>Student</button>
          </div>
          <li>
            <Link to="/signin">Already Registered? Sign  in</Link>
          </li>
          <div className='Sc-bottom-text-2'>Know More About Us  </div>

           

          </div>
          </div>
      </div> */}
    </>
  )
}
