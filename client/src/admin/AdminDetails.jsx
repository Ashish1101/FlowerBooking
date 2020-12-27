import React from 'react'

const AdminDetails = () => {
    return (
        <div className="container">
            <h3 className="text-center">Details</h3>
            <div className="flex flex-row justify-around rounded-t-lg rounded-b-lg h-16 bg-gradient-to-r from-white via-blue-300 to-purple-500 hover:bg-gradient-to-r hover:from-purple-400 hover:via-blue-300 hover:to-white">
                <div className="text-md mt-2 text-gray-700 opacity-80">Name : <span className="text-sm">Ashish</span></div>
                <div className="text-md mt-2 text-gray-700 opacity-80">Id : <span className="text-sm">11815163</span></div>
            </div>
            <div className="flex flex-row justify-around rounded-t-lg rounded-b-lg bg-gradient-to-r from-white via-blue-300 to-purple-500 hover:bg-gradient-to-r hover:from-purple-400 hover:via-blue-300 hover:to-white  bg-yellow-400 h-16 mt-2">
                <div className="text-md mt-2 text-gray-700 opacity-80">Email : <span className="text-sm">ashishskkumar321@gmail.com</span></div>
                <div className=" text-md mt-2 text-gray-700 opacity-80">Mobile : <span className="text-sm">8266026972</span></div>
            </div>
            <div >
                {[1,2,3].map(item => (<div className="h-8 my-2 bg-white bg-gradient-to-r from-white via-blue-300 to-purple-500 hover:bg-gradient-to-r hover:from-purple-400 hover:via-blue-300 hover:to-white rounded-lg pl-4">Address {item}</div>))}
            </div>
        </div>
    )
}

export default AdminDetails
