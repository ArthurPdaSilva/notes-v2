import { useContext } from 'react';
import { TodoContext } from '../contexts/todos';

export default function useTodoContext() {
  return useContext(TodoContext);
}
