import React from 'react';
import { HeaderContainer, MenuContainer } from './headerStyles';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <HeaderContainer>
      <h1>Notes</h1>
      <MenuContainer>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/profile">Perfil</Link>
        </li>
        <li>
          <button>Sair</button>
        </li>
      </MenuContainer>
    </HeaderContainer>
  );
}
