import React ,{useEffect,useState} from 'react'
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { collection, doc, setDoc, addDoc, getDoc,updateDoc } from "firebase/firestore";
import db from "../../../firebaseConfig";
import { Card } from "antd";
import { Modal, Button } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
  EditFilled,
  PlusOutlined,DownOutlined
} from "@ant-design/icons";
import {
  ProSidebar,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
} from "react-pro-sidebar";
import Avatar from "../../../assets/Images/avtar.jpg";
import "../../Mentors/Profile/MentorProfile.css";
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
import AddIcon from '../../../assets/Icons/Plus.svg'
import EditIcon from '../../../assets/Icons/edit.svg'
import {
  Routes, Route, Link, BrowserRouter as Router,Redirect,Navigate,useNavigate,
  Switch,
} from "react-router-dom";
// 
export default function Profile(props) {
  const auth=getAuth()
    const [info, setInfo] = useState([]);
    const [crds, setCrds] = useState([1]);
    const [titleValue, setTitleValue] = useState("");
    const [descValue, setDescvalue] = useState("");
    const [isASModalVisible, setIsASModalVisible] = useState(false);
    const [isPModalVisible, setIsPModalVisible] = useState(false);
    const [isHModalVisible, setIsHModalVisible] = useState(false);
    const [ProjectsData, setProjectsData] = useState([]);
    var [Skills, setSkills] = useState([]);
    const [skillValue, setSkillValue] = useState([]);
    const [ProjectValue, setProjectValue] = useState([]);
    var [HobbiesData, setHobbiesData] = useState([]);
    const [HobbiesValue, setHobbiesValue] = useState([]);
  
    const [linkedIn, setLinkedIn] = useState("");
  
    const [email, setEmail] = useState("");
    const [num, setNum] = useState("");
    const [about, setAbout] = useState("");
    const [name, setName] = useState("");
  const navigate=useNavigate()
    useEffect(async () => {
      const test = await getDoc(
        doc(db, "colleges", props.collegeName, "students", props.userUid)
      );
      console.log(
        "data of amentor at profile page is",
        "and skilss are",
        test.data().data
      );
      Skills = test.data().data.skills;
      setSkills(Skills);
      HobbiesData = test.data().data.hobbies;
      setHobbiesData(HobbiesData);
      setLinkedIn(test.data().data.linked_in);
      setProjectsData(test.data().data.projects);
      setEmail(test.data().data.email);
      setAbout(test.data().data.about);
      setName(test.data().data.name);
      console.log("state updated", Skills);
    }, []);
  
    const showModalAS = () => {
      setIsASModalVisible(true);
    };
  
    const handleOkAS = () => {
      setIsASModalVisible(false);
    };
  
    const handleCancelAS = () => {
      setIsASModalVisible(false);
    };
  
    const AddSkillsData = () => {
      setIsASModalVisible(false);
      //  var d={
      //    data:skillValue,
      //   //  day:dayValue
      //   //  description:"project description"
      //  }
      Skills.push(skillValue);
      setSkills(Skills);
      //  setDayValue(dayValue+1)
      console.log("day wise data is", setSkills);
      setSkillValue("");
    };
  
    const showModalH = () => {
      setIsHModalVisible(true);
    };
  
    const handleOkH = () => {
      setIsHModalVisible(false);
    };
  
    const handleCancelH = () => {
      setIsHModalVisible(false);
    };
  
    const AddHobbiesData = (e) => {
      setIsHModalVisible(false);
   
      HobbiesData.push(HobbiesValue);
      setHobbiesData(HobbiesData);
      //  setDayValue(dayValue+1)
      console.log("day wise data is", setHobbiesData);
      setHobbiesValue("");
    };
  
    const AddProjectsData = () => {
      setIsPModalVisible(false);
  
      ProjectsData.push(ProjectValue);
      setProjectsData(ProjectsData);
      
      ProjectValue("");
    };
    const showModalP = () => {
      setIsPModalVisible(true);
    };
  
    const handleOkP = () => {
      setIsPModalVisible(false);
    };
  
    const handleCancelP = () => {
      setIsPModalVisible(false);
    };
  
    const { TextArea } = Input;
    var done = async (e) => {
      // console.log("hii",Category1,Language1,Standard1,Title,Link)      
    
    
      try {
        const auth = getAuth();
        // onAuthStateChanged(auth,user =>{
          // console.log(user.uid,user.email)
  
          updateDoc(doc(db, "colleges", props.collegeName,"students",props.userUid), {
           Skills:Skills,
           Hobbies:HobbiesData,
           Projects:ProjectsData,
      })
      // addDoc (collection(db,"colleges",props.collegeName,"courses"),{
      //   Category:Category1,
      //    Language:Language1,
      //    Standard:Standard1,
      //    Link:Link,
      //    Title:Title,
      //    Projects:projectsData,
      //    Schedule:dayWiseData,
      //    uid:user.uid
      // })
      .then((e)=>{
          // alert("succsessfully created course")
          navigate(-1)
      })
    // })
  
    
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
    }
    // console.log("mentor profle",props.collegeName,"is college name of a mentor","user uid is",props.userUid)
  
  return (
    <div className="mp-main-container">
    <div className="mp-container">
      <div className="mpp-container">
        <div className="mp-dummy"></div>
        <div className="mp-inner">
          <div className="mp-left">
            <img src={Avatar} className="mp-image-styles"></img>
            <div className="mp-name">Hi,{name} </div>
            <div className="mp-role">Front end developer</div>
            <div className="mp-loc">Bhimavaram, Andra pradesh, Indaia.</div>
          </div>
          <div className="mp-right">
            <div className="mp-right-inner">
              <div className="mp-num">+918688696792</div>
              <div className="mp-mail">{email}</div>
            </div>
          </div>
        </div>
      </div>
      {/* .........................................about container starts here.................................................. */}
      <div className="mp-subcontainer">
        <div className="mps-subsection">
          <div className="MCreateCourseFormSubTitle">About </div>
          <img
            src={EditIcon}
            alt="Edit icon"
            className="MCreateCourseFormProjectEditIcon"
          ></img>
        </div>
        <div className="mp-subsection-text">{about}</div>
      </div>

      {/* .........................................skills container starts here.................................................. */}
      <div className="mp-subcontainer">
        <div className="mps-subsection">
          <div className="MCreateCourseFormSubTitle">Skils </div>
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
        <div className="mp-subsection-text">
          {Skills.map((l, i) => {
            //  console.log("hehheheheh")
            return <div className="mps-subsection-mapedcontent">{l}</div>;
          })}
        </div>

        <Modal
          title="Add Schedule and Syllabus"
          visible={isASModalVisible}
          footer={null}
          onOk={handleOkAS}
          onCancel={handleCancelAS}
          closable={null}
          width={600}
        >
          <input
            className="MCreateCourseFormProjectInput"
            placeholder="Enter the schedule"
            value={skillValue}
            onChange={(e) => {
              console.log("value is", e.target.value);
              setSkillValue(e.target.value);
            }}
          />

          <div
            className="MCreateCourseFormProjectCardBtn"
            onClick={AddSkillsData}
          >
            Done
          </div>
        </Modal>
      </div>

      {/* ......................................................Hobbies container....................................................... */}
      <div className="mp-subcontainer">
        <div className="mps-subsection">
          <div className="MCreateCourseFormSubTitle">Hobbies </div>
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
        <div className="mp-subsection-text">
          {HobbiesData.map((l, i) => {
            //  console.log("hehheheheh")
            return <div className="mps-subsection-mapedcontent">{l}</div>;
          })}
        </div>
        <Modal
          title="Add Schedule and Syllabus"
          visible={isHModalVisible}
          footer={null}
          onOk={handleOkH}
          onCancel={handleCancelH}
          closable={null}
          width={600}
        >
          <input
            className="MCreateCourseFormProjectInput"
            placeholder="Enter the schedule"
            value={HobbiesValue}
            onChange={(e) => {
              console.log("value is", e.target.value);
              setHobbiesValue(e.target.value);
            }}
          />

          <div
            className="MCreateCourseFormProjectCardBtn"
            onClick={AddHobbiesData}
          >
            Done
          </div>
        </Modal>
      </div>

      {/* ...........................linked in container..................................... */}
      <div className="mp-subcontainer">
        <div className="mps-subsection">
          <div className="MCreateCourseFormSubTitle">Linked IN Profile</div>
          <img
            src={EditIcon}
            alt="Edit icon"
            className="MCreateCourseFormProjectEditIcon"
          ></img>
        </div>
        <div className="mp-subsection-text">{linkedIn}</div>
      </div>
      {/* ...............................................projects container................................... */}
      <div className="mp-subcontainer">
        <div className="mps-subsection">
          <div className="MCreateCourseFormSubTitle">Projects </div>
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
        <div className="mp-subsection-text">
          {ProjectsData.map((l, i) => {
            //  console.log("hehheheheh")
            return <div className="mps-subsection-mapedcontent">{l}</div>;
          })}
        </div>

        <Modal
          title="Add Schedule and Syllabus"
          visible={isPModalVisible}
          footer={null}
          onOk={handleOkP}
          onCancel={handleCancelP}
          closable={null}
          width={600}
        >
          <input
            className="MCreateCourseFormProjectInput"
            placeholder="Enter the schedule"
            value={ProjectValue}
            onChange={(e) => {
              console.log("value is", e.target.value);
              setProjectValue(e.target.value);
            }}
          />

          <div
            className="MCreateCourseFormProjectCardBtn"
            onClick={AddProjectsData}
          >
            Done
          </div>
        </Modal>
      </div>
      <div className="MCreateCourse-button">
         <button onClick={done}>done</button>

        </div>
    </div>
  </div>
  )
  
}


function I() {
  return (
    <div>
      <PlusOutlined />
      <EditFilled />
    </div>
  );
}