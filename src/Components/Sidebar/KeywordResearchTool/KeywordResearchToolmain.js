import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import Navbar from '../../Public/Navbar';
import Sidebar from '../../Public/Sidebar';
import Footer from '../../Public/Footer';
import icon1 from './Keychecker.png';

const KeywordResearchToolmain = () => {
  const [activeSection, setActiveSection] = useState('My Projects');
  const navigate = useNavigate(); 

  const handleSectionClick = (section) => {
    setActiveSection(section);
    console.log(`Section clicked: ${section}`);
  };

  const handleClick = () => {
    navigate('/KeywordResearchTool');  
  };

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
          <AnalysisTitle>Keyword Analysis</AnalysisTitle>
          <KeywordText>Keyword</KeywordText>
          <AnalysisType>Analysis Type</AnalysisType>
          <RelatedSearchesText>Related searches</RelatedSearchesText>
          <SearchEngine>Search Engine</SearchEngine>
          <SearchEngineUrl>Google.com</SearchEngineUrl>
          <ResearchKeywordText>Keyword Research</ResearchKeywordText>
          <KeywordIdeas>Keyword Ideas</KeywordIdeas>
          <SearchSection>
            <RelatedSearchesText>Related Searches</RelatedSearchesText>
            <AutoCompleteSection>Auto Complete</AutoCompleteSection>
            <SearchBar>
              <SearchInput />
              <SearchPlaceholder>Search anything here</SearchPlaceholder>
            </SearchBar>
          </SearchSection>
          <KeywordsPerPage>Keywords Per Page</KeywordsPerPage>
          <ExportSection>
            <ExportContainer>
              <ExportImage
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ebec39556da60a04370ebe7902d26416c88c10b2a62fdcc5019b7ac50f4add24?placeholderIfAbsent=true&apiKey=70bbbe661cc747b893a0c12c47223d3a"
              />
            </ExportContainer>
            <ExportActions>
              <CsvExport>CSV Export</CsvExport>
              <ExportImage2
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/302760d0aefa0a6e44574ccbdf10dbcde0c936effc21c377a015915682c4f166?placeholderIfAbsent=true&apiKey=70bbbe661cc747b893a0c12c47223d3a"
              />
            </ExportActions>
          </ExportSection>
          <Image>
            <img
              loading="lazy"
              src={icon1}  
            />
          </Image>
        </Container>
      </Wrapper>
      <Footer/>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Image = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Container = styled.div`
  border-radius: 0;
  display: flex;
  flex-direction: column;
  padding: 20px;
  flex-grow: 1;
`;

const Title = styled.div`
  color: rgba(0, 0, 0, 1);
  align-self: start;
  font: 600 48px Lato, sans-serif;
  margin-bottom: 20px;
  @media (max-width: 991px) {
    font-size: 40px;
  }
`;

const Subtitle = styled.div`
  color: rgba(0, 0, 0, 1);
  margin-top: 20px;
  font: 700 72px Lato, sans-serif;
  @media (max-width: 991px) {
    font-size: 40px;
  }
`;

const HighlightedText = styled.span`
  color: rgba(0, 123, 254, 1);
`;

const Section = styled.div`
  display: flex;
  margin-top: 20px;
  gap: 20px;
  flex-wrap: wrap;
  font: 500 18px Lato, sans-serif;
`;

const RelatedSearches = styled.div`
  border-radius: 12px;
  background-color: rgba(0, 123, 254, 0.1);
  color: var(--Main, #007bfe);
  padding: 20px;
  flex: 1;
  @media (max-width: 991px) {
    padding: 10px;
  }
`;

const RelatedKeywords = styled.div`
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 1);
  color: rgba(0, 0, 0, 1);
  padding: 20px;
  border: 1px solid rgba(0, 0, 0, 1);
  flex: 1;
  @media (max-width: 991px) {
    padding: 10px;
  }
`;

const AnalysisTitle = styled.div`
  color: rgba(0, 0, 0, 1);
  margin-top: 20px;
  font: 600 24px Lato, sans-serif;
  @media (max-width: 991px) {
    font-size: 20px;
  }
`;

const KeywordText = styled.div`
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 1);
  margin-top: 20px;
  padding: 20px;
  border: 1px solid rgba(0, 0, 0, 1);
  font: 500 18px Lato, sans-serif;
  @media (max-width: 991px) {
    padding: 10px;
  }
`;

const AnalysisType = styled.div`
  color: rgba(0, 0, 0, 1);
  margin-top: 20px;
  font: 600 24px Lato, sans-serif;
`;

const RelatedSearchesText = styled.div`
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 1);
  margin-top: 20px;
  padding: 20px;
  border: 1px solid rgba(0, 0, 0, 1);
  font: 500 18px Lato, sans-serif;
  @media (max-width: 991px) {
    padding: 10px;
  }
`;

const SearchEngine = styled.div`
  color: rgba(0, 0, 0, 1);
  margin-top: 20px;
  font: 600 24px Lato, sans-serif;
`;

const SearchEngineUrl = styled.div`
  color: rgba(0, 0, 0, 1);
  margin-top: 10px;
  font: 400 18px Lato, sans-serif;
`;

const ResearchKeywordText = styled.div`
  border-radius: 12px;
  background-color: rgba(0, 123, 254, 1);
  margin-top: 40px;
  padding: 16px;
  color: rgba(255, 255, 255, 1);
  text-align: center;
  font: 600 18px Lato, sans-serif;
`;

const KeywordIdeas = styled.div`
  color: rgba(0, 0, 0, 1);
  margin-top: 20px;
  font: 600 32px Lato, sans-serif;
  @media (max-width: 991px) {
    font-size: 24px;
  }
`;

const SearchSection = styled.div`
  display: flex;
  margin-top: 20px;
  width: 100%;
  flex-wrap: wrap;
  gap: 20px;
  font: 500 18px Lato, sans-serif;
`;

const AutoCompleteSection = styled.div`
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 1);
  padding: 20px;
  border: 1px solid rgba(0, 0, 0, 1);
  flex: 1;
`;

const SearchBar = styled.div`
  display: flex;
  flex-grow: 1;
`;

const SearchInput = styled.div`
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 1);
  display: flex;
  width: 100%;
  max-width: 300px;
  height: 70px;
  border: 1px solid rgba(0, 0, 0, 1);
`;

const SearchPlaceholder = styled.div`
  border-radius: 12px;
  background-color: rgba(156, 156, 156, 1);
  flex-grow: 1;
  width: 100%;
  padding: 16px;
  @media (max-width: 991px) {
    padding: 10px;
  }
`;

const KeywordsPerPage = styled.div`
  color: rgba(0, 0, 0, 1);
  margin-top: 20px;
  font: 600 32px Lato, sans-serif;
  @media (max-width: 991px) {
    font-size: 24px;
  }
`;

const ExportSection = styled.div`
  display: flex;
  margin-top: 20px;
  width: 100%;
  flex-wrap: wrap;
  gap: 20px;
`;

const ExportContainer = styled.div`
  border-radius: 12px;
  background-color: rgba(245, 245, 245, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  flex: 1;
`;

const ExportImage = styled.img`
  width: 32px;
  height: 32px;
`;

const ExportActions = styled.div`
  border-radius: 12px;
  background-color: rgba(245, 245, 245, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  flex: 1;
  font: 600 18px Lato, sans-serif;
`;

const CsvExport = styled.div`
  margin-right: 10px;
`;

const ExportImage2 = styled.img`
  width: 32px;
  height: 32px;
`;

export default KeywordResearchToolmain;
