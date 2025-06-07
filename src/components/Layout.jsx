import styled from 'styled-components';
import Navbar from './Navbar';
import Footer from './Footer';

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

const Layout = ({ children }) => {
  return (
    <Container>
      <Navbar />
      <MainContent>{children}</MainContent>
      <Footer />
    </Container>
  );
};

export default Layout;