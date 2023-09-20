import React from 'react'
import Input from './Input'
import { NotificationsOutlined,PersonOutlineOutlined } from '@mui/icons-material'


function Navbar(){
   return(
   <>
   <div className='flex space-x-30 bg-white rounded-md h-[10%] '>
      <div className='w-[40%] self-center '>
         <Input type="text" name="search" placeholder="Search..."/>
      </div>
      <div className='w-[60%] justify-end pr-10 items-center flex space-x-5'>
         <div><NotificationsOutlined/></div>
         
         <div className=''>
            <PersonOutlineOutlined style={{fontSize:"50px"}} className='stroke-[#D9D9D9] h-full w-full bg-[#D9D9D9] rounded-lg '/>
         </div>
         <span className='font-medium'>Junie</span>
      </div>
   </div>
   
   </>
   )
}
export default Navbar