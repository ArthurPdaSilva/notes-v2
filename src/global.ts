import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --corContainers-titulos: #f4faff;
    --corBackground: #002642;
    --corBotaoAdd: #00a878;
    --corBotaoAddHover: #007352;
    --corMensagens: #00A5CF;
    --corBotaoHover: #006984;
    --corHeader-Footer-links-borders: #02040F;
    --espacamentoElementos: 10px;
    --arredondaMentoElementos: 5px;
    --shadow: 2 0 7px rgba(0, 0, 0, 0.40);
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body, #root, html { height: 100%; }

  body, #root, html, header, main { width: 100%; max-width: 100%; }

  body {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    min-height: 100vh;
    background-color: var(--corBackground);
  }

  input, button { border: none; }

  li { list-style: none; }

  textarea { resize: none; }

  button, svg { cursor: pointer; }

  a { color: var(--corHeader-Footer-links-borders); }

`;
