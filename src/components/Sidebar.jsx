import { Dashboard, LocalPharmacy, Logout, ReceiptLong, Settings, WalletOutlined } from '@mui/icons-material';
import React from 'react'
import { Outlet,Link } from 'react-router-dom'

function Sidebar(){
   return(
   <>
   <div className="w-1/8 h-full bg-white p-3 box-border rounded-md text-center content-center"> 
      <h1 className="font-bold"> <span className="text-[#229835]">SWIFT</span> <br /> <span className="text-[#206C8D]">DRUG</span></h1>
      <br />
      <div className=" space-y-6 box-border pt-3 h-[50%]">
         
         <div className='flex space-x-5 hover:bg-blue-100'>
            <span><Dashboard style={{color:"#3D7C98"}}/></span>
            <Link to="/"><span className='text-[#3D7C98]'>Dashboard</span></Link>
         </div>
         <div className='flex space-x-5 hover:bg-blue-100'>
            <span><LocalPharmacy/></span>
            <Link to="/Pharmacy" style={{color:"black"}}><span>pharmacy</span></Link>
         </div>
         <div className='flex space-x-5 hover:bg-blue-100'>
            <span><WalletOutlined/></span>
            <Link to="/Dashboard/Payment" style={{color:"black"}}> <span>payment</span></Link>
         </div>
         <div className='flex space-x-5 w-full box-border hover:bg-blue-100'>
            <span> <ReceiptLong/> </span>
           <Link to="/reservation" style={{color:"black"}}> <span>Reservation</span></Link>
         </div>
         
      </div>
      
      <div className='h-[35%] space-y-6 box-border pt-16 place-content-center '>
         <div className='flex space-x-5 hover:bg-blue-100'>
            <span><Settings/></span>
            <span>Settings</span>
         </div>
         <div className='flex space-x-5 hover:bg-blue-100'>
            <span><Logout/></span>
            <span>Logout</span>
         </div>
      </div>
   </div>
   </>
   )
}
export default Sidebar;