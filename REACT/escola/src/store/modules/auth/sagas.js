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
    const response = yield call(axios.post, '/tokens', payload);
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
    toast.error('Usuário ou senha invalidos');
    yield put(actions.loginFailure());
  }
}
// criando função que seta o header com o token ao iniciar a página
function persistRehydrate({ payload }) {
  const token = get(payload, 'auth.token', '');
  if (!token) return;
  // setando o cabeçalho com o token gerado
  axios.defaults.headers.Authorization = `Bearer ${token}`;
}

// criando função que envia o payload para a API, => POST de'/users/' (criar usuário) ou PUT de '/users/' para atualização do usuário
// eslint-disable-next-line consistent-return
function* registerRequest({ payload }) {
  const { id, nome, email, password } = payload;
  try {
    // selecionando se será criação de usuário ou alteração de dados do usuário atual
    if (id) {
      yield call(axios.put, '/users', {
        nome,
        email,
        password: password || undefined,
      });
      toast.success('Dados alterados com sucesso');
      // dispara action que atualiza os dados no back-end
      yield put(actions.registerUpdatedSuccess({ nome, email, password }));
      // se não tem id, criar usuário
    } else {
      yield call(axios.post, '/users', {
        nome,
        email,
        password,
      });
      toast.success('Conta criada com sucesso');
      // dispara action que cria o usuário no back-end
      yield put(actions.registerCreatedSuccess({ nome, email, password }));
      history.push('/login');
    }
  } catch (e) {
    // coleta erros gerado no back-end
    const errors = get(e, 'response.data.errors', []);
    // coleta o código do erro
    const status = get(e, 'response.status', 0);
    if (status === 401) {
      toast.info('Você precisa fazer login novamente');
      yield put(actions.loginFailure());
      return history.push('/login');
    }
    // se o back-end devolver erros, exieb-os no toast
    if (errors.lenght > 0) {
      errors.map((error) => toast.error(error));
      // se não, informe o usuário de um erro desconhecido
    } else {
      toast.error('Erro desconhecido');
    }
    yield put(actions.registerFailure());
  }
}

// exportando a request (com persist/heydrate)
export default all([
  takeLatest(types.LOGIN_REQUEST, loginRequest),
  takeLatest(types.PERSIST_REHYDRATE, persistRehydrate),
  takeLatest(types.REGISTER_REQUEST, registerRequest),
]);
