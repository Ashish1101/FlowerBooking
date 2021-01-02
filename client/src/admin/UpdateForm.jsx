import React from "react";
import { Formik, Form } from "formik";
// import * as Yup from "yup";
import MyTextInput from '../Common/MyTextInput'
import MyAddress from '../Common/MyAddress'
import {useDispatch , useSelector} from 'react-redux'
import {updateAdminData} from '../Store/actions/adminActions'
import toast from 'react-hot-toast'
const UpdateForm = () => {

    //@ts-ignore
    const admin = useSelector((state) => state.admin);

    const dispatch = useDispatch()

    

	return (
		<div className='text-center space-y-16'>
			<h3>Update Details</h3>
			<div className="container pl-8">
                <Formik
                initialValues={{
                    name:admin.admin.name || '',
                    email:admin.admin.email || '',
                    mobile:admin.admin.mobile || '',
                    password:'',
                    address:admin?.admin?.address ||  ''
                }}
                // validationSchema={Yup.object({
                //     name: Yup.string().required('Name is required'),
                //     email: Yup.string().required('Email is required').email('Email not valid'),
                //     password: Yup.string().min(6).required('password is required'),
                //     mobile: Yup.string().min(10).required('Phone number is required'),
                //     address: Yup.string().required('Address is required')
                // })}
                onSubmit={(values) => {
                //    alert(
                //        JSON.stringify(values , null , 2)
                //    )
                  dispatch(updateAdminData(values))
                  toast.success('Profile Updated')
                }}
                >
                    <Form className="flex flex-wrap">
                        
                        <MyTextInput
                        type="text"
                        name="name"
                        placeholder="Enter Name" />
                  
            
                        <MyTextInput
                      
                        type="email"
                        name="email"
                        placeholder="Enter Email" />
                      

                     
                      <MyTextInput
                        type="password"
                        name="password"
                        placeholder="Enter Password" />

                        <MyTextInput
                        type="text"
                        name="mobile"
                        placeholder="Enter Mobile" />

                       <MyAddress
                        type="text"
                        name="address"
                        placeholder="Enter Address" />

                    <button type="submit" className="w-11/12 ml-4 rounded-2xl mt-8 h-8 focus:outline-none bg-gradient-to-r from-green-600 to-white hover:from-purple-500 hover:to-white outline-none ">Submit</button>
                   </Form>
                </Formik>
			</div>
		</div>
	);
};

export default UpdateForm;
