import React, { useState } from 'react';
// importar componentes de validação
import { toast } from 'react-toastify';
import { isEmail } from 'validator';

// API
// importar axios para comunicação com API e dispatch para direcionamento de rota da aplicação
import { useSelector, useDispatch } from 'react-redux';
// importar actions redux
import * as actions from '../../store/modules/auth/actions';

// LOADING
import Loading from '../../components/Loading';

// STYLES
import { Container } from '../../styles/GlobalStyles';
import { Form } from './styled';

export default function Register() {
  // coletando dados, selecionados, do usuário logado
  const id = useSelector((state) => state.auth.user.id);
  const nomeStored = useSelector((state) => state.auth.user.nome);
  const emailStored = useSelector((state) => state.auth.user.email);
  // importando estado isLoading
  const isLoading = useSelector((state) => state.auth.isLoading);
  // criando varíveis de estado
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // criando disparador redux que chamará o saga para seguir com as validações no back-end
  const dispatch = useDispatch();

  // se usuário estiver logado, preencha os estados (inputs)
  React.useEffect(() => {
    if (!id) return;
    setNome(nomeStored);
    setEmail(emailStored);
  }, [emailStored, id, nomeStored]);

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
    if (!id && (password.length < 6 || password.length > 20)) {
      formErrors = true;
      toast.error('A senha deve ter entre 6 e 20 caracteres');
    }

    // salvando dados na API
    if (formErrors) return;

    // disparar ação redux para action
    dispatch(actions.registerRequest({ nome, email, password, id }));
  }

  return (
    <Container>
      <Loading isLoading={isLoading} />

      <h1>{id ? `Editar dados` : `Crie sua conta`}</h1>
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
        <button type="submit">{id ? `Salvar Dados` : `Criar Conta`}</button>
      </Form>
    </Container>
  );
}
