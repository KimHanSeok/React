import * as actionTypes from '../actionTypes/cart/cartActionTypes';

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch(action.type) {
    case actionTypes.ADD_CART:
      const item = action.payload;
      const currentItem = state.cartItems.find((target) => target.item === item);
      if(currentItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((target) => target.item === currentItem.item ? item : target),
        }
      } else {
        return {
          ...state,
          cartItems: [ ...state.cartItems, item ],
        }
      }

    case actionTypes.REMOVE_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.id !== action.payload),
      }

    case actionTypes.RESET_CART:
      return state;

    default:
      return state;
  }
}