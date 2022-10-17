import React from 'react';
import { ButtonAdd } from '../../patternStyles';
import { MainContainer, ButtonContainer } from './homeStyles';

export default function Home() {
  return (
    <MainContainer>
      <h1>Anotações</h1>
      <h2>Faça TODOs de um jeito fácil : )</h2>
      <section>
        <div>
          <div>
            <h3>Nome da lista</h3>
            <button>X</button>
          </div>
          <ul>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
          </ul>
        </div>
        <div>
          <div>
            <h3>Nome da lista</h3>
            <button>X</button>
          </div>
          <ul>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
          </ul>
        </div>
      </section>
      <ButtonContainer btnElement>
        <ButtonAdd>Criar nova lista</ButtonAdd>
      </ButtonContainer>
    </MainContainer>
  );
}
