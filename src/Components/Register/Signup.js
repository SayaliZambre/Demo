import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
// import image1 from '../../Images/ careereback.png';
import image5 from '../../Images/Group 3.png';
import image4 from '../../Images/Group 1000001806.png';

const Signup = () => {
  
    const navigate = useNavigate();
  
    const [user, setUserDetails] = useState({
      name: "",
      email: "",
      Mobile: "",
      password: "",
      Confirmpassword: "",
    });
  
    const changeHandler = (e) => {
      const { name, value } = e.target;
      setUserDetails({
        ...user,
        [name]: value,
      });
    };
  
    const navigateToLogin = () => {
      navigate('/Login');
    };
  
    const navigateToHome = () => {
      navigate('/');
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
          <MainTitle>Signup</MainTitle>
          <InputField>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              onChange={changeHandler}
              value={user.name}
            />
          </InputField>
          <InputField>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              onChange={changeHandler}
              value={user.email}
            />
          </InputField>
          <InputField>
            <input
              type="text"
              name="Mobile"
              id="Mobile"
              placeholder="Mobile"
              onChange={changeHandler}
              value={user.Mobile}
            />
          </InputField>
          <InputField>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              onChange={changeHandler}
              value={user.password}
            />
          </InputField>
          <InputField>
            <input
              type="password"
              name="Confirmpassword"
              id="Confirmpassword"
              placeholder="Confirm Password"
              onChange={changeHandler}
              value={user.Confirmpassword}
            />
          </InputField>
          <Actions>
            <SignupPrompt>
              <span style={{ fontWeight: 500, color: "rgba(0,0,0,0.5)" }}>
               I agree to all 
              </span>{" "}
              <span style={{ fontWeight: 700, color: "rgba(0,123,254,1)" }} onClick={navigateToLogin}>
                terms and conditions
              </span>
            </SignupPrompt>
            <LoginButton onClick={navigateToHome}>SignUp</LoginButton>
          </Actions>
        </Container>
        <Right>
          <Image src={image4} alt="Right Section Image" />
        </Right>
      </Main>
    );
  };
  
  const Main = styled.div`
    padding-left: 5%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    min-height: 100vh;

    @media (max-width: 768px) {
      flex-direction: column;
      padding-left: 0;
    }
  `;

  const Right = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;

    @media (max-width: 768px) {
      order: -1; /* Display image above the form on small screens */
    }
  `;

  const Image = styled.img`
    width: 100%;
    /* max-width: 500px; */

    @media (max-width: 768px) {
      max-width: 300px;
      height: auto;
    }
  `;

  const Container = styled.div`
    flex: 1;
    max-width: 467px;
    padding: 20px;
    display: flex;
    flex-direction: column;

    @media (max-width: 768px) {
      max-width: 100%;
      padding: 20px 10px;
    }
  `;

  const Header = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  `;

  const Logo = styled.img`
    width: 42px;
  `;

  const Title = styled.div`
    margin-left: 10px;
    font-size: 24px;
    font-family: Proxima Nova, sans-serif;
  `;

  const MainTitle = styled.h1`
    margin-top: 20px;
    font-size: 36px;
    font-weight: 700;

    @media (max-width: 768px) {
      font-size: 28px;
    }
  `;

  const InputField = styled.div`
    margin-top: 20px;
    border-radius: 12px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    background-color: #fff;
    padding: 16px 18px;

    input {
      width: 100%;
      border: none;
      outline: none;
      font-size: 16px;
      font-family: Lato, sans-serif;
    }

    @media (max-width: 768px) {
      padding: 12px 14px;
      font-size: 14px;
    }
  `;

  const Actions = styled.div`
    margin-top: 20px;
    text-align: center;

    @media (max-width: 768px) {
      margin-top: 15px;
    }
  `;

  const LoginButton = styled.button`
    margin-top: 20px;
    width: 100%;
    padding: 15px;
    border-radius: 12px;
    background-color: #007bfe;
    color: white;
    font-size: 16px;
    font-family: Lato, sans-serif;
    border: none;
    cursor: pointer;

    @media (max-width: 768px) {
      padding: 12px;
      font-size: 14px;
    }
  `;

  const SignupPrompt = styled.div`
    margin-top: 20px;
    font-size: 14px;

    span {
      cursor: pointer;
    }

    @media (max-width: 768px) {
      font-size: 12px;
    }
  `;
  
  export default Signup;
