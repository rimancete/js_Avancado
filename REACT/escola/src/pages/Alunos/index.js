import React, { useState } from 'react';
// importando link do react router dom
import { Link } from 'react-router-dom';
// importando lodash => tratamento excessão
import { get } from 'lodash';
// importando ícones que serão exibidos no lugar de fotos inexistentes de alunos
import {
  FaUserCircle,
  FaEdit,
  FaWindowClose,
  FaExclamation,
  FaFileAlt,
} from 'react-icons/fa';
import { toast } from 'react-toastify';
import { Container } from '../../styles/GlobalStyles';
import { AlunoContainer, ProfilePicture, NovoAluno } from './styled';
// importando componentes para consumo da api
import axios from '../../services/axios';

// importando componente de loading da página
import Loading from '../../components/Loading';

export default function Alunos() {
  // definindo estado isLoading da página
  const [isLoading, setIsLoading] = useState(false);
  // definindo os estados, dados(api) e forma de manipulação
  const [alunos, setAlunos] = useState([]);
  React.useEffect(() => {
    async function getData() {
      // antes de comunicar com api, informar o loading
      setIsLoading(true);
      const response = await axios.get('/alunos');

      // enviando dados da api para o app
      setAlunos(response.data);
      // depois de retornar da api retirar o loading
      setIsLoading(false);
    }
    getData();
  }, []);

  // criando função que pergunta se o usuário quer mesmo deletar o registro do aluno
  const handleDeleteAsk = (e) => {
    e.preventDefault();
    const exclamation = e.currentTarget.nextSibling;
    exclamation.setAttribute('display', 'block');
    e.currentTarget.remove();
  };

  // criando função que realiza a exclusão do aluno
  const handleDelete = async (e, id, index) => {
    e.persist();
    try {
      setIsLoading(true);
      // excluir aluno
      await axios.delete(`/alunos/${id}`);
      // apagar a linha com os dados da página
      const novosAlunos = [...alunos];
      novosAlunos.splice(index, 1);
      setAlunos(novosAlunos);
      setIsLoading(false);
    } catch (err) {
      const status = get(err, 'response.status', []);
      if (status === 401) {
        toast.error('Você precisa fazer login');
      } else {
        toast.error('Ocorreu um erro ao excluir o aluno');
      }
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <NovoAluno to="/aluno">
        Cadastrar Aluno <FaFileAlt size={22} />
      </NovoAluno>
      <h1>Alunos</h1>
      {/* exibindo dados da api na página */}
      <AlunoContainer>
        {alunos.map((aluno, index) => (
          <div key={String(aluno.id)}>
            {/* Se o aluno não tiver foto, exibir ícone */}
            <ProfilePicture>
              {get(aluno, 'Photos[0].url', false) ? (
                <img src={aluno.Photos[0].url} alt="" />
              ) : (
                <FaUserCircle className="within-pic" size={50} />
              )}
            </ProfilePicture>
            {/* Coletando dados da api */}
            <span>{aluno.nome}</span>
            <span>{aluno.email}</span>
            {/* Inserindo link para edição e exclusão de alunos */}
            <Link to={`/aluno/${aluno.id}/edit`}>
              <FaEdit size={24} />
            </Link>
            <Link onClick={handleDeleteAsk} to={`/aluno/${aluno.id}/delete`}>
              <FaWindowClose size={24} />
            </Link>

            <FaExclamation
              size={24}
              display="none"
              cursor="pointer"
              onClick={(e) => handleDelete(e, aluno.id, index)}
            />
          </div>
        ))}
      </AlunoContainer>
    </Container>
  );
}
