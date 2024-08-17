import React, { useState } from "react"; // Import useState from React
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
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
   src={icon1}  />
 </Image>

    </Container>
    </Wrapper>
      <Footer/>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
`;

const Image = styled.div`
  display: flex;
`;

const Container = styled.div`
  border-radius: 0;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  color: rgba(0, 0, 0, 1);
  align-self: start;
  font: 600 48px Lato, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
    font-size: 40px;
  }
`;

const Subtitle = styled.div`
  color: rgba(0, 0, 0, 1);
  margin-top: 72px;
  width: 555px;
  font: 700 72px Lato, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
    font-size: 40px;
  }
`;

const HighlightedText = styled.span`
  color: rgba(0, 123, 254, 1);
`;

const Section = styled.div`
  align-self: start;
  display: flex;
  margin-top: 56px;
  gap: 36px;
  flex-wrap: wrap;
  font: 500 18px Lato, sans-serif;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const RelatedSearches = styled.div`
  border-radius: 12px;
  background-color: rgba(0, 123, 254, 0.1);
  color: var(--Main, #007bfe);
  background: var(--Main, #007bfe);
  padding: 24px 48px;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const RelatedKeywords = styled.div`
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 1);
  color: rgba(0, 0, 0, 1);
  padding: 24px 46px;
  border: 1px solid rgba(0, 0, 0, 1);
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const AnalysisTitle = styled.div`
  color: rgba(0, 0, 0, 1);
  align-self: center;
  margin-top: 96px;
  font: 600 24px Lato, sans-serif;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const KeywordText = styled.div`
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 1);
  align-self: center;
  margin-top: 18px;
  width: 467px;
  max-width: 100%;
  color: rgba(0, 0, 0, 1);
  white-space: nowrap;
  padding: 24px 59px;
  font: 500 18px Lato, sans-serif;
  border: 1px solid rgba(0, 0, 0, 1);
  @media (max-width: 991px) {
    white-space: initial;
    padding: 0 20px;
  }
`;

const AnalysisType = styled.div`
  color: rgba(0, 0, 0, 1);
  align-self: center;
  margin-top: 36px;
  font: 600 24px Lato, sans-serif;
`;

const RelatedSearchesText = styled.div`
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 1);
  align-self: center;
  margin-top: 18px;
  width: 467px;
  max-width: 100%;
  color: rgba(0, 0, 0, 1);
  padding: 24px 59px;
  font: 500 18px Lato, sans-serif;
  border: 1px solid rgba(0, 0, 0, 1);
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const SearchEngine = styled.div`
  color: rgba(0, 0, 0, 1);
  align-self: center;
  margin-top: 36px;
  font: 600 24px Lato, sans-serif;
`;

const SearchEngineUrl = styled.div`
  color: rgba(0, 0, 0, 1);
  align-self: center;
  margin-top: 36px;
  font: 400 18px Lato, sans-serif;
`;

const ResearchKeywordText = styled.div`
  border-radius: 12px;
  background-color: rgba(0, 123, 254, 1);
  align-self: center;
  margin-top: 72px;
  width: 188px;
  max-width: 100%;
  color: rgba(255, 255, 255, 1);
  text-align: center;
  padding: 16px 20px;
  font: 600 18px Lato, sans-serif;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const KeywordIdeas = styled.div`
  color: rgba(0, 0, 0, 1);
  align-self: start;
  margin-top: 48px;
  font: 600 32px Lato, sans-serif;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const SearchSection = styled.div`
  align-self: end;
  display: flex;
  margin-top: 48px;
  width: 100%;
  max-width: 1162px;
  gap: 20px;
  color: rgba(0, 0, 0, 1);
  flex-wrap: wrap;
  justify-content: space-between;
  font: 500 18px Lato, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const AutoCompleteSection = styled.div`
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 1);
  padding: 24px 46px;
  border: 1px solid rgba(0, 0, 0, 1);
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const SearchBar = styled.div`
  display: flex;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const SearchInput = styled.div`
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 1);
  display: flex;
  width: 234px;
  height: 70px;
  border: 1px solid rgba(0, 0, 0, 1);
`;

const SearchPlaceholder = styled.div`
  border-radius: 12px;
  background-color: rgba(156, 156, 156, 1);
  flex-grow: 1;
  width: fit-content;
  padding: 24px 48px;
  @media (max-width: 991px) {
    max-width: 100%;
    padding: 0 20px;
  }
`;

const KeywordsPerPage = styled.div`
  color: rgba(0, 0, 0, 1);
  align-self: start;
  margin-top: 48px;
  font: 600 32px Lato, sans-serif;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const ExportSection = styled.div`
  display: flex;
  margin-top: 24px;
  width: 507px;
  max-width: 100%;
  gap: 32px;
  flex-wrap: wrap;
`;

const ExportContainer = styled.div`
  border-radius: 12px;
  background-color: rgba(245, 245, 245, 1);
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: center;
  padding: 19px 38px;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const ExportImage = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 32px;
`;

const ExportActions = styled.div`
  border-radius: 12px;
  background-color: rgba(245, 245, 245, 1);
  display: flex;
  gap: 24px;
  color: rgba(0, 0, 0, 1);
  flex-grow: 1;
  flex-basis: auto;
  padding: 16px 34px;
  font: 600 32px Lato, sans-serif;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const CsvExport = styled.div`
  flex-basis: auto;
`;

const ExportImage2 = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 32px;
  margin: auto 0;
`;

export default KeywordResearchToolmain;
