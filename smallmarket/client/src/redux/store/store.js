import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { authReducer } from '../reducers/authReducer';
import { cartReducer } from '../reducers/cartReducer';
import { getItemReducer, getItemDetailReducer } from '../reducers/itemReducer';
import thunk from 'redux-thunk';

const reducer = combineReducers({
    user: authReducer,
    cart: cartReducer,
    getItems: getItemReducer,
    getItemDetails: getItemDetailReducer,
});

const middleware = [thunk];

const cartLocalStorage = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];

const INIT_STATE = {
    cart: {
        cartItems: cartLocalStorage,
    },
}

const store = createStore(
    reducer,
    INIT_STATE, 
    composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;