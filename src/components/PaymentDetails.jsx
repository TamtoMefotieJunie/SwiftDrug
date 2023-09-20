import { Delete, DeleteOutlined } from '@mui/icons-material'
import React from 'react'
import OM from './OM'

function PaymentDetail({Drugname,Quantity,Pharmacyname,Amount}){
   return(
   <>
   <div className='flex place-content-around pt-2 pl-10 space-x-2 border-t-2 text-start '>
        <span className='text-start w-[17%]'>{Drugname}</span>
        <span className='text-start text-[#229835] font-semibold w-[17%]'>{Pharmacyname}</span>
        <span className='text-start w-[17%]'>{Quantity}</span>
        <span className='text-start text-[#206C8D] font-bold w-[17%]'>{Amount}</span>
        <OM method="Orange Money"/>
   </div>
   
   </>
   )
}
export default PaymentDetail