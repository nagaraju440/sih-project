import React,{useEffect,useState} from 'react'
import MCourseCard from './MCourseCard'
import './MCourses.css'
import MCourseSearch from './MCourseSearch'
import MCreateCourseForm from './MCreateCourseForm'
import {
  Routes, Route, Link, BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import { getDocs,collection,doc} from 'firebase/firestore'
import db from "../../../firebaseConfig";
export default function MCourses(props) {
  const [details,setDetails]=useState([])
  const y=[]
 
  useEffect(async() => {
    console.log("useEffect",props.collegeName);
    try{
      const test= await getDocs(collection(db,"colleges",props.collegeName,"mentors",props.userUid,"courses"))
      test.forEach((doc)=>{
        y.push(doc.data())
      })
      setDetails(y)
      console.log(details,"dfghjkl");
    }
    catch(err)
    {
      console.log(err);
    }
//     try {
//       const test = await getDocs(
//         collection(db, "colleges", props.collgeName, "mentors")
//       );
//       test.forEach((doc) => {
//         y.push(doc.data());
//       });
//       setDetails(y);
//       console.log(details, "dhgSjdnsnJ");

// } catch (err) {
//   console.error(err);
//   alert(err.message);
// }
  }, []);
  return (
    <>
    {
      Object.values(details).map((x,y)=>{
        return(
          <div className='McourseComponent'key={y}>
          {console.log(props,"mdash")}
          <div className='MCourseCardSearchContainer'>
            <MCourseSearch />
            <Link to="/Dashboard/courses/createCourse"><div className='MCourseCardCreateCourseBtn'>Create Course</div></Link>
          </div>
          <div className='McourseCardContainer' onClick={MCreateCourseForm}>
            {/* hihi */}
          <MCourseCard/>
          </div>
          {/* <MCreateCourseForm/> */}
          
        </div>
        )
      })
    }
 
    </>
  )
}