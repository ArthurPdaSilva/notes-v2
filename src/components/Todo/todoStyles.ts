import styled from 'styled-components';
import { ContainerPattern, FlexMenu } from '../../patternStyles';

export const TodoContainer = styled.div`
  ${ContainerPattern}
  ${FlexMenu}
  flex-direction: column;
  gap: var(--espacamentoElementos);
  height: 50vh;
`;
