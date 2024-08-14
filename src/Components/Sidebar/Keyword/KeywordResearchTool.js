import React, { useState } from "react";
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
        <Sidebar activeSection={activeSection} onSectionClick={handleSectionClick} />
        <MainContent>
          <Container>
            <Title>Keyword Research Tool</Title>
            <Subtitle>
              <span style={{ color: 'rgba(0,123,254,1)' }}>Find</span> Keyword ideas with Research Tool
            </Subtitle>
            <KeywordAnalysisSection>
              <KeywordAnalysis>Keyword Analysis</KeywordAnalysis>
              <KeywordBox>Keyword</KeywordBox>
              <AnalysisType>Analysis Type</AnalysisType>
              <RelatedSearchesBox>Related Searches</RelatedSearchesBox>
              <SearchEngineTitle>Search Engine</SearchEngineTitle>
              <SearchEngineDomain>Google.com</SearchEngineDomain>
              <KeywordResearchButton>Keyword Research</KeywordResearchButton>
              <KeywordIdeasTitle>Keyword Ideas</KeywordIdeasTitle>
              <RelatedSearchesSection>
                <RelatedSearchesTitle>Related Searches</RelatedSearchesTitle>
                <AutoComplete>Auto Complete</AutoComplete>
                <SearchBoxContainer>
                  <SearchInputBox placeholder="Search anything here" />
                </SearchBoxContainer>
              </RelatedSearchesSection>
              <KeywordsPerPageTitle>Keywords Per Page</KeywordsPerPageTitle>
              <KeywordOptions>
                <CsvExportContainer>
                  <ExportImage
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/ebec39556da60a04370ebe7902d26416c88c10b2a62fdcc5019b7ac50f4add24?placeholderIfAbsent=true&apiKey=3a6a44e65e3d4730a76b1db009e247ae"
                  />
                </CsvExportContainer>
                <ExportOptionsContainer>
                  <CsvExport>CSV Export</CsvExport>
                  <ExportIcon
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/302760d0aefa0a6e44574ccbdf10dbcde0c936effc21c377a015915682c4f166?placeholderIfAbsent=true&apiKey=3a6a44e65e3d4730a76b1db009e247ae"
                  />
                </ExportOptionsContainer>
              </KeywordOptions>
              <SearchVolumeSection>
                <KeywordList>
                  <KeywordItem>Keyword</KeywordItem>
                  <KeywordExample>apple store</KeywordExample>
                  <KeywordExample>apple watch</KeywordExample>
                  <KeywordExample>apple tv</KeywordExample>
                  <KeywordExample>steve jobs</KeywordExample>
                  <KeywordExample>apple id</KeywordExample>
                  <KeywordExample>apple discount</KeywordExample>
                  <KeywordExample>apple Usa</KeywordExample>
                  <KeywordExample>apple India</KeywordExample>
                  <KeywordExample>apple scott forstall</KeywordExample>
                </KeywordList>
                <SearchVolumeList>
                  <SearchVolumeTitle>Search Volume</SearchVolumeTitle>
                  <SearchVolumeItem>
                    <VolumeBarContainer>
                      <VolumeBar width="60%" />
                    </VolumeBarContainer>
                    <VolumeValue>2.7 M</VolumeValue>
                  </SearchVolumeItem>
                  {/* Repeat <SearchVolumeItem> as needed */}
                </SearchVolumeList>
                <CompetitionList>
                  <CompetitionTitle>Comp</CompetitionTitle>
                  <CompetitionLevel>medium</CompetitionLevel>
                  {/* Repeat <CompetitionLevel> as needed */}
                </CompetitionList>
                {/* Repeat <CompetitionItems> as needed */}
              </SearchVolumeSection>
            </KeywordAnalysisSection>
          </Container>
        </MainContent>
      </Wrapper>
      <Footer />
    </>
  );
};

// Styled Components
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
    font-size: 40px;
  }
`;

const Subtitle = styled.div`
  color: #000;
  margin-top: 92px;
  font: 700 72px Lato, sans-serif;
  @media (max-width: 991px) {
    margin-top: 40px;
    font-size: 40px;
  }
`;

const KeywordAnalysisSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const KeywordAnalysis = styled.div`
  color: rgba(0, 0, 0, 1);
  font: 600 24px Lato, sans-serif;
`;

const KeywordBox = styled.div`
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 1);
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

