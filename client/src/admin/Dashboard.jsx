import React , {useEffect, useState} from 'react'
import CenterLayout from './CenterLayout'
import RightLayout from './RightLayout'

import Products from './Products'
import Search from './Search'
import Profile from './Profile'
import UpdateForm from './UpdateForm'
import {VscAccount, VscSettings} from 'react-icons/vsc'
import {  MdHome , MdSearch} from "react-icons/md";
import {BiLogOut} from 'react-icons/bi'
import toast from 'react-hot-toast'
import {useDispatch, useSelector} from 'react-redux'
import { logoutAdmin} from '../Store/actions/adminActions'
import Button from '../Common/Button'
import {  IoBagAddSharp } from "react-icons/io5";
import AddProduct from './Product/AddProduct'
const Dashboard = () => {
    // const [active , setActive] = useState(false)
    const [curretDiv , setCurrentDiv] = useState("first")
    // const toogle = (e) => {
    //    setActive(!active)
    // }
    // @ts-ignore
    const {admin} = useSelector((state) => state.admin)
    const dispatch = useDispatch()

    

    useEffect(() => {
        if(admin.isAdmin) {
           toast.success(`Welcome ${admin.name}`)
        }
    
        //eslint-disable-next-line
    }, [])

    return (
        <div className="container mx-auto rounded-t-3xl bg-gradient-to-r from-purple-400 via-blue-400 to-white rounded-b-3xl my-2 h-screen flex flex-row shadow-2xl">
            <div className=" w-2/12  flex flex-wrap">
            <div className="pl-4">
            <div className="text-gray-800 ml-8 font-semibold text-opacity-90 text-xl">Flowerify</div>
            <div className=" flex-col mt-16 space-y-8 invisible md:visible">
                <div className="flex space-x-1">
                <MdHome  size={28} />
                 <Button onClick={() => setCurrentDiv("first") }>Dashboard</Button>
                </div>
                <div className="flex space-x-1">
                <MdSearch size={28} />
                <Button onClick={() => setCurrentDiv("third")}>Search</Button>
                </div>
                <div className="flex space-x-1">
                 <IoBagAddSharp size={28}/>
                 <Button onClick={() => setCurrentDiv('sixth')}>Add Product</Button>
                </div>
                <div className="flex space-x-1">
                <VscAccount size={28} />
                <Button onClick={() => setCurrentDiv('fourth')}>Profile</Button>
                </div>
                <div className="flex space-x-1">
                <VscSettings size={28} />
                 <Button onClick={() => setCurrentDiv('fifth')}>Update</Button>
                </div>
                <div className="flex space-x-1">
                <BiLogOut size={28} />
                 <Button onClick={() => dispatch(logoutAdmin())}>Logout</Button>
                </div>
            </div>
        </div>
            </div>
            <div className="w-8/12 mx-4 overflow-y-auto flex flex-col space-y-16">
                {/* load dynamic content */}
                {curretDiv === "first" && <CenterLayout />}
                {curretDiv === "second" && <Products />}
             {curretDiv === "third" && <Search />}
             {curretDiv === "fourth" && <Profile />}
             {curretDiv === "fifth" && <UpdateForm />}
             {curretDiv === "sixth" && <AddProduct />}
            </div>
            <div className="w-2/12 invisible md:visible">
              <RightLayout />
            </div>

        </div>
    )
}

export default Dashboard
