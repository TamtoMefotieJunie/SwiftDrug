import React from 'react'
import Navbar from '../components/Navbar'
import { NotificationsOutlined,PersonOutlineOutlined } from '@mui/icons-material'
import PaymentDetail from '../components/PaymentDetails'
import ReservationDetail from '../components/ReservationDetail'


function Reservation(){
   return(
   <>
   <div className="bg-[#EDF1F5] space-y-5 w-screen h-full">  
        <Navbar/>
        <p className='text-xl font-semibold'>Recent Reservations</p>
        <div className='bg-white h-[78%] rounded-lg space-y-3'>
            <div className='flex place-content-around pt-3 pl-10  text-lg font-semibold'>
                <span className='text-start  w-[20%]'>Medicine Name</span>
                <span className='text-start  w-[17%]'>Pharmacy Name</span>
                <span className='text-start  w-[17%]'>Username</span>
                <span className='text-start  w-[17%]'>Quantity</span>
                <span className='text-center  w-[17%]'>New quantity in  Stock</span>
            </div>
            <ReservationDetail Drugname="Augmentin 625 Duo Tablet" Pharmacyname="Stella" Username="Tamto" Quantity="2" newstock="28"/>
            <ReservationDetail Drugname="Augmentin 625 Duo Tablet" Pharmacyname="Stella" Username="Tamto" Quantity="2" newstock="28"/>
            <ReservationDetail Drugname="Augmentin 625 Duo Tablet" Pharmacyname="Stella" Username="Tamto" Quantity="2" newstock="28"/>
            <ReservationDetail Drugname="Augmentin 625 Duo Tablet" Pharmacyname="Stella" Username="Tamto" Quantity="2" newstock="28"/>
            <ReservationDetail Drugname="Augmentin 625 Duo Tablet" Pharmacyname="Stella" Username="Tamto" Quantity="2" newstock="28"/>
            
        </div>
   </div>
   
   </>
   )
}
export default Reservation