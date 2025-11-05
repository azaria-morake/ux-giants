import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
//  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Inter:wght@300;400&display=swap');
  
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
    overflow-x: hidden;
    height: 100%;
    -webkit-overflow-scrolling: touch;
  }
  
  body {
    font-family: ${({ theme }) => theme.fonts.body};
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
    height: 100%;
    position: relative;
    -webkit-overflow-scrolling: touch;
  }
  
  #root {
    height: 100%;
    overflow-x: hidden;
  }

    /* Fix scrolling on all devices */
    * {
    -webkit-overflow-scrolling: touch;
  }

  /* Custom Scrollbar Styles */
  ::-webkit-scrollbar {
    width: 6px; /* Thin scrollbar */
  }

  ::-webkit-scrollbar-track {
    background: transparent; /* Transparent track */
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.accent}; /* Red dot color */
    border-radius: 10px; /* Circular thumb */
    border: 1px solid ${({ theme }) => theme.colors.primary}; /* Slight border for definition */
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #ff6b6b; /* Slightly brighter red on hover */
  }

  /* For Firefox */
  * {
    scrollbar-width: thin;
    scrollbar-color: ${({ theme }) => theme.colors.accent} transparent;
  }

    /* Ensure smooth scrolling */
    html {
    scroll-behavior: smooth;
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

  /* Prevent horizontal overflow and improve mobile rendering */
  html, body {
    overflow-x: hidden;
    width: 100vw;
  }

  /* Mobile-specific viewport correction */
  @media (max-width: 480px) {
    body {
      padding: 0 !important;
      margin: 0 !important;
      position: relative;
      -webkit-overflow-scrolling: touch;
    }

    * {
      max-width: 100% !important;
    }

            /* Hide custom scrollbar on mobile for better native experience */
            ::-webkit-scrollbar {
      width: 3px;
    }
  }
`;

