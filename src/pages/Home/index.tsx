import React from 'react';
import Todo from '../../components/Todo';
import { ButtonAdd } from '../../patternStyles';
import { MainContainer, ButtonContainer, SectionContainer } from './homeStyles';

export default function Home() {
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
        <ButtonAdd>Criar nova lista</ButtonAdd>
      </ButtonContainer>
    </MainContainer>
  );
}
