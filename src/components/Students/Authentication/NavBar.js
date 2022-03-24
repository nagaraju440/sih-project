import React from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import {
    Routes, Route, Link, BrowserRouter as Router,
    Switch,
  } from "react-router-dom";
  
const { Header, Content, Sider } = Layout;
export default function NavBar() {
  return (
    <div>
         <Header   
    className="header"
    >
      <div style={{display:"flex",flexDirection:'row'}}>
      <div 
      className="logo" 
      >senior M junior</div>
    {/* <Router> */}
    <div className='logo2'>
    <Menu theme="light" mode="horizontal" defaultSelectedKeys={['1']} className='nav'>
      {/* <div style={{justifyContent:"flex-start",alignItems:'flex-start'}}>senior M junior</div> */}
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
