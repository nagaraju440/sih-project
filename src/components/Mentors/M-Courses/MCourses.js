import React from 'react'
import MCourseCard from './MCourseCard'
import './MCourses.css'
import MCourseSearch from './MCourseSearch'
import MCreateCourseForm from './MCreateCourseForm'
import {
  Routes, Route, Link, BrowserRouter as Router,
  Switch,
} from "react-router-dom";
export default function MCourses() {
  return (
    <div className='McourseComponent'>
      <div className='MCourseCardSearchContainer'>
        <MCourseSearch />
        <Link to="/Dashboard/courses/createCourse"><div className='MCourseCardCreateCourseBtn'>Create Course</div></Link>
      </div>
      <div className='McourseCardContainer' onClick={MCreateCourseForm}>
      <MCourseCard/>
      </div>
      {/* <MCreateCourseForm/> */}
      
    </div>
  )
}
