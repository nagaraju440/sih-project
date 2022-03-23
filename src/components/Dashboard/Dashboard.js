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

// const { SubMenu } = Menu;
import { Link } from 'react-router-dom';
const { Header, Content, Sider } = Layout;
export default function Dashboard() {
  return (
    <div>
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
         <Layout>
    <Header   
    className="header"
    >
      <div 
      className="logo" 
      />
      <Menu theme="light" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1"><Link to="/Dashboard">Home</Link></Menu.Item>
        <Menu.Item key="2"><Link to="/Dashboard">Ideana</Link></Menu.Item>
        <Menu.Item key="3"><Link to="/Dashboard">Connect</Link></Menu.Item>
        <Menu.Item key="4"><Link to="/Dashboard">About Us</Link></Menu.Item>
      </Menu>
    </Header>
    <Layout>
      <Sider >
        <Menu className="site-layout-background">
            {/* <div>image here</div>
            <br/> */}
            <div>Hi,Sunil Kalikayi</div>
          <Menu.Item icon={<UserOutlined />}>
              <Link to="/Dashboard">Dashboard</Link>
          </Menu.Item>
          <Menu.Item icon={<UserOutlined />}>
              <Link to="/Dashboard">Profile</Link>
          </Menu.Item>
          <Menu.Item icon={<UserOutlined />}>
              <Link to="/Dashboard">Courses</Link>
          </Menu.Item>
          <Menu.Item icon={<UserOutlined />}>
              <Link to="/Dashboard">Assignments</Link>
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
              <Link to="/Dashboard">Sign out</Link>
              {/* </div> */}
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Content>
          <div>
            This is conent pa
          </div>
        </Content>

        {/* </Content> */}
      </Layout>
    </Layout>
  </Layout>,
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

{/* <Content
// className="site-layout-background"
// style={{
//   padding: 24,
//   margin: 0,
//   minHeight: 280,
// }}
>
Content
<Card>
  {/* <p style="background-image:url('../../assets/Images/avtar.jpg')">

  </p> */}
//   {/* <Avatar/> */}
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
//       {/* I am a Frontend Developer, and use to teach the programming languages . */}
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
// // https://www.linkedin.com/in/sunil-kalikayi-182987219/
// // </Card>
// // <Card bordered="true" title="Git Hub Profile" hoverable="true" extra={<I/>}>
// // https://github.com/sunilkalikayi

// <div style={{height:2000,backgroundColor:'red'}}>
// hehhehehe
// </div>
// </Card> */}