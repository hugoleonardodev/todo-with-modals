import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    font-family: 'Permanent Marker', sans-serif;
  }

  h1 {
    display: flex;
    justify-content: center;
  }

  main.Home {
    width: 100%;
    max-width: 1024px;
        display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
