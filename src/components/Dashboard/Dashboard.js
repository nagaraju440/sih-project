import React from 'react'
import TopNavBar from './TopNavBar'
import MenuBarPage from './MenuBarPage'
import "./Dashboard.css"
import { Card } from 'antd'
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined,EditFilled,PlusOutlined } from '@ant-design/icons';
import { ProSidebar, MenuItem, SubMenu, SidebarHeader, SidebarContent, SidebarFooter } from 'react-pro-sidebar';
import Avatar from '../../assets/Images/avtar.jpg'
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import {
  Routes, Route, Link, BrowserRouter as Router,Redirect,Navigate,
  Switch,
} from "react-router-dom";
import MentorDashboard from '../Mentors/Dashboard/MentorDashboard'
import MentorProfile from '../Mentors/Profile/MentorProfile'
import MentorAssignments from '../Mentors/MentorAssignments/MentorAssignments'
import MCourses from '../Mentors/M-Courses/MCourses'
import MCreateCourseForm from '../Mentors/M-Courses/MCreateCourseForm'
import Chat from '../Chat/Chat'
<<<<<<< HEAD
import IdeanaHome from '../Ideana/IdeanaHome'
import IdeanaAdd from '../Ideana/IdeanaAdd'
import micon from '../../assets/Icons/Micon.png'
=======
// import IdeanaHome from '../Ideana/IdeanaHome'
// import IdeanaAdd from '../Ideana/IdeanaAdd'
>>>>>>> ab5a5cfb52f89537c3040190a4734434655d9687
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
      >Senior <img src={micon}></img> Junior</div>
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
              <Link to="/Dashboard/courses">Courses</Link>
          </Menu.Item>
          <Menu.Item icon={<UserOutlined />}>
              <Link to="/Dashboard/assignments">Assignments</Link>
          </Menu.Item >
          <Menu.Item icon={<UserOutlined />}>
              <Link to="/Dashboard/chat">Chat</Link>
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
           <Route  path='/'  element={<MentorDashboard/>}></Route>
            <Route path="/mentor/signup3" element={<Navigate replace={true} to="/Dashboard"></Navigate>} >  </Route>
             <Route  path='/Dashboard' element={<MentorDashboard/>}></Route>
           <Route path='/Dashboard/profile' element={<MentorProfile collegeName={props.collegeName} userUid={props.userUid} />}></Route>
           <Route path='/Dashboard/assignments' element={<MentorAssignments/>}></Route>
           <Route path='/Dashboard/courses' element={<MCourses/>}></Route>
           <Route path='/Dashboard/courses/createCourse' element={<MCreateCourseForm collegeName={props.collegeName} userUid={props.userUid}/>}></Route>
           <Route path='/Dashboard/chat' element={<Chat/>}></Route>
           {/* <Route path='/Dashboard/ideana' element={<IdeanaHome/>}></Route>
           <Route path='/Dashboard/ideana/addIdea' element={<IdeanaAdd/>}></Route> */}
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