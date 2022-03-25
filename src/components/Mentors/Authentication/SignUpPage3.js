import React, { Component, useState, useEffect } from "react";
import styles from "./SignUpPage3.css";
import { Select } from "antd";
import Micon from "../../../assets/Icons/Micon.png";
import { useLocation, withRouter, useNavigate } from 'react-router-dom';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { collection, doc, setDoc, addDoc } from "firebase/firestore";
import db from "../../../firebaseConfig.js";
import { Input } from 'antd';
import NavBar from "../../Students/Authentication/NavBar";

export default function SignUpPage3(props) {
  let location = useLocation();

  const { Option } = Select;
  const { TextArea } = Input;

  const projects = ['online-shopping', 'bug-tracking', 'e-waste-collection'];
  for (let i = 0; i < 3; i++) {
    projects.push(
      <Option key={projects[i]} ></Option>
    );
  }
  var onSubmitdata = async (e) => {
    let data = location.state
    data['projects'] = ['p1', 'p2', 'p3']
    data['expeience'] = "Tell me about your experience"
    data['about'] = 'about yourself'
    console.log("data in s3", data);
    e.preventDefault();
    try {
      const auth = getAuth();
      const res = await createUserWithEmailAndPassword(auth, data.email, data.password);
      const user = res.user;
      const test1 = await setDoc(
        doc(db,  "users", user.uid),
        {
          role: 'mentor',
          collegeName:data.collegeName
        }
      );

      
      // const user = userCredential.user;
      console.log(user);
      const test = await setDoc(
        doc(db, "colleges", data.collegeName, "mentors", user.uid),
        {
          data
        }
      );
    
    } catch (err) {
      console.error(err);
      alert(err.message);
    }


  }
  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  function About(value) {
    console.log(`hii${value}`);
  }
  function onChange(value) {
    console.log(`hii${value}`);

  };
  return (
    <>
    <NavBar/>
      <div className="SignUpPage3-container">
        <div className="SignUpPage3-form">

          <div className="SignUpPage3-main-heading">
            <img src={Micon} className="SignUpPage3-Micon"></img>
            <div className="SignUpPage3-heading">Mentor Registartion</div>
          </div>

          <div className="SignUpPage3-subheading">
            Please, provide the information below
          </div>



          <form className="SignUpPage3-form-sub">
            <label className="SignUpPage3-label">Completed Projects</label>
            <br />
            <div className="SignUpPage3-form-select">
              <Select
                mode="tags"
                style={{ width: "100%" }}
                // onChange={Projects}
                tokenSeparators={[","]}
              >
                {projects}
              </Select>
            </div>
            <label className="SignUpPage3-label">Experience</label>
            <br />
            <div className="SignUpPage3-form-select">
              <Input style={{ width: "100%" }} placeholder="Give your years of experience" onChange={onChange} />
            </div>
            <label className="SignUpPage3-label">About</label>
            <br />
            <TextArea rows={4} onChange={About} />


            {/* <div className="button-class">
              <button
                
                onClick={onSubmitdata}
                className="button-text"
              >
                Next
              </button>
            </div> */}
            <br />

            <div className="SignUpPage3-button-class">
              <button onClick={onSubmitdata} className="SignUpPage3-button-text" >Next </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
