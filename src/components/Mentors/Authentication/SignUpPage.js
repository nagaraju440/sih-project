import React, { Component, useState, useEffect } from 'react'
import * as EmailValidator from 'email-validator';
import styles from './SignUpPage.css'
import {
  Routes, Route, Link, BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import db from '../firebaseConfig'
import db from "../../../firebaseConfig.js"

import { collection, doc, setDoc, addDoc } from "firebase/firestore";
import { async } from '@firebase/util';
// const auth = getAuth();

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
  const [validDetails, setvalidDetails] = useState(0)
  var emailAuth = () => {
    console.log("details are verified");
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, Npassword)
      .then(async (userCredential) => {
        const mentorData = {
          name: name,
          email: email,
          phoneNumber: phno,
        }
        const user = userCredential.user;
        const newCityRef = doc(collection(db, "colleges", doc(db, "srkr", collection(db, "mentors"))));
        // const newCityRef = doc(collection(db, "colleges").doc(db, "srkr").collection(db, "mentors"));

        await addDoc(newCityRef, mentorData);

        // console.log("collections are", newCityRef);
        // db.collection("colleges").doc("srkr").collection("mentors").doc(user.uid).set({
        //   name: name,
        //   email: email,
        //   phoneNumber: phno,
        // }).then(function () {
        //   console.log("details are added to collections broo.........");
        // });
        // Signed in 

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("error is", error);
        // ..
      });

  }
  const submitHandler = (e) => {
    e.preventDefault()
    if (name.length > 6) {
      setnamerr(false)
      setvalidDetails(0)
    }
    else {
      setnamerr(true)
      setvalidDetails(1)
    }
    if (EmailValidator.validate(email)) {
      setmailerr(false)
      setvalidDetails(0)
    }
    else {
      setmailerr(true)
      setvalidDetails(1)
    }
    if (phno.length != 10) {
      setphnoerr(true)
      setvalidDetails(0)
    }
    else {
      setphnoerr(false)
      setvalidDetails(1)
    }
    if (Npassword != Cpassword) {
      setpasserr(true)
      setvalidDetails(0)
    }
    else {
      setpasserr(false)
      setvalidDetails(1)
    }
    if (validDetails == 1) {

      emailAuth()
    }
    else {
      console.log("this is error");
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
            {namerr ? <div>Name error bro</div> : <div></div>}
            <br />
            <label className='label'>Email*</label><br />
            <input type="email" autoComplete="email" required onChange={(value) => handlemail(value)} />
            {mailerr ? <div>Email error bro</div> : <div></div>}
            <br />
            <label className='label'>Phone No*</label><br />
            <input type="text" pattern="[0-9]*" maxLength="10" required onChange={(value) => handlephno(value)} />
            {phnoerr ? <div>Number error bro</div> : <div></div>}
            <br />
            <label className='label'>New Password*</label><br />
            <input type="password" required onChange={(value) => handleNpassword(value)} />
            <br />
            <br />
            <label className='label'>Confirm Password*</label><br />
            <input type="password" required onChange={(value) => handleCpassword(value)} />
            {passerr ? <div>password error</div> : <div></div>}
            <br />
            <button type='submit' className='button-text'>Register</button>
          </form>
          {/* <Routes>
          <Route path="SignUpPage" element={<SignUpPage/>}/>
        </Routes> */}
          {/* <Routes>
          <Route path="SignUpPage" element={<SignUpPage/>}>Already Registered? Sign  in ></Route>
        </Routes> */}
          <div>Already Registered? Sign  in </div>
          <div>Know More About Us  </div>
        </div>
      </div>
    </>
  )
}
