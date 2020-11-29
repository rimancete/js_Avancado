import React from 'react';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
// importando links do react-router-dom
import { Link } from 'react-router-dom';

// importando componentes redux
import { useSelector } from 'react-redux';

import { Nav } from './styled';

export default function Header() {
  // retornando valor de estado redux
  const botaoClicado = useSelector((state) => state.example.botaoClicado);
  return (
    <Nav>
      <Link to="/">
        <FaHome size={20} />
      </Link>

      <Link to="/login">
        <FaSignInAlt size={20} />
      </Link>
      <Link to="/newaccount">
        <FaUserAlt size={20} />
      </Link>
      {botaoClicado ? 'Clicado' : 'Não clicado'}
    </Nav>
  );
}
