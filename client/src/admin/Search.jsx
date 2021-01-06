import React , {useState , useEffect} from 'react'
import Card from './Product/Card'
import {useDispatch, useSelector} from 'react-redux'
import { allProducts } from '../Store/actions/productAction';
const Search = () => {

    const dispatch = useDispatch();
    //@ts-ignore
    const products = useSelector(state => state.products.products.products[0].products)
    
    const [text , setText] = useState('')
    useEffect(() => {
        dispatch(allProducts());
        //eslint-disable-next-line
    }, [])
    const setValue = (e) => {
        setText(e.target.value)
        console.log(text)
    }

    console.log(products)
   
    return (
        <div className="space-y-12">
            <div
            className="mt-2">
                <input
                className="w-full outline-none focus:ring-1 ring-purple-400 placeholder-purple-400 placeholder-opacity-60  h-8 rounded-xl pl-4 text-gray-800"
                placeholder="search product..."
                value={text}
                type="text"
                onChange={setValue}
                />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 md:gap-6">
                {products?.map(item => (<Card key={item._id} id={item._id}  price={item.price} name={item.productName} details={item.details} img={'https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'}/>))}
            </div>
        </div>
    )

}





export default Search
