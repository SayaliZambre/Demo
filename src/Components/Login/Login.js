import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import image1 from '../../Images/Group 3.png';
import image2 from '../../Images/mdi_email-fast.png';
import image3 from '../../Images/solar_lock-password-line-duotone.png';
import image5 from '../../Images/Vector.png';

function Login() {
  const [user, setUserDetails] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

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
    navigate('/home'); // Make sure '/home' route is defined in your router
  };

  return (
    <Container>
      <MainContent>
        <Feature>
          <FeatureIcon>
            <Badge />
            <img src={image1} alt="Feature Icon" />
          </FeatureIcon>
          <FeatureText>
            <span style={{ fontWeight: 700, color: "rgba(0,123,254,1)" }}>
              SEO
            </span>{" "}
            Impact
          </FeatureText>
        </Feature>
        <Decoration />
      </MainContent>
      <LoginForm>
        <Title>Login</Title>
        <InputField>
          <img src={image2} alt="Email Icon" />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email address"
            onChange={changeHandler}
            value={user.email}
          />
        </InputField>
        <InputField>
          <img src={image3} alt="Password Icon" />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            onChange={changeHandler}
            value={user.password}
          />
        </InputField>
        <ForgotPassword onClick={navigateToSignup}>Forget Password?</ForgotPassword>
        <SubmitButton onClick={navigateToHome}>Login</SubmitButton>
        <SignupPrompt>
          <span style={{ fontWeight: 500, color: "rgba(0,0,0,1)" }}>
            Don’t have an account?
          </span>{" "}
          <span
            style={{ fontWeight: 500, color: "rgba(55,159,255,1)", cursor: 'pointer' }}
            onClick={navigateToSignup}
          >
            Signup
          </span>
        </SignupPrompt>
      </LoginForm>
      <FooterImage src={image5} alt="Footer Decoration" />
    </Container>
  );
}

const Container = styled.div`
  background-color: #fff;
  display: flex;
  max-width: 480px;
  width: 100%;
  padding-top: 17px;
  flex-direction: column;
  margin: 0 auto;
`;

const MainContent = styled.div`
  display: flex;
  margin-top: 37px;
  width: 100%;
  gap: 20px;
`;

const Feature = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-basis: 0;
  width: fit-content;
  padding: 0 20px;
`;

const FeatureIcon = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  img {
    width: 42px; /* Adjust width as needed */
  }
`;

const Badge = styled.div`
  border-radius: 0px 12px 12px 0px;
  background-color: rgba(55, 159, 255, 0.19);
  align-self: start;
  width: 105px;
  height: 49px;
`;

const FeatureText = styled.div`
  color: #000;
  align-self: end;
  margin-top: 21px;
  font: 500 40px Proxima Nova, sans-serif;
`;

const Decoration = styled.div`
  border-radius: 0px 12px 12px 0px;
  background-color: rgba(55, 159, 255, 0.19);
  align-self: end;
  margin-top: 174px;
  width: 39px;
  height: 49px;
`;

const LoginForm = styled.div`
  display: flex;
  margin-top: 63px;
  width: 100%;
  flex-direction: column;
  font-size: 16px;
  color: #000;
  font-weight: 600;
  padding: 0 39px;
`;

const Title = styled.div`
  font: 32px Lato, sans-serif;
`;

const InputField = styled.div`
  border-radius: 12px;
  border-color: rgba(0, 0, 0, 0.2);
  border-style: solid;
  border-width: 1px;
  background-color: #fff;
  display: flex;
  margin-top: 25px;
  align-items: center; /* Centering items vertically */
  gap: 6px;
  font-size: 16px;
  color: #000;
  font-weight: 500;
  padding: 16px 18px;

  input {
    font-family: Lato, sans-serif;
    flex-grow: 1;
    flex-basis: auto;
    border: none;
    outline: none;
    padding-left: 10px; /* Adding padding to the left for better spacing */
  }

  img {
    width: 24px; /* Adjust the size of the icon */
    height: 24px; /* Adjust the size of the icon */
  }
`;

const ForgotPassword = styled.div`
  align-self: end;
  margin-top: 17px;
  font: 500 12px Lato, sans-serif;
  cursor: pointer;
`;

const SubmitButton = styled.button`
  font-family: Lato, sans-serif;
  border-radius: 12px;
  background-color: #007bfe;
  align-self: center;
  margin-top: 24px;
  width: 232px;
  max-width: 100%;
  align-items: center;
  color: #fff;
  white-space: nowrap;
  text-align: center;
  justify-content: center;
  padding: 18px 60px;
  cursor: pointer;
  border: none;
`;

const SignupPrompt = styled.div`
  color: #379fff;
  align-self: center;
  margin-top: 17px;
  font: 12px Lato, sans-serif;
`;

const FooterImage = styled.img`
  object-fit: cover;
  width: 100%;
  margin-top: 90px;
`;

export default Login;
