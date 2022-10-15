import styled from 'styled-components';
import { flexPattern } from '../../global';

export const ErrorContainer = styled.div`
  ${flexPattern}
  justify-content: space-around;
  gap: var(--espacamentoElementos);
  border-radius: var(--arredondaMentoElementos);
  background-color: var(--corContainers-titulos);
  padding: var(--espacamentoElementos);
  min-width: 50vw;
  height: 50vh;

  h1 {
    font-size: 7rem;
  }

  p {
    ${flexPattern}
  }
`;
