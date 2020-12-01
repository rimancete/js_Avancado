// importando types
import * as types from '../types';
// criando estado inicial
const initialState = {
  isLoggedIn: false,
  token: false,
  user: {},
  isLoading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_REQUEST: {
      // console.log('REDUCER', action.payload);
      return state;
    }
    case types.LOGIN_SUCCESS: {
      const newState = { ...state };
      newState.isLoggedIn = true;
      newState.token = action.payload.token;
      newState.user = action.payload.user;

      return newState;
    }
    case types.LOGIN_FAILURE: {
      const newState = { ...initialState };
      return newState;
    }

    default: {
      return state;
    }
  }
}
