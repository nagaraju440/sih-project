import React,{useEffect,useState} from 'react'
import '../StudentMainDashboard/StudentRegisterCourses.css'
import image from '../../../../assets/Images/studentdashboard.png'
import {
  collection,
  doc,
  setDoc,
  addDoc,
  getDoc,
  getDocs,
} from "firebase/firestore";
import db from "../../../../firebaseConfig";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
export default function StudentRegisteredCourses(props) {
    const [coursesData,setCoursesData]=useState([])
  useEffect(async() => {
    const y=[]
    await getDocs(collection(db,"colleges",props.collegeName,"students",props.userUid,"courses")).then((e)=>{
         e.forEach((doc)=>{
          y.push(doc.data())
         })
    })
    setCoursesData(y)
    console.log("hello stuent courses are",coursesData)
  }, [])
  
  return (
    <div >
       {
         coursesData.map((l,i)=>{
          return(
            <div  className="card">
          <div className="Card_image">
            <img src={image}></img>
          </div>
          <div className="Card_Name"> C programming</div>
          <div className="Card_secondpart">
            <div className="Card_text">-By Tejawini</div>
            <div className="Card_dot">•</div>
            <div className="Card_time">5pm - 7pm</div>
          </div>
          <div className="Card_button">
            <button className="Card_buttontext" >Join Class</button>
          </div>
        </div>
        
          )
          })
       } 
    </div>
  )
}
