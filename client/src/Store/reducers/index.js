import {combineReducers} from 'redux'
import adminReducer from './admin/adminReducer'
import productReducer from './product/productReducer'
export default combineReducers({
   admin : adminReducer,
   products: productReducer
})