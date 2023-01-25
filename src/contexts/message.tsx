import React, { createContext, useState, useEffect, useCallback } from 'react';
import GetMessages from '../services/GetMessages';
import UpdateMessage from '../services/UpdateMessage';
import MessageType from '../@types/MessageType';

interface AppContextInterface {
  messages: MessageType[];
  setMessages: React.Dispatch<React.SetStateAction<MessageType[]>>;
  updateMessages: (id: string, name: string, avatarUrl: string) => void;
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
      await GetMessages().then((data) => {
        setMessages(data);
      });
    }
    loadingMessages();
  }, [setMessages]);

  const updateMessages = useCallback(
    (id: string, name: string, avatarUrl: string) => {
      const mensagens = messages as MessageType[];
      mensagens.forEach((item) => {
        if (item.idUser === id) {
          item.name = name;
          item.imgUser = avatarUrl;
          UpdateMessage(item);
        }
      });
      setMessages(mensagens);
    },
    [messages, setMessages],
  );

  return (
    <MessagesContext.Provider value={{ messages, setMessages, updateMessages }}>
      {children}
    </MessagesContext.Provider>
  );
}
