import React from 'react'
import TopProducts from './TopProducts'
import Analysis from './Analysis'
const CenterLayout = () => {
    return (
        <div className="mx-12 flex flex-col space-y-16" >
           <div>
               <h1 className="text-center text-xl font-semibold text-opacity-90 text-gray-900">Admin Panel</h1>
           </div>
           <div>
               <TopProducts />
           </div>
           <div><Analysis /></div>
        </div>
    )
}

export default CenterLayout
