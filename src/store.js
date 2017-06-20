import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const reducer = (state, action ) => {
	/*if (action.type === "ADD_TO_CART"){
		return {
			...state,
			cart: state.cart.concat(action.product)
		};
	}*/

	switch(action.type){
		case 'ADD_TO_CART':
			return {...state,
				   cart: state.cart.concat(action.product)}
		case 'REMOVE_TO_CART':
			return { ...state,
				   cart: state.cart.filter(item =>
				   		 item !== action.product 
				   	)
				}
		case 'REPLACE_PRODUCTS':
			return {
					...state,
					products: action.products	
				}	
		default:
			return {...state, cart: [] } 		
	}

	return state;
};

const logger = store => next => action => {
  console.log('dispatching', action);
  let result = next(action);
  console.log('next state', store.getState());
  return result
}

export default createStore(reducer, { cart: [], products: [] }, applyMiddleware(logger, thunk))