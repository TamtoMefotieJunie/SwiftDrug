import React from 'react'
import Navbar from '../components/Navbar'
import { NotificationsOutlined,PersonOutlineOutlined } from '@mui/icons-material'
import PaymentDetail from '../components/PaymentDetails'


function Payment(){
   return(
   <>
   <div className="bg-[#EDF1F5] space-y-5 w-screen h-full">  
        <Navbar/>
        <p className='text-xl font-semibold'>Recent Payments</p>
        <div className='bg-white h-[78%] rounded-lg space-y-3'>
            <div className='flex place-content-around pt-3 pl-10  text-lg font-semibold'>
                <span className='text-start  w-[17%]'>Medicine Name</span>
                <span className='text-start  w-[17%]'>Pharmacy Name</span>
                <span className='text-start  w-[17%]'>Quantity</span>
                <span className='text-start  w-[17%]'>Amount</span>
                <span className='text-center  w-[17%]'>Payment Method</span>
            </div>
            <PaymentDetail Drugname="Augmentin 625 Duo Tablet" Pharmacyname="Stella" Quantity="2" Amount="15000"/>
            <PaymentDetail Drugname="Augmentin 625 Duo Tablet" Pharmacyname="Stella" Quantity="2" Amount="15000"/>
            <PaymentDetail Drugname="Augmentin 625 Duo Tablet" Pharmacyname="Stella" Quantity="2" Amount="15000"/>
            <PaymentDetail Drugname="Augmentin 625 Duo Tablet" Pharmacyname="Stella" Quantity="2" Amount="15000"/>
            <PaymentDetail Drugname="Augmentin 625 Duo Tablet" Pharmacyname="Stella" Quantity="2" Amount="15000"/>
            <div className='flex justify-end pr-10 h-10  pt-2 text-xl '>
                <span className='text-[#229835] font-bold'>TOTAL : </span>
                <span className='text-[#229835] font-bold'>100,000FCFA</span>
            </div>
        </div>
   </div>
   
   </>
   )
}
export default Payment