// importando types
import * as types from '../types';
// importando axios para excluir chave auth do header
import axios from '../../../services/axios';
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
      const newState = { ...state };
      newState.isLoading = true;
      return newState;
    }
    case types.LOGIN_SUCCESS: {
      const newState = { ...state };
      newState.isLoggedIn = true;
      newState.token = action.payload.token;
      newState.user = action.payload.user;
      newState.isLoading = false;

      return newState;
    }
    case types.LOGIN_FAILURE: {
      delete axios.defaults.headers.Authorization;
      const newState = { ...initialState };
      return newState;
    }
    // REGISTER
    case types.REGISTER_UPDATED_SUCCESS: {
      // console.log('REDUCER', action.payload);
      const newState = { ...state };
      newState.isLoading = false;
      newState.user.nome = action.payload.nome;
      // se o email informado for diferente do registrado, atualiza-o e desloga o usuário
      if (newState.user.email !== action.payload.email) {
        newState.user.email = action.payload.email;
        newState.isLoggedIn = false;
      }
      return newState;
    }
    case types.REGISTER_CREATED_SUCCESS: {
      // console.log('REDUCER', action.payload);
      const newState = { ...state };
      newState.isLoading = false;
      return newState;
    }
    case types.REGISTER_FAILURE: {
      // console.log('REDUCER', action.payload);
      const newState = { ...state };
      newState.isLoading = false;
      return newState;
    }
    case types.REGISTER_REQUEST: {
      // console.log('REDUCER', action.payload);
      const newState = { ...state };
      newState.isLoading = true;
      return newState;
    }

    default: {
      return state;
    }
  }
}
