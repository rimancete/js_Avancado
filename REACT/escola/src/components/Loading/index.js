import React from 'react';
// componente para saber se a página está carregando ou não
import PropTypes from 'prop-types';
import { Container } from './styled';

export default function Loading({ isLoading }) {
  // se não tiver carregando retorna fragmento vazio
  if (!isLoading) return <></>;
  // retorna o loading da página
  return (
    <Container>
      <div />
      <span>Carregando...</span>
    </Container>
  );
}
// seta a flag is Loading como padrão falso
Loading.defaultProps = {
  isLoading: false,
};
// definidindo isLoading como booleano
Loading.propTypes = {
  isLoading: PropTypes.bool,
};
