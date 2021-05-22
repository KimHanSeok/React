import * as actionTypes from '../constants/Cartconstants';
import axios from 'axios';

export const addToCart = (productId, qty) => async (dispatch, getState) => {
    // const { data } = await axios.get(`/api/products/${id}`);
    try {
        const { data } = await axios.post(
            "/api/v1/items/cart", {
                id : productId,
            }
        );
        console.log(data);
        dispatch({
            type: actionTypes.ADD_TO_CART,
            payload: {
                product: data.id,
                name: data.name,
                imageUrl: data.imageUrl,
                price: data.price,
                stockQuantity: data.stockQuantity,
                qty
            }
        })
        localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
        console.log(data.productId);
    } catch(err) {
        console.log(err);
    }
};

export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({
        type: actionTypes.REMOVE_FROM_CART,
        payload: id
    })
    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems))
}