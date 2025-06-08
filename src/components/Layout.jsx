import styled from 'styled-components';
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
`;

const MainContent = styled.main`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.lg};
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
