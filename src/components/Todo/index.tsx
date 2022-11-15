import React, { useCallback, useContext, useState } from 'react';
import { FiX } from 'react-icons/fi';
import { TodoContext } from '../../contexts/todos';
import RemoveTodo from '../../services/RemoveTodo';
import UpdateTodo from '../../services/UpdateTodo';
import TodoType from '../../types/TodoType';
import { TitleContainer, TodoContainer } from './todoStyles';

export default function Todo({ id, idTodo, name, message }: TodoType) {
  const todoContext = useContext(TodoContext);
  const [nameT, setNameT] = useState(name);
  const [messageT, setMessageT] = useState(message);

  const onRemove = () => {
    RemoveTodo(idTodo);
    const newList = todoContext?.todos.filter((e) => e.idTodo !== idTodo);
    todoContext?.saveTodos(newList as TodoType[]);
  };

  const onUpdate = useCallback(async () => {
    const todos = todoContext?.todos as TodoType[];
    const index = todos.findIndex((e) => e.idTodo === idTodo);
    todos[index].name = nameT;
    todos[index].message = messageT;
    todoContext?.saveTodos(todos);
    await UpdateTodo({
      id,
      idTodo,
      name: nameT,
      message: messageT,
    });
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
