import React from 'react'
// import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarContent, SidebarFooter } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
// import './MenuBarPage.css'
export default function MenuBarPage() {
  return (
    <div>
<Layout>
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={broken => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
        <Menu.Item key="1" icon={<UserOutlined />}>
          nav 1
        </Menu.Item>
        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
          nav 2
        </Menu.Item>
        <Menu.Item key="3" icon={<UploadOutlined />}>
          nav 3
        </Menu.Item>
        <Menu.Item key="4" icon={<UserOutlined />}>
          nav 4
        </Menu.Item>
      </Menu>
    </Sider>
    <Layout>
      <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
      <Content style={{ margin: '24px 16px 0' }}>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
          content
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  </Layout>,
  mountNode,
        {/* <ProSidebar className='navigation'>
            <SidebarHeader>
                Header
            </SidebarHeader>
            <SidebarContent>
                <Menu>
                    <MenuItem>
                            <Link to="/">Dashboard</Link>
                    </MenuItem>
                    <MenuItem>
                            <Link to="/">Profile</Link>
                    </MenuItem>
                    <MenuItem>
                            <Link to="/">Courses</Link>
                    </MenuItem>
                    <MenuItem>
                            <Link to="/">Assignments</Link>
                    </MenuItem>
                    <MenuItem>
                            <Link to="/">Chat</Link>
                    </MenuItem>
                    <MenuItem>
                            <Link to="/">Notifications</Link>
                    </MenuItem>
                    <MenuItem>
                            <Link to="/">Clarify doubts</Link>
                    </MenuItem>
                    <MenuItem>
                            <Link to="/">Add to story</Link>
                    </MenuItem>
                    <MenuItem>
                            <Link to="/">Share</Link>
                    </MenuItem>
                </Menu>
                </SidebarContent>
            <SidebarFooter>
                Footer
                <button>Sign out</button>
            </SidebarFooter>
        </ProSidebar> */}
    </div>
  )
}
