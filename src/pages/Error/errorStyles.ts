import styled from 'styled-components';
import { ContainerPattern } from '../../patternStyles';

export const ErrorContainer = styled.section`
  ${ContainerPattern}
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
