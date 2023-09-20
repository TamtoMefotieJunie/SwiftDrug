import { Height, PeopleAltSharp, Search, TrendingUpOutlined } from '@mui/icons-material'
import { blue } from '@mui/material/colors'
import React from 'react'


function Cards({icon,value,label,description}){
   return(
   <>
   <div className='w-full h-full'>
        <div className='flex'>
            <div className='font-bold text-xl mr-12'>{label}</div>
            <div style={{height:"45px",width:"40px"}}>{icon}</div>
        </div>
        <div className='space-y-2'>
            <span className='text-[#6C95A7]'>{value}</span>
            <div className='flex space-x-5'>
                <span><TrendingUpOutlined style={{color:"#3EEF5A"}} /></span>
                <span className='text-[#D9D9D9]'>{description}</span>
            </div>
        </div>
   </div>
   
   </>
   )
}
export default Cards