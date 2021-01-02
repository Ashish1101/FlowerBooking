import React , {useEffect} from 'react'
import MyTextInput from './MyTextInput';
import {Form , Formik} from 'formik';
import * as yup from 'yup'
import {loginAdmin} from '../Store/actions/adminActions'
import {useDispatch , useSelector } from 'react-redux'
import toast from 'react-hot-toast'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const Login = () => {
    const dispatch = useDispatch()
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
        
    } ,[admin.error])

    return (
        <div className=" shadow-2xl rounded-b-lg bg-indigo-400  mx-auto w-64 md:w-80 container flex flex-col">
            <h3 className="text-center font-semibold text-3xl my-2 text-white">Login</h3>
            <div className="mx-auto">
                <Formik
                initialValues={{
                    email:'',
                    password:''
                }}
                validationSchema={yup.object({
              
                    email:yup.string().email('Email not Valid').required('Email is required'),
                    password:yup.string().min(6).required('Password is required'),
                })}
                onSubmit={(values) => {
                    //   alert(JSON.stringify(values , null , 2))
                      dispatch(loginAdmin(values));
                }}
                >
                <Form className="mx-2">
                
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
                 
                  <div className="flex flex-row justify-center">
                      {admin?.loading === true ? (<p className="animate-bounce">Loading</p>) : (<button className=" md:ml-2 hover:bg-purple-400 mb-2 shadow-md rounded-md text-white w-20 h-8 focus:outline-none bg-purple-700" type="submit">Login</button>)}
                  </div>
                </Form>

                </Formik>
            </div>
        </div>
    )
}

export default Login
