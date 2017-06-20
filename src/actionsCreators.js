import axios from 'axios';


const loadProducts = () => {

	return dispatch => {
	  return axios.get("http://localhost:3001/products")
		.then(response => {
			dispatch({
				type: "REPLACE_PRODUCTS",
				products: response.data
			})
		})
	}

}

const addToCart = product => {
	return {
		type: "ADD_TO_CART",
		product 
	};
};

const removeToCart = product => {
	return {
		type: "REMOVE_TO_CART",
	    product 
	}
};

export { addToCart, removeToCart, loadProducts}