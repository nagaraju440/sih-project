import React, { Component, useState, useEffect } from 'react'
import Authentication from './Authentication';
import {getAuth } from 'firebase/auth'
import NavBar from './components/Navbar/Navbar';
import MCourseDetails from './components/Mentors/M-Courses/MCourseDetails';
function App() {
  // const auth = getAuth()
  // auth.signOut()
  // }


  return (
    // <div>hello</div>
    // <HomeRoutes />
    // <div>
      // {/* <NavBar/> */}
      // <Home/>
      <Authentication/>
    // {/* </div> */}
    // <MCourseDetails/>
  )

}

export default App;