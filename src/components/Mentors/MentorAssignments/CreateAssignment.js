import React,{useState} from 'react'
import '../Ideana/IdeanaAdd.css'
import { Input } from 'antd';
import { Select } from 'antd';
import { collection, doc, setDoc, addDoc } from "firebase/firestore";
import db from "../../firebaseConfig";import {
  Routes, Route, Link, BrowserRouter as Router,Redirect,Navigate,
  Switch,
  useNavigate
} from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged
} from "firebase/auth";
// import { Navigate } from 'react-router-dom';

export default function IdeanaAdd(props) {
 

  return (
    <div className="postmain">
      <div className="Ideana_container">
        <div className="Ideana_heading">Create Assignmet</div>
        <div className="Ideana_postcard">
          <div>
            <div className="Ideana_Headingtext">Title</div>
            <div><Input className="Ideana_input" onChange={(value)=>Idea(value)} /></div>
          </div>
          <div>
            <div className="Ideana_Headingtext">Description</div>
            <div className="Ideana_textarea">
              <TextArea  onChange={(value)=>description(value)} />
            </div>
          </div>
        </div>
        <div className="Ideana_postbutton" onClick={onSubmitIdea}>
        <button o>Post</button>
      </div>
      </div> 
    </div>
  )
}
