// import { Sidebar } from "lucide-react";
import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from './Footer';
import styled from "styled-components";

const Keyword = () => {
  return (
    <>
    <Navbar/>
    <Wrapper>

    <Sidebar/>
    <Container>
      <Title>Keyword Checker</Title>
      <FormContainer>
        <FormInput>Enter Keyword</FormInput>
        <FormInput>Enter your website....</FormInput>
        <SubmitButton>Check</SubmitButton>
      </FormContainer>
    </Container>

    </Wrapper>
    <Footer/>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
`;


const Container = styled.div`
  display: flex;
  max-width: 831px;
  flex-direction: column;
  color: #000;
  padding: 0 20px;
`;

const Title = styled.div`
  width: 100%;
  font: 600 48px Lato, sans-serif;
  @media (max-width: 991px) {
    font-size: 40px;
  }
`;

const FormContainer = styled.div`
  align-self: end;
  display: flex;
  margin-top: 74px;
  width: 467px;
  max-width: 100%;
  flex-direction: column;
  font-size: 18px;
  font-weight: 500;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const FormInput = styled.div`
  font-family: Lato, sans-serif;
  border-radius: 12px;
  border: 1px solid rgba(0, 0, 0, 1);
  background-color: #fff;
  align-items: start;
  justify-content: center;
  padding: 27px 48px;
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : "0px")};
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const SubmitButton = styled.div`
  font-family: Lato, sans-serif;
  border-radius: 12px;
  background-color: #007bfe;
  align-self: center;
  margin-top: 72px;
  width: 188px;
  max-width: 100%;
  align-items: center;
  color: #fff;
  font-weight: 600;
  white-space: nowrap;
  text-align: center;
  justify-content: center;
  padding: 21px 60px;
  cursor: pointer;
  @media (max-width: 991px) {
    margin-top: 40px;
    white-space: initial;
    padding: 0 20px;
  }
`;

export default Keyword;
