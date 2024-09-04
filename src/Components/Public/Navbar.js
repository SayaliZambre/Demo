import React, { useState } from "react";
// import { useNavigate } from 'react-router-dom';

import { useNavigate, NavLink as RouterNavLink } from 'react-router-dom';
import styled from 'styled-components';
import image1 from '../../Images/Navbar.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  // const navigate = useNavigate();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const navigateToSidebar = () => {
    navigate('/Sidebar');
  };

  const [activeSection, setActiveSection] = useState('My Projects');
  const navigate = useNavigate(); 

  const handleSectionClick = (section) => {
    setActiveSection(section);
    console.log(`Section clicked: ${section}`);
  };



  return (
    <Nav>
      <NavLeft>
      <Logo src={image1} activeSection={activeSection} onSectionClick={handleSectionClick}/>

        {/* <Logo  src={image1} onClick={navigateToSidebar} alt="Logo" /> */}
        <Divider />
        <HamburgerIcon onClick={toggleMobileMenu}>
          <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
        </HamburgerIcon>
        <NavLinks isMobileMenuOpen={isMobileMenuOpen}>
          <StyledNavLink to="/" onClick={toggleMobileMenu}>Home</StyledNavLink>
          <StyledNavLink to="/pricing" onClick={toggleMobileMenu}>Pricing</StyledNavLink>
          <StyledNavLink to="/careers" onClick={toggleMobileMenu}>Careers</StyledNavLink>
          <StyledNavLink to="/resources" onClick={toggleMobileMenu}>Resources</StyledNavLink>
          <StyledNavLink to="/contact" onClick={toggleMobileMenu}>Contact Us</StyledNavLink>
          <StyledNavLink to="/about" onClick={toggleMobileMenu}>About Us</StyledNavLink>
        </NavLinks>
      </NavLeft>
      <NavRight>
        <StyledNavLink to="/Login" onClick={toggleMobileMenu}>
          <Login>Login</Login>
        </StyledNavLink>
        <StyledNavLink to="/signup" onClick={toggleMobileMenu}>
          <Signup>Signup</Signup>
        </StyledNavLink>
      </NavRight>
    </Nav>
  );
}

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
  font-size: 24px;
  cursor: pointer;
  @media (max-width: 991px) {
    display: block;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;
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
  color: grey;
  padding-left: ${(props) => (props.to === '/' ? '20px' : '0')};

  &:hover {
    color: blue;
  }

  &.active {
    font-weight: bold;
    color: blue;
  }

  @media (max-width: 991px) {
    padding: 10px 0;
  }
`;

const NavRight = styled.div`
  display: flex;
  gap: 20px;
  font-weight: 600;
  justify-content: space-between;
  @media (max-width: 991px) {
    width: 100%;
    justify-content: center;
    margin-top: 10px;
  }
`;

const Login = styled.div`
  border-radius: 12px;
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
  border-color: rgba(0, 0, 0, 1);
  border-style: solid;
  border-width: 1px;
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
