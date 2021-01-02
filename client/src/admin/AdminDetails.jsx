import React from 'react'
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser } from '../Store/actions/adminActions';

// @ts-ignore
const AdminDetails = ({admin}) => {

    // @ts-ignore
    const dispatch = useDispatch();
    // @ts-ignore
    const adminData = useSelector((state) => state.admin)
    const deleteAdminAccount = () => {
        // eslint-disable-next-line no-restricted-globals
        const ask = confirm("Want to delete profile")
        const id = adminData.admin._id
        if(ask === true) {

            toast.error('Profile deleted')
            //delete profile handler takes admin id
            dispatch(deleteUser(id))

            /* deleting the localstorage item so that it 
            can logout after deleting profile */
            localStorage.removeItem('persist:storeKeys');
            localStorage.removeItem('token')
        } else {
            alert('Thanks for being with us')
        }

        
    }
    return (
        <div className="container">
            <h3 className="text-center">Details</h3>
            <div className="flex flex-row justify-around rounded-t-lg rounded-b-lg h-16 bg-gradient-to-r from-white via-blue-300 to-purple-500 hover:bg-gradient-to-r hover:from-purple-400 hover:via-blue-300 hover:to-white">
                <div className="text-md mt-2 text-gray-700 opacity-80">Name : <span className="text-sm">{admin.name}</span></div>
                <div className="text-md mt-2 text-gray-700 opacity-80">Id : <span className="text-sm">11815163</span></div>
            </div>
            <div className="flex flex-row justify-around rounded-t-lg rounded-b-lg bg-gradient-to-r from-white via-blue-300 to-purple-500 hover:bg-gradient-to-r hover:from-purple-400 hover:via-blue-300 hover:to-white  bg-yellow-400 h-16 mt-2">
                <div className="text-md mt-2 text-gray-700 opacity-80">Email : <span className="text-sm">{admin.email}</span></div>
                <div className=" text-md mt-2 text-gray-700 opacity-80">Mobile : <span className="text-sm">{admin.mobile}</span></div>
            </div>
            <div>
               <p  className="h-8 my-2 bg-white bg-gradient-to-r from-white via-blue-300 to-purple-500 hover:bg-gradient-to-r hover:from-purple-400 hover:via-blue-300 hover:to-white rounded-lg pl-8">{admin.address}</p>
            </div>
            <div className="text-center w-full">
               <button onClick={deleteAdminAccount} className="h-8 w-full bg-red-300 hover:bg-red-500 mt-2 rounded-lg pl-8 focus:outline-none">Delete Account</button>
            </div>
        </div>
    )
}

export default AdminDetails
