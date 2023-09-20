import React from 'react'
import Navbar from './Navbar'
import Cards from './Cards'
import { LocalPharmacyRounded, PeopleAltSharp, AccountBalance, TrendingUpOutlined,FilterList, ArrowDropDown } from '@mui/icons-material'
import Pharmacy from './Pharmacy'
import OpenedPharmacy from './OpenedPharmacy'
import Charts from './Chart'

function DashboardRight(){
   return(
   <>
   <div className='w-full space-y-4 h-full'>
            <Navbar/>
        <div>
            <p className='text-[#6C95A7]'>Welcome Back,</p>
            <p className='font-medium text-xl'>Junie</p>
        </div>
        <div className='flex space-x-3'>
            <div className='w-[64%] h-[25%] space-y-3.5'>
                <div className='w-full h-full flex space-x-3 items-center'>
                    <div className='border-2 border-[#009099] w-[33%] rounded-lg bg-white p-4 border-box h-[90%]'>
                        <Cards label="Total Users" value="200" icon={<PeopleAltSharp style={{fontSize:"40px",color:"#6C95A7"}} className='rounded-full h-50 w-[50px] fill-[#6C95A7] bg-[#D9D9D9]/70'/>} description="5% growth"/>
                    </div>
                    <div className='border-2 border-[#01A768] w-[33%] rounded-lg bg-white p-5 border-box h-[90%]'>
                        <Cards label="Pharmacies" value="20" icon={<LocalPharmacyRounded style={{fontSize:"40px", color:"#229835"}} className='rounded-full bg-[#A9DDB1]'/>} description="5% growth"/>
                    </div>
                    <div className='border-2 border-[#FED600] w-[33%] rounded-lg bg-white p-5 border-box h-[90%]'>
                        <Cards label="Revenue" value="200,00" icon={<AccountBalance style={{fontSize:"40px", color:"#FFBB0C"}} className='rounded-full fontSize-large bg-[#FFBB0C] bg-opacity-25 ml-6'/>} description="5% growth"/>
                    </div>
                </div>
                    <div className='flex w-full space-x-6 h-[45%] '>
                        <div className='w-[60%] ' >
                            <div className='flex w-full mb-1 h-[22%] place-content-between pr-0'>
                                <div>
                                    <p className='font-bold text-xl'>Closest Pharmacy</p>
                                    <p className='text-md  text-[#6C95A7]'>Pharmacies found around 15km</p>
                                </div>
                                <div className=' bg-[#3D7C98] bg-opacity-50 place-content-center flex items-center h-[75%] w-[30%]'>
                                    <div><FilterList/></div>
                                    <div className='font-bold text-lg ml-3'>Filters</div>
                                </div>
                            </div>
                            <div className='bg-white rounded-md h-[75%] w-full'>
                                <div className='p-2 w-full flex'>
                                    <div className='border-r-2 border-[#D9D9D9]-500/50 w-[30%] text-center'>No</div>
                                    <div className='border-r-2 border-[#D9D9D9]-500/50 w-[35%] text-center'>Name</div>
                                    <div className='border-r-2 border-[#D9D9D9]-500/50 w-[35%] text-center'>Status</div>
                                </div> 
                                <Pharmacy number="1" status="CLOSED" name="Stella" image={<img src="../src/utils/image 3.png" alt="" />} />
                                <OpenedPharmacy number="2" status="OPENED" name="Stella" image={<img src="../src/utils/image 1.png" alt="" />} />
                                <Pharmacy number="3" status="CLOSED" name="Stella" image={<img src="../src/utils/image 2.png" alt="" />} />
                            </div>
                        </div>
                        <div className='w-[40%] h-full'>
                            <img src="../src/utils/google map.jpeg" alt="" className='w-[97.1%] h-[100%]'/>
                        </div>

                    </div>
            </div>
            <div className='bg-white w-[35%] p-3 border-box'>
                <div className='flex h-[10%] place-content-between'>
                        <p className='pt-2 text-[#6C95A7] text-xl'>User Statistics </p>
                        <div className='w-[40%] h-[100%] pt-2 justify-center text-center rounded-lg bg-[#3D7C98]'>These 3 Months <span><ArrowDropDown/></span></div>
                </div>
                <Charts/>
            </div>
        </div>
   </div>
   </>
   )
}
export default DashboardRight