import React, { Component, useState, useEffect } from 'react'
 import styles from './SelectCollege.css'
import Landingpage3 from '../../assets/Images/landingpage3.png'
import Landingpage4 from '../../assets/Images/Landingpage4.png'
import Micon from '../../assets/Icons/Micon.png'
import { Select } from 'antd';

import {
  Routes, Route, Link, BrowserRouter as Router,
  Switch, withRouter,useNavigate  
} from "react-router-dom";
import NavBar from '../Students/Authentication/NavBar';
export default function SelectCollege() {
   
   const [collegeName,setCollegeName] = React.useState('')
   const [disable, setDisable] = React.useState(true);
    const navigate=useNavigate();
    const { Option } = Select;

    function onChange(value) {
      console.log(`selected ${value}`);
      setCollegeName(value)
      console.log(value,"yuyiuouo")
      if(value!=""){
        setDisable(false); 
        console.log(disable)
      }
      else{
        setDisable(true); 
        console.log(disable)
      }
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
    <NavBar/>
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
             <label className="Sc-label">college /institute/university*</label>
          <div className="select-tag">
                <Select
          showSearch
          style={{ width: 400 }}
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
          <Option value="IIT">IIT</Option>
          <Option value="klu">klu</Option>
          <Option value="srm">srm</Option>
        </Select>,
        </div>
          <div className='Sc-right-section-button'>
          <button type='submit' onClick={()=>{
            navigate('/mentorOrStudent_signup',{state:{collegeName:collegeName}})
          }} className='button-text' disabled={disable} >Next</button>
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
          
          <div className='Sc-left-section'>
              <h2 className='Sc-left-section-text'>Struggling with Learning</h2>
           
              <img src={Landingpage3} alt="Image over here" className="select-image"/>


          </div>
          <div className='Sc-right-section'>
          <h1 className='Sc-right-section-text'><b style={{color: '#004E89'}}>Teaching </b>is<br></br>to learn <b style={{color: '#004E89'}}>twice</b> over</h1>
          <div className='Sc-right-section-icon'>
          <img src={Micon} alt="logo" className="imgStyles"/>
          </div>
          <label className="Sc-label">college /institute/university*</label>
          <div className="select-tag">
                <Select
          showSearch
          style={{ width: 400 }}
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
            navigate('/mentorOrStudent_signup',{state:{collegeName:collegeName}})
          }} className='button-text'>Next</button>
          </div>
          <div onClick={() => {
              navigate('/signin')
            }} className='Sc-bottom-text-1'>Already Registered? Sign  in </div>
          <div className='Sc-bottom-text-2'>Know More About Us  </div>
          <div>
              <img src={Landingpage4}
                className="sc-image2"
              ></img>
            </div>
           

          </div>
          </div> */}
    </>
  )
}
