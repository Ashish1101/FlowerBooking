import React, { useState } from 'react';
import {  useField } from 'formik';

const MyTextArea = ({ ...props}) => {
    // @ts-ignore
    const [field , meta] = useField(props)
    const [active , setActive] = useState(false)
    return (
      <div onClick={() => setActive(!active)} className="flex flex-col mb-6 rounded-full md:w-11/12 mx-auto pl-1 w-48 ">
       <textarea 
       className= {`${active ? 'shadow-inner' : 'shadow-md'} rounded-lg md:mx-2 focus:outline-none md:w-11/12 mx-auto pl-1 w-48 shadow-md resize`}
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