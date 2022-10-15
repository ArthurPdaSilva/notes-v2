import styled, { createGlobalStyle, css } from 'styled-components';

export const flexPattern = css`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Container = styled.div`
  ${flexPattern}
  width: 100%;
  height: 100%;
  justify-content: center;
`;

export default createGlobalStyle`

  :root {
    --corContainers-titulos: #f4faff;
    --corBackground: #00a5cf;
    --corBotaoCriar: #0FFF95;
    --corBotaoEditar: #FFB100;
    --corBotaoRemover: #ED6A5A;
    --corHeader-Footer-links-borders: #004E64;
    --espacamentoElementos: 10px;
    --arredondaMentoElementos: 5px;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body, #root, html { width: 100%; height: 100%; }

  body {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    min-height: 100vh;
    background-color: var(--corBackground);
  }

  input, button { border: none }

  li { list-style: none }

  button { cursor: pointer }

  a {
    color: var(--corHeader-Footer-links-borders);
  }

`;
