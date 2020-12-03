import React, { useEffect, useState } from 'react';
// importar get lodash para coleta do id do aluno
import { get } from 'lodash';
// importa PropTypes para validação do match
import PropTypes from 'prop-types';
// importar componentes para validação dos campos
import { toast } from 'react-toastify';
import { isEmail, isInt, isFloat } from 'validator';

// importando componentes para consumo da api
import { useDispatch } from 'react-redux';
import { FaUserCircle, FaCamera } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import axios from '../../services/axios';
import history from '../../services/history';
import * as actions from '../../store/modules/auth/actions';

// ICONS

// LOADING
import Loading from '../../components/Loading';

// STYLES
import { Container } from '../../styles/GlobalStyles';
import { Form, ProfilePicture, Title } from './styled';

export default function Aluno({ match }) {
  const dispatch = useDispatch();

  const id = get(match, 'params.id', '');

  // configurar campos do fomulário
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [idade, setIdade] = useState('');
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [foto, setPhoto] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // recebendo/atualizando dados para os inputs
  useEffect(() => {
    if (!id) return;

    async function getData() {
      try {
        setIsLoading(true);
        // recebendo os dados do aluno em uma variável para serem retornados após cadastro como edição de aluno
        const { data } = await axios.get(`/alunos/${id}`);
        const Photo = get(data, 'Photos[0].url', '');
        setPhoto(Photo);
        setNome(data.nome);
        setSobrenome(data.sobrenome);
        setEmail(data.email);
        setIdade(data.idade);
        setPeso(data.peso);
        setAltura(data.altura);

        setIsLoading(false);
        // eslint-disable-next-line no-empty
      } catch (err) {
        setIsLoading(false);
        const status = get(err, 'response.status', 0);
        const errors = get(err, 'response.data.errors', []);

        if (status === 400) errors.map((error) => toast.error(error));
        history.push('/');
      }
    }
    getData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // validação de campos
    let formErrors = false;
    if (nome.length < 3 || nome.length > 20) {
      toast.error('Nome deve ter entre 3 e 20 caracteres');
      formErrors = true;
    }
    if (sobrenome.length < 2 || sobrenome.length > 100) {
      toast.error('Sobrenome deve ter entre 2 e 100 caracteres');
      formErrors = true;
    }
    if (!isEmail(email)) {
      toast.error('E-mail inválido');
      formErrors = true;
    }
    if (!isInt(String(idade))) {
      toast.error('Idade deve ser um número inteiro');
      formErrors = true;
    }
    if (!isFloat(String(peso))) {
      toast.error('Peso deve ser um número');
      formErrors = true;
    }
    if (!isFloat(String(altura))) {
      toast.error('Altura deve ser um número');
      formErrors = true;
    }
    if (formErrors) return;
    // tenta envio dos dados para API
    try {
      setIsLoading(true);
      // se tem id é uma edição
      if (id) {
        await axios.put(`/alunos/${id}`, {
          nome,
          sobrenome,
          email,
          idade,
          peso,
          altura,
        });
        toast.success('Aluno(a) editado(a) com sucesso');
      } else {
        // se não tem id é uma criação
        const { data } = await axios.post(`/alunos/`, {
          nome,
          sobrenome,
          email,
          idade,
          peso,
          altura,
        });
        toast.success('Aluno(a) criado(a) com sucesso');
        history.push(`/aluno/${data.id}/edit`);
      }
      setIsLoading(false);
      // se der erro, tratar
    } catch (err) {
      const status = get(err, 'response.status', 0);
      const data = get(err, 'response.data', {});
      const errors = get(data, 'errors', []);
      if (errors.length > 0) {
        errors.map((error) => toast.error(error));
      } else {
        toast.error('Erro desconhecido');
      }

      if (status === 401) dispatch(actions.loginFailure());
    }
  };
  return (
    <Container>
      <Loading isLoading={isLoading} />
      {id && (
        <ProfilePicture>
          {foto ? <img src={foto} alt={nome} /> : <FaUserCircle size={180} />}
          <Link to={`/fotos/${id}`}>
            <FaCamera size={18} />
          </Link>
        </ProfilePicture>
      )}
      <Title>{id ? 'Editar Aluno' : 'Novo Aluno'}</Title>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="nome">
          Nome:
          <input
            type="text"
            placeholder="Nome do aluno"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </label>
        <label htmlFor="sobrenome">
          Sobrenome:
          <input
            type="text"
            placeholder="Sobrenome do aluno"
            value={sobrenome}
            onChange={(e) => setSobrenome(e.target.value)}
          />
        </label>
        <label htmlFor="email">
          E-mail:
          <input
            type="email"
            placeholder="Email do aluno"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="idade">
          Idade:
          <input
            type="number"
            placeholder="Idade do aluno"
            value={idade}
            onChange={(e) => setIdade(e.target.value)}
          />
        </label>
        <label htmlFor="peso">
          Peso:
          <input
            type="number"
            placeholder="Peso do aluno"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
          />
        </label>
        <label htmlFor="altura">
          Altura:
          <input
            type="number"
            placeholder="Altura do aluno"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
          />
        </label>
        <button type="submit">{id ? `Salvar Dados` : `Criar Aluno`}</button>
      </Form>
    </Container>
  );
}

// validação do match como objeto
Aluno.propTypes = {
  match: PropTypes.shape({}).isRequired,
};
