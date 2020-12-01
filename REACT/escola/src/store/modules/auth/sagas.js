// importanto componentes saga redux
import { call, put, all, takeLatest } from 'redux-saga/effects';
// importar toastify para comunicação com usuário
import { toast } from 'react-toastify';

// importando get do lodash para setar cabeçalho com o token ao iniciar a página
import { get } from 'lodash';

// importando actions
import * as actions from './actions';
// importar types
import * as types from '../types';
import axios from '../../../services/axios';
import history from '../../../services/history';

// função geradora que dispara ações
// criando função que envia o payload para o '/tokens/' da API fazer o login
function* loginRequest({ payload }) {
  // console.log('SAGA', payload);
  try {
    const response = yield call(axios.post, '/tokens/', payload);
    /* se o response for criado, chama a action de sucesso do reducer.
    Se erro, cairá no bloco catch
    */
    yield put(actions.loginSucess({ ...response.data }));
    toast.success('Usuário logado com sucesso');
    // setando o cabeçalho com o token gerado
    axios.defaults.headers.Authorization = `Bearer ${response.data.token}`;
    // redirecionando para a página (rota) anterior
    history.push(payload.prevPath);
  } catch (e) {
    // informa o erro ao usuário e chama a action failure do reducer
    toast.error('Usuário ou senha invalida');
    yield put(actions.loginFailure);
  }
}
// criando função que seta o header com o token ao iniciar a página
function persistRehydrate({ payload }) {
  const token = get(payload, 'auth.token', '');
  if (!token) return;
  // setando o cabeçalho com o token gerado
  axios.defaults.headers.Authorization = `Bearer ${token}`;
}

// exportando a request (com persist/heydrate)
export default all([
  takeLatest(types.LOGIN_REQUEST, loginRequest),
  takeLatest(types.PERSIST_REHYDRATE, persistRehydrate),
]);
