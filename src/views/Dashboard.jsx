import React from 'react'
import Sidebar from '../components/Sidebar'
import DashboardRight from '../components/DashboardRight'
import { Outlet,Link } from 'react-router-dom'

function Dashboard(){
    return(
        <>
       <div className="bg-[#EDF1F5] flex space-x-8 w-screen h-full p-5">
          <Sidebar/>
          <Outlet/>
       </div>
        
        </>
    )
}
export default Dashboard