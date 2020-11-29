import React from 'react';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
// importando links do react-router-dom
import { Link } from 'react-router-dom';

import { Nav } from './styled';

export default function Header() {
  return (
    <Nav>
      <Link to="/">
        <FaHome size={20} />
      </Link>

      <Link to="/register">
        <FaSignInAlt size={20} />
      </Link>
      <Link to="/login">
        <FaUserAlt size={20} />
      </Link>
    </Nav>
  );
}
