import React, { Component, useState, useEffect } from "react";
import styles from "./SignUpPage3.css";
import { Select } from "antd";
import Micon from "../../../assets/Icons/Micon.png";
import { Input } from 'antd';


export default function SignUpPage3(props) {
  const { Option } = Select;
  const { TextArea } = Input;

  const projects = ['online-shopping','bug-tracking','e-waste-collection'];
  for (let i = 0; i < 3; i++) {
    projects.push(
      <Option key={projects[i]} ></Option>
    );
  }
  function Projects(value) {
    console.log(`selected ${value}`);
  }
  function About(value) {
    console.log(`hii${value}`);
  }
  function onChange (value) {
    console.log(`hii${value}`);
    
  };
  return (
    <>
      <div className="SignUpPage3-container">
        <div className="SignUpPage3-form">

          <div className="SignUpPage3-main-heading">
            <img src={Micon} className="SignUpPage3-Micon"></img>
            <div className="SignUpPage3-heading">Mentor Registartion</div>
          </div>

          <div className="SignUpPage3-subheading">
            Please, provide the information below
          </div>

        

          <form className="SignUpPage3-form-sub">
          <label className="SignUpPage3-label">Completed Projects</label>
            <br />
            <div className="SignUpPage3-form-select">
            <Select
              mode="tags"
              style={{ width: "100%" }}
              onChange={Projects}
              tokenSeparators={[","]}
            >
              {projects}
            </Select>
            </div>
            <label className="SignUpPage3-label">Experience</label>
            <br />
            <div  className="SignUpPage3-form-select">
            <Input   style={{ width: "100%" }} placeholder="Give your years of experience" onChange={onChange} />
            </div>
            <label className="SignUpPage3-label">About</label>
            <br />
            <TextArea rows={4} onChange={About} />  


            <div className="SignUpPage3-skip" onClick={() => { console.log("hii skip");}} >Skip</div>

            <div className="SignUpPage3-button-class">
              <button type="submit" onClick={() => {
                  console.log("hii mentor");
                }}  className="SignUpPage3-button-text" >Next </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
