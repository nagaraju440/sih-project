import React,{useEffect} from 'react'
import { Card } from 'antd'
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined,EditFilled,PlusOutlined } from '@ant-design/icons';
import { ProSidebar, MenuItem, SubMenu, SidebarHeader, SidebarContent, SidebarFooter } from 'react-pro-sidebar';
import Avatar from '../../../assets/Images/avtar.jpg'
import MCreateCourseForm from '../M-Courses/MCreateCourseForm';
// import { collection, doc, setDoc } from "firebase/firestore"; 
import db from '../../../firebaseConfig';
import { doc, getDoc } from "firebase/firestore";
// import { useEffect } from 'react';
export default function MentorProfile() {
    console.log("mentor profle")
    const docRef = doc(db, "colleges", "srkr","courses","courses");
    // useEffect=(()=>{
    //   const docSnap=await getDoc(docRef)
    // })
    // useEffect=(async()=>{
    //   // const getdoc=async()=>{
    //     const docSnap = await getDoc(docRef);
    //     // console.log(docSnap.data(),"....");
    //   // }
    // })
  return (
    <div>
        <Card>
  {/* <p style="background-image:url('../../../assets/Images/avtar.jpg')"> */}

  {/* </p>  */}
 {/* <Avatar/>  */}
  <img src={Avatar} className="avatar1"/>
  <img src={Avatar} className="avatar2"></img>
  <div className='card1'>
    <div>
    <h3>Hi,sunilkalikayi</h3>
    <div>Frontend Developer</div>
    <div>Bhimavaram, Andra pradesh, India.</div>
    </div>
    <div className='card2'>
      <div>+91 7075035683</div>
      <div>sunilkalikayi2580@gmail.com</div>
    </div>
  </div>
  {/* {getdoc()} */}
</Card>
<Card bordered="true" title="About" hoverable="true" extra={<I/>}>
      I am a Frontend Developer, and use to teach the programming languages .
</Card>
<Card bordered="true" title="Skills" hoverable="true" extra={<I/>}>
      <div>
      Web Development 
      </div>
      <hr/>
      <div>
      C /C ++ ,Python
      </div>
      <hr/>
      <div>
      Team Leader
      </div>
      
</Card>
<Card bordered="true" title="Education" hoverable="true" extra={<I/>}>
  <div>
    <div>

    </div>
    <div>Sagirama krishnam raju Engineering college</div>
    <div>(2019 - 2023 ) Elecetroincs and Communication Engineering </div>
    <div>Bhimavaram, Andra pradesh, India - 534524</div>
  </div>
  <div>
    <div>

    </div>
    <div>Sagirama krishnam raju Engineering college</div>
    <div>(2019 - 2023 ) Elecetroincs and Communication Engineering </div>
    <div>Bhimavaram, Andra pradesh, India - 534524</div>
  </div>
     I am a Frontend Developer, and use to teach the programming languages . 
</Card>
<Card bordered="true" title="Hobbies" hoverable="true" extra={<I/>}>
  <div>
  Yoga and Meditaion
  </div>
  <hr/>
  <div>
  coding
  </div>
  <hr/>
  <div>
  Spending time with friends
  </div>
  <hr/>
  <div>
  cooking food
  </div>
</Card>
<Card bordered="true" title="Linkedin Profile" hoverable="true" extra={<I/>} >
https://www.linkedin.com/in/sunil-kalikayi-182987219/
</Card>
<Card bordered="true" title="Git Hub Profile" hoverable="true" extra={<I/>}>
https://github.com/sunilkalikayi

{/* <div style={{height:2000,backgroundColor:'red'}}>
hehhehehe
</div> */}
</Card> 
{/* <MCourses/> */}
<MCreateCourseForm/>
    </div>
  )
}

function I()
{
  return(
<div>
<PlusOutlined /><EditFilled />
</div>
  )
}
