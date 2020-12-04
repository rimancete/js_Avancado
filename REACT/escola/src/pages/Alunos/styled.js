import styled from 'styled-components';
// componente link usado para criação de novo aluno na página 'ALunos'
import { Link } from 'react-router-dom';

export const AlunoContainer = styled.div`
  margin-top: 20px;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 0;
    a {
      margin: 0;
      position: relative;
      bottom: 5px;
    }
  }
  /*Inserindo borda para separar cada aluno, retirando do primeiro */
  div + div {
    border-top: 1px solid #eee;
  }
`;
export const ProfilePicture = styled.div`
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
`;

// Componente react (Link) da página 'Alunos'
export const NovoAluno = styled(Link)`
  display: block;
  padding: 5px 0;
  text-align: right;
  font-weight: 550;
`;
