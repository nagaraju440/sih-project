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
import { collection, doc, setDoc, addDoc, getDoc } from "firebase/firestore";
import MentorDashboard from './components/Dashboard/Dashboard';
import NotAuthenticated from './NotAuthenticated';
import db from "./firebaseConfig.js";
import StudentDashboard from './components/Students/Dashboard/Dashboard';
function Authentication() {
    var [authenticated, setAuthenticated] = useState(false);
    var [userRole, setUserRole] = useState('');

    const auth = getAuth();

    // useEffect = () => {
    onAuthStateChanged(auth, async (user) => {
        console.log("user is,", user)

        if (user) {
            const test = await getDoc(doc(db, "colleges", "srkr", "users", user.uid));
            console.log("user details in main page", test.data().role);
            setUserRole(test.data().role)
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
        if (userRole == 'mentor') {
            console.log("authenticated in if", authenticated);
            return <MentorDashboard />
        }
        else {
            return <StudentDashboard />
        }

    }
    else {
        console.log("authenticated in else", authenticated);
        return <NotAuthenticated />
    }
}

export default Authentication;