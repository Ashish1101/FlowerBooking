import React from 'react'

const TopProducts = () => {
    return (
        <div>
        <div className="">
             <h3 className="font-semibold text-white text-opacity-80">Top Products</h3>
         </div>
         <div className="flex mt-2 flex-wrap text-center justify-between">
         <div className="shadow-md rounded-t-3xl">
            <img className="w-40 object-contain rounded-t-lg" src={'https://images.pexels.com/photos/1083822/pexels-photo-1083822.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'} alt="image1" />
            <div>Product1</div>
         </div>
         <div className="shadow-md rounded-t-3xl">
         <img alt="image1" className="w-40 object-contain rounded-t-lg" src={'https://images.pexels.com/photos/1408221/pexels-photo-1408221.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'} />
            <div>Product1</div>
         </div>
         <div className="shadow-md rounded-t-3xl">
         <img alt="image1" className="w-40 object-contain rounded-t-lg" src={'https://images.pexels.com/photos/992734/pexels-photo-992734.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'} />
            <div>Product1</div>
         </div>
         </div>
        </div>
    )
}

export default TopProducts
