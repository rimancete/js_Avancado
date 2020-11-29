// importando types
import * as types from '../types';
// criando estado inicial
const initialState = {
  botaoClicado: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.BOTAO_CLICADO_SUCCESS: {
      console.log('Funcionou :)');

      // recebendo o stado atualem uma nova variável
      const newState = { ...state };
      // vizualizar onde estou ouvindo => console.log('Estou ouvindo BOTAO_CLICADO');
      // executa a ação no novo estado
      newState.botaoClicado = !newState.botaoClicado;
      // retorna o novo estado
      return newState;
    }
    // caso erro retorna state atual
    case types.BOTAO_CLICADO_FAILURE: {
      console.log('Deu erro');
      return state;
    }
    // request retorna state atual
    case types.BOTAO_CLICADO_REQUEST: {
      console.log('Estou fazendo requisição');
      return state;
    }
    default: {
      return state;
    }
  }
}
