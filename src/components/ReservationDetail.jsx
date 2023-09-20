import { Delete, DeleteOutlined } from '@mui/icons-material'
import React from 'react'

function ReservationDetail({Drugname,Username,Quantity,Pharmacyname,newstock}){
   return(
   <>
   <div className='flex place-content-around pt-2 pl-10 space-x-2 border-t-2 text-start '>
        <span className='text-start w-[17%]'>{Drugname}</span>
        <span className='text-start w-[17%]'>{Pharmacyname}</span>
        <span className='text-start w-[17%]'>{Username}</span>
        <span className='text-start w-[17%]'>{Quantity}</span>
        <span className='text-center w-[17%]'> {newstock}</span>
   </div>
   
   </>
   )
}
export default ReservationDetail