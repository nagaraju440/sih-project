import React, { Component, useState, useEffect } from 'react'
 import styles from './SelectCollege.css'
import LandingPageImg from '../../assets/Images/LandingPage.png'
import Micon from '../../assets/Icons/Micon.png'
import { Select } from 'antd';

import {
  Routes, Route, Link, BrowserRouter as Router,
  Switch, withRouter,useNavigate  
} from "react-router-dom";
export default function SelectCollege() {
   

    const navigate=useNavigate();
    const { Option } = Select;

    function onChange(value) {
      console.log(`selected ${value}`);
    }
    
    function onBlur() {
      console.log('blur');
    }
    
    function onFocus() {
      console.log('focus');
    }
    
    function onSearch(val) {
      console.log('search:', val);
    }
  
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
          <div className="select-tag">
          {/* <input type="password" placeholder="Enter your college name"/><br /> */}
                <Select
          showSearch
          style={{ width: 200 }}
          placeholder="Select a College"
          optionFilterProp="children"
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          onSearch={onSearch}
          filterOption={(input, option) =>
            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          <Option value="Srkr">SRKR</Option>
          <Option value="Vishnu">Vishnu</Option>
          <Option value="Stanford">Stanford</Option>
          <Option value="mit">MIT</Option>
          <Option value="Pixar">Pixar</Option>
        </Select>,
        </div>
          <div className='Sc-right-section-button'>
          <button type='submit' onClick={()=>{
            navigate('/mentorOrStudent_signup',{state:{collegeName:"SRKR"}})
          }} className='button-text'>Next</button>
          </div>
          <div className='Sc-bottom-text-1'>Already Registered? Sign  in </div>
          <div className='Sc-bottom-text-2'>Know More About Us  </div>

           

          </div>
          </div>
      </div>
    </>
  )
}
