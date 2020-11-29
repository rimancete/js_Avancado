import React, { useState } from 'react';
// importando link do react router dom
import { Link } from 'react-router-dom';
// importando lodash => tratamento excessão
import { get } from 'lodash';
// importando ícones que serão exibidos no lugar de fotos inexistentes de alunos
import { FaUserCircle, FaEdit, FaWindowClose } from 'react-icons/fa';
import { Container } from '../../styles/GlobalStyles';
import { AlunoContainer, ProfilePicture } from './styled';
// importando componentes para consumo da api
import axios from '../../services/axios';

export default function Alunos() {
  // definindo os estados, dados(api) e forma de manipulação
  const [alunos, setAlunos] = useState([]);
  React.useEffect(() => {
    async function getData() {
      const response = await axios.get('/alunos');
      // enviando dados da api para o app
      setAlunos(response.data);
    }
    getData();
  }, []);
  return (
    <Container>
      <h1>Alunos</h1>
      {/* exibindo dados da api na página */}
      <AlunoContainer>
        {alunos.map((aluno) => (
          <div key={String(aluno.id)}>
            {/* Se o aluno não tiver foto, exibir ícone */}
            <ProfilePicture>
              {get(aluno, 'Photos[0].url', false) ? (
                <img src={aluno.Photos[0].url} alt="" />
              ) : (
                <FaUserCircle size={36} />
              )}
            </ProfilePicture>
            {/* Coletando dados da api */}
            <span>{aluno.nome}</span>
            <span>{aluno.email}</span>
            {/* Inserindo link para edição e exclusão de alunos */}
            <Link to={`/aluno/${aluno.id}/edit`}>
              <FaEdit size={10} />
            </Link>
            <Link to={`/aluno/${aluno.id}/delete`}>
              <FaWindowClose size={10} />
            </Link>
          </div>
        ))}
      </AlunoContainer>
    </Container>
  );
}
