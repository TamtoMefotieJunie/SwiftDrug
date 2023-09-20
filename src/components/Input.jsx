import { Search } from '@mui/icons-material'
import React from 'react'


function Input({type,name,placeholder}){
   return(
   <>
   <div className='items-center pl-8 justify-center '>
        <span className='color-green-500'><Search className='stroke-[#D9D9D9] object-scale-down h-48 w-96'/></span>
        <input className='border-none outline-none h-10 w-[80%]' type={type} name={name} placeholder={placeholder} />
   </div>
   
   </>
   )
}
export default Input