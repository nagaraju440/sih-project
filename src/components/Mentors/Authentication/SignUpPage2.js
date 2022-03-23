import React, { Component, useState, useEffect } from "react";
import styles from "./SignUpPage2.css";
import { Select } from "antd";
import Micon from "../../../assets/Icons/Micon.png";
import { Input } from 'antd';
import { useLocation, withRouter, useNavigate } from 'react-router-dom';
export default function SignUpPage2(props) {
  let location = useLocation();
  const navigate = useNavigate();
  const { Option } = Select;
  const children = [];
  for (let i = 10; i < 36; i++) {
    children.push(
      <Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>
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
                className="form-tags"
                mode="tags"
                style={{ width: "80%" }}
                onChange={handleChange}
                tokenSeparators={[","]}
              >
                {children}
              </Select>
            </div>
            <div className="first" style={{ paddingBottom: "15px" }}>
              <label className="label">Linked IN</label>
              <br />
              <div className="form-select">
                <Input style={{ width: "80%" }} placeholder="Enter your linkedin Handle" />
              </div>
            </div>
            <label className="label">Languages</label>
            <br />
            <div className="form-select">
              <Select
                className="form-tags"
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
            <div className="form-select">
              <Select
                className="form-tags"
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
          </div>

          {/* <-----------End of the form element--------> */}
        </div>
      </div>
    </>
  );
}
