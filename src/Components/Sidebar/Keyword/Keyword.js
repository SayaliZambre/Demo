import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import Navbar from '../../Public/Navbar';
import Sidebar from '../../Public/Sidebar';
import Footer from '../../Public/Footer';

const Keyword = () => {
  const [activeSection, setActiveSection] = useState('My Projects');
  const navigate = useNavigate(); 
  const handleSectionClick = (section) => {
    setActiveSection(section);
    console.log(`Section clicked: ${section}`);
  };

  const handleClick = () => {
    navigate('/KeywordResearchTool');  
  };

  console.log('Rendering Project with handleSectionClick:', handleSectionClick);

  return (
    <>
      <Navbar/>
      <Wrapper>
        <Sidebar activeSection={activeSection} onSectionClick={handleSectionClick}/>
        <MainContent>
          <ContentContainer>
            <ContentTitle>Keyword Checker</ContentTitle>
            <Form>
              <FormField>
                <input
                  type="text"
                  name="keyword"
                  id="keyword"
                  placeholder="Enter your website here...."
                />
              </FormField>
              <FormField>
                <input
                  type="text"
                  name="website"
                  id="website"
                  placeholder="Enter your website here...."
                />
              </FormField>
              <SubmitButton onClick={handleClick}>Check</SubmitButton>
            </Form>
          </ContentContainer>
        </MainContent>
      </Wrapper>
      <Footer/>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 70%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  margin-top: 48px;
  flex-direction: column;
  color: #000;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const ContentTitle = styled.div`
  font: 400 38px Lato, sans-serif;
  padding-left: 1rem;
  @media (max-width: 991px) {
    max-width: 100%;
    font-size: 40px;
  }
`;

const Form = styled.div`
  align-self: end;
  display: flex;
  margin-top: 64px;
  width: 467px;
  padding-right: 20rem;
  max-width: 50%;
  flex-direction: column;
  font-size: 15px;
  font-weight: 400;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const FormField = styled.div`
  font-family: Lato, sans-serif;
  border-radius: 12px;
  border-color: grey;  
  border-style: solid;
  border-width: 1px;
  background-color: #fff;
  align-items: start;
  justify-content: center;
  padding: 22px 4px;
  @media (max-width: 991px) {
    max-width: 100%;
    padding: 0 20px;
  }
  &:not(:first-child) {
    margin-top: 48px;
  }
  input {
    font-family: Lato, sans-serif;
    flex-grow: 1;
    flex-basis: auto;
    margin: auto 0;
    border: none;
    outline: none;
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
  @media (max-width: 991px) {
    margin-top: 40px;
    white-space: initial;
    padding: 0 20px;
  }
`;

export default Keyword;
