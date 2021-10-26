import {
  ADD_CART,
  REMOVE_CART,
} from '../redux/actionTypes/cart/cartActionTypes';
export default class CartService {
  constructor(httpClient) {
    this.httpClient = httpClient;
  }

  addCart = (productId, quantity) => async (dispatch, getState) => {
    try {
      const { data } = await this.httpClient.post('/items/cart', 
        {
          productId: productId,
        }
      );
      dispatch(
        {
          type: ADD_CART,
          payload: {
            productId: data.id,
            name: data.name,
            imageURL: data.imageURL,
            price: data.price,
            stockQuantity: data.stockQuantity,
            quantity: data.quantity,
          }
        }
      );
      localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
    } catch(error) {
      console.log(error);
    }
  }

  removeCart = (productId) => (dispatch, getState) => {
    dispatch(
      {
        type: REMOVE_CART,
        payload: productId,
      }
    );
    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
  }
}