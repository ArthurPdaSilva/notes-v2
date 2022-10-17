import styled from 'styled-components';
import { ContainerPattern, FlexPattern } from '../../patternStyles';

export const ErrorContainer = styled.section`
  ${ContainerPattern}
  ${FlexPattern}
  gap: var(--espacamentoElementos);
  min-width: 40vw;
  height: 50vh;

  h1 {
    font-size: 8rem;
  }

  p {
    text-align: center;
    width: 80%;
  }
`;
