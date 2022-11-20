import styled from 'styled-components';
import { ContainerPattern, FlexMenu } from '../../patternStyles';

export const TodoContainer = styled.div`
  ${ContainerPattern}
  display: flex;
  flex-direction: column;
  box-shadow: var(--shadow);
  gap: calc(var(--espacamentoElementos) + 10px);
  height: 45vh;
  width: 20vw;

  textarea,
  input {
    background-color: transparent;
  }

  textarea {
    font-size: 1rem;
    overflow-y: hidden;
    height: 80%;
    border: none;
  }

  @media (max-width: 600px) {
    width: 60vw;
  }
`;

export const TitleContainer = styled.div`
  ${FlexMenu}
  width: 100%;
  gap: var(--espacamentoElementos);

  input {
    width: 70%;
    font-size: 1rem;
    font-weight: bold;
  }
`;
