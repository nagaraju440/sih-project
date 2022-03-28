import React, { Component, useState, useEffect } from 'react'
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

import {
    Routes, Route, BrowserRouter as Router,
  
  } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import MentorDashboard from './components/Dashboard/Dashboard';
import NotAuthenticated from './NotAuthenticated';
import db from "./firebaseConfig.js";
import StudentDashboard from './components/Students/Dashboard/Dashboard';
import MCourses from './components/Mentors/M-Courses/MCourses';
import Chat from './firebasechat/Chat';
function Authentication() {
    var [authenticated, setAuthenticated] = useState(false);
    var [userRole, setUserRole] = useState('');
    var [collegeName, setCollegeName] = useState('')
    var [userUid, setUserUid] = useState('')
    const auth = getAuth();

    // useEffect = () => {
    onAuthStateChanged(auth, async (user) => {
        // console.log("user is,", user)

        if (user) {
            setUserUid(user.uid)

            const test = await getDoc(doc(db, "users", user.uid));

            // console.log("user details in main page", test.data().role, test.data());
            setCollegeName(test.data().collegeName)
            setUserRole(test.data().role)
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
            return <MentorDashboard collegeName={collegeName} role={userRole} userUid={userUid} />

        }
        else {
            return <Router><StudentDashboard collegeName={collegeName} role={userRole} userUid={userUid} /></Router>


        }

    }
    else {
        return <NotAuthenticated />
    }
}

export default Authentication;