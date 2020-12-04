import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as colors from '../../config/colors';

// componente link usado para criação de novo aluno na página 'ALunos'

export const Form = styled.form`
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  input {
    font-size: 20px;
    width: 100%;
    border: 2px solid rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    padding: 3px 10px;
    &:focus {
      border-color: ${colors.primaryDarkColor};
    }
  }
  input::placeholder {
    font-size: 16px;
  }
  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
  }
`;

export const ExcluirPerfil = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
  text-align: center;
  font-weight: 550;
  p {
    margin-right: 5px;
    font-size: 13.5px;
  }
`;
