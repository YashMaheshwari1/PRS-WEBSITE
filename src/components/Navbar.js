import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(58, 12, 163, 0.15);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid ${props => props.theme.colors.primary};
`;

const NavContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
`;

const NavLink = styled(Link)`
  color: ${props => props.active ? props.theme.colors.accent : props.theme.colors.text};
  text-decoration: none;
  font-size: 1rem;
  padding: 0.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${props => props.theme.colors.accent};
  }
`;

const Logo = styled(Link)`
  color: ${props => props.theme.colors.accent};
  font-size: 1.5rem;
  text-decoration: none;
  margin: 0;
`;

const Navbar = () => {
  const location = useLocation();

  return (
    <Nav>
      <NavContent>
        <Logo to="/">PRS Vision</Logo>
        <NavLinks>
          <NavLink to="/" active={location.pathname === "/"}>
            Home
          </NavLink>
          <NavLink to="/about" active={location.pathname === "/about"}>
            About
          </NavLink>
          <NavLink to="/contact" active={location.pathname === "/contact"}>
            Contact
          </NavLink>
        </NavLinks>
      </NavContent>
    </Nav>
  );
};

export default Navbar; 