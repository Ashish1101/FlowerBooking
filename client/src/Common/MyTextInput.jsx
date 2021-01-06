import React, { useState } from 'react';
import {  useField } from 'formik';

const MyTextInput = ({ ...props}) => {
    // @ts-ignore
    const [field , meta] = useField(props)
    const [active , setActive] = useState(false)
    return (
      <div onClick={() => setActive(!active)} className="flex flex-col md:my-4 my-2 rounded-full w-full">
       <input 
       className= {`text-sm w-full  md:w-full ${active ? 'border-opacity-100' : 'border-opacity-50'} border  pl-2 outline-none  placeholder-purple-400 placeholder-opacity-60  h-8 rounded-lg  text-gray-800 border-purple-400`}
       {...field}
       {...props}
    
       
        />
        {meta.touched && meta.error ? (
            <div className="text-red-700 text-xs mx-4">{meta.error}</div>
        ) : null }
      </div>
    )
}

export default MyTextInput