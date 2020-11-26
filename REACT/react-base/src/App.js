import React from 'react';
import { Router } from 'react-router-dom';
// recebendo componente de mensagem
import { ToastContainer } from 'react-toastify';
import Header from './components/Header';
import GlobalStyle from './styles/GlobalStyles';
// importando history
import history from './services/history';
// importando rotas
import Routes from './routers';

function App() {
  return (
    <Router history={history}>
      <Header />
      <Routes />
      <GlobalStyle />
      <ToastContainer autoClose={3000} className="toast-container" />
    </Router>
  );
}

export default App;
