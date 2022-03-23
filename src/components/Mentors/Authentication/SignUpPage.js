import React, { Component, useState, useEffect } from "react";
import * as EmailValidator from "email-validator";
import styles from "./SignUpPage.css";
import {
  Routes,
  Route,
  Link,
  BrowserRouter as Router,
  Switch,
  withRouter,
  useNavigate,
} from "react-router-dom";
import { Redirect } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
// import db from '../firebaseConfig'
import db from "../../../firebaseConfig.js";
import MentorSignInPage from "./SigninPage.js";
import { collection, doc, setDoc, addDoc } from "firebase/firestore";
import { async } from "@firebase/util";
import { Input, Space } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import Mentor_img from '../../../assets/Images/Mentor_SignUp_img.png'
// const auth = getAuth();

export default function SignUpPage(props) {
  // let history = useHistory();
  const navigate = useNavigate();

  // console.log("props/ in sign up page is",navigate)
  const [name, setname] = useState("");
  const handlename = (e) => {
    setname(e.target.value);
    console.log(name);
  };
  const [email, setemail] = useState("");
  const handlemail = (e) => {
    setemail(e.target.value);
    console.log(email);
  };
  const [phno, setphno] = useState("");
  const handlephno = (e) => {
    setphno(e.target.value);
    console.log(phno);
  };
  const [Npassword, setNpassword] = useState("");
  const handleNpassword = (e) => {
    setNpassword(e.target.value);
  };
  const [Cpassword, setCpassword] = useState("");
  const handleCpassword = (e) => {
    setCpassword(e.target.value);
  };
  const [namerr, setnamerr] = useState(false);
  const [mailerr, setmailerr] = useState(false);
  const [phnoerr, setphnoerr] = useState(false);
  const [passerr, setpasserr] = useState(false);
  var [validDetails, setvalidDetails] = useState(0);
  const emailAuth = async (name, email, password) => {
    const data = {
      name: name,
      email: email,
      password: password,
    }
    navigate("/mentor/signup2", { state: data });
    // try {
    //   const auth = getAuth();
    //   const res = await createUserWithEmailAndPassword(auth, email, password);
    //   const user = res.user;
    //   // const user = userCredential.user;
    //   console.log(user);
    //   const test = await setDoc(
    //     doc(db, "colleges", "srkr", "mentors", user.uid),
    //     {
    //       uid: user.uid,
    //       name,
    //       authProvider: "local",
    //       email,
    //       password,
    //     }
    //   );

    // } catch (err) {
    //   console.error(err);
    //   alert(err.message);
    // }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (name.length > 6) {
      setnamerr(false);
      validDetails = 1;
      setvalidDetails(1);
    } else {
      setnamerr(true);
      setvalidDetails(0);
    }
    if (EmailValidator.validate(email)) {
      setmailerr(false);
      validDetails = 1;

      setvalidDetails(1);
    } else {
      setmailerr(true);
      setvalidDetails(0);
    }
    if (phno.length != 10) {
      setphnoerr(true);
      setvalidDetails(0);
    } else {
      setphnoerr(false);
      validDetails = 1;

      setvalidDetails(1);
    }
    if (Npassword != Cpassword) {
      setpasserr(true);
      setvalidDetails(0);
    } else {
      setpasserr(false);
      validDetails = 1;

      setvalidDetails(1);
    }
    if (validDetails == 1) {
      emailAuth(name, email, Npassword);
    } else {
      console.log("this is error");
    }
  };

  return (
    <>
      <div className="container">
        <div>
          <img src={Mentor_img} className="mentor_img" />
        </div>
        <div className="form">
          <div className="heading">Mentor Registartion</div>
          <div className="subheading">
            Please, provide the information below
          </div>
          <form onSubmit={submitHandler} className="form-sub">
            <label className="label">Full Name*</label>
            <br />
            <input
              type="name"
              autoComplete="name"
              required
              onChange={(value) => handlename(value)}
            />
            {namerr ? <div className="err">Name error bro</div> : <div></div>}
            <br />
            <label className="label">Email*</label>
            <br />
            <input
              type="email"
              autoComplete="email"
              required
              onChange={(value) => handlemail(value)}
            />
            {mailerr ? <div className="err">Email error bro</div> : <div></div>}
            <br />
            <label className="label">Phone No*</label>
            <br />
            <input
              type="text"
              pattern="[0-9]*"
              maxLength="10"
              required
              onChange={(value) => handlephno(value)}
            />
            {phnoerr ? (
              <div className="err">Number error bro</div>
            ) : (
              <div></div>
            )}
            <br />
            <label className="label">New Password*</label>
            <br />
            <Space direction="vertical">
              <Input.Password
                className="pwd-input"
                type="password"
                required
                onChange={(value) => handleNpassword(value)}
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
            </Space>
            <br />
            <br />
            <label className="label">Confirm Password*</label>
            <br />
            <input
              type="password"
              required
              onChange={(value) => handleCpassword(value)}
            />
            {passerr ? <div className="err">password error</div> : <div></div>}
            <br />
            <button type="submit" className="button-text" >
              Register
            </button>
          </form>
          <li>
            <Link to='/mentor/signin'>Already Registered? Sign in</Link>
          </li>
          {/* <div>Already Registered? Sign in </div> */}
          <div>Know More About Us </div>
        </div>
      </div>
    </>
  );
}
