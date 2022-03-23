import React, { Component, useState } from 'react'
import * as EmailValidator from 'email-validator';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {
  Routes, Route, Link, BrowserRouter as Router,
  Switch, withRouter,useNavigate  
} from "react-router-dom";
import { Input, Space } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
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
        alert("Please provide valid details")
        const errorCode = error.code;
        const errorMessage = error.message;
      });

  }

  return (
    <>
      <div className='container'>
        <div>
         
        </div>
        <div>
          <div className='heading'>Mentor Sign in</div>
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
              <button className='button-text'>Sign in</button>
            </form>
            <li>
              <Link to="/mentor/signup">Don’t have an account ? Sign  up</Link>
            </li>
            <li>
              <Link to="/topnavbar">Know More About Us</Link>
            </li>
          </div>
        </div>
      </div>
    </>
  )
}
