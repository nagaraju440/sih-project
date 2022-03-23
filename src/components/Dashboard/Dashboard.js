import React from 'react'
import TopNavBar from './TopNavBar'
import MenuBarPage from './MenuBarPage'
import "./Dashboard.css"
import { Card } from 'antd'
export default function Dashboard() {
  return (
    <div>
         <TopNavBar/>
         <div className='layout'>
         <MenuBarPage/>
         <div>
             <div>
               <Card>
                   
               </Card>
             </div>
            
         </div>
         </div>
    </div>
  )
}
