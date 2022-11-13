import React, { useState, useContext } from 'react';
import Modal from '../../components/Modal';
import Todo from '../../components/Todo';
import { TodoContext } from '../../contexts/todos';
import { ButtonAdd } from '../../patternStyles';
import { MainContainer, ButtonContainer, SectionContainer } from './homeStyles';

export default function Home() {
  const [modal, setModal] = useState(false);
  const todoContext = useContext(TodoContext);

  return (
    <MainContainer>
      <h1>Faça TODOs de um jeito fácil : )</h1>
      <SectionContainer>
        {todoContext?.todos.map((e) => (
          <Todo name={e.name} itens={e.itens} key={e.id} id={e.id} />
        ))}
      </SectionContainer>
      <ButtonContainer>
        <ButtonAdd
          onClick={() => {
            setModal(!modal);
          }}
        >
          Criar nova lista
        </ButtonAdd>
      </ButtonContainer>
      {modal && <Modal setModal={setModal} />}
    </MainContainer>
  );
}
