import React from 'react';
import { render, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import ConnectedProductList  from '../../components/ProductList';

const mockStore = configureStore();

it('renders no products when  store is empty', () => {
	const store = mockStore({ products: [] })

	const wrapper = render(<ConnectedProductList store={store} />);
	expect(wrapper.find(".product").length).toBe(0);
})

it('renders products', () => {
	const store = mockStore({
		products: [{ id: 1, name: "noma probie", price: 100, image: "" }]
	});

	const wrapper = render (<ConnectedProductList store={store} />);
	expect(wrapper.find('.product').lenght).toBe(1)
})

it('adds a product to the shopping cart', () => {
	const store = mockStore({
		products: [{ id: 1, name: "noma probie", price: 100, image: "" }]
	});

	const wrapper = mount(<ConnectedProductList store={store} />);
	wrapper.find('#product-1 button').simulate('click');

	const actions = store.getActions();
	expect (actions.length).toBe(1);
	expect (actions[0].type).toBe("ADD_TO_CART");
	expect (actions[0].product).not.toBeNull();
})