import { Search } from '@mui/icons-material'
import React from 'react'


function FormInput({label,type,name,placeholder,validationRules,register}){
   return(
   <>
    <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                {label}
              </label>
              <div className="mt-2">
                <input
                {
                       ...register(name, validationRules)
                }
                  type={type}
                  placeholder={placeholder}
                  className="block p-4 w-full outline-none rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                />
              </div>
            </div>
   </>
   )
}
export default FormInput