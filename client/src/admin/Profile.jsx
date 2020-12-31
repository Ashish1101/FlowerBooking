import React, { useEffect } from 'react'
import AdminDetails from './AdminDetails'
import {useSelector , useDispatch} from 'react-redux'
import {adminDetails} from '../Store/actions/adminActions'
const Profile = () => {
    // @ts-ignore
   
    const admin = useSelector((state) => state.admin)
    const dispatch = useDispatch()

    useEffect(() => {
        if(admin.admin.token) {
            dispatch(adminDetails())
        }
    } , [])

    return (
        <div className="">
            <h3 className="text-lg text-gray-700 text-opacity-700 font-semibold text-center ">Profile</h3>
            <div className="container flex flex-col mt-16 space-y-8 ">
                <div className="h-36  rounded-t-lg rounded-b-lg bg-gradient-to-r from-white via-blue-300 to-purple-500 hover:bg-gradient-to-r hover:from-purple-400 hover:via-blue-300 hover:to-white ml-8 mr-8 flex justify-center">
                    <div className="mt-2">
                        <img className="object-cover h-16 w-16 rounded-full" src={'https://instagram.fagr1-1.fna.fbcdn.net/v/t51.2885-15/e35/60425722_2363153700675710_3367717096696633106_n.jpg?_nc_ht=instagram.fagr1-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=HqPe9E7iA0UAX_uhCIk&tp=1&oh=b0b1cd43e364c784ea79d42eb4cb23aa&oe=600E4FCE'} alt="ashish" />
                        <h3 className="text-center">{admin.admin.name}</h3>
                        <p>Id 11815163</p>
                    </div>
                </div>
                <div className=" ml-8 mr-8">
                   <AdminDetails admin={admin.admin} />
                </div>
            </div>
        </div>
    )
}

export default Profile
