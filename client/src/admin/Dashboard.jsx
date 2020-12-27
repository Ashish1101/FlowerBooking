import React , {useState} from 'react'
import CenterLayout from './CenterLayout'
import RightLayout from './RightLayout'

import Products from './Products'
import Search from './Search'
import Profile from './Profile'
import UpdateForm from './UpdateForm'
import {VscAccount, VscSettings} from 'react-icons/vsc'
import { MdHome , MdSearch} from "react-icons/md";
import {BiLogOut} from 'react-icons/bi'


const Dashboard = () => {
    // const [active , setActive] = useState(false)
    const [curretDiv , setCurrentDiv] = useState("first")
    // const toogle = (e) => {
    //    setActive(!active)
    // }

    return (
        <div className="container mx-auto rounded-t-3xl bg-gradient-to-r from-purple-400 via-blue-400 to-white rounded-b-3xl my-2 h-screen flex flex-row shadow-2xl">
            <div className=" w-2/12  flex flex-wrap">
            <div className="pl-4">
            <div className="text-gray-800 ml-8 font-semibold text-opacity-90 text-xl">Flowerify</div>
            <div className=" flex-col mt-16 space-y-8 invisible md:visible">
                <div className="flex space-x-1">
                <MdHome  size={28} />
                <button className=" w-32 text-gray-800 text-xs font-medium bg-gradient-to-r from-purple-500 to-white focus:outline-none rounded hover:from-blue-400 hover:to-white" onClick={() => setCurrentDiv('first')} >Dashboard</button>
                </div>
                <div className="flex space-x-1">
                <MdSearch size={28} />
                <button className="w-32 text-gray-800 text-xs font-medium bg-gradient-to-r from-purple-500 to-white focus:outline-none rounded  hover:from-blue-400 hover:to-white" onClick={() => setCurrentDiv("third")} >Search</button> 
                </div>
                <div className="flex space-x-1">
                <VscAccount size={28} />
                <button className="w-32 text-gray-800 text-xs font-medium bg-gradient-to-r from-purple-500 to-white focus:outline-none rounded  hover:from-blue-400 hover:to-white" onClick={() => setCurrentDiv('fourth')}>Profile</button> 
                </div>
                <div className="flex space-x-1">
                <VscSettings size={28} />
                <button className="w-32 text-gray-800 text-xs font-medium bg-gradient-to-r from-purple-500 to-white focus:outline-none rounded  hover:from-blue-400 hover:to-white" onClick={() => setCurrentDiv('fifth')}>Update</button> 
                </div>
                <div className="flex space-x-1">
                <BiLogOut size={28} />
                <button className="w-32 text-gray-800 text-xs font-medium bg-gradient-to-r from-purple-500 to-white focus:outline-none rounded  hover:from-red-500 hover:to-white">LogOut</button> 
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
            </div>
            <div className="w-2/12 invisible md:visible">
              <RightLayout />
            </div>

        </div>
    )
}

export default Dashboard
