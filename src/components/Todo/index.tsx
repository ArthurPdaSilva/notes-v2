import React, { useCallback, useState } from 'react';
import { FiX } from 'react-icons/fi';
import RemoveTodo from '../../services/RemoveTodo';
import UpdateTodo from '../../services/UpdateTodo';
import TodoType from '../../@types/TodoType';
import { TitleContainer, TodoContainer } from './todoStyles';
import useTodoContext from '../../hooks/useTodo';

type Props = {
  idTodo: string;
  name: string;
  message: string;
};

export default function Todo({ idTodo, name, message }: Props) {
  const todoContext = useTodoContext();
  const [nameT, setNameT] = useState(name);
  const [messageT, setMessageT] = useState(message);

  const onRemove = () => {
    RemoveTodo(idTodo);
    const newList = todoContext?.todos.filter((e) => e.idTodo !== idTodo);
    todoContext?.setTodos(newList as TodoType[]);
  };

  const onUpdate = useCallback(async () => {
    const todos = todoContext?.todos as TodoType[];
    const index = todos.findIndex((e) => e.idTodo === idTodo);
    todos[index].name = nameT;
    todos[index].message = messageT;
    todoContext?.setTodos(todos);
    await UpdateTodo(idTodo, nameT, messageT);
  }, [nameT, messageT]);

  return (
    <TodoContainer>
      <TitleContainer>
        <input
          value={nameT}
          onChange={(e) => setNameT(e.target.value)}
          placeholder="Adicione um título"
          maxLength={20}
          onBlur={onUpdate}
        />
        <FiX size={22} color="gray" onClick={onRemove} />
      </TitleContainer>
      <textarea
        value={messageT}
        maxLength={308}
        placeholder="Digite alguma coisa"
        onChange={(e) => setMessageT(e.target.value)}
        onBlur={onUpdate}
      />
    </TodoContainer>
  );
}
