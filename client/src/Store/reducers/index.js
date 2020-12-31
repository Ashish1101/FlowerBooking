import {combineReducers} from 'redux'
import adminReducer from './admin/adminReducer'
export default combineReducers({
   admin : adminReducer
})