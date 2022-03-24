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
  
    
  const [value, setValue] = useState(null);
  const { RangePicker } = TimePicker;
  const { TextArea } = Input;

  function handleMenuClick(e) {
    message.info("Click on menu item.");
    console.log("click", e);
  }
  function selectDate(date, dateString) {
    console.log(dateString);
  }

  const onChange = (time) => {
    setValue(time);
    console.log(time.value);
  };

  return (
    <div className="MCreateCourseForm">
      <p className="MCreateCourseFormTitle">Course Registration</p>
      <div className="MCreateCourseFormInputSection">
        <div className="MCreateCourseFormSubTitle">Categories</div>
        <select name="cars" className="MCreateCourseFormTitleInput">
          {
            category.map((e) => {
              <option value={e}>{e}</option>
             
            
          })
          }
         
         
        </select>
      </div>
      <div className="MCreateCourseFormInputSection">
        <div className="MCreateCourseFormSubTitle">Language</div>
        
        <select name="cars" className="MCreateCourseFormTitleInput">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
      </div>
      <div className="MCreateCourseFormInputSection">
        <div className="MCreateCourseFormSubTitle">Standard</div>
        <select name="cars" className="MCreateCourseFormTitleInput">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
      </div>
      <div className="MCreateCourseFormInputSection">
        <div className="MCreateCourseFormSubTitle">Titile of the course </div>
        <input
          className="MCreateCourseFormTitleInput"
          placeholder="Enter the course title "
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
        />
        <TextArea
          className="MCreateCourseFormProjectInput"
          placeholder="Enter the project descripition"
        ></TextArea>
        <div className="MCreateCourseFormProjectCardBtn">Done</div>
      </div>

      <div className="MCreateCourseFormCreateCourseBtn">Create Course</div>
    </div>
  );
}

export default MCreateCourseForm;
