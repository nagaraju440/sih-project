import React from 'react'
import {  Link } from "react-router-dom";
import './TopNavBar.css'
export default function TopNavBar() {
  return (
    <div className='Nav-container'>
        ICON HERE
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/mentor/signup">Ideana</Link>
        </li>
        <li>
            <Link to="/student/signup">Connect</Link>
        </li>
        <li>
            <Link to="/mentor/signin">About Us</Link>
        </li>
    </div>
  )
}