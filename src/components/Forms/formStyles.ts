import styled from 'styled-components';
import { ContainerPattern, FlexCentralize } from '../../patternStyles';

export const FormContainer = styled.form`
  ${FlexCentralize}
  ${ContainerPattern}
  justify-content: space-around;
  width: 25vw;
  height: 70vh;

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

export const Avatar = styled.label`
  ${FlexCentralize}

  input {
    display: none;
  }

  span {
    z-index: 99;
    position: absolute;
    opacity: 0.7;
    transition: all 0.5s ease-in-out;

    &:hover {
      opacity: 1;
      transform: scale(1.4);
    }

    svg:hover {
      color: var(--corHeader-Footer-links-borders);
    }
  }

  img {
    width: 20vw;
    height: 30vh;
    border-radius: calc(var(--arredondaMentoElementos) + 15px);
  }
`;
