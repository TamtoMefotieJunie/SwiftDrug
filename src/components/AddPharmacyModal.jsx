import React, { useState,useContext } from "react";
import { Add } from "@mui/icons-material";
import { CloseOutlined, MenuOutlined } from "@mui/icons-material";
// import {ThemeContext}  from "../util/ThemeContext";
import FormInput from "./FormInputs";
import Input from "../components/Input"
import { useForm } from "react-hook-form"; 


function AddPharmacyModal() {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }
  const {register, handleSubmit,formState: {errors}} = useForm()
  return (
    <>
       
        <div className='flex bg-white place-content-between pl-3 pr-5'>
            <Input type="text" name="search" placeholder="Search pharmacy..."/>
            <div onClick={toggleModal} className='cursor-pointer bg-[#2ED47A] w-[15%] rounded-lg text-center pt-2 '>
                <span style={{color:"white"}}><Add/> Add Pharmacy</span>
            </div>
        </div>
{modal && (
        <div className="">
            <div style={{background:"rgba(49, 49, 49, 0.8)"}} className="opacity-75 backdrop-blur-sm w-full absolute bottom-0 left-0 right-0 top-0"></div>
            <div className="p-7 bg-white border-gray-900/10 opacity-65 absolute top-[10%] left-[33%] self-center place-content-center w-[38%] h-[88%]">
                <form action=""  onSubmit={handleSubmit(() => console.log("user registered successfully!"))}>
                    <div className="flex  place-content-between  static">
                        <p className="text-xl">Add Pharmacy</p>
                        <button className="rounded-full inline-flex w-6 place-items-center  h-7" onClick={toggleModal}>
                        <CloseOutlined className="-translate-x-3" />
                        </button>
                    </div>
                    <br />
                    <div className="space-y-1.5">
                        <FormInput
                        register={register}
                        validationRules={
                            {
                            required: "Please Enter The Pharmacy Name",
                            minLength: {
                            value: 4,
                            message: "Name must be at least 4 characters long!"
                            }
                        }
                        }
                        label="Pharmacy name" name="name" placeholder="John" type="text"/>
                        <p className="text-red-600 justify-self-center self-center">{errors.name?.message}</p>
                        <FormInput
                        register={register}
                        validationRules={
                            {
                            required: "Please The Pharmacy ID",
                            minLength: {
                            value: 4,
                            message: "Pharmacy ID must be at least 8 characters long!"
                            }
                        }
                        }
                        label="Pharmacy ID" name="id" placeholder="Pharm 000" type="text"/>
                        <p className="text-red-600 justify-self-center self-center">{errors.id?.message}</p>
                        <FormInput 
                        register={register}
                        validationRules={
                            {
                            required: "Please Enter The Location",
                            minLength: {
                            value: 4,
                            message: "Location must be at least 4 characters long!"
                            }
                        }
                        }
                        label="Location" name="location" placeholder="Awae" type="text"/>
                        <p className="text-red-600 justify-self-center self-center">{errors.location?.message}</p>
                        <FormInput 
                        register={register}
                        validationRules={
                            {
                            required: "Please Enter The Number of Medicine",
                            pattern: {
                                value: /^[0-9]+$/, 
                                message: "This field can only contain digits!"
                            }
                        }
                        }
                        label="No Of Medicines" name="mednum" placeholder="20" type="number"/>
                        <p className="text-red-600 justify-self-center self-center">{errors.mednum?.message}</p>
                    </div>
                    <div className="mt-2 flex items-center justify-end gap-x-6">
                        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                        Cancel
                        </button>
                        <button
                        type="submit"
                        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                        Save
                        </button>
                     </div>
                </form> 
            </div>
            
        </div>
)}
    </>
    );
}
export default AddPharmacyModal