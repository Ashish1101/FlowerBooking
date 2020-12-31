import React , {useState} from 'react'

const Analysis = ({admin}) => {
    const [active , setActive] = useState(false)
    const [active1 , setActive1] = useState(false)
    const checkActive = (e) => {
         setActive(!active)
    }
    const checkActive1 = (e) => {
        setActive1(!active1)
   }
    return (
        <div className="flex md:flex-col space-y-2">
            <div className="text-white text-opacity-90">Analysis</div>
            <div className="flex sm:flex-col md:flex-row justify-around space-x-4">
             <div className={`h-24 w-1/2 shadow-xl rounded-2xl bg-gradient-to-r from-purple-400 to-blue-400 hover:from-white  hover:to-purple-400  ${active ? 'shadow-inner  ring-1 ring-opacity-90 ring-purple-400' : 'shadow-xl'} text-center`} onClick={checkActive}>
                 <h3 className="mt-4">Total Products</h3>
                 <h3 className="pt-2">{admin?.products?.length > 0 ? admin?.products.length : 0}</h3>
             </div>
             <div className={`h-24 w-1/2  shadow-xl rounded-2xl bg-gradient-to-l from-purple-400 to-blue-400 hover:from-white  hover:to-purple-400 ${active1 ? 'shadow-inner ' : 'shadow-xl'} text-center`} onClick={checkActive1} >
                 <h3 className="mt-4">Items Remaining</h3>
                 <h3 className="pt-2">5</h3>
             </div>
            </div>
        </div>
    )
}

export default Analysis
