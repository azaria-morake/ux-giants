import styled from 'styled-components';
import Navbar from './Navbar';
import Footer from './Footer';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex: 1;
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