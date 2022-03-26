import React from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import {
    Routes, Route, Link, BrowserRouter as Router,
    Switch,
  } from "react-router-dom";
 import micon from '../../../assets/Icons/Micon.png' 
const { Header, Content, Sider } = Layout;
export default function NavBar() {
  return (
    <div>
         <Header   
    className="header"
    >
      <div style={{display:"flex",flexDirection:'row'}}>
      <div className="logo" ><div className="headingd">Senior <img src={micon} style={{width:'40px',height:'45px'}} className="miconimage"></img> Junior </div></div>
    {/* <Router> */}
    <div className='logo2'>
    <Menu theme="light" mode="horizontal" defaultSelectedKeys={['1']} className='nav'>
        <Menu.Item key="1"><Link to="/Dashboard" >Home</Link></Menu.Item>
        <Menu.Item key="2"><Link to="/Dashboard">About Us</Link></Menu.Item>
      </Menu>
      </div>
      </div>
    {/* </Router> */}
    </Header>
    </div>
  )
}
