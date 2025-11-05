import styled from 'styled-components';
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import ScrollIndicator from './ScrollIndicator';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  overflow: hidden;
  position: relative; 
`;

const MainContent = styled.main`
  flex: 1;
  //padding: ${({ theme }) => theme.spacing.lg};
  width: 100%;
  overflow: visible;
  position: relative;
  
`;

const Layout = () => {
  return (
    <Container>
      <Navbar />
      <MainContent>
        <Outlet />
      </MainContent>
      <Footer />
    
    </Container>
  );
};

export default Layout;
