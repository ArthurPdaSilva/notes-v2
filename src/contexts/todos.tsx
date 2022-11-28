import React, { createContext, useState } from 'react';
import TodoType from '../types/TodoType';

interface AppContextInterface {
  todos: TodoType[];
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
}

export const TodoContext = createContext<AppContextInterface | null>(null);

export default function TodoProvider({ children }: { children: JSX.Element }) {
  const [todos, setTodos] = useState<TodoType[]>([]);

  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodoContext.Provider>
  );
}
