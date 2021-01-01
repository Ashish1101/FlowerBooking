import React , {useState} from 'react'
import {  useField } from 'formik';
const MyAddress = ({...props}) => {
    //@ts-ignore
    const [field , meta] = useField(props);
    const [active , setActive] = useState(false)
    return (
      <div onClick={() => setActive(!active)} className="flex flex-col md:container md:mr-4 mb-6 rounded-full">
       <input 
       className={`md:mx-2 pl-2 outline-none focus:ring-1 ring-white placeholder-purple-400 placeholder-opacity-60  h-8 rounded-lg  text-gray-800 ${active ? 'shadow-inner' : 'shadow-md'}`}
       {...field}
       {...props}
        />
        {meta.touched && meta.error ? (
            <div className="text-red-700 text-xs">{meta.error}</div>
        ) : null }
      </div>
    )
}

export default MyAddress
