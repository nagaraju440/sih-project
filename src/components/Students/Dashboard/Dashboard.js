import React from 'react'
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
  Switch,Navigate
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
<<<<<<< HEAD
import micon from '../../../assets/Icons/Micon.png'
=======
>>>>>>> c5ce5c455e3076234af8a5bfbb991645e28ea215
// const { SubMenu } = Menu;
// import { Link } from 'react-router-dom';
const { Header, Content, Sider } = Layout;
export default function Dashboard(props) {
  return (
    <Router>
    <div style={{width:'100%',height:'100%'}}>
         {/* <TopNavBar/>
         <div className='layout'>
         <MenuBarPage/>
         <div>
             <div>
               <Card bordered="true" title="About" hoverable="true" >
                   card content
               </Card>
             </div>
            
         </div>
         </div> */}
         {/* <Layout> */}
    <Header   
    className="header"
    >
      <div style={{display:"flex",flexDirection:'row'}}>
      <div 
      className="logo" 
      ><div className="headingd">Senior <img src={micon} style={{width:'40px',height:'50px'}} className="miconimage"></img> Junior </div></div>
    {/* <Router> */}
    <div className='logo2'>
    <Menu theme="light" mode="horizontal" defaultSelectedKeys={['1']} className='nav'>
      {/* <div style={{justifyContent:"flex-start",alignItems:'flex-start'}}>senior M junior</div> */}
        <Menu.Item key="1"><Link to="/Dashboard" >Home</Link></Menu.Item>
        <Menu.Item key="2"><Link to="/Dashboard/ideana">Ideana</Link></Menu.Item>
        <Menu.Item key="3"><Link to="/Dashboard">Connect</Link></Menu.Item>
        <Menu.Item key="4"><Link to="/Dashboard">About Us</Link></Menu.Item>
      </Menu>
      </div>
      </div>
    {/* </Router> */}
    </Header>
    <div style={{display:'flex'}}>
      <div className='sidenav-container'>
      {/* <Router> */}
      <Menu className="site-layout-background">
            {/* <div>image here</div>
            <br/> */}
            <div>Hi,Sunil Kalikayi</div>
          <Menu.Item icon={<UserOutlined />}>
              <Link to="/Dashboard">Dashboard</Link>
          </Menu.Item>
          <Menu.Item icon={<UserOutlined />}>
              <Link to="/Dashboard/profile">Profile</Link>
          </Menu.Item>
          <Menu.Item icon={<UserOutlined />}>
              <Link to="/Dashboard/RegisterForCourses">Courses</Link>
          </Menu.Item>
          <Menu.Item icon={<UserOutlined />}>
              <Link to="/Dashboard/assignments">Assignments</Link>
          </Menu.Item >
          <Menu.Item icon={<UserOutlined />}>
              <Link to="/Dashboard">Chat</Link>
          </Menu.Item>
          <Menu.Item icon={<UserOutlined />}>
              <Link to="/Dashboard">Notifications</Link>
          </Menu.Item>
          <Menu.Item icon={<UserOutlined />}>
              <Link to="/Dashboard">Clarify Doubts</Link>
          </Menu.Item>
          <Menu.Item icon={<UserOutlined />}>
              <Link to="/Dashboard">Add to story</Link>
          </Menu.Item>
          <Menu.Item icon={<UserOutlined />}>
          <Link to="/Dashboard">Share</Link>
              
          </Menu.Item>
          <Menu.Item icon={<UserOutlined />} onClick={()=>{
            // alert("hello")
            const auth = getAuth();
            auth.signOut()
          }}>
            {/* <div onClick={()=>{
   
            }}> */}
              <Link to="/">Sign out</Link>
              {/* </div> */}
          </Menu.Item>
        </Menu>
      {/* </Router> */}
       </div>
      {/* </Sider> */}
     <div className='content-container'>
     {/* <Layout> */}
        {/* <Content> */}
         {/* <Router> */}
           <Routes>
           <Route  path='/'  element={<StudentRegisteredCourses/>}></Route>
           <Route path="/student/signup" element={<Navigate replace={true} to="/Dashboard"></Navigate>} >  </Route>
             <Route  path='/Dashboard' element={<StudentRegisteredCourses/>}></Route>
           <Route path='/Dashboard/profile' element={<Profile collegeName={props.collegeName} userUid={props.userUid}  />}></Route>
           <Route path='/Dashboard/assignments' element={<Assignments/>}></Route>
           <Route path='/Dashboard/RegisterForCourses' element={<RegisterForCourses   collegeName={props.collegeName} userUid={props.userUid}/>}></Route>
           <Route path='/Dashboard/ideana' element={<IdeanaHome/>}></Route>
           <Route path='/Dashboard/ideana/addIdea' element={<IdeanaAdd/>}></Route>
           {/* <Route path='/Dashboard' element={<StudentRegisteredCourses/>} ></Route> */}
           </Routes>

         {/* </Router> */}
       
          {/* <div style={{height:2000,backgroundColor:'red'}} className="content-inner">
            This is conent pa
          </div> */}
        {/* </Content> */}

        {/* </Content> */}
      {/* </Layout> */}
     </div>
      </div>
    {/* <Layout> */}
      {/* <Sider > */}
    
    {/* </Layout> */}
  {/* </Layout> */}
    </div>
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

// {/* <Content
// // className="site-layout-background"
// // style={{
// //   padding: 24,
// //   margin: 0,
// //   minHeight: 280,
// // }}
// >
// Content