import React, { Component, useState, useEffect } from "react";
import styles from "./SignUpPage2.css";
import { Select } from "antd";
import Micon from "../../../assets/Icons/Micon.png";
import { Input } from "antd";
export default function SignUpPage2(props) {
  const { Option } = Select;


  const skills = ['html','css','js'];
  const languages = ['english','telugu','hindi'];
  const hobbies=['cricket','sleeping','eating'];

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

  function AddSkills(value) {
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
                onChange={AddSkills}
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


            <div className="SignUpPage2-skip" onClick={() => { console.log("hii skip");}} >Skip</div>

            <div className="SignUpPage2-button-class">
              <button type="submit" onClick={() => {
                  console.log("hii mentor");
                }}  className="SignUpPage2-button-text" >Next </button>
            </div>


          </form>

         
          

         
        </div>
      </div>
    </>
  );
}
