// importar componentes saga redux
import { all } from 'redux-saga/effects';

// importar sagas redux criadas
import auth from './auth/sagas';

export default function* rootSaga() {
  return yield all([auth]);
}
