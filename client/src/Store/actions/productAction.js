import {
  ADD_PRODUCT,
  PRODUCT_FAIL
} from '../types'
 
import axios from 'axios'

//ADD PRODUCT
export const addProduct = (data) => async dispatch => {
    try {
        const config = {
            headers: {
                'x-auth-token':`${localStorage.getItem('token')}`,
                 "Content-Type":"application/json"
            }
        }
        const res = await axios.post('/product/addProduct' , data , config);
        dispatch({
            type : ADD_PRODUCT,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: PRODUCT_FAIL,
            payload : err.response.data
        })
    }
}