import React, { useState , useEffect } from 'react'
import Login from '../Common/Login'
import Register from '../Common/Register'
import {useSelector} from 'react-redux'
import { useHistory } from 'react-router-dom'

const MergeRegister = () => {
    const [active , setActive] = useState('register')
    const [bgColor , setBgColor] = useState(false)
    // console.log(bgColor)
    // @ts-ignore
    const admin = useSelector((state) => state.admin)
    console.log(admin)
    //token lives inside admin.admin.token

    const history = useHistory()
    useEffect(() => {
        if(admin?.admin?.isAdmin) {
            history.push('/')
        }
        //eslint-disable-next-line
    })
    return (
        <div className=" mx-auto mt-24 md:mt-28 w-64  md:w-80">
            <div className="bg-blue-800 flex flex-row justify-evenly" >
               <button className={`w-1/2 h-8 focus:outline-none shadow-sm   ${bgColor ? 'bg-white': 'bg-indigo-400'}`} onClick={() => {setActive('register'); setBgColor(!bgColor)}}>Sign Up</button>
               <button className={` w-1/2 h-8 focus:outline-none shadow-sm   ${bgColor ? 'bg-indigo-400': 'bg-white'}`} onClick={() => {setActive('login'); setBgColor(!bgColor)}}>Sign In</button>
            </div>
            {active === 'register' ? (<Register />) : ''}
            {active === 'login' ? (<Login />) : ''}
        </div>
    )
}

export default MergeRegister
