import styled from 'styled-components';
import {
  ContainerPattern,
  FlexMenu,
  FlexCentralize,
} from '../../patternStyles';

export const TodoContainer = styled.div`
  ${ContainerPattern}
  ${FlexCentralize}
  gap: var(--espacamentoElementos);
  height: 50vh;
`;

export const TodoList = styled.ul`
  overflow-y: auto;
  overflow-x: hidden;

  li {
    ${FlexMenu}
    width: 20vw;
  }

  li > div {
    display: flex;
    gap: var(--espacamentoElementos);
  }

  span {
    display: block;
    word-break: break-all;
    width: 70%;
  }
`;
