import React from "react";
import "./MentorAssignments";
import { Input, AutoComplete } from "antd";
import { UserOutlined } from "@ant-design/icons";
// import MCourseCard from './MCourseCard'
import "../M-Courses/MCourses.css";
import MCourseSearch from "../M-Courses/MCourseSearch";
// import MCreateCourseForm from './MCreateCourseForm'
import {
  Routes,
  Route,
  Link,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
export default function MentorAssignments() {
  console.log("mentor assignments");

  return (
    <div className="McourseComponent">
      <div className="MCourseCardSearchContainer">
        <MCourseSearch />
        {/* <Link to="/Dashboard/courses/createCourse"> */}
        <div className="MCourseCardCreateCourseBtn">Create Assignment</div>
        {/* </Link> */}
      </div>
      <div className="McourseCardContainer">{/* <MCourseCard/> */}</div>
      {/* <MCreateCourseForm/> */}
    </div>
  );
}
