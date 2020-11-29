// importar componentes persist redux
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedReducers = persistReducer(
    {
      // nome da aplicação
      key: 'REAT-BASE',
      // local de armazenamento
      storage,
      // modulos que queremos salvar => inserir do rootReducer
      whitelist: ['example'],
    },
    reducers
  );
  // retornar função persist redux
  return persistedReducers;
};
