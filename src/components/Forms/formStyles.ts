import styled from 'styled-components';
import { ContainerPattern, FlexCentralize } from '../../patternStyles';

export const FormContainer = styled.form`
  ${FlexCentralize}
  ${ContainerPattern}
  justify-content: space-around;
  width: 30%;
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

  & > h1 {
    font-size: 3rem;
  }

  & > input {
    border-bottom: 1px solid gray;
    background-color: transparent;
  }

  & > input:focus,
  & > input:not(:placeholder-shown) {
    border-bottom: 1px solid var(--corBackground);
  }

  & > input:focus::placeholder {
    color: var(--corBackground);
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

export const ButtonAdd = styled.button`
  color: var(--corContainers-titulos);
  border-radius: var(--arredondaMentoElementos);
  font-weight: bold;
  font-size: 1.2rem;
  background-color: var(--corBackground);
  padding: var(--espacamentoElementos);
  transition: all ease-in-out 0.3s;

  &:hover {
    background-color: var(--corHeader-Footer-links-borders);
  }
`;

export const Avatar = styled.label`
  ${FlexCentralize}
  width: 100%;

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
    height: 25vh;
    width: 15vw;
    border-radius: 50%;
  }
`;
