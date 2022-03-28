import React,{useState,useEffect} from 'react'
import TopNavBar from "./TopNavBar";
import MenuBarPage from "./MenuBarPage";
import "./Dashboard.css";
import { Card } from "antd";

import DashboardIcon from "../../assets/Icons/dashboardIcon.svg";

import { Layout, Menu, Breadcrumb } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
  EditFilled,
  PlusOutlined,
} from "@ant-design/icons";
import {
  ProSidebar,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
} from "react-pro-sidebar";
import Avatar from "../../assets/Images/avtar.jpg";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import {
  Routes,
  Route,
  Link,
  BrowserRouter as Router,
  Redirect,
  Navigate,
  Switch,
  useLocation,
} from "react-router-dom";
import MentorDashboard from "../Mentors/Dashboard/MentorDashboard";
import MentorProfile from "../Mentors/Profile/MentorProfile";
import MentorAssignments from "../Mentors/MentorAssignments/MentorAssignments";
import MCourses from "../Mentors/M-Courses/MCourses";
import MCreateCourseForm from "../Mentors/M-Courses/MCreateCourseForm";
// import Chat from "../../firebasechat/Chat";
import Chat from "../Chat/Chat"
import IdeanaHome from "../Ideana/IdeanaHome";
import IdeanaAdd from "../Ideana/IdeanaAdd";
import micon from "../../assets/Icons/Micon.png";
import Notification from "../Notification/Notification"
import About from "../AboutUs/About";
import dashboardIcon from '../../assets/Icons/dashboardIcon.svg'
import profile from "../../assets/Icons/profileIcon.svg"
import courses from "../../assets/Icons/coursesIcon.svg"
import notification from "../../assets/Icons/notificationIcon.svg"
import assignment from "../../assets/Icons/Assignments.svg"
import addtostory from "../../assets/Icons/AddtostoryIcon.svg"
import doubt from "../../assets/Icons/clarifyDoubtsIcon.svg"
import chat from "../../assets/Icons/chatIcon.svg"
import share from "../../assets/Icons/shareIcon.svg"
import NavBar from "../Navbar/Navbar";

// const { SubMenu } = Menu;
// import { Link } from 'react-router-dom';
const { Header, Content, Sider } = Layout;

export default function Dashboard(props) {
  return (
    <Router>
        <NavBar/>
        <Routes>
              <Route path='/' element={<MCourses collegeName={props.collegeName} userUid={props.userUid} />}></Route>
              <Route path="/mentor/signup3" element={<Navigate replace={true} to="/Dashboard"></Navigate>} >  </Route>
              <Route path='/Dashboard/*' element={<UserDashboard collegeName={props.collegeName} userUid={props.userUid} />}></Route>
              {/* <Route path='/Dashboard/*' element={<MCourses collegeName={props.collegeName} userUid={props.userUid} />}></Route> */}
              {/* <Route path='/Dashboard/profile' element={<MentorProfile collegeName={props.collegeName} userUid={props.userUid} />}></Route>
              <Route path='/Dashboard/assignments' element={<MentorAssignments />}></Route>
              <Route path='/Dashboard/courses' element={<MCourses collegeName={props.collegeName} userUid={props.userUid} />}></Route>
              <Route path='/Dashboard/courses/createCourse' element={<MCreateCourseForm collegeName={props.collegeName} userUid={props.userUid} />}></Route>
              <Route path='/Dashboard/chat' element={<Chat />}></Route> */}
              {/* <Route path='/Dashboard/ideana' element={<IdeanaHome collegeName={props.collegeName} userUid={props.userUid} />}></Route> */}
              <Route path='/Ideana' element={<IdeanaHome collegeName={props.collegeName} userUid={props.userUid} />}></Route>
              <Route path='/Ideana/addIdea' element={<IdeanaAdd collegeName={props.collegeName} />}></Route>
              {/* <Route path='/about' element={<About  />}></Route>   */}
           </Routes>
      
     </Router> 
  );
}

