import React from 'react';
import { Container } from '../../styles/GlobalStyles';

export default function Fotos() {
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

  return (
    <Container>
      <h1>Fotos</h1>
    </Container>
  );
}
