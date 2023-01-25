import React, { useCallback, useState } from 'react';
import { v4 } from 'uuid';
import AddMessages from '../../services/AddMessages';
import MessageType from '../../@types/MessageType';
import UserType from '../../@types/UserType';
import { Send } from './sendStyles';
import useAuthContext from '../../hooks/useAuth';
import useMessageContext from '../../hooks/useMessage';

export default function SendMessages() {
  const appContext = useAuthContext();
  const messagesContext = useMessageContext();
  const [message, setMessage] = useState('');

  const handleSend = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const nowUser = appContext?.user as UserType;
      const newMessage = {
        idUser: nowUser.uid as string,
        idMessage: v4(),
        message: message,
        name: nowUser.name,
        imgUser: nowUser.avatarUrl,
        created: new Date(),
      };
      const messageArray = messagesContext?.messages as MessageType[];
      AddMessages(newMessage).then(() => {
        messagesContext?.setMessages([...messageArray, newMessage]);
        setMessage('');
      });
    },
    [message, setMessage],
  );

  return (
    <Send onSubmit={(e) => handleSend(e)}>
      <input
        type="text"
        placeholder="Enviar mensagem"
        value={message}
        maxLength={50}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit">Enviar mensagem</button>
    </Send>
  );
}
