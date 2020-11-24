import React from 'react';
import { Title, Paragrafo } from './styled';
import { Container } from '../../styles/GlobalStyles';

export default function Login() {
  return (
    <Container>
      <Title isRed={false}>
        Login
        <small> Oie</small>
      </Title>
      <Paragrafo>Lorem iParagrafosum dolor sit amet.</Paragrafo>
      <button type="button">Enviar</button>
    </Container>
  );
}
