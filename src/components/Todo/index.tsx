import React from 'react';
import { ButtonAdd } from '../../patternStyles';
import { TodoContainer, TitleContainer, TodoList } from './todoStyles';

export default function Todo() {
  return (
    <TodoContainer>
      <TitleContainer>
        <h3>Nome da lista</h3>
        <button>X</button>
      </TitleContainer>
      <TodoList>
        <li>
          <span>ItemItemItemItemItemItemItemItemItemItemItemItem</span>
          <div>
            <button>EDIT</button>
            <button>X</button>
          </div>
        </li>
        <li>
          <span>Item</span>
          <div>
            <button>EDIT</button>
            <button>X</button>
          </div>
        </li>
        <li>
          <span>Item</span>
          <div>
            <button>EDIT</button>
            <button>X</button>
          </div>
        </li>
        <li>
          <span>Item</span>
          <div>
            <button>EDIT</button>
            <button>X</button>
          </div>
        </li>
        <li>
          <span>Item</span>
          <div>
            <button>EDIT</button>
            <button>X</button>
          </div>
        </li>
        <li>
          <span>Item</span>
          <div>
            <button>EDIT</button>
            <button>X</button>
          </div>
        </li>
        <li>
          <span>Item</span>
          <div>
            <button>EDIT</button>
            <button>X</button>
          </div>
        </li>
        <li>
          <span>Item</span>
          <div>
            <button>EDIT</button>
            <button>X</button>
          </div>
        </li>
        <li>
          <span>Item</span>
          <div>
            <button>EDIT</button>
            <button>X</button>
          </div>
        </li>
      </TodoList>
      <ButtonAdd>Adicionar Mais</ButtonAdd>
    </TodoContainer>
  );
}
