import React, { Component, useState } from 'react'
import * as EmailValidator from 'email-validator';
import './SignIn.css'
// import {
//   Routes, Route, Link, BrowserRouter as Router,
//   Switch, withRouter,useNavigate  
// } from "react-router-dom";
import { Input, Space } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {
  Routes, Route, Link, BrowserRouter as Router,
  Switch, withRouter, useNavigate
} from "react-router-dom";
import Micon from './assets/Icons/Micon.png'
// import { Input, Space } from "antd";
// import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import NavBar from './components/Students/Authentication/NavBar';
export default function SignInPage() {
  const navigate=useNavigate()
  const [email, setemail] = useState("")
  const mailhandler = (e) => {
    setemail(e.target.value)
  }
  const [password, setpassword] = useState("")
  const passwordhandler = (e) => {
    setpassword(e.target.value)
  }
  const [mailerr, setmailerr] = useState(false)
  // const submithandler = (e) => {
  //   e.preventDefault()
  // }
  const submithandler = (e) => {
    e.preventDefault()
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {

        // Signed in 
        const user = userCredential.user;
        console.log("user details", user);
        navigate('/Dashboard')
        // ...
      })
      .catch((error) => {
        console.log(error);
        alert("Please provide valid details",error)
        const errorCode = error.code;
        const errorMessage = error.message;
      });

  }
  return (
    <div className='signin-main-container'>
    {/* <div ><NavBar/></div> */}
      <div className='signin-main-inner-container'>
      <div className='signin-container'>
        <div > 
            <div className='signin-heading-container'>
            <img src={Micon} alt="logo" className="micon-style" />
            
            <div className='heading'> Sign in</div>
            </div>
          <div>
            <div className='subheading'>Please, provide  the information below</div><br />
            <form onSubmit={submithandler}>
              <label >Email*</label><br />
              <input type="email" required autoComplete='email' onChange={(value) => mailhandler(value)} /><br /><br />
              {mailerr ? <div className='err'>Email error bro</div> : <div></div>}
              <label>Password*</label><br />
              <Space direction="vertical">
              <Input.Password
               className="pwd-input"
                type="password"
                required
                onChange={(value) => passwordhandler(value)}
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
            </Space>
              {/* <input type="password" required onChange={(value) => passwordhandler(value)} /><br /> */}
              <div className='forget-password'>Forget Password ? click here !</div><br />
              <button className='button-text' type='submit'>Sign in</button>
            </form>
            <div className='signin-bottom-text1'>
              <Link to="/student/signup">
              Don’t have an account ? Sign  up 
              </Link>
            </div>
            <div>
              <Link to="/Dashboard">
              Know More About Us
              </Link>
            </div>
            {/* <div >Don’t have an account ? Sign  up </div> */}
            {/* <div>Know More About Us </div> */}
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}
