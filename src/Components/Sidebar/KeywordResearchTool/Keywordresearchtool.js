import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import Navbar from '../../Public/Navbar';
import Sidebar from '../../Public/Sidebar';
import Footer from '../../Public/Footer';
import icon1 from './Keychecker.png';

const KeywordResearchTool = () => {
  const [activeSection, setActiveSection] = useState('My Projects');
  const navigate = useNavigate(); 

  const handleSectionClick = (section) => {
    setActiveSection(section);
    console.log(`Section clicked: ${section}`);
  };

  const handleClick = () => {
    navigate('/KeywordResearchToolmain');  
  };

  console.log('Rendering Project with handleSectionClick:', handleSectionClick);

  return (
    <>
      <Navbar/>
      <Wrapper>
        <Sidebar activeSection={activeSection} onSectionClick={handleSectionClick}/>
        <Container>
          <Title>Keyword Research Tool</Title>
          <Subtitle>
            <HighlightedText>Find</HighlightedText> Keyword ideas with Research Tool
          </Subtitle>
          <Section>
            <RelatedSearches>Related Searches</RelatedSearches>
            <RelatedKeywords>Related Keywords</RelatedKeywords>
          </Section>
          <Section1>
            <AnalysisTitle>Keyword Analysis</AnalysisTitle>
            <InputField>
              <input type="text" name="keyword" placeholder="Keyword"/>
            </InputField>
            <AnalysisType>Analysis Type</AnalysisType>
            <InputField>
              <input placeholder="Related search "/>
            </InputField>
            <SearchEngine>Search Engine</SearchEngine>
            <InputField>
              <input placeholder="Google.com "/>
            </InputField>
            <ResearchKeywordText onClick={handleClick}>Keyword Research</ResearchKeywordText>
          </Section1>
        </Container>
      </Wrapper>
      <Footer/>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Container = styled.div`
  margin-left: 2rem;
  margin-right: 2rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 1rem;
  @media (min-width: 768px) {
    margin-left: 3rem;
    margin-right: 3rem;
  }
`;

const Title = styled.h1`
  color: rgba(0, 0, 0, 1);
  align-self: start;
  font: 400 32px Lato, sans-serif;
  @media (min-width: 768px) {
    font-size: 38px;
  }
`;

const Subtitle = styled.h2`
  color: rgba(0, 0, 0, 1);
  margin-top: 40px;
  font: 700 40px Lato, sans-serif;
  @media (min-width: 768px) {
    margin-top: 72px;
    font-size: 52px;
  }
`;

const HighlightedText = styled.span`
  color: rgba(0, 123, 254, 1);
`;

const Section = styled.div`
  align-self: start;
  display: flex;
  margin-top: 36px;
  gap: 20px;
  flex-wrap: wrap;
  font: 500 18px Lato, sans-serif;
  @media (min-width: 768px) {
    margin-top: 40px;
    gap: 26px;
  }
`;

const RelatedSearches = styled.div`
  border-radius: 8px;
  background-color: rgba(0, 123, 254, 0.1);
  color: var(--Main, #007bfe);
  padding: 12px 20px;
  @media (min-width: 768px) {
    padding: 14px 38px;
  }
`;

const RelatedKeywords = styled.div`
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 1);
  color: rgba(0, 0, 0, 1);
  padding: 12px 20px;
  border: 1px solid rgba(0, 0, 0, 1);
  @media (min-width: 768px) {
    padding: 20px 36px;
  }
`;

const Section1 = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    margin-top: 1px;
    margin-left: 15rem;
    align-items: flex-start;
  }
`;

const AnalysisTitle = styled.h3`
  color: rgba(0, 0, 0, 1);
  margin-top: 40px;
  font: 600 18px Lato, sans-serif;
  @media (min-width: 768px) {
    margin-top: 56px;
    font-size: 20px;
  }
`;

const InputField = styled.div`
  border-radius: 12px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  background-color: #fff;
  display: flex;
  margin-top: 20px;
  align-items: center;
  gap: 6px;
  width: 100%;
  max-width: 500px;
  font-size: 16px;
  color: #000;
  font-weight: 700;
  padding: 12px 16px;

  input {
    font-family: Lato, sans-serif;
    flex-grow: 1;
    border: none;
    outline: none;
    padding-left: 10px;
  }

  @media (min-width: 768px) {
    padding: 20px 24px;
    width: 35rem;
  }
`;

const AnalysisType = styled.div`
  color: rgba(0, 0, 0, 1);
  margin-top: 30px;
  font: 600 20px Lato, sans-serif;
  @media (min-width: 768px) {
    font-size: 24px;
    margin-top: 36px;
  }
`;

const SearchEngine = styled.div`
  color: rgba(0, 0, 0, 1);
  margin-top: 30px;
  font: 600 20px Lato, sans-serif;
  @media (min-width: 768px) {
    font-size: 24px;
    margin-top: 36px;
  }
`;

const ResearchKeywordText = styled.div`
  border-radius: 12px;
  background-color: rgba(0, 123, 254, 1);
  margin-top: 40px;
  margin-bottom: 4rem;
  width: 100%;
  max-width: 200px;
  color: rgba(255, 255, 255, 1);
  text-align: center;
  padding: 12px 16px;
  font: 600 18px Lato, sans-serif;
  cursor: pointer;

  @media (min-width: 768px) {
    margin-top: 72px;
    padding: 16px 20px;
    margin-left: 10rem;
  }
`;

export default KeywordResearchTool;
