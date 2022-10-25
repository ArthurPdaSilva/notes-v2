import React, { useState } from 'react';
import { ButtonAdd, TitleContainer } from '../../patternStyles';
import Modal from '../Modal';
import { TodoContainer, TodoList } from './todoStyles';

export default function Todo() {
  const [modal, setModal] = useState(false);

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
      <ButtonAdd onClick={() => setModal(!modal)}>Adicionar Mais</ButtonAdd>
      {modal && <Modal title="Lista" setModal={setModal} />}
    </TodoContainer>
  );
}
