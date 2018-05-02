// src/index.js
import store from './store.js';
import { addToCart, updateCart, deleteFromCart }  from './actions/cart-actions';

// console.log("initial state: ", store.getState());

store.subscribe(() => {}
  // console.log(store.getState())
);

store.dispatch(addToCart('Coffee 500gm', 1, 250));
store.dispatch(addToCart('Flour 1kg', 2, 110));
store.dispatch(addToCart('Juice 2L', 1, 250));

store.dispatch(updateCart('Flour 1kg', 5, 110));

store.dispatch(deleteFromCart('Coffee 500gm'));
