
import {
    REGISTER_ADMIN,
    LOGIN_ADMIN,
    CREDENTIALS_FAIL,
    ADMIN_PROFILE,
    UPDATE_ADMIN_DATA,
    LOGOUT,
    LOADING,
    UNLOADING,
    ADD_PRODUCT,
    PRODUCT_FAIL
} from '../../types'



const initialState = {
  error: null,
  loading: false,
  admin : null,
  isUpdated : false,
//   isAdded : false,
//   successMessage : '',
//   products: []
}



// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState , action) => {
     switch(action.type) {
         case REGISTER_ADMIN:
             return {
                 ...state,
                 error: null,
                 admin: action.payload
             }
         case LOGIN_ADMIN:
             localStorage.setItem('token' , action.payload.token)
             return {
                 ...state,
                 error: null,
                 admin : action.payload
             }
        case ADMIN_PROFILE:
            return {
                ...state,
                error: null,
                admin : action.payload
            }
        case UPDATE_ADMIN_DATA:
            return {
                ...state,
                isUpdated : true,
                error : null,
                admin : action.payload

            }
        case LOADING:
            return {
                ...state,
                loading : true
            }
        case UNLOADING:
            return {
                ...state,
                loading : false
            }
        case LOGOUT:
            localStorage.removeItem('persis:storeKeys');
            localStorage.removeItem('token')
            return {
                ...state,
                admin : null,
                error: null,
                loading : false,
                isUpdated : false
            }
        case CREDENTIALS_FAIL:
            return {
                ...state,
                error: action.payload,
                loading: false,
                admin: null
            }
       
         default:
             return state
     }
} 