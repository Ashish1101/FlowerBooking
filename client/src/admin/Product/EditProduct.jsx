import React from 'react'
import {Formik , Form} from 'formik'
import MyTextInput from '../../Common/MyTextInput'
import Button from './Button'
import MyTextArea from '../../Common/MyTextArea'



const EditProduct = ({name , image, price , id , details , updateItem}) => {
    
    return (
        <div className="md:flex md:flex-row flex-col ml-4">
            <div className="md:w-40 md:h-64 md:mr-4 w-full h-36 mb-4 bg-gray-400">
               <img className="h-full w-full md:object-cover object-cover"  src={'https://images.pexels.com/photos/1624076/pexels-photo-1624076.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'} alt="hello" />
            </div>
            <Formik
            initialValues={{
                productName: name || '',
                price:price ||  '',
                quantity:'',
                details: details || ''
            }}
            onSubmit={(values) => {
                alert(JSON.stringify(values , null , 2));
                updateItem(id , values)
                
            }}
            >
            <Form className="flex flex-col">
              <MyTextInput type="text" name="productName" placeholder="product name" />
              <MyTextInput type="number" name="price" placeholder="price" />
              <MyTextInput type="number" name="quantity" placeholder="quantity" />
              <MyTextArea name="details" />
              <Button type="submit" color="green">Update</Button>
            </Form>

            </Formik>
        </div>
    )
}

export default EditProduct
