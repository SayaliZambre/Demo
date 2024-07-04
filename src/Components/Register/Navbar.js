import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { NavLink as RouterNavLink } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  const navigateToContact = () => {
    navigate('/Contact');
  };

  return (
    <Nav>
      <NavLeft>
        <Logo>
          <span style={{ fontWeight: 700, color: 'rgba(0,123,254,1)' }}>SEO</span> Impact
        </Logo>
        <Divider />
        <NavLinks>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/pricing" >Pricing</StyledNavLink>
          <StyledNavLink to="/careers">Careers</StyledNavLink>
          <StyledNavLink to="/resources">Resources</StyledNavLink>
          <StyledNavLink to="/contact" >Contact Us</StyledNavLink>
          <StyledNavLink to="/about">About Us</StyledNavLink>
        </NavLinks>
      </NavLeft>
      <NavRight>
        <Login to="/Login">Login</Login>
        <Signup>Signup</Signup>
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
  font-size: 24px;
  color: #000;
  font-weight: 500;
  @media (max-width: 991px) {
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const Logo = styled.div`
  font-family: 'Proxima Nova', sans-serif;
  margin-top: 13px;
  flex-grow: 1;
  @media (max-width: 991px) {
    margin-top: 0;
  }
`;

const Divider = styled.div`
  border-color: rgba(0, 0, 0, 1);
  border-style: solid;
  border-width: 1px;
  background-color: #000;
  align-self: stretch;
  width: 1px;
  height: 38px;
  @media (max-width: 991px) {
    display: none;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;
  @media (max-width: 991px) {
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    margin-top: 10px;
  }
`;

const StyledNavLink = styled(RouterNavLink)`
  font-family: 'Lato', sans-serif;
  text-decoration: none;
  color: inherit;

  &.active {
    font-weight: bold;
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
