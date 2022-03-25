import React,{useEffect,useState} from 'react'
import { Card } from 'antd'
import { Modal, Button } from 'antd';
// import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined,EditFilled,PlusOutlined } from '@ant-design/icons';
import { ProSidebar, MenuItem, SubMenu, SidebarHeader, SidebarContent, SidebarFooter } from 'react-pro-sidebar';
import Avatar from '../../../assets/Images/avtar.jpg'
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { collection, doc, setDoc, addDoc, getDoc } from "firebase/firestore";
import db from "../../../firebaseConfig";
import MCreateCourseForm from '../M-Courses/MCreateCourseForm';
import {
  Menu,
  Dropdown,
  // Button,
  message,
  Space,
  Tooltip,
  DatePicker,
  TimePicker,
  Input,
} from "antd";
// import { DownOutlined, UserOutlined } from "@ant-design/icons";
import AddIcon from "../../../assets/Icons/Plus.svg";
import EditIcon from "../../../assets/Icons/edit.svg";
export default function MentorProfile(props) {
   const auth=getAuth()
   
  useEffect(async () => {
    const test = await getDoc(doc(db,  "colleges",props.collegeName,"mentors",props.userUid));
    console.log("data of amentor at profile page is",test.data().data)
  }, [])
  const [info , setInfo] = useState([]);
  const [crds,setCrds]=useState([1])
  const [titleValue, setTitleValue] = useState('');
  const [descValue,setDescvalue]=useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [projectsData,setProjectsData]=useState([])
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const AddProject=()=>{

    setIsModalVisible(false);
   var d={
     title:titleValue,
     description:descValue
   }
   projectsData.push(d)
   setProjectsData(projectsData)
   console.log("projects data is",projectsData)
   setTitleValue("")
   setDescvalue("")
  }
  const { TextArea } = Input;
    // console.log("mentor profle",props.collegeName,"is college name of a mentor","user uid is",props.userUid)

  return (
    <div>
      <div className="MCreateCourseFormProjectCard">
        <div className="MCreateCourseFormProjectTitleSection">
          <div className="MCreateCourseFormProjectTitle">Project</div>
          <div className="MCreateCourseFormProjectIconSection">
            <img
              src={AddIcon}
              alt="add icon"
              className="MCreateCourseFormProjectAddIcon"
              onClick={showModal}
            ></img>
            <img
              src={EditIcon}
              alt="Edit icon"
              className="MCreateCourseFormProjectEditIcon"
            ></img>
          </div>
        </div>
       <div>
         <ul>
           {projectsData.map((l,i)=>{
                 return(
                   <>
                   {console.log(l,"ohohoh")}
                  <li><b>{l.title}</b></li>
                  <li><b>{l.description}</b></li>
                  </>
                 )
           })}
         </ul>
       </div>

      </div>  
      <Modal title="Add Project" visible={isModalVisible} footer={null} onOk={handleOk} onCancel={handleCancel} closable={null} width={600}>
      <input
          className="MCreateCourseFormProjectInput"
          placeholder="Enter the title of the project"
          value={titleValue}
          onChange={(e)=>{
            console.log("value is",e.target.value)
            setTitleValue(e.target.value)
            // setDescvalue(e.)
          }}
        />
        <TextArea
          className="MCreateCourseFormProjectInput"
          placeholder="Enter the project descripition"
          onChange={(e)=>{
            setDescvalue(e.target.value)
          }}
        ></TextArea>
        <div className="MCreateCourseFormProjectCardBtn" onClick={AddProject} >Done</div>
      </Modal>
    </div>
//     <div>
//         <Card>
 
//   <img src={Avatar} className="avatar1"/>
//   <img src={Avatar} className="avatar2"></img>
//   <div className='card1'>
//     <div>
//     <h3>Hi,sunilkalikayi</h3>
//     <div>Frontend Developer</div>
//     <div>Bhimavaram, Andra pradesh, India.</div>
//     </div>
//     <div className='card2'>
//       <div>+91 7075035683</div>
//       <div>sunilkalikayi2580@gmail.com</div>
//     </div>
//   </div>
//   {/* {getdoc()} */}
// </Card>
// <Card bordered="true" title="About" hoverable="true" extra={<I/>}>
//       I am a Frontend Developer, and use to teach the programming languages .
// </Card>
// <Card bordered="true" title="Skills" hoverable="true" extra={<I/>}>
//       <div>
//       Web Development 
//       </div>
//       <hr/>
//       <div>
//       C /C ++ ,Python
//       </div>
//       <hr/>
//       <div>
//       Team Leader
//       </div>
      
// </Card>
// <Card bordered="true" title="Education" hoverable="true" extra={<I/>}>
//   <div>
//     <div>

//     </div>
//     <div>Sagirama krishnam raju Engineering college</div>
//     <div>(2019 - 2023 ) Elecetroincs and Communication Engineering </div>
//     <div>Bhimavaram, Andra pradesh, India - 534524</div>
//   </div>
//   <div>
//     <div>

//     </div>
//     <div>Sagirama krishnam raju Engineering college</div>
//     <div>(2019 - 2023 ) Elecetroincs and Communication Engineering </div>
//     <div>Bhimavaram, Andra pradesh, India - 534524</div>
//   </div>
//      I am a Frontend Developer, and use to teach the programming languages . 
// </Card>
// <Card bordered="true" title="Hobbies" hoverable="true" extra={<I/>}>
//   <div>
//   Yoga and Meditaion
//   </div>
//   <hr/>
//   <div>
//   coding
//   </div>
//   <hr/>
//   <div>
//   Spending time with friends
//   </div>
//   <hr/>
//   <div>
//   cooking food
//   </div>
// </Card>
// <Card bordered="true" title="Linkedin Profile" hoverable="true" extra={<I/>} >
// https://www.linkedin.com/in/sunil-kalikayi-182987219/
// </Card>
// <Card bordered="true" title="Git Hub Profile" hoverable="true" extra={<I/>}>
// https://github.com/sunilkalikayi

// {/* <div style={{height:2000,backgroundColor:'red'}}>
// hehhehehe
// </div> */}
// </Card> 
// {/* <MCourses/> */}
// <MCreateCourseForm/>
//     </div>
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
