// importar componentes persist redux
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedReducers = persistReducer(
    {
      // nome da aplicação
      key: 'ESCOLA',
      // local de armazenamento
      storage,
      // modulos que queremos salvar => inserir do rootReducer
      whitelist: ['auth'],
    },
    reducers
  );
  // retornar função persist redux
  return persistedReducers;
};
