import styled from 'styled-components';
import { ContainerPattern, FlexCentralize } from '../../patternStyles';

export const FormContainer = styled.form`
  ${FlexCentralize}
  ${ContainerPattern}
  justify-content: space-around;
  width: 25vw;
  height: 60vh;

  & > h1 {
    font-size: 3rem;
  }

  & > input {
    border-bottom: 1px solid gray;
    background-color: transparent;
  }

  & > button {
    background-color: var(--corBackground);
  }

  & > input:focus,
  & > input:not(:placeholder-shown) {
    border-bottom: 1px solid var(--corBackground);
  }

  & > input:focus::placeholder {
    color: var(--corBackground);
  }

  & > button:hover {
    background-color: var(--corHeader-Footer-links-borders);
  }

  & > input,
  & > button,
  & > input::placeholder {
    transition: all ease-in-out 0.3s;
  }

  & > input,
  & > button {
    width: 80%;
    padding: var(--espacamentoElementos);
  }

  @media (max-width: 600px) {
    width: 80vw;
  }
`;
