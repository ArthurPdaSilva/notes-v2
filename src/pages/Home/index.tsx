import React, { useState, useContext, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Modal from '../../components/Modal';
import Todo from '../../components/Todo';
import { AuthContext } from '../../contexts/auth';
import { TodoContext } from '../../contexts/todos';
import { ButtonAdd } from '../../patternStyles';
import { MainContainer, SectionContainer } from './homeStyles';

export default function Home() {
  const [modal, setModal] = useState(false);
  const todoContext = useContext(TodoContext);
  const appContext = useContext(AuthContext);

  useEffect(() => {
    if (todoContext?.todos.length === 0) {
      todoContext?.getTodos().then((data) => {
        const newTodo = data.filter(
          (item) => item.id === appContext?.user?.uid,
        );
        todoContext.saveTodos(newTodo);
        console.log('V');
      });
    }
  }, []);

  return (
    <MainContainer>
      <h1>Faça TODOs de um jeito fácil : )</h1>
      <SectionContainer>
        {todoContext?.todos.map((e) => (
          <Todo name={e.name} itens={e.itens} key={uuidv4()} id={e.id} />
        ))}
        <ButtonAdd
          onClick={() => {
            setModal(!modal);
          }}
        >
          Criar nova lista
        </ButtonAdd>
      </SectionContainer>
      {modal && <Modal setModal={setModal} />}
    </MainContainer>
  );
}
