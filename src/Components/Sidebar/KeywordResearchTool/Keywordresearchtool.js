import React, { useState } from "react"; // Import useState from React
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
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
              <input type="email" name="email" id="email" placeholder="Keyword"/>
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

const Section1 = styled.div`
  margin-top: 1px;
  margin-left: 15rem;
  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 2rem;
  }
`;

const Container = styled.div`
  border-radius: 0;
  margin-left: 3rem;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    margin-left: 1rem;
    margin-right: 1rem;
  }
`;

const Title = styled.div`
  color: rgba(0, 0, 0, 1);
  align-self: start;
  font: 400 38px Lato, sans-serif;
  @media (max-width: 991px) {
    font-size: 32px;
    margin-top: 1rem;
  }
`;

const InputField = styled.div`
  border-radius: 12px;
  border-color: rgba(0, 0, 0, 0.2);
  border-style: solid;
  border-width: 1px;
  background-color: #fff;
  display: flex;
  margin-top: 25px;
  align-items: center;
  gap: 6px;
  width: 35rem;
  font-size: 16px;
  color: #000;
  font-weight: 700;
  padding: 20px 24px;

  input {
    font-family: Lato, sans-serif;
    flex-grow: 1;
    border: none;
    outline: none;
    padding-left: 10px;
  }

  @media (max-width: 991px) {
    width: 100%;
    padding: 15px 20px;
  }
`;

const Subtitle = styled.div`
  color: rgba(0, 0, 0, 1);
  margin-top: 72px;
  font: 700 52px Lato, sans-serif;
  @media (max-width: 991px) {
    margin-top: 40px;
    font-size: 40px;
    width: 100%;
  }
`;

const HighlightedText = styled.span`
  color: rgba(0, 123, 254, 1);
`;

const Section = styled.div`
  align-self: start;
  display: flex;
  margin-top: 36px;
  gap: 26px;
  flex-wrap: wrap;
  font: 500 18px Lato, sans-serif;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const RelatedSearches = styled.div`
  border-radius: 8px;
  background-color: rgba(0, 123, 254, 0.1);
  color: var(--Main, #007bfe);
  padding: 14px 38px;
  @media (max-width: 991px) {
    padding: 12px 20px;
  }
`;

const RelatedKeywords = styled.div`
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 1);
  color: rgba(0, 0, 0, 1);
  padding: 20px 36px;
  border: 1px solid rgba(0, 0, 0, 1);
  @media (max-width: 991px) {
    padding: 12px 20px;
  }
`;

const AnalysisTitle = styled.div`
  color: rgba(0, 0, 0, 1);
  align-self: center;
  margin-top: 56px;
  font: 600 20px Lato, sans-serif;
  @media (max-width: 991px) {
    margin-top: 40px;
    font-size: 18px;
  }
`;

const AnalysisType = styled.div`
  color: rgba(0, 0, 0, 1);
  align-self: center;
  margin-top: 36px;
  font: 600 24px Lato, sans-serif;
  @media (max-width: 991px) {
    font-size: 20px;
  }
`;

const SearchEngine = styled.div`
  color: rgba(0, 0, 0, 1);
  align-self: center;
  margin-top: 36px;
  font: 600 24px Lato, sans-serif;
  @media (max-width: 991px) {
    font-size: 20px;
  }
`;

const ResearchKeywordText = styled.div`
  border-radius: 12px;
  background-color: rgba(0, 123, 254, 1);
  align-self: center;
  margin-left: 10rem;
  margin-bottom: 4rem;
  margin-top: 72px;
  width: 188px;
  max-width: 100%;
  color: rgba(255, 255, 255, 1);
  text-align: center;
  padding: 16px 20px;
  font: 600 18px Lato, sans-serif;
  cursor: pointer;
  @media (max-width: 991px) {
    margin-top: 40px;
    margin-left: 0;
  }
`;

export default KeywordResearchTool;
