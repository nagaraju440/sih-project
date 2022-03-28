import React, { Component, useState, useEffect } from 'react'
import Authentication from './Authentication';
import {getAuth } from 'firebase/auth'
import NavBar from './components/Navbar/Navbar';
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
  )

}

export default App;