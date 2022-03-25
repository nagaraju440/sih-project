import React, { Component, useState, useEffect } from "react";
import styles from "./SignUpPage2.css";
import { Select } from "antd";
import Micon from "../../../assets/Icons/Micon.png";
// import {Navigate, useLocation,withRouter} from 'react-router-dom';
import { Input } from 'antd';
import { useLocation, withRouter, useNavigate } from 'react-router-dom';
import NavBar from "../../Students/Authentication/NavBar";
export default function SignUpPage2(props) {
  let location = useLocation();
  const navigate = useNavigate();
  const { Option } = Select;


  const skills = ['html', 'css', 'js'];
  const languages = ['english', 'telugu', 'hindi'];
  const hobbies = ['cricket', 'sleeping', 'eating'];
  const [linkedin,setLinkedIn]=useState("")
  // const [LinkedIn1,setLinkedin] = useState("");

  
  for (let i = 0; i < 3; i++) {
    skills.push(
      <Option key={skills[i]} ></Option>
    );
  }
  console.log(skills)
  for (let i = 0; i < 3; i++) {
    languages.push(
      <Option key={languages[i]} ></Option>
    );
  }
  for (let i = 0; i < 3; i++) {
    hobbies.push(
      <Option key={hobbies[i]} ></Option>
    );
  }
const Linked=(e)=>{
  
  setLinkedIn(e.target.value)
  console.log(e.target.value)
}
//  const LinkedIn=(x)=> {
//     console.log(x.target.value);
//    const y=x.target.value
//     setLinkedin(y);
//   }
  var navigateNextPage = () => {
    console.log("hii this is next page");
    let data = location.state
    data['skills'] = skills
    data['linked_in'] = linkedin
    data['languages'] = languages
    data['hobbies'] = hobbies
    console.log("location is", data)

    navigate("/mentor/signup3", { state: data });
  }
  var skipToNextPage = () => {
    let data = location.state
    navigate("/mentor/signup3", { state: data });
  }

  function Languages(value1) {
    console.log(`selected language ${value1}`);
  }
  function Hobbies(value2) {
    console.log(`selected hoby ${value2}`);
  }
  function Skills(x) {
    console.log(`selected skill ${x}`);
  }
  
  return (
    <>
    <NavBar/>
      <div className="SignUpPage2-container">
        <div className="SignUpPage2-form">

          <div className="SignUpPage2-main-heading">
            <img src={Micon} className="SignUpPage2-Micon"></img>
            <div className="SignUpPage2-heading">Mentor Registartion</div>
          </div>

          <div className="SignUpPage2-subheading">
            Please, provide the information below
          </div>



          <form className="SignUpPage2-form-sub">
            <label className="SignUpPage2-label">Add Skills</label>
            <br />
            <div className="SignUpPage2-form-select">
              <Select
                className="SignUpPage2-form-tags"
                mode="tags"
                style={{ width: "100%" }}
                tokenSeparators={[","]}
                onChange={Skills}
              >
                {skills}
              </Select>
            </div>
            <label className="label">Linked IN</label>
            <br />
            <div className="form-select">
              <Input type="text" placeholder="dfghj" style={{ width: "100%" }}onChange={(value)=>Linked(value)}/>
              {/* <Input
                style={{ width: "100%" }}
                placeholder="Enter your linkedin Handle"
                // value={LinkedIn1}
                onChange={(value)=>Linked(value)}

              /> */}
            </div>

            <label className="SignUpPage2-label">Languages</label>
            <br />
            <div className="SignUpPage2-form-select">
              <Select
                className="form-tags"
                mode="tags"
                style={{ width: "100%" }}
                onChange={Languages}
                tokenSeparators={[","]}
              >
                {languages}
              </Select>
            </div>

            <label className="SignUpPage2-label">Hobbies</label>
            <br />
            <div className="SignUpPage2-form-select">
              <Select
                className="SignUpPage2-form-tags"
                mode="tags"
                style={{ width: "100%" }}
                onChange={Hobbies}
                tokenSeparators={[","]}
              >
                {hobbies}
              </Select>
            </div>


            <div className="SignUpPage2-skip" onClick={skipToNextPage()} >Skip</div>

            <div className="SignUpPage2-button-class">
              <button onClick={navigateNextPage} className="SignUpPage2-button-text" >Next </button>
            </div>


          </form>

          {/* <div
            className="skip"
            onClick={skipToNextPage()}
            style={{ display: "flex", justifyContent: 'space-between', alignItems: 'center', width: "100%" }}
          >
            <div> Skip</div>


            <div className="button-class" >
              <button
                type="submit"
                onClick={navigateNextPage()}
                className="button-text"
              >
                Next
              </button>
            </div>
          </div> */}

          {/* <-----------End of the form element--------> */}
        </div >
      </div >
    </>
  );
}
