import React from 'react'
import {  Link } from "react-router-dom";
import './TopNavBar.css'

export default function TopNavBar() {
  return (
    <div 
    className='Nav-container'
    >
        ICON HERE
     
        {/* <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/mentor/signup">Ideana</Link>
        </li>
        <li>
            <Link to="/student/signup">Connect</Link>
        </li>
        <li>
            <Link to="/mentor/signin">About Us</Link>
        </li> */}
    </div>
  )
}

// ReactDOM.render(
//   <Layout>
//     <Sider
//       breakpoint="lg"
//       collapsedWidth="0"
//       onBreakpoint={broken => {
//         console.log(broken);
//       }}
//       onCollapse={(collapsed, type) => {
//         console.log(collapsed, type);
//       }}
//     >
//       <div className="logo" />
//       <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
//         <Menu.Item key="1" icon={<UserOutlined />}>
//           nav 1
//         </Menu.Item>
//         <Menu.Item key="2" icon={<VideoCameraOutlined />}>
//           nav 2
//         </Menu.Item>
//         <Menu.Item key="3" icon={<UploadOutlined />}>
//           nav 3
//         </Menu.Item>
//         <Menu.Item key="4" icon={<UserOutlined />}>
//           nav 4
//         </Menu.Item>
//       </Menu>
//     </Sider>
//     <Layout>
//       <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
//       <Content style={{ margin: '24px 16px 0' }}>
//         <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
//           content
//         </div>
//       </Content>
//       <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
//     </Layout>
//   </Layout>,
//   mountNode,
// );