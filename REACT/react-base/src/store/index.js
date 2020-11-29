// importar componentes persist redux
import { persistStore } from 'redux-persist';

// importar componentes de criação e recepção do saga
import { createStore, applyMiddleware } from 'redux';
// importar componentes saga redux e nossos sagas
import createSagaMiddleware from 'redux-saga';
import persistedReducers from './modules/reduxPersist';
import rootSaga from './modules/rootSaga';

// importando root reducer
import rootReducer from './modules/rootReducer';
// criar o midd saga
const sagaMiddleware = createSagaMiddleware();

// aplicando middleware saga e persist na criação do redux
const store = createStore(
  // envolver reducer no persist
  persistedReducers(rootReducer),
  // chamar middleware saga
  applyMiddleware(sagaMiddleware)
);

// iniciando saga no redux
sagaMiddleware.run(rootSaga);

// >>>> EXPORTS
// exportanto o persist
export const persistor = persistStore(store);
// exportando a criação do redux
export default store;
