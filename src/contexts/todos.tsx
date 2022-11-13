import React, { createContext, useState, useCallback, useContext } from 'react';
import getTodo from '../services/getTodo';
import TodoType from '../types/TodoType';
import { AuthContext } from './auth';

interface AppContextInterface {
  todos: TodoType[];
  getTodos: () => void;
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
}

export const TodoContext = createContext<AppContextInterface | null>(null);

export default function TodoProvider({ children }: { children: JSX.Element }) {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const appContext = useContext(AuthContext);

  const getTodos = useCallback(() => {
    getTodo()
      .then((data) => {
        console.log(data);
        setTodos(data.filter((item) => item.id === appContext?.user?.uid));
      })
      .catch(() => alert('Falha ao recuperar listas'));
  }, [setTodos]);

  return (
    <TodoContext.Provider value={{ todos, setTodos, getTodos }}>
      {children}
    </TodoContext.Provider>
  );
}
