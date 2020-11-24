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

      <Link to="/login">
        <FaSignInAlt size={20} />
      </Link>
      <Link to="/newaccount">
        <FaUserAlt size={20} />
      </Link>
    </Nav>
  );
}
