// import { Sidebar } from "lucide-react";
import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from './Footer';
import styled from "styled-components";

const Backlink = () => {
  return (
    <>
    <Navbar/>
    <Wrapper>
        <Sidebar/>

        <RightColumn>
        <BacklinkSection>
          <BacklinkTitle>Backlink Checker</BacklinkTitle>
          <BacklinkForm>
            <BacklinkInput placeholder="Enter your website...." />
            <CheckButton>Check</CheckButton>
          </BacklinkForm>
        </BacklinkSection>
      </RightColumn>


    </Wrapper>
    <Footer/>
    </>
  );
};

const Wrapper = styled.div`
  gap: 20px;
  display: flex;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 70%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const BacklinkSection = styled.div`
  margin-top: 38px;
  padding: 0 20px;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const BacklinkTitle = styled.div`
  color: #000;
  font: 550 32px Lato, sans-serif;
  @media (max-width: 991px) {
    font-size: 40px;
  }
`;

const BacklinkForm = styled.div`
  display: flex;
  margin-top: 48px;
  /* padding-left: 5rem; */
  flex-grow: 1;
  flex-direction: column;
  font-size: 18px;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const BacklinkInput = styled.input`
  font-family: Lato, sans-serif;
  border-radius: 12px;
  border-color: grey;
  border: 1px solid ;
  background-color: #fff;
  align-items: start;
  color: #000;
  font-weight: 500;
  justify-content: center;
  padding: 22px 4px;
  padding-left: 3rem;
  width: 25rem;
  @media (max-width: 991px) {
    max-width: 100%;
    padding: 0 20px;
  }
  &:not(:first-child) {
    margin-top: 48px;

  }
`;

const CheckButton = styled.div`
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
  @media (max-width: 991px) {
    margin-top: 40px;
    white-space: initial;
    padding: 0 20px;
  }
`;


export default Backlink;
