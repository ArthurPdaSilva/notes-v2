import styled from 'styled-components';
import { FlexCentralize, ContainerPattern } from '../../patternStyles';

export const MessagesContainer = styled.div`
  ${FlexCentralize}
  ${ContainerPattern}
  gap: var(--espacamentoElementos);
  justify-content: space-around;
  width: 55vw;
  height: 70vh;
  animation: pop 0.4s ease-in-out;

  @keyframes pop {
    from {
      transform: scale(0);
    }

    to {
      transform: scale(1);
    }
  }

  @media (max-width: 600px) {
    width: 100vw;
    height: 80vh;
    border-radius: 0;
  }
`;

export const Title = styled.h1`
  @media (max-width: 600px) {
    display: none;
  }
`;
