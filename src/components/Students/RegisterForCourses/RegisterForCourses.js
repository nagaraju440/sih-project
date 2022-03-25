import React,{useEffect,useState} from 'react'
import '../RegisterForCourses/RegisterForCourses.css'
import img1 from '../../../assets/Images/Courses.png'
import HeartIcon from "../../../assets/Icons/heart.svg";
import star from "../../../assets/Icons/Star.svg";
import { collection, doc, setDoc, addDoc,getDoc } from "firebase/firestore";
import db from "../../../firebaseConfig.js";


export default function RegisterForCourses(props) {

 
  // useEffect=(async()=>{
  //   const x=await getDoc(doc(db,"colleges",props.collegeName,"mentors"))
  //     console.log(x,'fghjkl');

  // })

  useEffect(async() => {
    const x=await getDoc(doc(db,"colleges",props.collegeName,"mentors"))
      console.log(x,'fghjkl');
  });
  
  return (
    <div >
      <div className="card1">
        <div className="Card1_image">
          <img src={img1}></img>
        </div>
        <div className="Card1_Header">
          <div className="Card1_Headertext"> Python programming</div>
          <div className="Card1_Headericon"><img src={HeartIcon} style={{width: '30px', height: '20px'}}></img></div>
        </div>
        <div className="Card1_secondparttext">-Sunil Kalikayi</div>
        <div className="Card1_thirdparttext">
          <div className="Card1_days">• 7days</div>
          <div className="Card1_time">• 5pm to 7 pm</div>
        </div>
        <div className="Card1_button">
          <div>
          <button className="Card1_Register">Register Now</button>
          </div>
          <div className="Card1_Rating"><div className="Card1_ratingtext">4</div>
          <div className="Card1_ratingicon"><img src={star} style={{width: '20px', height: '20px'}}/></div>
          </div>
        </div>
      </div>
      
    </div>
  )
}
