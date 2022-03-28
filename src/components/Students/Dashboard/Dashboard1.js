import React,{useState,useEffect} from 'react'
import TopNavBar from './TopNavBar'
import MenuBarPage from './MenuBarPage'
import "./Dashboard.css"
import { Card } from 'antd'
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined,EditFilled,PlusOutlined } from '@ant-design/icons';
import { ProSidebar, MenuItem, SubMenu, SidebarHeader, SidebarContent, SidebarFooter } from 'react-pro-sidebar';
// import Avatar from '../../assets/Images/avtar.jpg'
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import {
  Routes, Route, Link, BrowserRouter as Router,
  Switch,Navigate, useLocation
} from "react-router-dom";
import StudentDashboard from './StudentDashboard'
// import MentorProfile from '../Mentors/Profile/MentorProfile'
// import MentorAssignments from '../Mentors/MentorAssignments/MentorAssignments'
import Profile from '../Profile/Profile'
import Assignments from '../Assignments/Assignments'
import StudentRegisteredCourses from './StudentMainDashboard/StudentRegisteredCourses'
import RegisterForCourses from '../RegisterForCourses/RegisterForCourses'
import IdeanaHome from '../../Ideana/IdeanaHome'
import IdeanaAdd from '../../Ideana/IdeanaAdd'
import micon from "../../../assets/Icons/Micon.png";
import Chat from '../../Chat/Chat'
import TempPage from './StudentMainDashboard/TempPage'
import About from '../../AboutUs/About'
import Notification from "../../Notification/Notification"
import dashboardIcon from '../../../assets/Icons/dashboardIcon.svg'
import profile from "../../../assets/Icons/profileIcon.svg"
import courses from "../../../assets/Icons/coursesIcon.svg"
import notification from "../../../assets/Icons/notificationIcon.svg"
import assignment from "../../../assets/Icons/Assignments.svg"
import addtostory from "../../../assets/Icons/AddtostoryIcon.svg"
import doubt from "../../../assets/Icons/clarifyDoubtsIcon.svg"
import chat from "../../../assets/Icons/chatIcon.svg"
import share from "../../../assets/Icons/shareIcon.svg"
import NavBar from '../../Navbar/Navbar'
// const { SubMenu } = Menu;
// import { Link } from 'react-router-dom';
const { Header, Content, Sider } = Layout;
export default function Dashboard(props) {
  return (
  <Router>
     <NavBar/>
     <Routes>
           <Route  path='/'  element={<Navigate replace={true} to="/Dashboard"></Navigate>}></Route>
           {/* <Route path="/student/signup" element={<Navigate replace={true} to="/Dashboard"></Navigate>} >  </Route> */}
             {/* <Route  path='/Dashboard' element={<StudentRegisteredCourses collegeName={props.collegeName} userUid={props.userUid}/>}></Route> */}
             <Route  path='/Dashboard/*' element={<UserDashboard  collegeName={props.collegeName} userUid={props.userUid} />}></Route>
           {/* <Route path='/Dashboard/profile' element={<Profile collegeName={props.collegeName} userUid={props.userUid}  />}></Route>
           <Route path='/Dashboard/assignments' element={<Assignments/>}></Route>
           <Route path='/Dashboard/chat' element={<Chat/>}></Route>
           <Route path='/Dashboard/temp' element={<TempPage/>}></Route>
       
           <Route path='/Dashboard/notifications' element={<Notification/>}></Route>
           <Route path='/Dashboard/RegisterForCourses' element={<RegisterForCourses   collegeName={props.collegeName} userUid={props.userUid}/>}></Route> */}
           <Route path='/About' element={<About/>}></Route>
            <Route path='/Ideana' element={<IdeanaHome collegeName={props.collegeName}/> }></Route>
           <Route path='/Ideana/addIdea' element={<IdeanaAdd collegeName={props.collegeName}/>}></Route> 
           </Routes>
  
   </Router>  
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
function UserDashboard(props){
  var [keyValue,setKeyvalue]=useState("")
  let location = useLocation();
  var paths={
    "/Dashboard":1,
    "/Dashboard/profile":2,
    "/Dashboard/RegisterForCourses":3,
    "/Dashboard/assignments":4,
    "/Dashboard/chat":5,
    "/Dashboard/notification":6
  }

  useEffect(()=>{
    setKeyvalue(JSON.stringify(paths[location.pathname]))
    console.log("hello brroooo",location.pathname,JSON.stringify(paths[location.pathname]))
  },[])
  var x={
    "/Dashboard":<StudentRegisteredCourses  collegeName={props.collegeName} userUid={props.userUid}/>,
    "/Dashboard/profile":<Profile  collegeName={props.collegeName} userUid={props.userUid}/>,
    "/Dashboard/RegisterForCourses":<RegisterForCourses  collegeName={props.collegeName} userUid={props.userUid}/>,
    "/Dashboard/assignments":<StudentRegisteredCourses  collegeName={props.collegeName} userUid={props.userUid}/>,
    "/Dashboard/chat" :<StudentRegisteredCourses  collegeName={props.collegeName} userUid={props.userUid}/>
  }
    return(
      <div>
  <div style={{width:'100%',height:'100%'}}>
      
      <div style={{display:'flex'}}>
        <div className='sidenav-container'>
        <Menu className="site-layout-background"  selectedKeys={[keyValue]} onClick={({item,key,keyPath})=>{
          console.log("clicked broooo")
    keyValue=key
    setKeyvalue(keyValue)
      }} >
              <div className="studentname">Hi,Sunil Kalikayi</div>
              <Menu.Item>
                  <img src={dashboardIcon} className="icond"/>
                  <Link  to="/Dashboard" key="1" className="iconname">Dashboard</Link>
                </Menu.Item>
                <Menu.Item >
                <img src={profile} className="icond"/>
                  <Link key="2" to="/Dashboard/profile" className="iconname">Profile</Link>
                </Menu.Item>
                <Menu.Item >
                <img src={courses} className="icond"/>
                  <Link key="3" to="/Dashboard/RegisterForCourses" className="iconname">Courses</Link>
                </Menu.Item>
                <Menu.Item >
                <img src={assignment} className="icond"/>
                  <Link key="4" to="/Dashboard/assignments" className="iconname">Assignments</Link>
                </Menu.Item>
                <Menu.Item >
                <img src={chat} className="icond"/>
                  <Link key="5" to="/Dashboard/chat" className="iconname">Chat</Link>
                </Menu.Item>
                <Menu.Item >
                <img src={notification} className="icond"/>
                  <Link key="6" to="/Dashboard" className="iconname">Notifications</Link>
                </Menu.Item>
                <Menu.Item >
                <img src={doubt} className="icond"/>
                  <Link key="7" to="/Dashboard" className="iconname">Clarify Doubts</Link>
                </Menu.Item>
                <Menu.Item>
                <img src={addtostory} className="icond"/>
                  <Link key="7" to="/Dashboard" className="iconname">Add to story</Link>
                </Menu.Item>
                <Menu.Item>
                <img src={share} className="icond"/>
                  <Link key="8" to="/Dashboard" className="iconname">Share</Link>
                </Menu.Item>
            <Menu.Item icon={<UserOutlined />} onClick={()=>{
              const auth = getAuth();
              auth.signOut()
            }}>
              
                <Link key="9" to="/">Sign out</Link>
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
      </div>
      
    )
}