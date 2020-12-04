import React, { useState } from 'react';
// importar componentes de validação

import { toast } from 'react-toastify';
import { isEmail } from 'validator';

// API
// importar axios para comunicação com API e dispatch para direcionamento de rota da aplicação
import { useSelector, useDispatch } from 'react-redux';
// importar actions redux
import * as actions from '../../store/modules/auth/actions';

// importando componentes para consumo da api
import axios from '../../services/axios';
import history from '../../services/history';

// LOADING
import Loading from '../../components/Loading';

// STYLES
import { Container } from '../../styles/GlobalStyles';
import { Form, ExcluirPerfil } from './styled';

// DIALOG
import AlertDialog from '../../components/Dialog';

export default function Register() {
  // coletando dados, selecionados, do usuário logado
  const id = useSelector((state) => state.auth.user.id);
  const nomeStored = useSelector((state) => state.auth.user.nome);
  const emailStored = useSelector((state) => state.auth.user.email);
  // criando varíveis de estado
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // definindo estado isLoading da página
  const [isLoading, setIsLoading] = useState(false);

  // DIALOG
  const [dialogIsOpen, setDialogIsOpen] = useState(false);
  const openDialog = () => setDialogIsOpen(true);
  const closeDialog = () => setDialogIsOpen(false);

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

  const handleDelete = async () => {
    // e.preventDefault();
    try {
      //
      setIsLoading(true);
      await axios.delete(`/users/`);

      dispatch(actions.loginFailure());
      history.push('/login');
      setIsLoading(false);
      toast.success('Seu perfil foi excluído com sucesso');
    } catch (err) {
      //
      toast.error('Erro desconhecido');
      setIsLoading(false);
    }
  };

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
        {id && (
          <ExcluirPerfil onClick={() => setDialogIsOpen(true)} to="/register">
            <AlertDialog
              btnText="Excluir perfil"
              title="Deseja realmente excluir seu perfil?"
              // eslint-disable-next-line react/no-children-prop
              children="Após excluir seu perfil, você perderá o acesso imediatamente. Se
                quiser usar o sistema novamente, uma nova conta precisará ser
                criada."
              open={dialogIsOpen}
              setOpen={openDialog}
              onConfirm={handleDelete}
              onClose={closeDialog}
            />
          </ExcluirPerfil>
        )}
      </Form>
    </Container>
  );
}
