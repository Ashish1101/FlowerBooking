import {
    REGISTER_ADMIN,
    LOGIN_ADMIN,
    ADMIN_PROFILE,
    UPDATE_ADMIN_DATA,
    CREDENTIALS_FAIL,
    LOGOUT,
    LOADING,
    UNLOADING,
    DELETE_ADMIN,
    RESET_STATE,
} from '../types';

import axios from 'axios'

export const registerAdmin = (data) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type':'application/json'
            }
        }
        dispatch({
            type : LOADING
        })
        const res = await axios.post('/seller/register' , data , config);

        setTimeout(() => {
            dispatch({
                type: REGISTER_ADMIN,
                payload : res.data
            })
            dispatch({
                type: UNLOADING
            })
        } , 500)
    } catch (err) {
        dispatch({
            type : CREDENTIALS_FAIL,
            payload : err.response.data
        })
        setTimeout(() => {
            dispatch({
                type : RESET_STATE
            })
        } , 500)
    }
}

export const loginAdmin = (data) => async dispatch => {
    try {
        const config = {
            headers : {
                "Content-Type":"application/json"
            }
        }
       dispatch({
           type : LOADING
       })
        const res = await axios.post('/seller/login' , data , config);

        setTimeout(() => {
            dispatch({
                type : LOGIN_ADMIN,
                payload : res.data
            })
            dispatch({
                type : UNLOADING
            })
        } , 1000)
    } catch (err) {
        dispatch({
            type : CREDENTIALS_FAIL,
            payload : err.response.data
        })
        setTimeout(() => {
            dispatch({
                type : RESET_STATE
            })
        } , 500)
    }
}

export const adminDetails = () => async dispatch => {
    try {
        const res = await axios.get('/seller/profile' , {headers: {'x-auth-token':`${localStorage.getItem('token')}`}});
        dispatch({
            type : ADMIN_PROFILE,
            payload : res.data
        })
    } catch (err) {
        console.log(err)
    }
}

export const updateAdminData = (data) => async dispatch => {
    try {
        const config = {
            headers : {
                "x-auth-token":localStorage.getItem('token'),
                "Content-Type":"application/json"
            }
        }
       const res =  await axios.put('/seller/profile/update' , data , config);
        console.log('response => ')
       dispatch({
           type : UPDATE_ADMIN_DATA,
           payload : res.data
       })
       console.log('i am here')
    } catch (err) {
        console.log('error here' , err);
    }
}

export const logoutAdmin = () => async dispatch => {
    try {
        dispatch({
            type : LOGOUT
        })
    } catch (err) {
        dispatch({
            type: CREDENTIALS_FAIL
        })
        setTimeout(() => {
            dispatch({
                type : RESET_STATE
            })
        } , 500)
    }
}

export const deleteUser = (id) => async dispatch => {
    try {
        
        const res = await axios.delete(`/seller/deleteUser/${id}` , {headers:{'x-auth-token':`${localStorage.getItem('token')}`}});
   

        //delaying the delete admin call for showing messaage
        setTimeout(() => {
            dispatch({
                type : DELETE_ADMIN,
                payload : res.data
            })
        }, 500)
    } catch (err) {
        dispatch({
            type : CREDENTIALS_FAIL,
            payload : err.response.data
        })
        /* setting the time out function
        so that if error occur than this function call 
        the RESET_STATE reducer to reset the state back to initial
          */
        setTimeout(() => {
            dispatch({
                type : RESET_STATE
            })
        } , 500)
    }
}


