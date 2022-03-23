import React, { Component, useState, useEffect } from "react";
import styles from "./SignUpPage2.css";
import { Select } from "antd";
import Micon from "../../../assets/Icons/Micon.png";
import { Input } from 'antd';

export default function SignUpPage2(props) {
  const { Option } = Select;
  const children = [];
  for (let i = 10; i < 36; i++) {
    children.push(
      <Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>
    );
  }

  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  return (
    <>
      <div className="container">
        <div className="form">
          <div className="main-heading">
            <img src={Micon} className="Micon"></img>
            <div className="heading">Mentor Registartion</div>
          </div>
          <div className="subheading">
            Please, provide the information below
          </div>

          {/* Form element */}

          <form className="form-sub">
          <label className="label">Add Skills</label>
            <br />
            <div className="form-select">
            <Select
              mode="tags"
              style={{ width: "80%" }}
              onChange={handleChange}
              tokenSeparators={[","]}
            >
              {children}
            </Select>
            </div>
            <label className="label">Linked IN</label>
            <br />
            <div  className="form-select">
            <Input   style={{ width: "80%" }} placeholder="Enter your linkedin Handle" />
            </div>
           
            <label className="label">Languages</label>
            <br />
            <div  className="form-select">
            <Select
              mode="tags"
              style={{ width: "80%" }}
              onChange={handleChange}
              tokenSeparators={[","]}
            >
              {children}
            </Select>
            </div>
            <label className="label">Hobbies</label>
            <br />
            <div  className="form-select">
            <Select
              mode="tags"
              style={{ width: "80%" }}
              onChange={handleChange}
              tokenSeparators={[","]}
            >
              {children}
            </Select>
            </div>
          </form>

          <div
            className="skip"
            onClick={() => {
              console.log("hii skip");
            }}
          >
            Skip
          </div>

          <div className="button-class">
            <button
              type="submit"
              onClick={() => {
                console.log("hii mentor");
              }}
              className="button-text"
            >
              Next
            </button>
          </div>

          {/* <-----------End of the form element--------> */}
        </div>
      </div>
    </>
  );
}
