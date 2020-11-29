// importar componentes saga redux
import { all } from 'redux-saga/effects';

// importar sagas redux criadas
import example from './example/sagas';

export default function* rootSaga() {
  return yield all([example]);
}
