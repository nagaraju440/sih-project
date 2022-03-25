import React, { useState } from "react";
import {
  Menu,
  Dropdown,
  Button,
  message,
  Space,
  Tooltip,
  DatePicker,
  TimePicker,
  Input,
} from "antd";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import AddIcon from "../../../assets/Icons/Plus.svg";

import EditIcon from "../../../assets/Icons/edit.svg";
import { useLocation, withRouter, useNavigate } from 'react-router-dom';
import { collection, doc, setDoc, addDoc } from "firebase/firestore";
import db from "../../../firebaseConfig.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged
} from "firebase/auth";
import { SidebarFooter } from "react-pro-sidebar";

function MCreateCourseForm() {
  const category = [
    'Fornt End',
    'Back End',
    'Full Stack',
    'Artificial Intiligence',
    'Machine Learning',
    'Programming Languges',
    'Compitative Coding',
    'Communication skills',
    'othere',
  ]
  const language = [
    'HTML',
    'CSS',
    'JS',
    'React',
  ]
  
  const standard = [
    'beginner',
    'medium',
    'Advanced',
  ]
  let location = useLocation();
  const [value, setValue] = useState(null);
  const [Category1, setCategory1] = useState("");
  const [Language1, setLanguage1] = useState("");
  const [Standard1, setStandard1] = useState("");
  const [Title, setTitle] = useState("");
  const [Link, setLink] = useState("");
  const { RangePicker } = TimePicker;
  const { TextArea } = Input;
  const [Ptitle,setPTitle]=useState("")
  const [Pdes,setPDes]=useState("")
  const [count,setcount]=useState(0)
  
  
 

  var onSubmitdata = async (e) => {
    console.log("hii",Category1,Language1,Standard1,Title,Link)      
    // console.log(user.email)
    let data = location.state
    try {
      const auth = getAuth();
      onAuthStateChanged(auth,user =>{
        console.log(user.uid,user.email)

     setDoc(doc(db, "colleges", "srkr","mentors",user.uid,"courses","course8"), {
       Category:Category1,
       Language:Language1,
       Standard:Standard1,
       Link:Link,
       Title:Title,

      Projects:[{title:Ptitle,des:Pdes}]
       
    // title: "Hello world!",
    // link:"zoom.com",
    // category: {
    //     Machinelearning:["Tensorflow", "pandas", "numpy"],
    //     Backend:["node", "php", "jsp"],
    //     Frontend:["html", "css", "react"],
    //     GameDevelopmemt:["android", "ios", "native"],
        
    // },
    // Standard:["Easy", "Medium", "Hard"],
    // date:"5/10/2020",
    // time:"10:00",
    // date: Timestamp.fromDate(new Date("December 10, 1815")),
    })
  })

  
} catch (err) {
  console.error(err);
  alert(err.message);
}
  }




  function selectDate(date, dateString) {
    console.log(dateString);
  }

  const onChange = (time) => {
    setValue(time);
    console.log(time.value);
  };
  function Categories(e) {
    console.log(e.target.value);
    setCategory1(e.target.value);
  }
  function languages(e) {
    console.log(e.target.value);
    setLanguage1(e.target.value);
  }
  function standards(e) {
    console.log(e.target.value);
    setStandard1(e.target.value);
  }
  function title(e) {
    console.log(e.target.value);
    setTitle(e.target.value);
  }
  function link(e) {
    console.log(e.target.value);
    setLink(e.target.value);
  }
  function handleTitle(e) {
    console.log(e.target.value);
    setPTitle(e.target.value);
  }
  function handleDes(e) {
    console.log(e.target.value);
    setPDes(e.target.value);
  }

  return (
    <div className="MCreateCourseForm">
      <p className="MCreateCourseFormTitle">Course Registration</p>
      <div className="MCreateCourseFormInputSection">
        <div className="MCreateCourseFormSubTitle">Categories</div>
        <select name="cars" className="MCreateCourseFormTitleInput" onChange={Categories}>
          {
            category.map((e) => {
              return(
              <option value={e}>{e}</option>
              );
          })
          }
            
         
        </select>
      </div>
      <div className="MCreateCourseFormInputSection">
        <div className="MCreateCourseFormSubTitle">Language</div>
        
        <select name="cars" className="MCreateCourseFormTitleInput"  onChange={languages}>
        {
            language.map((e) => {
              return(
              <option value={e}>{e}</option>
              );
          })
          }
         
        </select>
      </div>
      <div className="MCreateCourseFormInputSection">
        <div className="MCreateCourseFormSubTitle">Standard</div>
        <select name="cars" className="MCreateCourseFormTitleInput" onChange={standards}>
        {
            standard.map((e) => {
              return(
              <option value={e}>{e}</option>
              );
          })
          }
         
        </select>
      </div>
      <div className="MCreateCourseFormInputSection">
        <div className="MCreateCourseFormSubTitle">Titile of the course </div>
        <input
          className="MCreateCourseFormTitleInput"
          placeholder="Enter the course title "
          value={Title}
          onChange={title}
        />
      </div>
      <div className="MCreateCourseFormInputSection">
        <div className="MCreateCourseFormSubTitle">Start date </div>
        <DatePicker onChange={selectDate} className="MCreateCourseFormDate" />
      </div>
      <div className="MCreateCourseFormInputSection">
        <div className="MCreateCourseFormSubTitle">Start date </div>
        <RangePicker
          value={value}
          onChange={onChange}
          className="MCreateCourseFormDate"
        />
      </div>
      <div className="MCreateCourseFormInputSection">
        <div className="MCreateCourseFormSubTitle">link for class </div>
        <input
          className="MCreateCourseFormTitleInput"
          placeholder="provide the zoom link or Google meet link "
          value={Link}
          onChange={link}
        />
      </div>
      <div className="MCreateCourseFormProjectCard">
        <div className="MCreateCourseFormProjectTitleSection">
          <div className="MCreateCourseFormProjectTitle">Project</div>
          <div className="MCreateCourseFormProjectIconSection">
            <img
              src={AddIcon}
              alt="add icon"
              className="MCreateCourseFormProjectAddIcon"
            ></img>
            <img
              src={EditIcon}
              alt="Edit icon"
              className="MCreateCourseFormProjectEditIcon"
            ></img>
          </div>
        </div>
        <input
          className="MCreateCourseFormProjectInput"
          placeholder="Enter the title of the project"
          onChange={value =>{handleTitle(value)}}
        />
        <TextArea
          className="MCreateCourseFormProjectInput"
          placeholder="Enter the project descripition"
          onChange={value =>{handleDes(value)}}
        ></TextArea>
        <div className="MCreateCourseFormProjectCardBtn">Done</div>
      </div>


      <div className="MCreateCourseFormProjectCard">
        <div className="MCreateCourseFormProjectTitleSection">
          <div className="MCreateCourseFormProjectTitle">Project</div>
          <div className="MCreateCourseFormProjectIconSection">
            <img
              src={AddIcon}
              alt="add icon"
              className="MCreateCourseFormProjectAddIcon"
            ></img>
            <img
              src={EditIcon}
              alt="Edit icon"
              className="MCreateCourseFormProjectEditIcon"
            ></img>
          </div>
        </div>
        <input
          className="MCreateCourseFormProjectInput"
          placeholder="Enter the title of the project"
          onChange={value =>{handleTitle(value)}}
        />
        <TextArea
          className="MCreateCourseFormProjectInput"
          placeholder="Enter the project descripition"
          onChange={value =>{handleDes(value)}}
        ></TextArea>
        <div className="MCreateCourseFormProjectCardBtn">Done</div>
      </div>

      <div className="MCreateCourseFormCreateCourseBtn" onClick={onSubmitdata}>Create Course</div>
    </div>
  );
}

export default MCreateCourseForm;
