import React, { useCallback, useContext, useState } from 'react';
import { v4 } from 'uuid';
import { AuthContext } from '../../contexts/auth';
import { MessagesContext } from '../../contexts/message';
import AddMessages from '../../services/AddMessages';
import MessageType from '../../types/MessageType';
import UserType from '../../types/UserType';
import { Send } from './sendStyles';

export default function SendMessages() {
  const appContext = useContext(AuthContext);
  const messagesContext = useContext(MessagesContext);
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
