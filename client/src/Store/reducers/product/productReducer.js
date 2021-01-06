import {
 ADD_PRODUCT,
    ALL_PRODUCTS,
    DELETE_PRODUCT,
    LOADING,
 PRODUCT_FAIL,
 UNLOADING,
 UPDATE_PRODUCT
} from '../../types'

const initialState = {
   products : [],
   isAdded: false,
   successMessage : '',
   loading : false,
   error : null
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState ,action) => {
    switch(action.type){
        case ADD_PRODUCT:
            return {
                ...state,
                loading: true,
                error: null,
                products:[...state.products , action.payload.product],
                successMessage : action.payload.successMessage,
                isAdded: true
            }
        case PRODUCT_FAIL:
            return {
                ...state,
                error: action.payload,
                loading: false,
            }
        case ALL_PRODUCTS:
            // console.log('inside reducer' ,action.payload[0].products)
            return {
                ...state,
                error: null,
                products:action.payload
            }
        case DELETE_PRODUCT:
            return {
                ...state,
                error : null,
                successMessage : action.payload.successMessage
            }
        case LOADING:
            return {
                loading : true
            }
        case UNLOADING:{
            return {
                loading : false
            }
        }
        case UPDATE_PRODUCT:
            return {
                ...state,
                successMessage : action.payload,
                loading : true
            }
        default:
            return state
    }
}