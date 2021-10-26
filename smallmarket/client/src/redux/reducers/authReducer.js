import {
  REGISTER_USER,
  USER_LOGIN,
  REGISTER_ERROR,
  USER_LOGIN_FAIL
} from '../actionTypes/auth/authActionTypes';

export const authReducer = (state = { user: {} }, action) => {
  switch(action.type) {
    case REGISTER_USER:
      return { 
        ...state, 
        register: action.payload, 
      }

    case USER_LOGIN:
      return { 
        ...state, 
        login: action.payload,
      }

    case REGISTER_ERROR:
      return { error: action.payload }

    case USER_LOGIN_FAIL:
      return { error: action.payload }

    default:
      return state;
  }
}