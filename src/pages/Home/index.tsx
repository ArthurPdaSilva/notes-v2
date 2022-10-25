import React, { useState } from 'react';
import Modal from '../../components/Modal';
import Todo from '../../components/Todo';
import { ButtonAdd } from '../../patternStyles';
import { MainContainer, ButtonContainer, SectionContainer } from './homeStyles';

export default function Home() {
  const [modal, setModal] = useState(false);

  return (
    <MainContainer>
      <h1>Faça TODOs de um jeito fácil : )</h1>
      <SectionContainer>
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
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
