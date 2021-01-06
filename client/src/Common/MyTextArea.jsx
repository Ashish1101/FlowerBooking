import React, { useState } from 'react';
import {  useField } from 'formik';

const MyTextArea = ({ ...props}) => {
    // @ts-ignore
    const [field , meta] = useField(props)
    const [active , setActive] = useState(false)
    return (
      <div onClick={() => setActive(!active)} className="flex flex-col my-2 rounded-full w-full ">
       <textarea 
      
       rows={3}
       className= {`${active ? 'border-opacity-100' : 'border-opacity-50'} border border-2 border-purple-400 rounded-lg w-full focus:outline-none  pl-1 w-full shadow-md resize`}
       {...field}
       {...props}
       
        />
        {meta.touched && meta.error ? (
            <div className="text-red-700 text-xs mx-4">{meta.error}</div>
        ) : null }
      </div>
    )
}

export default MyTextArea