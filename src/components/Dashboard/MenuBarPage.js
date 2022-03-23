import React from 'react'
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarContent, SidebarFooter } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Link } from 'react-router-dom';
// import './MenuBarPage.css'
export default function MenuBarPage() {
  return (
    <div>
        <ProSidebar className='navigation'>
            <SidebarHeader>
                Header
            </SidebarHeader>
            <SidebarContent>
                <Menu>
                    <MenuItem>
                            <Link to="/dashboard">Dashboard</Link>
                    </MenuItem>
                    <MenuItem>
                            <Link to="/dashboard">Profile</Link>
                    </MenuItem>
                    <MenuItem>
                            <Link to="/dashboard">Courses</Link>
                    </MenuItem>
                    <MenuItem>
                            <Link to="/dashboard">Assignments</Link>
                    </MenuItem>
                    <MenuItem>
                            <Link to="/dashboard">Chat</Link>
                    </MenuItem>
                    <MenuItem>
                            <Link to="/dashboard">Notifications</Link>
                    </MenuItem>
                    <MenuItem>
                            <Link to="/dashboard">Clarify doubts</Link>
                    </MenuItem>
                    <MenuItem>
                            <Link to="/dashboard">Add to story</Link>
                    </MenuItem>
                    <MenuItem>
                            <Link to="/dashboard">Share</Link>
                    </MenuItem>
                </Menu>
                </SidebarContent>
            <SidebarFooter>
                {/* Footer */}
                <button>Sign out</button>
            </SidebarFooter>
        </ProSidebar>
    </div>
  )
}
