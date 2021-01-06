import {
	ADD_PRODUCT,
	ALL_PRODUCTS,
	DELETE_PRODUCT,
	PRODUCT_FAIL,
    UPDATE_PRODUCT,
} from "../types";

import axios from "axios";

//ADD PRODUCT
export const addProduct = (data) => async (dispatch) => {
	try {
		const config = {
			headers: {
				"x-auth-token": `${localStorage.getItem("token")}`,
				"Content-Type": "application/json",
			},
		};
		const res = await axios.post("/product/addProduct", data, config);
		dispatch({
			type: ADD_PRODUCT,
			payload: res.data,
		});
	} catch (err) {
		dispatch({
			type: PRODUCT_FAIL,
			payload: err.response.data,
		});
	}
};

export const allProducts = () => async (dispatch) => {
	const token = localStorage.getItem("token");
	try {
		const res = await axios.get("/product/", {
			headers: { "x-auth-token": `${token}` },
		});
		// setTimeout(() => {
		//     dispatch({
		//         type : LOADING
		//     })
		// }, 500);

		dispatch({
			type: ALL_PRODUCTS,
			payload: res.data,
		});

		// setTimeout(() => {
		//     dispatch({
		//         type : UNLOADING
		//     })
		// },500)
	} catch (err) {
		console.log(err.response);
	}
};

//delete product

export const deleteProduct = (id) => async (dispatch) => {
	try {
		const token = localStorage.getItem("token");
		const res = await axios.delete(`/product/deleteProduct/${id}`, {
			headers: { "x-auth-token": `${token}` },
		});
		dispatch({
			type: DELETE_PRODUCT,
			payload: res.data,
		});
	} catch (err) {
		dispatch({
			type: PRODUCT_FAIL,
			payload: err.response.data,
		});
	}
};

//update product by id

export const updateProduct = (data, id) => async (dispatch) => {
	try {
		const token = localStorage.getItem("token");
		const config = {
			headers: {
				"x-auth-token": `${token}`,
				"Content-Type": "application/json",
			},
		};
        const res = await axios.put(`/product/updateProduct/${id}`, data, config);
        dispatch({
            type : UPDATE_PRODUCT,
            payload : res.data.successMessage
        })
	} catch (err) {
        console.log(err.response);
        dispatch({
            type : PRODUCT_FAIL,
            payload : err.response.data
        })
    }
};
