// src/Components/Login/Loginsignup.js

import React from "react";
import styled from "styled-components";
import image4 from '../../Images/Group 7.png';
import image5 from '../../Images/Vector.png';

import { useNavigate } from 'react-router-dom';

function Loginsignup() {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate('/Login');
  };

  const goToSignup = () => {
    navigate('/signup');
  };


  return (
    <Div>
      <Div2>
          <img src={image4} />
        <Div6>
          Welcome to{" "}
          <span style={{ fontWeight: 700, color: "rgba(0,123,254,1)" }}>
            SeoImpact
          </span>
        </Div6>
        <Div7>Lets! Gooooo by clicking signup</Div7>
        <Div8>Already a user? Click Login</Div8>
        <Div9 onClick={goToLogin}>Login</Div9>
        <Div10  onClick={goToSignup}>Signup</Div10>
      </Div2>
      <img src={image5}/>

    </Div>
  );
};

const Div = styled.div`
  background-color: #fff;
  display: flex;
  max-width: 480px;
  width: 100%;
  padding-top: 17px;
  flex-direction: column;
  margin: 0 auto;
`;

const Div2 = styled.div`
  display: flex;
  width: 100%;
  padding-left: 30px;
  flex-direction: column;
  align-items: center;
`;

const Div3 = styled.div`
  align-self: stretch;
  display: flex;
  width: 100%;
  gap: 20px;
  justify-content: space-between;
`;

const Div4 = styled.div`
  color: var(--Text-Color, #1e1e1e);
  text-align: center;
  letter-spacing: -0.3px;
  font: 500 15px Plus Jakarta Sans, sans-serif;
`;

const Div5 = styled.div`
  align-self: start;
  display: flex;
  align-items: start;
  gap: 5px;
`;

const Img = styled.img`
  aspect-ratio: 1.69;
  object-fit: auto;
  object-position: center;
  width: 17px;
  fill: var(--Text-Color, #1e1e1e);
`;

const Img2 = styled.img`
  aspect-ratio: 1.37;
  object-fit: auto;
  object-position: center;
  width: 15px;
  fill: var(--Text-Color, #1e1e1e);
`;

const Img3 = styled.img`
  aspect-ratio: 2.08;
  object-fit: auto;
  object-position: center;
  width: 25px;
  align-self: stretch;
`;

const Img4 = styled.img`
  aspect-ratio: 1.09;
  object-fit: auto;
  object-position: center;
  width: 100%;
  align-self: stretch;
  margin-top: 57px;
`;

const Div6 = styled.div`
  color: #007bfe;
  text-align: center;
  margin: 7px 0 0 16px;
  font: 600 32px Lato, sans-serif;
`;

const Div7 = styled.div`
  color: #000;
  text-align: center;
  margin: 43px 0 0 16px;
  font: 500 16px Lato, sans-serif;
`;

const Div8 = styled.div`
  color: #000;
  text-align: center;
  margin: 17px 0 0 15px;
  font: 500 12px Lato, sans-serif;
`;

const Div9 = styled.div`
  border-radius: 12px;
  background-color: #007bfe;
  margin-top: 42px;
  width: 232px;
  max-width: 100%;
  align-items: center;
  color: #fff;
  white-space: nowrap;
  text-align: center;
  justify-content: center;
  padding: 18px 60px;
  font: 600 16px Lato, sans-serif;
`;

const Div10 = styled.div`
  border-radius: 12px;
  border-color: rgba(0, 0, 0, 0.2);
  border-style: solid;
  border-width: 1px;
  background-color: #fff;
  margin-top: 24px;
  width: 232px;
  max-width: 100%;
  align-items: center;
  color: #000;
  white-space: nowrap;
  text-align: center;
  justify-content: center;
  padding: 18px 60px;
  font: 600 16px Lato, sans-serif;
`;

const Img5 = styled.img`
  aspect-ratio: 5.26;
  object-fit: auto;
  object-position: center;
  width: 100%;
  fill: #007bfe;
  margin-top: 23px;
`;

export default Loginsignup;
