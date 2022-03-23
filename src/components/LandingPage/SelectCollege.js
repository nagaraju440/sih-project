import React, { Component, useState, useEffect } from 'react'
 import styles from './SelectCollege.css'
import LandingPageImg from '../../assets/Images/LandingPage.png'
import Micon from '../../assets/Icons/Micon.png'


export default function SelectCollege() {

  
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
          </div>
          {/* hii */}
          <label>college /institute/university*</label>
          <input type="password" placeholder="Enter your college name"/><br />
          <div className='Sc-right-section-button'>
          <button type='submit' className='button-text'>Next</button>
          </div>
          <div className='Sc-bottom-text-1'>Already Registered? Sign  in </div>
          <div className='Sc-bottom-text-2'>Know More About Us  </div>

           

          </div>
          </div>
      </div>
    </>
  )
}
