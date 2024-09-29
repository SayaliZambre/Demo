import React, { useState } from "react";
import { useNavigate, NavLink as RouterNavLink } from 'react-router-dom';
import styled from 'styled-components';
import Sidebar from "./Sidebar"; // Import Sidebar
import image1 from '../../Images/Navbar.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false); // State for sidebar visibility
  const navigate = useNavigate();

  // Toggle mobile menu open/close
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  // Toggle sidebar open/close
  const handleLogoClick = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <Nav>
        <NavLeft>
          <Logo 
            src={image1} 
            onClick={handleLogoClick} // Added functionality to open sidebar on logo click
          />
          <Divider />
          <HamburgerIcon onClick={toggleMobileMenu}>
            <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
          </HamburgerIcon>
        </NavLeft>
        <NavLinks isMobileMenuOpen={isMobileMenuOpen}>
          <StyledNavLink to="/" onClick={toggleMobileMenu}>Home</StyledNavLink>
          <StyledNavLink to="/pricing" onClick={toggleMobileMenu}>Pricing</StyledNavLink>
          <StyledNavLink to="/careers" onClick={toggleMobileMenu}>Careers</StyledNavLink>
          <StyledNavLink to="/resources" onClick={toggleMobileMenu}>Resources</StyledNavLink>
          <StyledNavLink to="/contact" onClick={toggleMobileMenu}>Contact Us</StyledNavLink>
          <StyledNavLink to="/about" onClick={toggleMobileMenu}>About Us</StyledNavLink>
          <StyledNavLink to="/login" onClick={toggleMobileMenu}>
            <Login>Login</Login>
          </StyledNavLink>
          <StyledNavLink to="/signup" onClick={toggleMobileMenu}>
            <Signup>Signup</Signup>
          </StyledNavLink>
        </NavLinks>
      </Nav>

      {/* Sidebar component as a floating window */}
      <FloatingSidebar isSidebarOpen={isSidebarOpen}>
        <CloseButton onClick={handleLogoClick}>×</CloseButton> {/* Button to close sidebar */}
        <Sidebar /> {/* Render Sidebar content */}
      </FloatingSidebar>
    </>
  );
}

// Styled components for layout and styling
const Nav = styled.div`
  background-color: rgba(55, 159, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 62px;

  @media (max-width: 768px) {
    padding: 10px 20px; /* Adjust padding for smaller screens */
    flex-wrap: wrap;
  }
`;

const NavLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 20px;
  color: #000;
  font-weight: 300;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-between;
  }
`;

const Logo = styled.img`
  width: 100px;
  height: auto;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 80px;
  }
`;

const Divider = styled.div`
  border-width: 0.5px;
  background-color: grey;
  align-self: stretch;
  width: 1px;
  height: 38px;
  margin-left: 20px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const HamburgerIcon = styled.div`
  display: none;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 25px;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    display: ${({ isMobileMenuOpen }) => (isMobileMenuOpen ? 'flex' : 'none')};
    background-color: rgba(255, 255, 255, 0.9);
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    z-index: 10;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
  }
`;

const StyledNavLink = styled(RouterNavLink)`
  font-family: 'Lato', sans-serif;
  text-decoration: none;
  font-size: 18px;
  color: grey;

  &:hover {
    color: blue;
  }

  &.active {
    font-weight: bold;
    color: blue;
  }

  @media (max-width: 768px) {
    padding: 10px 0;
    width: 100%; 
    text-align: center;
  }
`;

// Floating sidebar styles
const FloatingSidebar = styled.div`
  position: fixed;
  top: 0;
  left: ${({ isSidebarOpen }) => (isSidebarOpen ? '0' : '-300px')}; 
  width: 300px;
  height: 100%;
  background-color: #fff;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.3);
  transition: left 0.3s ease;
  z-index: 1000;

  @media (max-width: 768px) {
    width: 250px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  background: none;
  border: none;
  cursor: pointer;
`;

const Login = styled.div`
  border-radius: 12px;
  background-color: #007bfe;
  color: #f5f5f7;
  padding: 12px 24px;
  font-size: 16px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 10px 20px;
  }
`;

const Signup = styled.div`
  border-radius: 12px;
  border: 1px solid rgba(0, 0, 0, 1);
  background-color: #f5f5f7;
  color: #000;
  padding: 12px 24px;
  font-size: 16px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 10px 20px;
  }
`;

export default Navbar;
