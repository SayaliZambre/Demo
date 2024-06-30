import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import image5 from '../../Images/Group 3.png';
import image4 from '../../Images/Group 1000001801.png';

function Login() {
  const navigate = useNavigate();

  const [user, setUserDetails] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...user,
      [name]: value,
    });
  };
  const navigateToSignup = () => {
    navigate('/signup');
  };
  const navigateToHome = () => {
    navigate('/home');
  };

  return (
    <Main>
      <Container>
        <Header>
          <Logo src={image5} />
          <Title>
            <span style={{ fontWeight: 700, color: "rgba(0,123,254,1)" }}>SEO</span>{" "}
            Impact
          </Title>
        </Header>
        <MainTitle>Login</MainTitle>
        <InputField>
          {/* <img src={image3} alt="Password Icon" /> */}
          <input
            type="email"
            name="email"
            id="email"
            placeholder="email"
            onChange={changeHandler}
            value={user.email}
          />
        </InputField>        {/* <Input
          type="email"
          name="email"
          value={user.email}
          onChange={changeHandler}
        /> */}
        <InputField>
          {/* <img src={image3} alt="Password Icon" /> */}
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            onChange={changeHandler}
            value={user.password}
          />
        </InputField>
        {/* <Input
          type="password"
          name="password"
          value={user.password}
          onChange={changeHandler}
        /> */}
        <Actions>
          <ForgotPassword>Forget your password?</ForgotPassword>
          <LoginButton onClick={navigateToHome}>Login</LoginButton>
          <SignupPrompt>
            <span style={{ fontWeight: 500, color: "rgba(0,0,0,1)" }}>
              Don’t have an account?
            </span>{" "}
            <span style={{ fontWeight: 700, color: "rgba(0,123,254,1)" }}  onClick={navigateToSignup}>
              Signup
            </span>
          </SignupPrompt>
        </Actions>
      </Container>
      <Right>
        <Image src={image4} alt="Right Section Image" />
      </Right>
    </Main>
  );
}

const Main = styled.div`
  padding-left: 5%;
  display: flex;
`;

const Right = styled.div`
  flex-direction: column;
`;

const Image = styled.img`
  flex-direction: column;
`;


const Container = styled.div`
  display: flex;
  padding-left: 5%;
  max-width: 467px;
  flex-direction: column;
  font-size: 18px;
  color: #000;
  font-weight: 500;
  padding: 0 20px;
`;

const Header = styled.div`
  align-self: start;
  display: flex;
  margin-top: 10px;
  font-size: 24px;
`;

const Logo = styled.img`
  aspect-ratio: 0.89;
  object-fit: auto;
  object-position: center;
  width: 42px;
`;

const Title = styled.div`
  font-family: Proxima Nova, sans-serif;
  flex-grow: 1;
  flex-basis: auto;
  margin: auto 0;
`;

const MainTitle = styled.div`
  margin-top: 40px;
  width: 100%;
  font: 700 72px Lato, sans-serif;
`;

const InputLabel = styled.div`
  font-family: Lato, sans-serif;
  border-radius: 12px;
  border-color: rgba(0, 0, 0, 1);
  border-style: solid;
  border-width: 1px;
  background-color: #fff;
  margin-top: 48px;
  width: 100%;
  align-items: start;
  white-space: nowrap;
  justify-content: center;
  padding: 29px 48px;

  &:first-of-type {
    margin-top: 74px;
  }
`;

const Input = styled.input`
  font-family: Lato, sans-serif;
  border-radius: 12px;
  border-color: rgba(0, 0, 0, 1);
  border-style: solid;
  border-width: 1px;
  background-color: #fff;
  margin-top: 10px;
  width: 100%;
  align-items: start;
  white-space: nowrap;
  justify-content: center;
  padding: 10px 20px;
`;

const Actions = styled.div`
  align-self: center;
  display: flex;
  margin-top: 17px;
  width: 100%;
  max-width: 354px;
  flex-direction: column;
  color: #007bfe;
  font-weight: 600;
  text-align: center;
`;

const ForgotPassword = styled.div`
  font-family: Lato, sans-serif;
  align-self: end;
`;

const LoginButton = styled.div`
  font-family: Lato, sans-serif;
  border-radius: 12px;
  background-color: #007bfe;
  width: 188px;
  max-width: 100%;
  align-items: center;
  color: #fff;
  white-space: nowrap;
  justify-content: center;
  margin: 49px 0 0 27px;
  padding: 19px 60px;
`;

const SignupPrompt = styled.div`
  font-family: Lato, sans-serif;
  margin-top: 40px;
`;
const InputField = styled.div`
  border-radius: 12px;
  border-color: rgba(0, 0, 0, 0.2);
  border-style: solid;
  border-width: 1px;
  background-color: #fff;
  display: flex;
  margin-top: 25px;
  align-items: flex-start;
  gap: 6px;
  font-size: 16px;
  color: #000;
  font-weight: 500;
  padding: 16px 18px;

  input {
    font-family: Lato, sans-serif;
    flex-grow: 1;
    flex-basis: auto;
    margin: auto 0;
    border: none; /* Removing the default border for the input */
    outline: none; /* Removing the default outline for the input */
  }
`;


export default Login;
