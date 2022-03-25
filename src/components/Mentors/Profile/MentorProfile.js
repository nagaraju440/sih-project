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
import './MentorProfile.css'
// import { DownOutlined, UserOutlined } from "@ant-design/icons";
import AddIcon from "../../../assets/Icons/Plus.svg";
import EditIcon from "../../../assets/Icons/edit.svg";
export default function MentorProfile(props) {
   const auth=getAuth()
   const [info , setInfo] = useState([]);
   const [crds,setCrds]=useState([1])
   const [titleValue, setTitleValue] = useState('');
   const [descValue,setDescvalue]=useState("");
   const [isASModalVisible, setIsASModalVisible] = useState(false);
   const [isPModalVisible, setIsPModalVisible] = useState(false);
   const [isHModalVisible, setIsHModalVisible] = useState(false);
   const [ProjectsData,setProjectsData]=useState([])
   var [Skills,setSkills]=useState([])
   const [skillValue,setSkillValue]=useState([])
   const [ProjectValue,setProjectValue]=useState([])
   var [HobbiesData,setHobbiesData]=useState([])
   const [HobbiesValue,setHobbiesValue]=useState([])
   
   const [linkedIn,setLinkedIn]=useState('')

   const [email,setEmail]=useState('')
   const [num,setNum]=useState('')
   const [about,setAbout]=useState('')
   const [name,setName]=useState('')
     useEffect(async () => {
    const test = await getDoc(doc(db,  "colleges",props.collegeName,"mentors",props.userUid));
    console.log("data of amentor at profile page is","and skilss are",test.data().data)
    Skills=test.data().data.skills
    setSkills(Skills)
    HobbiesData=test.data().data.hobbies
    setHobbiesData(HobbiesData)
    setLinkedIn(test.data().data.linked_in)
    // ProjectsData(test.data().data.projects)
    setProjectsData(test.data().data.projects)
    setEmail(test.data().data.email)
    setAbout(test.data().data.about)
    setName(test.data().data.name)
    console.log("state updated",Skills)
  }, [])

  const showModalAS = () => {
    setIsASModalVisible(true);
  };

  const handleOkAS = () => {
    setIsASModalVisible(false);
  };

  const handleCancelAS = () => {
    setIsASModalVisible(false);
  };

  const AddSkillsData=()=>{
    setIsASModalVisible(false);
  //  var d={
  //    data:skillValue,
  //   //  day:dayValue
  //   //  description:"project description"
  //  }
   Skills.push(skillValue)
   setSkills(Skills)
  //  setDayValue(dayValue+1)
   console.log("day wise data is",setSkills)
   skillValue("")
  }


  const showModalH = () => {
    setIsHModalVisible(true);
  };

  const handleOkH = () => {
    setIsHModalVisible(false);
  };

  const handleCancelH = () => {
    setIsHModalVisible(false);
  };

  const AddHobbiesData=()=>{
    setIsHModalVisible(false);
  //  var d={
  //    data:skillValue,
  //   //  day:dayValue
  //   //  description:"project description"
  //  }
   Skills.push(skillValue)
   setSkills(Skills)
  //  setDayValue(dayValue+1)
   console.log("day wise data is",setSkills)
   skillValue("")
  }

  const AddProjectsData=()=>{
    setIsPModalVisible(false);
  //  var d={
  //    data:skillValue,
  //   //  day:dayValue
  //   //  description:"project description"
  //  }
   ProjectsData.push(ProjectValue)
   setProjectsData(ProjectsData)
  //  setDayValue(dayValue+1)
  //  console.log("day wise data is",setSkills)
   ProjectValue("")
  }
  const showModalP = () => {
    setIsHModalVisible(true);
  };

  const handleOkP = () => {
    setIsHModalVisible(false);
  };

  const handleCancelP = () => {
    setIsHModalVisible(false);
  };

  const { TextArea } = Input;
    // console.log("mentor profle",props.collegeName,"is college name of a mentor","user uid is",props.userUid)

  return (
    <div className='mp-main-container'>
      <div className='mp-container'>
      <div className='mpp-container'> 
      <div className="mp-dummy"></div>
     <div className='mp-inner'>
     <div className='mp-left'>
        <img src={Avatar} className="mp-image-styles"></img>
        <div className='mp-name'>Hi,{name} </div>
        <div className='mp-role' >Front end developer</div>
        <div className='mp-loc'>Bhimavaram, Andra pradesh, Indaia.</div>
      </div>
      <div className='mp-right'>
        <div className='mp-right-inner'>
          <div className='mp-num'>+918688696792</div>
          <div className='mp-mail'>{email}</div>
        </div>
        
      </div>
      
     </div>

      </div>
      <div className='mpa-container'>
      <div className="MCreateCourseFormProjectCard MCreateCourseFormContainer">
        <div className="MCreateCourseFormProjectTitleSection">
      <div className="MCreateCourseFormSubTitle">About </div>
          <div className="MCreateCourseFormProjectTitle"></div>
          <div className="MCreateCourseFormProjectIconSection">
            <img
              src={EditIcon}
              alt="Edit icon"
              className="MCreateCourseFormProjectEditIcon"
            ></img>
          </div>
        </div>
        <div className='mpa-text'>{about}</div>
      

      </div>
      </div>

      {/* .........................................skills container starts here.................................................. */}
      <div className='mps-container'>
      <div className="MCreateCourseFormProjectCard MCreateCourseFormContainer">
        <div className="MCreateCourseFormProjectTitleSection">
      <div className="MCreateCourseFormSubTitle">Skils </div>

          <div className="MCreateCourseFormProjectTitle"></div>
          <div className="MCreateCourseFormProjectIconSection">
            <img
              src={AddIcon}
              alt="add icon"
              className="MCreateCourseFormProjectAddIcon"
              onClick={showModalAS}
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
           {Skills.map((l,i)=>{
            //  console.log("hehheheheh")
                 return(
                  <div>
                    {/* <b>Day {l.day}</b> */}
                    <li><b>{l}</b></li>

                  </div>
                 )
           })}
         </ul>
       </div>

      </div>
      <Modal title="Add Schedule and Syllabus" visible={isASModalVisible} footer={null} onOk={handleOkAS} onCancel={handleCancelAS} closable={null} width={600}>
      <input
          className="MCreateCourseFormProjectInput"
          placeholder="Enter the schedule"
          value={skillValue}
          onChange={(e)=>{
            console.log("value is",e.target.value)
            setSkillValue(e.target.value)
          }}
        />
       
        <div className="MCreateCourseFormProjectCardBtn" onClick={AddSkillsData} >Done</div>
      </Modal> 
    </div>
      
{/* ......................................................Hobbies container....................................................... */}
<div className='mpe-container'>
      <div className="MCreateCourseFormProjectCard MCreateCourseFormContainer">
        <div className="MCreateCourseFormProjectTitleSection">
      <div className="MCreateCourseFormSubTitle">Hobbies </div>
          <div className="MCreateCourseFormProjectTitle"></div>
          <div className="MCreateCourseFormProjectIconSection">
            <img
              src={AddIcon}
              alt="add icon"
              className="MCreateCourseFormProjectAddIcon"
              onClick={showModalH}
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
           {HobbiesData.map((l,i)=>{
            //  console.log("hehheheheh")
                 return(
                  <div>
                    {/* <b>Day {l.day}</b> */}
                    <li><b>{l}</b></li>

                  </div>
                 )
           })}
         </ul>
       </div>

      </div>
      <Modal title="Add Schedule and Syllabus" visible={isHModalVisible} footer={null} onOk={handleOkH} onCancel={handleCancelH} closable={null} width={600}>
      <input
          className="MCreateCourseFormProjectInput"
          placeholder="Enter the schedule"
          value={HobbiesValue}
          onChange={(e)=>{
            console.log("value is",e.target.value)
            setHobbiesValue(e.target.value)
          }}
        />
       
        <div className="MCreateCourseFormProjectCardBtn" onClick={AddHobbiesData} >Done</div>
      </Modal> 
    </div>

 {/* ...........................linked in container..................................... */}
    
     <div className='mps-container'>
     <div className="MCreateCourseFormProjectCard MCreateCourseFormContainer">
        <div className="MCreateCourseFormProjectTitleSection">
      <div className="MCreateCourseFormSubTitle">Linkedin Profile </div>
          <div className="MCreateCourseFormProjectTitle"></div>
          <div className="MCreateCourseFormProjectIconSection">
            {/* <img
              src={AddIcon}
              alt="add icon"
              className="MCreateCourseFormProjectAddIcon"
              onClick={showModalH}
            ></img> */}
            <img
              src={EditIcon}
              alt="Edit icon"
              className="MCreateCourseFormProjectEditIcon"
            ></img>
          </div>
        </div>
      <div className='mpa-text'>{linkedIn}</div>

      </div>
     </div>
     {/* ...............................................projects container................................... */}
     <div className='mpe-container'>
      <div className="MCreateCourseFormProjectCard MCreateCourseFormContainer">
        <div className="MCreateCourseFormProjectTitleSection">
      <div className="MCreateCourseFormSubTitle">Projects </div>
          <div className="MCreateCourseFormProjectTitle"></div>
          <div className="MCreateCourseFormProjectIconSection">
            <img
              src={AddIcon}
              alt="add icon"
              className="MCreateCourseFormProjectAddIcon"
              onClick={showModalP}
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
           {ProjectsData.map((l,i)=>{
            //  console.log("hehheheheh")
                 return(
                  <div>
                    {/* <b>Day {l.day}</b> */}
                    <li><b>{l}</b></li>

                  </div>
                 )
           })}
         </ul>
       </div>

      </div>
      <Modal title="Add Schedule and Syllabus" visible={isPModalVisible} footer={null} onOk={handleOkP} onCancel={handleCancelP} closable={null} width={600}>
      <input
          className="MCreateCourseFormProjectInput"
          placeholder="Enter the schedule"
          value={HobbiesValue}
          onChange={(e)=>{
            console.log("value is",e.target.value)
            setProjectValue(e.target.value)
          }}
        />
       
        <div className="MCreateCourseFormProjectCardBtn" onClick={AddProjectsData} >Done</div>
      </Modal> 
    </div>

    </div>
    </div>


    // <div>
    //   <div className="MCreateCourseFormProjectCard">
    //     <div className="MCreateCourseFormProjectTitleSection">
    //       <div className="MCreateCourseFormProjectTitle">Project</div>
    //       <div className="MCreateCourseFormProjectIconSection">
    //         <img
    //           src={AddIcon}
    //           alt="add icon"
    //           className="MCreateCourseFormProjectAddIcon"
    //           onClick={showModal}
    //         ></img>
    //         <img
    //           src={EditIcon}
    //           alt="Edit icon"
    //           className="MCreateCourseFormProjectEditIcon"
    //         ></img>
    //       </div>
    //     </div>
    //    <div>
    //      <ul>
    //        {projectsData.map((l,i)=>{
    //              return(
    //                <>
    //                {console.log(l,"ohohoh")}
    //               <li><b>{l.title}</b></li>
    //               <li><b>{l.description}</b></li>
    //               </>
    //              )
    //        })}
    //      </ul>
    //    </div>

    //   </div>  
    //   <Modal title="Add Project" visible={isModalVisible} footer={null} onOk={handleOk} onCancel={handleCancel} closable={null} width={600}>
    //   <input
    //       className="MCreateCourseFormProjectInput"
    //       placeholder="Enter the title of the project"
    //       value={titleValue}
    //       onChange={(e)=>{
    //         console.log("value is",e.target.value)
    //         setTitleValue(e.target.value)
    //         // setDescvalue(e.)
    //       }}
    //     />
    //     <TextArea
    //       className="MCreateCourseFormProjectInput"
    //       placeholder="Enter the project descripition"
    //       value={descValue}
    //       onChange={(e)=>{
    //         setDescvalue(e.target.value)
    //       }}
    //     ></TextArea>
    //     <div className="MCreateCourseFormProjectCardBtn" onClick={AddProject} >Done</div>
    //   </Modal>
    // </div>
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
