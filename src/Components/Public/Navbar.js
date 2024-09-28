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

  @media (max-width: 991px) {
    flex-wrap: wrap;
    padding: 20px;
  }
`;

const NavLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 20px;
  color: #000;
  font-weight: 300;

  @media (max-width: 991px) {
    width: 100%;
    justify-content: space-between;
  }
`;

const Logo = styled.img`
  width: 100px;
  height: auto;
  cursor: pointer;

  @media (max-width: 991px) {
    width: 80px;
  }
`;

const Divider = styled.div`
  border-width: 0.5px;
  margin-left: 5rem;
  background-color: grey;
  align-self: stretch;
  width: 1px;
  height: 38px;

  @media (max-width: 991px) {
    display: none;
  }
`;

const HamburgerIcon = styled.div`
  display: none;
  font-size: 28px; /* Increased font size */
  font-weight: bold; /* Set font weight to bold */
  cursor: pointer;
  text-align: center; /* Center align the icon */

  @media (max-width: 991px) {
    display: block;
    width: 100%; /* Ensure it takes full width to center properly */
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 25px;
  padding-top: 1rem;
  padding-right: 1rem;
  padding-left: 22rem;
  justify-content: space-between;

  @media (max-width: 991px) {
    flex-direction: column;
    width: 100%;
    padding-left: 0;
    display: ${({ isMobileMenuOpen }) => (isMobileMenuOpen ? 'flex' : 'none')};
    align-items: center;
    background-color: rgba(255, 255, 255, 0.9);
    position: absolute;
    top: 70px;
    left: 0;
    right: 0;
    z-index: 10;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
  }
`;

const StyledNavLink = styled(RouterNavLink)`
  font-family: 'Lato', sans-serif;
  text-decoration: none;
  font-size: 20px;
  color: grey;
  padding-left: ${(props) => (props.to === '/' ? '10px' : '0')}; // Adjusted padding for Home link

  &:hover {
    color: blue;
  }

  &.active {
    font-weight: bold;
    color: blue;
  }

  @media (max-width: 991px) {
    padding: 10px 0;
    width: 100%; // Make it full width in mobile
    text-align: center; // Center align text
  }
`;

// Floating sidebar styles
const FloatingSidebar = styled.div`
  position: fixed;
  top: 0;
  left: ${({ isSidebarOpen }) => (isSidebarOpen ? '0' : '-300px')}; // Move in/out of view
  width: 300px;
  height: 100%;
  background-color: #fff;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.3);
  transition: left 0.3s ease;
  z-index: 1000;
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
  padding-left: 2rem;
  background-color: #007bfe;
  color: #f5f5f7;
  justify-content: center;
  padding: 13px 21px;
  font: 16px 'Lato', sans-serif;

  @media (max-width: 991px) {
    padding: 10px 20px;
  }
`;

const Signup = styled.div`
  border-radius: 12px;
  border: 1px solid rgba(0, 0, 0, 1);
  background-color: #f5f5f7;
  color: #000;
  white-space: nowrap;
  justify-content: center;
  padding: 14px 19px;
  font: 14px 'Lato', sans-serif;

  @media (max-width: 991px) {
    padding: 10px 20px;
    white-space: initial;
  }
`;

export default Navbar;
