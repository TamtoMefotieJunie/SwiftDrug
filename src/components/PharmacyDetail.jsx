import { Delete, DeleteOutlined } from '@mui/icons-material'
import React from 'react'

function PharmacyDetail({name,location,ID,NumberOfMedicine}){
   return(
   <>
   <div className='flex place-content-around pt-2 pl-10 space-x-2 border-t-2 text-start '>
        <span className='text-start w-[17%]'>{name}</span>
        <span className='text-start w-[17%]'>{ID}</span>
        <span className='text-start w-[17%]'>{location}</span>
        <span className='text-start w-[17%]'>{NumberOfMedicine}</span>
        <span className='text-center w-[17%]' style={{color:"red"}}>{<Delete/>} Remove</span>
   </div>
   
   </>
   )
}
export default PharmacyDetail