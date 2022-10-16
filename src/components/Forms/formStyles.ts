import styled from 'styled-components';

export const FormContainer = styled.form`
  width: 25vw;
  height: 60vh;

  & > h1 {
    font-size: 3rem;
  }

  & > input {
    border-bottom: 1px solid var(--corBackground);
  }

  & > input:focus,
  & > input:not(:placeholder-shown) {
    border-bottom: 1px solid var(--corHeader-Footer-links-borders);
  }

  & > button {
    color: var(--corContainers-titulos);
    font-weight: bold;
    font-size: 1.2rem;
  }

  & > input,
  & > button {
    width: 80%;
    transition: all ease-in-out 0.3s;
  }

  @media (max-width: 600px) {
    width: 80vw;
  }
`;
