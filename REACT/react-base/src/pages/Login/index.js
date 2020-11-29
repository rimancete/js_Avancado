import React from 'react';
// importando componentes redux
import { useDispatch } from 'react-redux';
// importando ação redux
import * as exampleActions from '../../store/modules/example/actions';

import { Title, Paragrafo } from './styled';
import { Container } from '../../styles/GlobalStyles';
// receber axios para manipulação de dados
// import axios from '../../services/axios';

export default function Login() {
  // executar ações quando componente é montado(iniciado)
  // React.useEffect(() => {
  //   async function getData() {
  //     const response = await axios.get('/alunos');
  //     // coletando dados
  //     const { data } = response;
  //     console.log(data);
  //   }
  //   getData();
  // }, []);

  // criando 'disparador' redux
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();
    // pedindo para o 'disparador' redux disparar ação
    dispatch(exampleActions.clicaBotaoRequest());
  }
  return (
    <Container>
      <Title isRed={false}>
        Login
        <small> Oie</small>
      </Title>
      <Paragrafo>Lorem iParagrafosum dolor sit amet.</Paragrafo>
      <button type="button" onClick={handleClick}>
        Enviar
      </button>
    </Container>
  );
}
