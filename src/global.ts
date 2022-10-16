import styled, { createGlobalStyle } from 'styled-components';

// Other components
import { FormContainer } from './components/Forms/formStyles';
import {
  HeaderContainer,
  MenuContainer,
} from './components/Header/headerStyles';
import { ErrorContainer } from './pages/Error/errorStyles';

// export const FlexPattern = css`
//   display: flex;
//   align-items: center;
//   flex-direction: column;
// `;

export const Container = styled.div`
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

  body, #root, html, ${Container}, ${HeaderContainer} { width: 100%; }

  body, #root, html, ${Container} { height: 100%; }

  body {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    min-height: 100vh;
  }

  input, button { border: none }

  li { list-style: none }

  button { cursor: pointer }

  body, ${FormContainer} > button { background-color: var(--corBackground); }

  a { color: var(--corHeader-Footer-links-borders); }

  ${Container}, ${HeaderContainer}, ${ErrorContainer}, ${FormContainer}, ${MenuContainer} {
    display: flex;
    align-items: center;
  }

  ${Container}, ${ErrorContainer}, ${FormContainer} { flex-direction: column; align-items: center; }

  ${HeaderContainer}, ${FormContainer} > button:hover {
    background-color: var(--corHeader-Footer-links-borders);
  }

  ${ErrorContainer}, ${FormContainer}, ${HeaderContainer}, ${FormContainer} > button, ${FormContainer} > input {
    padding: var(--espacamentoElementos);
  }

  ${ErrorContainer}, ${FormContainer}, ${FormContainer} > button {
    border-radius: var(--arredondaMentoElementos);
  }

  ${ErrorContainer}, ${FormContainer} {
    justify-content: space-around;
    background-color: var(--corContainers-titulos);
  }

`;
