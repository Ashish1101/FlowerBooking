import React , {useState} from 'react'
import {Link} from 'react-router-dom'
import { MdHome } from "react-icons/md";


const LeftLayout = () => {
    const [active , setActive] = useState(false)
    const toogle = (e) => {
       setActive(!active)
    }
    return (
        <div className="px-8">
            <div className="">Flowerify</div>
            <div className="flex flex-col mt-16 space-y-8">
                <div className={`flex space-x-1 ${active ? 'shadow-inner': ""}`} onClick={toogle}>
                <MdHome color="orange" />
                <a href="!#">Dashboard</a> 
                </div>
                <div className="flex space-x-1">
                <MdHome color="orange" />
                <Link to="/products" className="text-xs" >Products</Link> 
                </div>
                <div className="flex space-x-1">
                <MdHome color="orange" />
                <Link to="/search" className="text-xs">Search</Link> 
                </div>
                <div className="flex space-x-1">
                <MdHome color="orange"  />
                <Link to="/delete" className="text-xs">Delete</Link> 
                </div>
            </div>
        </div>
    )
}

export default LeftLayout
