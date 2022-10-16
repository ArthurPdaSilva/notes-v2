import React from 'react';
import { HeaderContainer, MenuContainer } from './headerStyles';

export default function Header() {
  return (
    <HeaderContainer>
      <h1>Notes</h1>
      <MenuContainer>
        <li>Home</li>
        <li>Perfil</li>
        <li>Sair</li>
      </MenuContainer>
    </HeaderContainer>
  );
}
