import React, { useState } from 'react';
import { HeaderContainer, MenuContainer } from './headerStyles';
import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import useAuthContext from '../../hooks/useAuth';
import useTodoContext from '../../hooks/useTodo';

export default function Header() {
  const appContext = useAuthContext();
  const todoContext = useTodoContext();
  const [visible, setVisible] = useState(false);

  const handleClose = () => {
    appContext?.logout();
    todoContext?.setTodos([]);
  };

  return (
    <HeaderContainer>
      <h1>Notes</h1>
      <FiMenu size={32} onClick={() => setVisible(!visible)} />
      <MenuContainer isVisible={visible}>
        <li>
          <Link to="/">Página Inicial</Link>
        </li>
        <li>
          <Link to="/community">Comunidade</Link>
        </li>
        <li>
          <Link to="/profile">Perfil</Link>
        </li>
        <li>
          <Link to="/login" onClick={handleClose}>
            Sair
          </Link>
        </li>
      </MenuContainer>
    </HeaderContainer>
  );
}
