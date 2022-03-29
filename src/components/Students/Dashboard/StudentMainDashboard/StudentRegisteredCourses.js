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

    // console.log("ehehehehhhehehe in student registered course")
  useEffect(async() => {
    const y=[]
    var mentorName=""
    await getDocs(collection(db,"colleges",props.collegeName,"students",props.userUid,"courses")).then((e)=>{
         e.forEach((doc1)=>{
          //  await getDoc(doc(db,"colleges",props.collegeName,"mentors",doc1.data().uid)).then((data1)=>{
              // console.log("mentor data for particular course",data1.data())
          //    mentorName=data1.data().name
          //  })
          //  console.log("mentor name is",mentorName)
           y.push({data:doc1.data()})
         })
    })
    setCoursesData(y)
    // console.log("hello stuent courses are",y)
  }, [])
  
  return (
    <div >
      <div className='rfc-container'>
      {
        coursesData.length===0?<div>
            <h1>You didn't register for any courses go to courses page and do do register</h1>
        </div>:<div>
          {
         coursesData.map((l,i)=>{
          return(
            <div key={i} className="card">
          <div className="Card_image">
            <img src={image}></img>
          </div>
          <div className="Card_Name"> {l.Title}</div>
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
      }
       </div>
    </div>
  )
}
