import styled from 'styled-components';
import { flexPattern } from '../../global';

export const FormContainer = styled.form`
  ${flexPattern}
  justify-content: space-around;
  background-color: var(--corContainers-titulos);
  padding: var(--espacamentoElementos);
  border-radius: var(--arredondaMentoElementos);
  min-width: 25vw;
  height: 60vh;

  & > h1 {
    font-size: 3rem;
  }

  & > input {
    border-bottom: 1px solid var(--corHeader-Footer-links-borders);
  }

  & > a {
    color: var(--corHeader-Footer-links-borders);
  }

  & > button {
    background-color: var(--corHeader-Footer-links-borders);
    border-radius: var(--arredondaMentoElementos);
    color: var(--corContainers-titulos);
    font-weight: bold;
    font-size: 1.2rem;
  }

  & > input,
  & > button {
    padding: var(--espacamentoElementos);
    width: 80%;
  }
`;
