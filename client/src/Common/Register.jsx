import React, { useEffect } from 'react'
import {Formik , Form} from 'formik'
import MyTextInput from './MyTextInput'
import * as yup from 'yup'
import {registerAdmin} from '../Store/actions/adminActions'
import {useDispatch, useSelector} from 'react-redux'
import toast from 'react-hot-toast'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const Register = () => {
    const dispatch = useDispatch();
    const MySwal = withReactContent(Swal)
    //@ts-ignore
    const admin = useSelector((state) => state.admin)
    console.log(admin.error)

    useEffect(() => {
        if(admin.error) {
        //    toast.error(admin.error.message)
        MySwal.fire({
            icon: 'error',
            title: 'Oops...',
            text: admin.error.message,
          })
        }
        if(admin?.admin?.token) {
            toast.success('Registration successfull')
        }
    } ,[admin.error , admin?.admin?.token , MySwal])
    // if(admin.error) {
    //     toast.error(admin.error.message)
    // }
    return (
        <div className=" shadow rounded-b-lg  mx-auto w-64 md:w-80  container flex flex-col">
            <h3 className="text-center font-semibold text-3xl my-2  text-purple-700">Register</h3>
            <div className="mx-auto">
                <Formik
                initialValues={{
                    name:'',
                    email:'',
                    password:'',
                    confirmPassword:'',
                    // mobile:''
                }}
                validationSchema={yup.object({
                    name: yup.string().required('Name is required.'),
                    email:yup.string().email('Email not Valid').required('Email is required'),
                    password:yup.string().min(6).required('Password is required'),
                    confirmPassword: yup.string().oneOf([yup.ref('password')] , 'password do not matched').min(6).required('confirm password required')
                })}
                onSubmit={(values) => {
                      dispatch(registerAdmin(values));

                    //   alert(JSON.stringify(values , null , 2))
                }}
                >
                <Form className="mx-2 md:w-64 w-full">
                  <MyTextInput
                  name="name"
                  type="text"
                  placeholder="Enter Name"
                   />
                   <MyTextInput
                  name="email"
                  type="email"
                  placeholder="Enter Email"
                   />
                   <MyTextInput
                  name="password"
                  type="password"
                  placeholder="Enter Password"
                   />
                   <MyTextInput
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm Password"
                   />
                   {/* <MyTextInput
                  name="mobile"
                  type="text"
                  placeholder="Enter Mobile Number"
                   /> */}
                  <div className="flex flex-row justify-center">
                     {admin.loading === true ? (<p className="animate-bounce">loading</p>) : (<button className="md:ml-2 hover:bg-purple-400 mb-2 shadow-md rounded-md text-white w-20 h-8 focus:outline-none bg-purple-700" type="submit">Register</button>)}
                  </div>
                </Form>

                </Formik>
            </div>
        </div>
    )
}

export default Register
