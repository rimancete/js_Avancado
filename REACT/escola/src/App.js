import React from 'react';
import { Router } from 'react-router-dom';
// recebendo componente de mensagem
import { ToastContainer } from 'react-toastify';
// importando recursos do redux
import { Provider } from 'react-redux';
// importando componentes persist
import { PersistGate } from 'redux-persist/integration/react';

import store, { persistor } from './store';

import Header from './components/Header';
import GlobalStyle from './styles/GlobalStyles';
// importando history
import history from './services/history';
// importando rotas
import Routes from './routers';

function App() {
  return (
    // adicionando redux e persist(dentro do provider store) à aplicação
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Header />
          <Routes />
          <GlobalStyle />
          <ToastContainer autoClose={3000} className="toast-container" />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
