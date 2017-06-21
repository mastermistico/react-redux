const products = (state=[], action ) => {

	switch(action.type){
		case 'REPLACE_PRODUCTS':
			return action.products			
	}

	return state;
};

const cart = (state=[], action ) => {

	switch(action.type){
		case 'ADD_TO_CART':
			return state.concat(action.product)
		case 'REMOVE_TO_CART':
			return state.filter(item =>
				   		 item !== action.product 
				   	)			
	}

	return state;
};

export { products, cart };