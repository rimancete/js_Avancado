import React, { useState } from 'react';
// importar componentes de validação
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { get } from 'lodash';

// importar axios para comunicação com API e history para direcionamento de rota da aplicação
import axios from '../../services/axios';
import history from '../../services/history';

import { Container } from '../../styles/GlobalStyles';
import { Form } from './styled';

export default function Register() {
  // criando varíveis de estado
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // Criando função que valida front-end e envia os dados para API
  async function handleSubmit(e) {
    e.preventDefault();
    let formErrors = false;
    if (nome.length < 3 || nome.length > 255) {
      formErrors = true;
      toast.error('Nome deve ter entre 3 e 255 caracteres');
    }
    if (!isEmail(email)) {
      formErrors = true;
      toast.error('Email inválido');
    }
    if (password.length < 6 || password.length > 20) {
      formErrors = true;
      toast.error('A senha deve ter entre 6 e 20 caracteres');
    }

    // salvando dados na API
    if (formErrors) return;
    try {
      // como não foi utilizada response, o axios foi chamado diretamente
      await axios.post('/users/', {
        nome,
        password,
        email,
      });
      toast.success('Usuário criado com sucesso');
      history.push('/login');
    } catch (err) {
      // identificar e retornar o(s) erro(s) da API no back-end
      // const status = get(err, 'response.status', 0);
      const errors = get(err, 'response.data.errors', []);
      errors.map((error) => toast.error(error));
    }
  }

  return (
    <Container>
      <h1>Crie sua conta</h1>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="nome">
          Nome Completo:
          <input
            type="text"
            placeholder="Seu nome"
            className="nome"
            name="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </label>
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
        <button type="submit">Criar Conta</button>
      </Form>
    </Container>
  );
}
