import React from 'react'

function Pharmacy({number,image,name,status}){
   return(
   <>
   <div className='border-t-2 h-[25%] pt-2 border-[#D9D9D9]-500/50 w-full flex'>
        <div className='flex w-[30%] justify-center space-x-3'>
            <div className='rounded-full h-4 w-4 mt-1 bg-[#D9D9D9]'></div>
            <div className='text-center w-5 h-5'>{number}</div>
        </div>
        <div className='w-[35%] flex space-x-4 mr-7 justify-center text-center'>
            <div className='w-10 h-10'> {image} </div>
            <span> {name} </span>
        </div>
        <div className='rounded-md align-center w-20 h-7 justify-self-center bg-[#D9D9D9] w-[20%] text-center text-[#3D7C98]'>{status}</div>
    </div> 
   
   </>
   )
}
export default Pharmacy