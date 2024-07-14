import React from 'react';
import { useNavigate, NavLink as RouterNavLink } from 'react-router-dom';
import styled from 'styled-components';
import image1 from '../../Images/Navbar.png';

function Navbar() {
  const navigate = useNavigate();

  const navigateToContact = () => {
    navigate('/Contact');
  };

  return (
    <Nav>
      <NavLeft>
        <Logo src={image1} alt="Logo" />
        <Divider />
        <NavLinks>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/pricing">Pricing</StyledNavLink>
          <StyledNavLink to="/careers">Careers</StyledNavLink>
          <StyledNavLink to="/resources">Resources</StyledNavLink>
          <StyledNavLink to="/contact">Contact Us</StyledNavLink>
          <StyledNavLink to="/about">About Us</StyledNavLink>
        </NavLinks>
      </NavLeft>
      <NavRight>
        <StyledNavLink to="/Login">
          <Login>Login</Login>
        </StyledNavLink>
        <StyledNavLink to="/signup">
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
  /* padding-left: 5rem; */
  align-items: center;
  gap: 20px;
  font-size: 20px;
  color: #000;
  font-weight: 300;
  @media (max-width: 991px) {
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
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
  /* border-color: rgba(0, 0, 0, 1); */
  /* border-style: solid; */
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

const NavLinks = styled.div`
  display: flex;
  gap: 20px;
  padding-left: 22rem;
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
  color: grey;
  padding-left: ${(props) => (props.to === '/' ? '20px' : '0')};

  &:hover {
    color: blue;
  }

  &.active {
    font-weight: bold;
    color: blue;
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
