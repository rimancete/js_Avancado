import React from 'react';
import { LoopCircleLoading } from 'react-loadingg';
// componente para saber se a página está carregando ou não
import PropTypes from 'prop-types';
import { Container } from './styled';
import * as colors from '../../config/colors';

export default function Loading({ isLoading }) {
  // se não tiver carregando retorna fragmento vazio
  if (!isLoading) return <></>;
  // retorna o loading da página
  return (
    <Container>
      <span>
        <LoopCircleLoading size="large" color={colors.primaryColor} />
      </span>
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
