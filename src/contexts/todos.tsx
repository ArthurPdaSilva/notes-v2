import React, { createContext, useState, useCallback, useEffect } from 'react';
import GetTodos from '../services/GetTodos';
import TodoType from '../types/TodoType';

interface AppContextInterface {
  todos: TodoType[];
  saveTodos: (item: TodoType[]) => void;
  getTodos: () => Promise<TodoType[] | never[]>;
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
}

export const TodoContext = createContext<AppContextInterface | null>(null);

export default function TodoProvider({ children }: { children: JSX.Element }) {
  const [todos, setTodos] = useState<TodoType[]>([]);

  useEffect(() => {
    const isList = localStorage.getItem('todos') ?? ([] as TodoType[]);
    if (isList?.length !== 0)
      setTodos(JSON.parse(isList as string) as TodoType[]);
  }, [setTodos]);

  const getTodos = useCallback(() => {
    return GetTodos()
      .then((data) => {
        return data;
      })
      .catch(() => {
        alert('Falha ao recuperar ToDos');
        return [];
      });
  }, [setTodos]);

  const saveTodos = useCallback(
    (todosSave: TodoType[]) => {
      localStorage.setItem('todos', JSON.stringify(todosSave));
      setTodos(todosSave);
    },
    [todos, setTodos],
  );

  return (
    <TodoContext.Provider value={{ todos, setTodos, getTodos, saveTodos }}>
      {children}
    </TodoContext.Provider>
  );
}
