import logo from './logo.svg';
import React, { Component, useState, useEffect } from 'react'
import './App.less';
import { Button } from 'antd';
import 'antd/dist/antd.css';
import AntdSample from './AntdSample/AntdSample';
import CloudFirestore from './FirebaseSample/CloudFirestore';
import {
    Routes, Route, Link, BrowserRouter as Router,
    Switch,
} from "react-router-dom";
import MentorSignUpPage from './components/Mentors/Authentication/SignUpPage';
import MentorSignInPage from './components/Mentors/Authentication/SigninPage';
import StudentSignUpPage from './components/Students/Authentication/SignupPage';
import StudentSignInPage from './components/Students/Authentication/SigninPage';
import MenuBarPage from './components/Dashboard/MenuBarPage';
import TopNavBar from './components/Dashboard/TopNavBar';
// import Dashboard from './components/Dashboard/Dashboard';
import LandingPage from './components/LandingPage/LandingPage'
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import Dashboard from './components/Dashboard/Dashboard';
function Authentication() {
    var [authenticated, setAuthenticated] = useState(false);
    const auth = getAuth();

    // useEffect = () => {
    onAuthStateChanged(auth, (user) => {
        console.log("user is,", user)

        if (user) {
            // auth.signOut()
            // User is signed in.
            setAuthenticated(true);
        } else {
            setAuthenticated(false);
            // No user is signed in.
        }
    })
    // }


    if (authenticated) {
        console.log("authenticated in if", authenticated);
        return <Dashboard/>
    }
    else {
        console.log("authenticated in else", authenticated);
        return <LandingPage />
    }
    // <Router>
    //         <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="mentor/signup" element={<MentorSignUpPage/>}  />
    //       <Route path="mentor/signup1" element={<SignUpPage1/>}/>
    //       <Route path="mentor/signin" element={<MentorSignInPage/>}  />
    //       <Route path="student/signup" element={<StudentSignUpPage/>}  />
    //       <Route path="student/signin" element={<StudentSignInPage/>}  />
    //       <Route path="about" element={<About />} />
    //       <Route path="menuBarPage" element={<MenuBarPage/>}/>
    //       <Route path="topnavbar" element={<TopNavBar/>}/>
    //       <Route path="dashboard" element={<Dashboard/>}/>
    //       <Route path="LandingPage" element={<LandingPage/>}/>
    //     </Routes>
    //     </Router>


}

export default Authentication;