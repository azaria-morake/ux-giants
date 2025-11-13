import { useState } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import GiantStamp from './GiantStamp';
import logo from '../assets/uxgiants-logo-D94141.png';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`}; // Reduced vertical padding
  position: relative;
  z-index: 100;
  background-color: ${({ theme }) => theme.colors.primary};

 // border-bottom: 1px solid ${({ theme }) => theme.colors.gray};

   @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {

    padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
   }

`;


const Logo = styled(Link)`
  // font-family: ${({ theme }) => theme.fonts.heading};
  // font-size: 1.5rem;
  // letter-spacing: 0.1em;
  // text-transform: uppercase;

  display: block;
  width: 160px;
  height: 100px;
  background: url(${logo}) no-repeat center center;
  background-size: contain;


  position: relative;
  z-index: 10;

  @media (max-width: 480px) {

    margin-left: -60px;
  }

`;

const NavLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 70%;
    background: ${({ theme }) => theme.colors.primary};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.3s ease-in-out;
    z-index: 5;
    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.5);
  }
`;

const NavLink = styled(Link)`
  position: relative;
  text-transform: uppercase;
  font-size: 0.9rem;
  letter-spacing: 0.1em;
  padding: ${({ theme }) => `${theme.spacing.sm} 0`};

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: ${({ active }) => active ? '100%' : '0'};
    height: 1px;
    background: ${({ theme }) => theme.colors.accent};
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const MenuButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  z-index: 10;
  display: none;

  @media (max-width: 768px) {
    display: block;
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const isActive = (path) => location.pathname === path;

  return (
    <Nav>
      <Logo to="/" onClick={closeMenu}>
        {/* <GiantStamp size={40} /> */}
      </Logo>
      
      <MenuButton onClick={toggleMenu} aria-label="Toggle menu">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          {isOpen ? (
            <path d="M18 6L6 18M6 6l12 12" strokeWidth="2" strokeLinecap="round" />
          ) : (
            <path d="M3 12h18M3 6h18M3 18h18" strokeWidth="2" strokeLinecap="round" />
          )}
        </svg>
      </MenuButton>
      
      <NavLinks open={isOpen}>
        <NavLink to="/" active={isActive('/') ? 1 : 0} onClick={closeMenu}>
          Home
        </NavLink>
        <NavLink to="/about" active={isActive('/about') ? 1 : 0} onClick={closeMenu}>
          About
        </NavLink>
        <NavLink to="/projects" active={isActive('/projects') ? 1 : 0} onClick={closeMenu}>
          Projects
        </NavLink>
        <NavLink to="/contact" active={isActive('/contact') ? 1 : 0} onClick={closeMenu}>
          Contact
        </NavLink>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;