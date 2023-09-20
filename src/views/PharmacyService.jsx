import React from 'react'
import { Outlet,Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { Add, ArrowBack, KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material'
import PharmacyDetail from '../components/PharmacyDetail'
import AddPharmacyModal from '../components/AddPharmacyModal'
function Pharmacy(){


    return(
        <>
       <div className="bg-[#EDF1F5] space-y-5 w-screen h-full">
          
          <Navbar/>
          <p className='text-xl font-semibold'>List of Pharmacies(20)</p>
           <AddPharmacyModal/>
         
         <div className='bg-white h-[68%] rounded-lg space-y-3'>
            <div className='flex place-content-around pt-3 pl-10  text-lg font-semibold'>
                <span className='text-start  w-[17%]'>Pharmacy Name</span>
                <span className='text-start  w-[17%]'>Pharmacy ID</span>
                <span className='text-start  w-[17%]'>Location</span>
                <span className='text-start  w-[17%]'>No of Medicines</span>
                <span className='text-center  w-[17%]'>Action</span>
            </div>
            <PharmacyDetail name="Bruxellois" ID="Pharm 001" location="Awae" NumberOfMedicine="30" /> 
            <PharmacyDetail name="Bruxellois" ID="Pharm 001" location="Awae" NumberOfMedicine="30" /> 
            <PharmacyDetail name="Bruxellois" ID="Pharm 001" location="Awae" NumberOfMedicine="30" /> 
            <PharmacyDetail name="Bruxellois" ID="Pharm 001" location="Awae" NumberOfMedicine="30" /> 
            <PharmacyDetail name="Bruxellois" ID="Pharm 001" location="Awae" NumberOfMedicine="30" /> 
            <PharmacyDetail name="Bruxellois" ID="Pharm 001" location="Awae" NumberOfMedicine="30" /> 
            <div className='flex justify-end pr-10 h-10 pt-4'>
                <span><KeyboardArrowLeft/></span>
                <span>Page 01 </span>
                <span><KeyboardArrowRight/></span>
            </div>
         </div>

       </div>
        
        </>
    )
}
export default Pharmacy