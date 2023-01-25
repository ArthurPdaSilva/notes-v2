import { useContext } from 'react';
import { MessagesContext } from '../contexts/message';

export default function useMessageContext() {
  return useContext(MessagesContext);
}
