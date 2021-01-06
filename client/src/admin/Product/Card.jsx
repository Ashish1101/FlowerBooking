import React  from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { deleteProduct} from '../../Store/actions/productAction'
import {useDispatch , useSelector} from 'react-redux'
import Button from './Button'
import EditProduct from './EditProduct'




const Card = ({name , img , price , id , details}) => {
    // @ts-ignore
    const product = useSelector((state) => state.products);
    const dispatch = useDispatch()
    console.log(product.loading)
    
    const MySwal = withReactContent(Swal);
    const deleteItem = () => {
        console.log('i am deleted')
        MySwal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              dispatch(deleteProduct(id))
              console.log('product deleted id : ' ,id)
              MySwal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            } else if(result.isDismissed) {
                MySwal.fire(
                    'Saved',
                    'Thanks for keeping that product',
                    'success'
                )
            }
          })
    }

    

    const editProduct = () => {
      console.log('i am edited')
      MySwal.fire({
        html:<EditProduct name={name} price={price} id={id} image={img} details={details} />,
        showCloseButton: true,
        showConfirmButton : false,
        customClass:'swal-wide',
        imageAlt: 'A tall image'
      })
    }
    return (
        <div className="glass hover:shadow-2xl my-4 mx-4 delay-150 md:w-54 md:h-64 h-44  flex flex-col md:my-2 md:mx-2 justify-between   transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
            <div>
            <img className="w-full md:h-40 h-20 object-cover rounded-sm" alt="1" src={img} /> 
             <div className="flex md:flex-row flex-col justify-around">
             <p>product {name}</p>
             <p>Price {price}</p> 
             </div>
            </div>
            <div className="flex flex-col md:flex-row justify-around">
                <Button color="green" onClick={editProduct} >Edit</Button>
                <Button color="red" onClick={deleteItem}>Delete</Button>
                </div>
        </div>
    )
}


export default Card

// bg-white hover:shadow-2xl my-4 mx-4 delay-150 md:w-54 md:h-64 h-44  flex flex-col md:my-2 md:mx-2 justify-between   transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110
