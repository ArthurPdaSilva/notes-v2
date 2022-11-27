import React from 'react';
import { PerfilUser, ReceiveMessages, Receiving } from './MessagesStyles';

export default function Messages() {
  return (
    <ReceiveMessages>
      <Receiving>
        <img src="assets/user.png" alt="Imagem do usuário X" />
        <PerfilUser>
          <small>User</small>
          <span>Mensagens de outros usuários</span>
        </PerfilUser>
      </Receiving>
      <Receiving>
        <img src="assets/user.png" alt="Imagem do usuário X" />
        <PerfilUser>
          <small>User</small>
          <span>Mensagens de outros usuários</span>
        </PerfilUser>
      </Receiving>
      <Receiving isUser>
        <img src="assets/user.png" alt="Imagem do usuário X" />
        <PerfilUser isUser>
          <small>Eu</small>
          <span>Mensagens de outros usuários</span>
        </PerfilUser>
      </Receiving>
      <Receiving>
        <img src="assets/user.png" alt="Imagem do usuário X" />
        <PerfilUser>
          <small>User</small>
          <span>Mensagens de outros usuários</span>
        </PerfilUser>
      </Receiving>
      <Receiving>
        <img src="assets/user.png" alt="Imagem do usuário X" />
        <PerfilUser>
          <small>User</small>
          <span>Mensagens de outros usuários</span>
        </PerfilUser>
      </Receiving>
      <Receiving>
        <img src="assets/user.png" alt="Imagem do usuário X" />
        <PerfilUser>
          <small>User</small>
          <span>Mensagens de outros usuários</span>
        </PerfilUser>
      </Receiving>
    </ReceiveMessages>
  );
}
