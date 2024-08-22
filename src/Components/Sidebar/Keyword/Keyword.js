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
    navigate('/Keywordcheker');  
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
  flex-direction: column;
  @media (min-width: 992px) {
    flex-direction: row;
  }
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 100%;
  margin-left: 0;
  @media (min-width: 992px) {
    width: 70%;
    margin-left: 20px;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  margin-top: 20px;
  flex-direction: column;
  color: #000;
  padding: 0 1rem;
  @media (min-width: 992px) {
    margin-top: 48px;
  }
`;

const ContentTitle = styled.div`
  font: 400 24px Lato, sans-serif;
  padding-left: 0;
  text-align: center;
  @media (min-width: 992px) {
    padding-left: 1rem;
    font-size: 38px;
    text-align: left;
  }
`;

const Form = styled.div`
  align-self: stretch;
  display: flex;
  margin-top: 24px;
  width: 100%;
  max-width: 100%;
  flex-direction: column;
  font-size: 15px;
  font-weight: 400;
  @media (min-width: 992px) {
    margin-top: 64px;
    width: 467px;
    padding-right: 20rem;
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
  padding: 10px;
  @media (min-width: 992px) {
    padding: 22px 4px;
  }
  &:not(:first-child) {
    margin-top: 24px;
    @media (min-width: 992px) {
      margin-top: 48px;
    }
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
  margin-top: 40px;
  width: 100%;
  align-items: center;
  color: #fff;
  font-weight: 600;
  white-space: nowrap;
  text-align: center;
  justify-content: center;
  padding: 14px 0;
  @media (min-width: 992px) {
    width: 188px;
    margin-top: 72px;
    padding: 21px 60px;
  }
`;

export default Keyword;
