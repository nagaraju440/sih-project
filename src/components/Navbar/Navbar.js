import React from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import {
    Routes, Route, Link, BrowserRouter as Router,
    Switch,
  } from "react-router-dom";
 import micon from '../../assets/Icons/Micon.png' 
import IdeanaHome from '../Ideana/IdeanaHome';
const { Header, Content, Sider } = Layout;
export default function NavBar() {
  return (
    <div className='navbar-header' >
      {/* <Router> */}
      <Header   
    className=" header"
    >
      <div style={{display:"flex",flexDirection:'row'}}>
      <div className="logo" ><div className="headingd">Senior <img src={micon} style={{width:'40px',height:'45px'}} className="miconimage"></img> Junior </div></div>
    <div className='logo2'>
    <Menu theme="light" mode="horizontal" defaultSelectedKeys={['1']} className='nav'>
        <Menu.Item key="1"><Link to="/Home" >Home</Link></Menu.Item>
        <Menu.Item key="2"><Link to="/Ideana">Ideana</Link></Menu.Item>
        <Menu.Item key="3"><Link to="/About_us">About Us</Link></Menu.Item>
        <Menu.Item key="4"><Link to="/Contact_us">Contact Us</Link></Menu.Item>
      </Menu>
      </div>
      </div>
    </Header>
    {/* </Router> */}
    </div>
  )
}
