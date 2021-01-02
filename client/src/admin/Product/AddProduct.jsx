import React, { useEffect} from "react";
import { Formik, Form} from "formik";
import MyTextInput from "../../Common/MyTextInput";
import Button from "../../Common/Button";
import {addProduct} from '../../Store/actions/productAction'
import { useDispatch , useSelector} from 'react-redux'
import toast from "react-hot-toast";
import MyTextArea from '../../Common/MyTextArea'


const AddProduct = () => {
    const  dispatch = useDispatch();
    //@ts-ignore
    const prod = useSelector((state) => state.products);
    useEffect(() => {
        if(prod.successMessage !== undefined || prod.successMessage !== '') {
            toast.success(prod.successMessage)
        }
        //eslint-disable-next-line
    }, [])
	return (
		<div className='w-full h-screen text-center space-y-16'>
			<h3>Add Product</h3>
			<div>
				<Formik
					initialValues={{
						productName: "",
						price: "",
						details: '',
						tags: "",
						image: "",
						quantity: "",
					}}
					onSubmit={(values) => {
                        alert(JSON.stringify(values, null, 2));
                        dispatch(addProduct(values));
					}}
				>
					<Form className='flex flex-col justify-center w-full md:flex-row flex-wrap '>
						<MyTextInput
							name='productName'
							type='text'
							placeholder='product name'
						/>
						<MyTextInput name='price' type='text' placeholder='price' />
						<MyTextInput name='tags' type='text' placeholder='tags' />
						<MyTextInput name='quantity' type='number' placeholder='quantity' />
						<MyTextArea
						name="details"
						placeholder="Enter product details"
						
						 />
						<div className='flex md:w-11/12 mx-auto w-48  md:mx-2 my-4 items-center bg-grey-lighter'>
							<label className=' md:w-full w-full flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-white'>
								<svg
									className='w-8 h-8'
									fill='currentColor'
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 20 20'
								>
									<path d='M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z' />
								</svg>
								<span className='mt-2 text-base leading-normal'>
									Select a file
								</span>
								<input type='file' name="image" className='hidden' />
							</label>
						</div>
                        <Button type="submit">ADD</Button>
					</Form>
				</Formik>
			</div>
		</div>
	);
};

export default AddProduct;


// eslint-disable-next-line no-lone-blocks
{/* <input
							name='details'
                            placeholder='enter details'
                            type="text"
                            className='rounded-lg md:mx-2 focus:outline-none md:w-11/12 mx-auto pl-1 w-48 shadow-md resize'
							// className="w-full border border-gray-300 rounded-sm px-4 py-3 h-32 outline-none transition-colors duration-150 ease-in-out focus:border-blue-400 resize-none"
						/> */}