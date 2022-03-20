import React, { Component, useState, useEffect } from 'react'
import * as EmailValidator from 'email-validator';
import styles from './SignUpPage.css'
import {
  Routes, Route, Link, BrowserRouter as Router,
  Switch,
} from "react-router-dom";
export default function SignInPage() {

  const [name, setname] = useState("")
  const handlename = (e) => {
    setname(e.target.value)
    console.log(name)

  }
  const [email, setemail] = useState("")
  const handlemail = (e) => {
    setemail(e.target.value)
    console.log(email)

  }
  const [phno, setphno] = useState("")
  const handlephno = (e) => {
    setphno(e.target.value)
    console.log(phno)
  }
  const [Npassword, setNpassword] = useState("")
  const handleNpassword = (e) => {
    setNpassword(e.target.value)
  }
  const [Cpassword, setCpassword] = useState("")
  const handleCpassword = (e) => {
    setCpassword(e.target.value)
  }
  const [namerr, setnamerr] = useState(false)
  const [mailerr, setmailerr] = useState(false)
  const [phnoerr, setphnoerr] = useState(false)
  const [passerr, setpasserr] = useState(false)
  const submitHandler = (e) => {
    e.preventDefault()
    if (name.length > 6) {
      setnamerr(false)
    }
    else {
      setnamerr(true)
    }
    if (EmailValidator.validate(email)) {
      setmailerr(false)
    }
    else {
      setmailerr(true)
    }
    if (phno.length != 10) {
      setphnoerr(true)
    }
    else {
      setphnoerr(false)
    }
    if (Npassword != Cpassword) {
      setpasserr(true)
    }
    else {
      setpasserr(false)
    }
  }
  return (
    <>
      <div className='container'>
        <div>IMAGE</div>
        <div className='form'>
          <div className='heading'>Mentor Registartion</div>
          <div className="subheading">
            Please, provide  the information below
          </div>
          <form onSubmit={submitHandler} className="form-sub">
            <label className='label'>Full Name*</label><br />
            <input type="name" autoComplete="name" required onChange={(value) => handlename(value)} />
            {namerr ? <div className='err'>Name error bro</div> : <div></div>}
            <br />
            <label className='label'>Email*</label><br />
            <input type="email" autoComplete="email" required onChange={(value) => handlemail(value)} />
            {mailerr ? <div className='err'>Email error bro</div> : <div></div>}
            <br />
            <label className='label'>Phone No*</label><br />
            <input type="text" pattern="[0-9]*" maxLength="10" required onChange={(value) => handlephno(value)} />
            {phnoerr ? <div className='err'>Number error bro</div> : <div></div>}
            <br />
            <label className='label'>New Password*</label><br />
            <input type="password" required onChange={(value) => handleNpassword(value)} />
            <br />
            <br />
            <label className='label'>Confirm Password*</label><br />
            <input type="password" required onChange={(value) => handleCpassword(value)} />
            {passerr ? <div className='err'>password error</div> : <div></div>}
            <br />
            <button type='submit' className='button-text'>Register</button>
          </form>
          {/* <Routes>
          <Route path="SignUpPage" element={<SignUpPage/>}/>
        </Routes> */}
          {/* <Routes>
          <Route path="SignUpPage" element={<SignUpPage/>}>Already Registered? Sign  in ></Route>
        </Routes> */}
          <div>Already Registered? Sign  in  </div>
          <div>Learn More About Us  </div>
        </div>
      </div>
    </>
  )
}