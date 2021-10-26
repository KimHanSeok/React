import axios from 'axios';
import {
  ADD_CART,
  REMOVE_CART,
} from '../actionTypes/cart/cartActionTypes';

const baseURL = process.env.REACT_APP_BASE_URL;

export const addCart = (itemId, quantity) => async (dispatch, getState) => {
  const url = baseURL + '/items/cart';
  try {
    const { data } = await axios.post(url, {
      id: itemId,
    });
    dispatch({
      type: ADD_CART,
      payload: {
        id: data.id,
        name: data.name,
        img: data.img,
        price: data.price,
        quantity,
      }
    });
    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
  } catch(error) {
    console.log(error);
  }
}

export const removeCart = (id) => (dispatch, getState) => {
  dispatch({
    type: REMOVE_CART,
    payload: id,
  });
  localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
}