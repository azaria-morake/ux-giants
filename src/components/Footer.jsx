import styled from 'styled-components';
import AxeMark from './AxeMark';

const FooterContainer = styled.footer`
  padding: ${({ theme }) => theme.spacing.lg};
  text-align: center;
  position: relative;
  border-top: 1px solid ${({ theme }) => theme.colors.gray};
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.gray};
`;

const Copyright = styled.p`
  margin: 0;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <AxeMark size={100} position="center" />
      <Copyright>© {new Date().getFullYear()} UX Giants. Forged in code.</Copyright>
    </FooterContainer>
  );
};

export default Footer;