import React, { useState } from 'react';
import {  useField } from 'formik';

const MyTextInput = ({ ...props}) => {
    // @ts-ignore
    const [field , meta] = useField(props)
    const [active , setActive] = useState(false)
    return (
      <div onClick={() => setActive(!active)} className="flex flex-col mb-6 rounded-full">
       <input 
       className= {`text-sm w-48 mx-auto md:w-72 ${active ? 'shadow-inner' : 'shadow-md'} md:mx-2 pl-2 outline-none focus:ring-1 ring-white placeholder-purple-400 placeholder-opacity-60  h-8 rounded-lg  text-gray-800`}
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