function I() {
  return (
    <div>
      <PlusOutlined />
      <EditFilled />
    </div>
  );
}



function UserDashboard(props){
  var [keyValue,setKeyvalue]=useState("")
  const location=useLocation();
  var paths={
    "/Dashboard":1,
    "/Dashboard/profile":2,
    "/Dashboard/courses":3,
    "/Dashboard/assignments":4,
    "/Dashboard/chat":5,
    "/Dashboard/notification":6
  }

  useEffect(()=>{
    setKeyvalue(JSON.stringify(paths[location.pathname]))
    console.log("hello brroooo",location.pathname,JSON.stringify(paths[location.pathname]))
  },[])
  var x={
    "/Dashboard":<MCourses  collegeName={props.collegeName} userUid={props.userUid}/>,
    "/Dashboard/courses":<MCourses  collegeName={props.collegeName} userUid={props.userUid}/>,
    "/Dashboard/courses/createCourse":<MCreateCourseForm collegeName={props.collegeName} userUid={props.userUid} />,
    "/Dashboard/profile":<MentorProfile collegeName={props.collegeName} userUid={props.userUid} />,
    "/Dashboard/assignments":<MCourses  collegeName={props.collegeName} userUid={props.userUid}/>,
    "/Dashboard/chat" :<Chat  collegeName={props.collegeName} userUid={props.userUid}/>
  }
  return(
    <div style={{ width: "100%", height: "100%" }}>
        
      
    <div style={{ display: "flex" }}>
    <div className="sidenav-container">
      {/* <Router> */}
      <Menu className="site-layout-background"  selectedKeys={[keyValue]} onClick={({item,key,keyPath})=>{
          console.log("clicked broooo")
    keyValue=key
    setKeyvalue(keyValue)
      }} >
        {/* <div>image here</div>
      <br/> */}
        <div className="mentor_name">Hi,Sunil Kalikayi</div>
        <Menu.Item key="1">
          <img src={dashboardIcon} className="icond"/>
          <Link to="/Dashboard" className="iconname">Dashboard</Link>
        </Menu.Item >
        <Menu.Item key="2">
        <img src={profile} className="icond"/>
          <Link to="/Dashboard/profile" className="iconname">Profile</Link>
        </Menu.Item>
        <Menu.Item key="3">
        <img src={courses} className="icond"/>
          <Link to="/Dashboard/courses" className="iconname">Courses</Link>
        </Menu.Item>
        <Menu.Item key="4">
        <img src={assignment} className="icond"/>
          <Link to="/Dashboard/assignments" className="iconname">Assignments</Link>
        </Menu.Item>
        <Menu.Item key="5">
        <img src={chat} className="icond"/>
          <Link to="/Dashboard/chat" className="iconname">Chat</Link>
        </Menu.Item>
        <Menu.Item key="6">
        <img src={notification} className="icond"/>
          <Link to="/Dashboard/notification" className="iconname">Notifications</Link>
        </Menu.Item>
        <Menu.Item key="7">
        <img src={doubt} className="icond"/>
          <Link to="/Dashboard" className="iconname">Clarify Doubts</Link>
        </Menu.Item>
        <Menu.Item key="8">
        <img src={addtostory} className="icond"/>
          <Link to="/Dashboard" className="iconname">Add to story</Link>
        </Menu.Item>
        <Menu.Item key="9">
        <img src={share} className="icond"/>
          <Link to="/Dashboard" className="iconname">Share</Link>
        </Menu.Item>
        <Menu.Item
          icon={<UserOutlined />}
          onClick={() => {
            // alert("hello")
            const auth = getAuth();
            auth.signOut();
          }}
        >
          
          <Link to="/">Sign out</Link>
        </Menu.Item>
      </Menu>
    </div>
    <div className='content-container'>
    {
             x[location.pathname]
           }
    </div>
  </div>
  </div>

  )
}