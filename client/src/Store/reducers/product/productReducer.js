import {
 ADD_PRODUCT,
 PRODUCT_FAIL
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
                isAdded : false
            }
        default:
            return state
    }
}