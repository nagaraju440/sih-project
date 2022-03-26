import React, { Component, useState, useEffect } from "react";
import styles from "./SignUpPage3.css";
import { Select } from "antd";
import Micon from "../../../assets/Icons/Micon.png";
import { useLocation, withRouter, useNavigate, Navigate } from 'react-router-dom';
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
  const navigate=useNavigate()
  let location = useLocation();

  const { Option } = Select;
  const { TextArea } = Input;
  const [about, setabout] = useState("");
  const[exp,setexp]=useState("");
  const [completedProject,setCompletedProject]=useState([])

  const projects = ['online-shopping', 'bug-tracking', 'e-waste-collection'];
  for (let i = 0; i < 3; i++) {
    projects.push(
      <Option key={projects[i]} ></Option>
    );
  }
  // console.log("state from page 2 in page 3 is ",location.state)

  var onSubmitdata = async (e) => {
    e.preventDefault();
    let data = location.state
    data['projects'] = completedProject
    data['expeience'] = exp
    data['about'] = about
    console.log(about)
    console.log(exp)
    console.log("data in s3", data);
    
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

      console.log(user);
      const test = await setDoc(
        doc(db, "colleges", data.collegeName, "mentors", user.uid),
        {
          data
        }
      );
      auth.signOut();
      navigate('/signin')
    } catch (err) {
      console.error(err);
      alert(err.message);
    }


  }
  
  function About(e) {
    console.log(e.target.value);
    setabout(e.target.value)
  }
  function onChange(e) {
    console.log(e.target.value);
    setexp(e.target.value);
  };
  function ProjectFn(x){
     setCompletedProject(Object.values(x))
  }
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



          <div className="SignUpPage3-form-sub">
            <label className="SignUpPage3-label">Completed Projects</label>
            <br />
            <div className="SignUpPage3-form-select">
              <Select
                mode="tags"
                style={{ width: "100%" }}
                tokenSeparators={[","]}
                onChange={ProjectFn}
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
            <br />

            <div className="SignUpPage3-button-class">
              <button onClick={onSubmitdata} className="SignUpPage3-button-text" >Next </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
