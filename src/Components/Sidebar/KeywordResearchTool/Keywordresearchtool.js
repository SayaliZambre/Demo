
import * as React from "react";
import styled from "styled-components";


const Keywordresearchtool = () => {
// function KeywordResearchTool() {
  return (
    <Div>
      <KeywordResearchtool>Keyword Research tool</KeywordResearchtool>
      <FindKeywordideaswithResearchtool>
        <span style="color: rgba(0,123,254,1);">Find</span> Keyword ideas with
        Research tool
      </FindKeywordideaswithResearchtool>
      <Div2>
        <RelatedSearches>Related Searches</RelatedSearches>
        <RelatedKeywords>Related Keywords</RelatedKeywords>
      </Div2>
      <KeywordAnalysis>Keyword Analysis</KeywordAnalysis>
      <Text>Keyword</Text>
      <AnalysisType>Analysis Type</AnalysisType>
      <Text2>Related searches</Text2>
      <Searchengine>Search engine</Searchengine>
      <div>Google.com</div>
      <Text4>Keyword Research</Text4>
      <Keywordideas>Keyword ideas</Keywordideas>
      <Div3>
        <div>Related Searches</div>
        <AutoComplete>Auto Complete</AutoComplete>
        <Div4>
          <Div5 />
          <Searchanythinghere>Search anything here</Searchanythinghere>
        </Div4>
      </Div3>
      <KeywordsPerpage>Keywords Per page</KeywordsPerpage>
      <Div6>
        <Div7>
          <Img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ebec39556da60a04370ebe7902d26416c88c10b2a62fdcc5019b7ac50f4add24?placeholderIfAbsent=true&apiKey=70bbbe661cc747b893a0c12c47223d3a"
          />
        </Div7>
        <Div8>
          <CsvExport>CSV Export</CsvExport>
          <Img2
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/302760d0aefa0a6e44574ccbdf10dbcde0c936effc21c377a015915682c4f166?placeholderIfAbsent=true&apiKey=70bbbe661cc747b893a0c12c47223d3a"
          />
        </Div8>
      </Div6>
    </Div>
  );
}

const Div = styled.div`
  border-radius: 0px 0px 0px 0px;
  display: flex;
  flex-direction: column;
`;

const KeywordResearchtool = styled.div`
  color: rgba(0, 0, 0, 1);
  align-self: start;
  font: 600 48px Lato, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
    font-size: 40px;
  }
`;

const FindKeywordideaswithResearchtool = styled.div`
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

const Div2 = styled.div`
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

const KeywordAnalysis = styled.div`
  color: rgba(0, 0, 0, 1);
  align-self: center;
  margin-top: 96px;
  font: 600 24px Lato, sans-serif;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const Text = styled.div`
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

const Text2 = styled.div`
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

const Searchengine = styled.div`
  color: rgba(0, 0, 0, 1);
  align-self: center;
  margin-top: 36px;
  font: 600 24px Lato, sans-serif;
`;

const Text4 = styled.div`
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

const Keywordideas = styled.div`
  color: rgba(0, 0, 0, 1);
  align-self: start;
  margin-top: 48px;
  font: 600 32px Lato, sans-serif;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const Div3 = styled.div`
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

const AutoComplete = styled.div`
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 1);
  padding: 24px 46px;
  border: 1px solid rgba(0, 0, 0, 1);
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const Div4 = styled.div`
  display: flex;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div5 = styled.div`
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 1);
  display: flex;
  width: 234px;
  height: 70px;
  border: 1px solid rgba(0, 0, 0, 1);
`;

const Searchanythinghere = styled.div`
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

const KeywordsPerpage = styled.div`
  color: rgba(0, 0, 0, 1);
  align-self: start;
  margin-top: 48px;
  font: 600 32px Lato, sans-serif;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const Div6 = styled.div`
  display: flex;
  margin-top: 24px;
  width: 507px;
  max-width: 100%;
  gap: 32px;
  flex-wrap: wrap;
`;

const Div7 = styled.div`
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

const Img = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 32px;
`;

const Div8 = styled.div`
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

const Img2 = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 32px;
  margin: auto 0;
`;
export default Keywordresearchtool;
