import React, { Component, useState, useEffect } from "react";
import styles from "./SignUpPage2.css";
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

export default function SignUpPage2(props) {

  let location = useLocation();
  const navigate = useNavigate();
  const { Option } = Select;
  const children = [];
  for (let i = 10; i < 36; i++) {
    children.push(
      <Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>
    );
  }
  var onSubmitdata = async () => {
    let data = location.state
    data['projects'] = ['p1', 'p2', 'p3']
    data['expeience'] = "Tell me about your experience"
    data['about'] = 'abput yourself'
    console.log("data in s3", data);
    try {
      const auth = getAuth();
      const res = await createUserWithEmailAndPassword(auth, data.email, data.password);
      const user = res.user;
      // const user = userCredential.user;
      console.log(user);
      const test = await setDoc(
        doc(db, "colleges", "srkr", "mentors", user.uid),
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
  return (
    <>
      <div className="container">
        <div className="form">
          <div className="main-heading">
            <img src={Micon} className="Micon"></img>
            <div className="heading">Mentor Registartion</div>
          </div>
          <div className="subheading">
            Please, provide the information below
          </div>

          {/* Form element */}

          <form className="form-sub">
            <label className="label">Completed Projects</label>
            <br />
            <div className="form-select">
              <Select
                mode="tags"
                style={{ width: "80%" }}
                onChange={handleChange}
                tokenSeparators={[","]}
              >
                {children}
              </Select>
            </div>
            <label className="label">Experience</label>
            <br />
            <div className="form-select">
              <Input style={{ width: "80%" }} placeholder="Give your years of experience" />
            </div>



          </form>

          <div
            className="skip"
            onClick={() => {
              console.log("hii skip");
            }}
          >
            Skip
          </div>

          <div className="button-class">
            <button
              type="submit"
              onClick={onSubmitdata()}
              className="button-text"
            >
              Next
            </button>
          </div>

          {/* <-----------End of the form element--------> */}
        </div>
      </div>
    </>
  );
}
