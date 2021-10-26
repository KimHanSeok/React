import * as actionTypes from '../actionTypes/item/itemActionTypes';

export const getItemReducer = ( state = { items: [] }, action )  =>   {
  switch(action.type) {
    case actionTypes.GET_ITEMS:
      return {
        items: [],
      }

    case actionTypes.GET_ITEMS_SUCCESS:
      return {
        items: action.payload,
      }

    case actionTypes.GET_ITEMS_FAIL:
      return {
        error: action.payload,
      }

    default:
      return state;
  }
}

export const getItemDetailReducer = ( state = { item: {} }, action ) => {
  switch(action.type) {
    case actionTypes.GET_ITEMS_DETAILS:
      return {
        loading: true,
      }

    case actionTypes.GET_ITEMS_DETAILS_SUCCESS:
      return {
        loading: false,
        item: action.payload,
      }
    
    case actionTypes.GET_ITEMS_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      }

    case actionTypes.GET_ITEMS_DETAILS_RESET:
      return {
        items: {},
      }

    default:
      return state;
  }
}