import React, { useEffect } from 'react'
// import { useEffect } from 'react';
import '../RegisterForCourses/RegisterForCourses.css'
import img1 from '../../../assets/Images/Courses.png'
import HeartIcon from "../../../assets/Icons/heart.svg";
import star from "../../../assets/Icons/Star.svg";
import { collection, doc, setDoc, addDoc, getDoc, getDocs } from "firebase/firestore";
import db from "../../../firebaseConfig";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useState } from 'react';
export default function RegisterForCourses(props) {
  const [coursesData,setCoursesData]=useState([])
  useEffect( async()=>{
    console.log("hehehehehhe i am from register for course page")
    const test = await getDocs(collection(db,  "colleges",props.collegeName,"courses"));
    // console.log("test is",test)
    test.forEach((doc)=>{
      // console.log(doc.data(),"dfghjk");
      coursesData.push(doc.data())
      setCoursesData(coursesData)
      // y.push(doc.data())
    })
    console.log("course data finaly is in ",coursesData)
  })
  // useEffect(async()=>{
    // test.forEach((doc)=>{
    //   console.log(doc.data().Title,"dfghjk");
    //   y.push(doc.data())
    // })
    // setDetails(y)
    // console.log(details,"dhgSJ");
//     try {
//       const auth = getAuth();
//       onAuthStateChanged(auth,user =>{
//         console.log(user.uid,user.email)
//   })
 
// } catch (err) {
//   console.error(err);
//   alert(err.message);
// }
  // })
  const [details,setDetails]=useState({})
  const y=[]
  // const auth=getAuth()
  
  // useEffect=(async()=>{
  //   const data=await getDoc(doc(db,"colleges",props.collegeName,"students",props.userUid))
  //   console.log(data.data(),"popop");
  // })
  return (
    <div >
      {console.log(props.collegeName,props.userUid,"./././.")}
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
