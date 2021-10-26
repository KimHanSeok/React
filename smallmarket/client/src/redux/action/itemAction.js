import axios from 'axios';
import {
  GET_ITEMS,
  GET_ITEMS_SUCCESS,
  GET_ITEMS_FAIL,
  GET_ITEMS_DETAILS,
  GET_ITEMS_DETAILS_SUCCESS,
  GET_ITEMS_DETAILS_FAIL,
  GET_ITEMS_DETAILS_RESET,
} from '../actionTypes/item/itemActionTypes';

const baseURL = process.env.REACT_APP_BASE_URL;

export const getItems = (itemId) => async (dispatch) => { 
  const url = baseURL + '/items/list';
  try {
    dispatch({ type: GET_ITEMS });

    if(!itemId) {
      const { data } = await axios.get(url);
      dispatch({
        type: GET_ITEMS_SUCCESS,
        payload: data.items,
      });
    } // TODO: add product id select
  } catch(error) {
    dispatch(
      {
        type: GET_ITEMS_FAIL,
        payload: error.response && error.response.data.message 
          ? error.response.data.message
          : error.message,
      });
  }
}

export const getItemDetails = (itemId) => async(dispatch) => {
  const url = baseURL + '/items/detail';
  try {
    dispatch({ type: GET_ITEMS_DETAILS });
    const { data } = await axios.post(url, {
      id: itemId,
    });
    dispatch(
      {
        type: GET_ITEMS_DETAILS_SUCCESS,
        payload: data,
      }
    );
  } catch(error) {
    console.log(error);
    dispatch({
      type: GET_ITEMS_DETAILS_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
}

export const removeItemDetail = () => async(dispatch) => {
  dispatch({
    type: GET_ITEMS_DETAILS_RESET,
  })
}