import styled from 'styled-components';

export const Send = styled.form`
  display: flex;
  padding: var(--espacamentoElementos);
  width: 100%;

  input {
    flex: 1;
  }

  button {
    background: var(--corMensagens);
    padding: var(--espacamentoElementos);
    color: white;
    font-weight: bold;
    font-size: 1.2rem;
    border-radius: var(--arredondaMentoElementos);
    transition: all ease-in-out 0.3s;
  }

  button:hover {
    background: var(--corBotaoHover);
  }
`;
