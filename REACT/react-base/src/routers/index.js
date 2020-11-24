import React from 'react';
// importando componentes de rota
import { Switch } from 'react-router-dom';
import MyRoute from './myRoute';
// recebendo componente(página) Login
import Login from '../pages/Login';

import Page404 from '../pages/Page404';

export default function Routes() {
  return (
    <Switch>
      <MyRoute exact path="/" component={Login} />
      <MyRoute exact path="*" component={Page404} />
    </Switch>
  );
}
