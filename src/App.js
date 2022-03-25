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
import Dashboard from './components/Dashboard/Dashboard';
import LandingPage from './components/LandingPage/LandingPage'
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import MentorDashboard from './components/MentorDashboard/MentorDashboard';
import Authentication from './Authentication';
import SignUpPage1 from './components/Mentors/Authentication/SignUpPage1'
import SignUpPage2 from './components/Mentors/Authentication/SignUpPage2'
import SignUpPage3 from './components/Mentors/Authentication/SignUpPage3'
// import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import Test_Card from './components/Mentors/test_Card';
import Test_Cards2 from './components/Mentors/test_Cards2';
import MCourses from './components/Mentors/M-Courses/MCourses';
function App() {
  // const auth = getAuth()
  // auth.signOut()
  // }


  return (
    <Authentication />
    // <Test_Card/>
    // <Test_Cards2/>
    // <MCourses/>

  )

}

export default App;
// /* <Router>
//     <Routes>
//       <Route path="/" element={<Authentication />}/>
//       <Route path="/Dashboard" element={<Dashboard/>}/>
//       <Route path="mentor/signup" element={<MentorSignUpPage />} />
//       <Route path="mentor/signup1" element={<SignUpPage1 />} />
//       <Route path="mentor/signin" element={<MentorSignInPage />} />
//       <Route path="student/signup" element={<StudentSignUpPage />} />
//       <Route path="student/signin" element={<StudentSignInPage />} />
//       <Route path="about" element={<About />} />
//       <Route path="menuBarPage" element={<MenuBarPage />} />
//       <Route path="topnavbar" element={<TopNavBar />} />
//       <Route path="dashboard" element={<Dashboard />} />
//       <Route path="LandingPage" element={<LandingPage />} />
//       <Route path="selectCollege" element={<SelectCollege/>}   />
//       <Route path="mentorOrStudent_signup" element={<MentorOrStu/>}   />
//       <Route path="mentorOrStudent_signin" element={<MentorOrStudentSignin/>}   />
//     </Routes>
//     </Router>
// function Home() {
//   return (
//     <>
//       <main>
//         <h2>Welcome to the homepage!</h2>
//         <p>You can do this, I believe in you.</p>
//       </main>
//       <nav>
//         <Link to="/mentor/signup">mentor Sign up page</Link>
//       </nav>
//       <nav>
//         <Link to="/mentor/signin">mentor Sign in page</Link>
//       </nav>
//       <nav>
//         <Link to="/student/signup">Student Sign up page</Link>
//       </nav>
//       <nav>
//         <Link to="/student/signin">Student Sign in page</Link>
//       </nav>
//       <nav>
//         <Link to="/menuBarPage">MenuBarPage Page</Link>
//       </nav>
//       <nav>
//         <Link to="/topnavbar">topnavbar</Link>
//       </nav>
//       <nav>
//         <Link to="/dashboard">Dashboard</Link>
//       </nav>
//       <nav>
//         <Link to="/LandingPage">LandingPage</Link>
//       </nav>
//       <nav>
//         <Link to="/SelectCollege">SelectCollege</Link>
//       </nav>
//       <nav>
//         <Link to="/MentorOrStu">MentorOrStu</Link>
//       </nav>
//     </>
//   );
// }

// function About() {
//   return (
//     <>
//       <main>
//         <h2>Who are we?</h2>
//         <p>
//           That feels like an existential question, don't you
//           think?
//         </p>
//       </main>
//       <nav>
//         <Link to="/">Home</Link>
//       </nav>
//     </>
//   );
// }*/