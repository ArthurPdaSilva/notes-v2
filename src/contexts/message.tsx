import React, { createContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import GetMessages from '../services/GetMessages';
import MessageType from '../types/MessageType';

interface AppContextInterface {
  messages: MessageType[];
  setMessages: React.Dispatch<React.SetStateAction<MessageType[]>>;
}

export const MessagesContext = createContext<AppContextInterface | null>(null);

export default function MessagesProvider({
  children,
}: {
  children: JSX.Element;
}) {
  const [messages, setMessages] = useState<MessageType[]>([]);

  useEffect(() => {
    async function loadingMessages() {
      await GetMessages()
        .then((data) => setMessages(data))
        .catch(() => toast.error('Não foi possível recuperar as mensagens'));
    }
    loadingMessages();
  }, [setMessages]);

  return (
    <MessagesContext.Provider value={{ messages, setMessages }}>
      {children}
    </MessagesContext.Provider>
  );
}
