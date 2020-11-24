import React from 'react';
import { Router } from 'react-router-dom';
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
    </Router>
  );
}

export default App;
