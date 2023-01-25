import React, { useEffect, useRef } from 'react';
import useAuthContext from '../../hooks/useAuth';
import useMessageContext from '../../hooks/useMessage';
import { PerfilUser, ReceiveMessages, Receiving } from './MessagesStyles';

export default function Messages() {
  const appContext = useAuthContext();
  const messagesContext = useMessageContext();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) ref.current.scrollTop = ref.current.scrollHeight;
  }, [messagesContext?.messages]);

  return (
    <ReceiveMessages ref={ref}>
      {messagesContext?.messages.map((message) => (
        <Receiving
          key={message.idMessage}
          isUser={appContext?.user?.uid === message.idUser}
        >
          <img
            src={
              message.imgUser !== undefined
                ? (message.imgUser as string).length <= 1
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
