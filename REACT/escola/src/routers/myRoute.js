import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
// importando componentes  redux
import { useSelector } from 'react-redux';

export default function MyRoute({ component: Component, isClosed, ...rest }) {
  // seta flag se user está logado ou não
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  // se a rota é fechada e usuário não está logado
  if (isClosed && !isLoggedIn) {
    return (
      <Redirect
        // redireciona usuário para rota de login seta o estado com o histórico de onde o usuário estava
        to={{ pathname: '/login', state: { prevPath: rest.location.pathname } }}
      />
    );
  }
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Route {...rest} component={Component} />;
}
// indicando que o padrão a rota é aberta => setando isClosed com valor padrão false
MyRoute.defaultProps = {
  isClosed: false,
};

MyRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
  isClosed: PropTypes.bool,
};
