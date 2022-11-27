import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/auth';
import { MessagesContext } from '../../contexts/message';
import { PerfilUser, ReceiveMessages, Receiving } from './MessagesStyles';

export default function Messages() {
  const messagesContext = useContext(MessagesContext);
  const appContext = useContext(AuthContext);

  return (
    <ReceiveMessages>
      {messagesContext?.messages.map((message) => (
        <Receiving
          key={message.idMessage}
          isUser={appContext?.user?.uid === message.idUser}
        >
          <img
            src={
              message.imgUser !== undefined
                ? (message.imgUser as string).length < 1
                  ? 'assets/user.png'
                  : (message.imgUser as string)
                : ''
            }
            alt="Imagem do usuário X"
          />
          <PerfilUser isUser={appContext?.user?.uid === message.idUser}>
            <small>{message.name}</small>
            <span>{message.message}</span>
          </PerfilUser>
        </Receiving>
      ))}
    </ReceiveMessages>
  );
}
