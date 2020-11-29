// importanto componentes saga redux
import { call, put, all, takeLatest } from 'redux-saga/effects';
// importar toastify para comunicação com usuário
import { toast } from 'react-toastify';
// importando actions
import * as actions from './actions';
// importar types
import * as types from '../types';

const requisicao = () =>
  // adicionar reject para excessões
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
// função geradora que dispara ações
function* exampleRequest() {
  try {
    yield call(requisicao);
    yield put(actions.clicaBotaoSucess());
  } catch {
    toast.error('Deu erro');
    yield put(actions.clicaBotaoFailure());
  }
}

// exportando a request
export default all([takeLatest(types.BOTAO_CLICADO_REQUEST, exampleRequest)]);
