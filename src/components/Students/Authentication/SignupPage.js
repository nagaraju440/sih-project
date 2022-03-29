import React, { Component, useState, useEffect } from "react";
import * as EmailValidator from "email-validator";
import './SignUpPage.css'
import {
  Routes,
  Route,
  Link,
  BrowserRouter as Router,
  Switch,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import db from '../firebaseConfig'
import db from "../../../firebaseConfig.js";
import MentorSignInPage from "./SigninPage.js";
import { collection, doc, setDoc, addDoc } from "firebase/firestore";
import SignUp_img from "../../../assets/Images/Student_ Sign Up_Page_ Img.png";
import { Input, Space } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import NavBar from "./NavBar";
import Logo from "../../../assets/Icons/Micon.png";
export default function SignInPage() {
  const navigate = useNavigate();
  const location = useLocation();
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
      collegeName: location.state.collegeName,
    };
    // navigate("/student/signup2", { state: data });
    try {
      const auth = getAuth();
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      // const user = userCredential.user;
      console.log(user);
      const test1 = await setDoc(doc(db, "users", user.uid), {
        role: "student",
        collegeName: data.collegeName,
      });
      const test = await setDoc(
        doc(db, "colleges", location.state.collegeName, "students", user.uid),
        {
          uid: user.uid,
          name,
          authProvider: "local",
          email,
          password,
        }
      );
      console.log("test");
      if (test) {
        console.log("hii routing has done succesfully");
      }
      auth.signOut();
      navigate('/signin')
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (name.length > 6) {
      validDetails = 1;
      setvalidDetails(1);
      setnamerr(false);
    } else {
      setvalidDetails(0);
      setnamerr(true);
    }
    if (EmailValidator.validate(email)) {
      validDetails = 1;
      setvalidDetails(1);
      setmailerr(false);
    } else {
      setvalidDetails(0);
      setmailerr(true);
    }
    if (phno.length != 10) {
      validDetails = 1;
      setvalidDetails(1);
      setphnoerr(true);
    } else {
      setvalidDetails(0);
      setphnoerr(false);
    }
    if (Npassword != Cpassword) {
      validDetails = 1;
      setvalidDetails(1);
      setpasserr(true);
    } else {
      setvalidDetails(0);
      setpasserr(false);
    }
    if (validDetails == 1) {
      emailAuth(name, email, Npassword);
    } else {
      console.log("this is error");
    }
  };
  return (
    <div className="singUpPage">
      {/* <NavBar /> */}
      <div className="container">
        {/* ...................................... left container start's here............................................... */}
        <div className="signUpLeftContainer">
          <img src={SignUp_img} className="Student_img" />
        </div>
        {/* ...................................... right container start's here............................................... */}
        <div className="form-contatiner">
          <div>
            <div className="signUpFormHeaderSection">
              <img src={Logo} alt="" className="Logo" />
              <div className="heading">Mentor Registartion</div>
            </div>
            <div className="subheading">
              Please, provide the information below
            </div>
            <form onSubmit={submitHandler} className="form-sub">
              {/* <div className="inputBox-container"> */}{" "}
              <label className="label">Full Name*</label>
              <br />
              <input
                type="name"
                autoComplete="name"
                required
                onChange={(value) => handlename(value)}
              />
              {/* </div> */}
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
              {mailerr ? (
                <div className="err">Email error bro</div>
              ) : (
                <div></div>
              )}
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
              {passerr ? (
                <div className="err">password error</div>
              ) : (
                <div></div>
              )}
              <div className="button-section">
                <button type="submit" className="button-text">
                  Register
                </button>
              </div>
            </form>
            <div className="bottom-text">
              <Link to="/mentor/signin">Already Registered? Sign in</Link>
              {/* <div>Already Registered? Sign in </div> */}
              <div>Know More About Us </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
