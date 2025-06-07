import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
//  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Inter:wght@300;400&display=swap');
  
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    font-family: ${({ theme }) => theme.fonts.body};
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
  }
  
  h1, h2, h3, h4 {
    font-family: ${({ theme }) => theme.fonts.heading};
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-weight: 700;
  }
  
  a {
    color: inherit;
    text-decoration: none;
    transition: color 0.2s ease;
    
    &:hover {
      color: ${({ theme }) => theme.colors.accent};
    }
  }
  
  button {
    border: none;
    background: none;
    cursor: pointer;
    font-family: inherit;
  }

    /* Responsive base font size */
  html {
    font-size: 100%;
    
    @media (max-width: 1024px) {
      font-size: 95%;
    }
    
    @media (max-width: 768px) {
      font-size: 90%;
    }
  }
  
  /* Prevent overflow */
  body {
    overflow-x: hidden;
  }
  
  /* Smooth scrolling */
  html {
    scroll-behavior: smooth;
  }
  
  /* Focus styles for accessibility */
  *:focus {
    outline: 2px solid ${({ theme }) => theme.colors.accent};
    outline-offset: 2px;
  }
`;

