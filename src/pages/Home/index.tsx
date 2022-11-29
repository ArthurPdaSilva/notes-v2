import React, { useContext, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Todo from '../../components/Todo';
import { AuthContext } from '../../contexts/auth';
import { TodoContext } from '../../contexts/todos';
import AddTodo from '../../services/AddTodo';
import GetTodos from '../../services/GetTodos';
import { MainContainer, SectionContainer } from './homeStyles';

export default function Home() {
  const todoContext = useContext(TodoContext);
  const appContext = useContext(AuthContext);

  useEffect(() => {
    if (todoContext?.todos.length === 0) {
      GetTodos().then((data) => {
        const newTodo = data.filter(
          (item) => item.idUser === appContext?.user?.uid,
        );
        todoContext.setTodos(newTodo);
      });
    }
  }, []);

  const handleDone = () => {
    const newItem = {
      idUser: appContext?.user?.uid as string,
      idTodo: uuidv4(),
      name: '',
      message: '',
      created: new Date(),
    };

    AddTodo(newItem);

    todoContext?.setTodos([...todoContext.todos, newItem]);
  };

  return (
    <MainContainer>
      <h1>Faça TODOs de um jeito fácil 😎</h1>
      <SectionContainer>
        {todoContext?.todos.map((e) => (
          <Todo
            idTodo={e.idTodo}
            name={e.name}
            message={e.message}
            key={uuidv4()}
          />
        ))}
        <button onClick={handleDone}>+</button>
      </SectionContainer>
    </MainContainer>
  );
}
