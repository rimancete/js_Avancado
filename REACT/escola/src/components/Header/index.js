import React from 'react';
import {
  FaHome,
  FaSignInAlt,
  FaUserAlt,
  FaCircle,
  FaPowerOff,
} from 'react-icons/fa';
// importando links do react-router-dom
import { Link } from 'react-router-dom';

// LOGOUT
// importando componentes redux para logout
import { useSelector, useDispatch } from 'react-redux';
// importando actions redux para logout e history para redirecionamento
import * as actions from '../../store/modules/auth/actions';
import history from '../../services/history';

import { Nav } from './styled';

export default function Header() {
  // recebendo estado isLoggedIn
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  // criando o disparador
  const dispatch = useDispatch();
  // criando função que realiza logout
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(actions.loginFailure());
    history.push('/login');
  };
  return (
    <Nav>
      {isLoggedIn && (
        <Link to="/">
          <FaHome size={20} />
        </Link>
      )}

      <Link to="/register">
        <FaSignInAlt size={20} />
      </Link>
      {isLoggedIn ? (
        <Link onClick={handleLogout} to="/logout">
          <FaPowerOff size={20} />
        </Link>
      ) : (
        <Link to="/login">
          <FaUserAlt size={20} />
        </Link>
      )}
      {isLoggedIn && (
        <FaCircle className="isLoggedIn" size={20} color="#49AB81" />
      )}
    </Nav>
  );
}
