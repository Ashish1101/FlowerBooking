import {combineReducers} from 'redux'
import { LOGOUT } from '../types'
import adminReducer from './admin/adminReducer'
import productReducer from './product/productReducer'
import storage from 'redux-persist/lib/storage'

const appReducer = combineReducers({
   admin : adminReducer,
   products : productReducer
})
// export default combineReducers({
//    admin : adminReducer,
//    products: productReducer
// })

 const rootReducer = (state , action) => {
      if(action.type === LOGOUT) {
         storage.removeItem('persist:storeKeys');
         localStorage.removeItem('token')
         state = undefined
      }
      return appReducer(state , action)
     
}

export default rootReducer