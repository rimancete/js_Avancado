import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
// importando componentes redux para comunicação com API e loading da página
import { useDispatch, useSelector } from 'react-redux';
import { get } from 'lodash';
import * as actions from '../../store/modules/auth/actions';

// importando componente de loading da página
import Loading from '../../components/Loading';

import { Container } from '../../styles/GlobalStyles';
import { Form } from './styled';

export default function Login(props) {
  // definindo estado isLoading da página

  // criando varíaveis de estado
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // criando dispatch (disparador de ações) redux e variável que recebe a página anterior ao login
  const dispatch = useDispatch();
  const prevPath = get(props, 'location.state.prevPath', '/');

  // criando e setando o isLoading da página
  const isLoading = useSelector((state) => state.auth.isLoading);

  // Criando função que valida front-end e envia os dados para API
  const handleSubmit = async (e) => {
    e.preventDefault();
    let formErrors = false;
    if (!isEmail(email)) {
      formErrors = true;
      toast.error('Email inválido');
    }
    if (password.length < 6 || password.length > 20) {
      formErrors = true;
      toast.error('Senha inválida');
    }

    // consultando dados da API e logando
    if (formErrors) return;
    // envia os dados do usuário e a página anterior ao login (prevPath)
    dispatch(actions.loginRequest({ email, password, prevPath }));
  };
  return (
    <Container>
      <Loading isLoading={isLoading} />
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="email">
          E-mail:
          <input
            type="email"
            placeholder="Seu email"
            className="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="password">
          Senha:
          <input
            type="password"
            placeholder="Sua senha"
            className="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Logar</button>
      </Form>
    </Container>
  );
}
