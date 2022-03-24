import React, { Component, useState, useEffect } from "react";
import styles from "./SignUpPage2.css";
import { Select } from "antd";
import Micon from "../../../assets/Icons/Micon.png";
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

  for (let i = 0; i < 3; i++) {
    skills.push(
      <Option key={skills[i]} ></Option>
    );
  }
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
  var navigateNextPage = () => {
    console.log("hii this is next page");
    let data = location.state
    data['skills'] = ['skill1', 'skill2', 'skill3']
    data['linked_in'] = "linkedin profile link"
    data['languages'] = ['l1', 'l2', 'l3']
    data['hobbies'] = ['h1', 'h2', 'h3']
    console.log("location is", data)

    navigate("/mentor/signup3", { state: data });
  }
  var skipToNextPage = () => {
    let data = location.state
    navigate("/mentor/signup3", { state: data });
  }
  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  function Languages(value1) {
    console.log(`selected ${value1}`);
  }
  function Hobbies(value2) {
    console.log(`selected ${value2}`);
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
                // onChange={AddSkills}
                tokenSeparators={[","]}
              >
                {skills}
              </Select>
            </div>
            <label className="label">Linked IN</label>
            <br />
            <div className="form-select">
              <Input
                style={{ width: "100%" }}
                placeholder="Enter your linkedin Handle"
              />
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
