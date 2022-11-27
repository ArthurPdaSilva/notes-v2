import styled from 'styled-components';
import { FlexCentralize, ContainerPattern } from '../../patternStyles';

export const MessagesContainer = styled.div`
  ${FlexCentralize}
  ${ContainerPattern}
  gap: var(--espacamentoElementos);
  justify-content: space-around;
  width: 55vw;
  height: 70vh;
`;