const AnalysisType = styled.div`
  color: rgba(0, 0, 0, 1);
  margin-top: 36px;
  font: 600 24px Lato, sans-serif;
`;

const RelatedSearchesBox = styled.div`
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 1);
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

const SearchEngineTitle = styled.div`
  color: rgba(0, 0, 0, 1);
  margin-top: 36px;
  font: 600 24px Lato, sans-serif;
`;

const SearchEngineDomain = styled.div`
  border-radius: 12px;
  background-color: rgba(0, 0, 0, 1);
  margin-top: 72px;
  width: 188px;
  max-width: 100%;
  color: rgba(255, 255, 255, 1);
  padding: 16px 16px 12px 16px;
  font: 500 18px Lato, sans-serif;
  text-align: center;
`;

const KeywordResearchButton = styled.div`
  margin-top: 24px;
  border-radius: 12px;
  background-color: rgba(0, 0, 0, 1);
  width: 189px;
  max-width: 100%;
  color: rgba(255, 255, 255, 1);
  padding: 17px 16px 12px 16px;
  font: 500 18px Lato, sans-serif;
  text-align: center;
`;

const KeywordIdeasTitle = styled.div`
  color: rgba(0, 0, 0, 1);
  margin-top: 36px;
  font: 600 24px Lato, sans-serif;
`;

const RelatedSearchesSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 18px;
  max-width: 100%;
`;

const RelatedSearchesTitle = styled.div`
  color: rgba(0, 0, 0, 1);
  font: 600 20px Lato, sans-serif;
`;

const AutoComplete = styled.div`
  color: rgba(0, 0, 0, 1);
  font: 500 18px Lato, sans-serif;
`;

const SearchBoxContainer = styled.div`
  border-radius: 12px;
  display: flex;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 1);
  padding: 16px 24px;
  background-color: rgba(255, 255, 255, 1);
  margin-top: 18px;
  width: 100%;
`;

const SearchInputBox = styled.input`
  flex-grow: 1;
  border: none;
  font: 500 16px Lato, sans-serif;
  outline: none;
  padding: 8px 0;
`;

// const Sidebar

const SearchPlaceholder = styled.div`
  color: rgba(0, 0, 0, 1);
  font: 500 16px Lato, sans-serif;
`;

const KeywordsPerPageTitle = styled.div`
  color: rgba(0, 0, 0, 1);
  margin-top: 36px;
  font: 600 24px Lato, sans-serif;
`;

const KeywordOptions = styled.div`
  display: flex;
  align-items: center;
  margin-top: 18px;
`;

const CsvExportContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ExportImage = styled.img`
  width: 35px;
  height: 35px;
`;

const ExportOptionsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
`;

const CsvExport = styled.div`
  color: rgba(0, 0, 0, 1);
  font: 500 18px Lato, sans-serif;
  margin-right: 8px;
`;

const ExportIcon = styled.img`
  width: 20px;
  height: 20px;
`;

const SearchVolumeSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 36px;
`;

const KeywordList = styled.div`
  display: flex;
  flex-direction: column;
`;

const KeywordItem = styled.div`
  color: rgba(0, 0, 0, 1);
  font: 500 16px Lato, sans-serif;
  margin-top: 8px;
`;

const KeywordExample = styled.div`
  color: rgba(0, 0, 0, 1);
  font: 500 16px Lato, sans-serif;
`;

const SearchVolumeList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
`;

const SearchVolumeTitle = styled.div`
  color: rgba(0, 0, 0, 1);
  font: 600 20px Lato, sans-serif;
`;

const SearchVolumeItem = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
`;

const VolumeBarContainer = styled.div`
  width: 100%;
  height: 8px;
  background-color: rgba(200, 200, 200, 1);
  border-radius: 4px;
  position: relative;
`;

const VolumeBar = styled.div`
  width: ${(props) => props.width};
  height: 100%;
  background-color: rgba(0, 123, 254, 1);
  border-radius: 4px;
`;

const VolumeValue = styled.div`
  color: rgba(0, 0, 0, 1);
  font: 500 16px Lato, sans-serif;
  margin-left: 8px;
`;

const CompetitionList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
`;

const CompetitionTitle = styled.div`
  color: rgba(0, 0, 0, 1);
  font: 600 20px Lato, sans-serif;
`;

const CompetitionLevel = styled.div`
  color: rgba(0, 0, 0, 1);
  font: 500 16px Lato, sans-serif;
`;

export default KeywordResearchTool;
