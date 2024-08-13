import React, { useState } from "react";
// import Navbar from "./Navbar
import Navbar from '../../Public/Navbar';
import Sidebar from '../../Public/Sidebar';
import Footer from '../../Public/Footer';

import styled from "styled-components";


const KeywordResearchTool = () => {

  const [activeSection, setActiveSection] = useState('My Projects');

  const handleSectionClick = (section) => {
    setActiveSection(section);
    console.log(`Section clicked: ${section}`);
  };

  console.log('Rendering Project with handleSectionClick:', handleSectionClick);


  return (
    <>
      <Navbar />
      <Wrapper>
      <Sidebar activeSection={activeSection} onSectionClick={handleSectionClick}/>
        <MainContent>
          <Container>
            <Title>Keyword Research tool</Title>
            <Subtitle>
              <span style={{ color: 'rgba(0,123,254,1)' }}>Find</span> Keyword ideas with Research tool
            </Subtitle>
            <RelatedSection>
              <RelatedSearches>Related Searches</RelatedSearches>
              <RelatedKeywords>Related Keywords</RelatedKeywords>
            </RelatedSection>
            <AnalysisSection>
              <AnalysisTitle>Keyword Analysis</AnalysisTitle>
              <KeywordBox>Keyword</KeywordBox>
              <AnalysisType>Analysis Type</AnalysisType>
              <RelatedSearchesBox>Related searches</RelatedSearchesBox>
              <SearchEngineLabel>Search engine</SearchEngineLabel>
              <SearchEngineBox>Google.com</SearchEngineBox>
            </AnalysisSection>
          </Container>
        </MainContent>
      </Wrapper>
      <Footer />
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

const MainContent = styled.div`
  flex-grow: 1;
  padding: 20px;
`;

const Container = styled.div`
  display: flex;
  margin-top: 48px;
  flex-direction: column;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const Title = styled.div`
  color: #000;
  font: 48px Lato, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
    font-size: 40px;
  }
`;

const Subtitle = styled.div`
  color: #000;
  margin-top: 92px;
  font: 700 72px Lato, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
    font-size: 40px;
  }
`;

const RelatedSection = styled.div`
  align-self: start;
  display: flex;
  margin-top: 70px;
  gap: 20px;
  font-size: 18px;
  font-weight: 500;
  justify-content: space-between;
  @media (max-width: 991px) {
    flex-wrap: wrap;
    margin-top: 40px;
  }
`;

const RelatedSearches = styled.div`
  font-family: Lato, sans-serif;
  border-radius: 12px;
  background-color: var(--Main, #007bfe);
  color: var(--Main, #007bfe);
  justify-content: center;
  padding: 29px 48px;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const RelatedKeywords = styled.div`
  font-family: Lato, sans-serif;
  border-radius: 12px;
  border-color: rgba(0, 0, 0, 1);
  border-style: solid;
  border-width: 1px;
  background-color: #fff;
  color: #000;
  justify-content: center;
  padding: 27px 46px;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const AnalysisSection = styled.div`
  align-self: end;
  display: flex;
  margin-top: 102px;
  width: 507px;
  max-width: 100%;
  flex-direction: column;
  font-size: 24px;
  color: #000;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const AnalysisTitle = styled.div`
  font-family: Lato, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const KeywordBox = styled.div`
  border-radius: 12px;
  border-color: rgba(0, 0, 0, 1);
  border-style: solid;
  border-width: 1px;
  background-color: #fff;
  align-self: end;
  margin-top: 19px;
  width: 467px;
  max-width: 100%;
  align-items: start;
  white-space: nowrap;
  justify-content: center;
  padding: 27px 60px;
  font: 500 18px Lato, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
    padding: 0 20px;
  }
`;

const AnalysisType = styled.div`
  font-family: Lato, sans-serif;
  align-self: start;
  margin: 42px 0 0 21px;
  @media (max-width: 991px) {
    margin: 40px 0 0 10px;
  }
`;

const RelatedSearchesBox = styled.div`
  border-radius: 12px;
  border-color: rgba(0, 0, 0, 1);
  border-style: solid;
  border-width: 1px;
  background-color: #fff;
  align-self: end;
  margin-top: 19px;
  width: 467px;
  max-width: 100%;
  align-items: start;
  justify-content: center;
  padding: 29px 60px;
  font: 500 18px Lato, sans-serif;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const SearchEngineLabel = styled.div`
  font-family: Lato, sans-serif;
  align-self: start;
  margin: 42px 0 0 18px;
  @media (max-width: 991px) {
    margin: 40px 0 0 10px;
  }
`;

const SearchEngineBox = styled.div`
  border-radius: 12px;
  border-color: rgba(0, 0, 0, 1);
  border-style: solid;
  border-width: 1px;
  background-color: #fff;
  align-self: end;
  margin-top: 19px;
  width: 467px;
  max-width: 100%;
  align-items: start;
  white-space: nowrap;
  justify-content: center;
  padding: 27px 60px;
  font: 500 18px Lato, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
    padding: 0 20px;
  }
`;

export default KeywordResearchTool;
