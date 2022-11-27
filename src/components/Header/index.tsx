import React, { useContext } from 'react';
import { HeaderContainer, MenuContainer } from './headerStyles';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/auth';
import { TodoContext } from '../../contexts/todos';

export default function Header() {
  const appContext = useContext(AuthContext);
  const todoContext = useContext(TodoContext);

  const handleClose = () => {
    appContext?.logout();
    todoContext?.setTodos([]);
    localStorage.removeItem('todos');
  };

  return (
    <HeaderContainer>
      <h1>Notes</h1>
      <MenuContainer>
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
