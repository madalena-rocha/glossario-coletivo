import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }

  html {
    scroll-behavior: smooth;
  }
  
  body {
    background-color: ${({ theme }) => theme.COLORS.GRAY};
    color: ${({ theme }) => theme.COLORS.PURPLE_DARK};
		
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea, select {
	  font-family: 'Poppins', sans-serif;
	  font-size: 1.6rem;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }
  
  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }
  
  button:hover, a:hover {
    filter: brightness(0.9);
  }
  
  ::-webkit-scrollbar {
    width: 0.8rem;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.PURPLE_DARK};
    border-radius: 0.8rem;
  }
`;
