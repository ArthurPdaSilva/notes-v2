import React, { useContext } from 'react';
import { HeaderContainer, MenuContainer } from './headerStyles';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/auth';

export default function Header() {
  const appContext = useContext(AuthContext);
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
          <Link to="/login" onClick={appContext?.logout}>
            Sair
          </Link>
        </li>
      </MenuContainer>
    </HeaderContainer>
  );
}
