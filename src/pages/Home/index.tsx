import React, { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Todo from '../../components/Todo';
import useAuthContext from '../../hooks/useAuth';
import useTodoContext from '../../hooks/useTodo';
import AddTodo from '../../services/AddTodo';
import GetTodos from '../../services/GetTodos';
import { MainContainer, SectionContainer } from './homeStyles';

export default function Home() {
  const appContext = useAuthContext();
  const todoContext = useTodoContext();

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
