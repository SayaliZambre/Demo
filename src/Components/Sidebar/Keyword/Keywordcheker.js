import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import Navbar from '../../Public/Navbar';
import Sidebar from '../../Public/Sidebar';
import Footer from '../../Public/Footer';

const Keywordcheker = () => {
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
          <Container>
      <Title>Your Keyword Score</Title>
      <ScoreContainer>
        <ScoreImage
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/be1325913c88fce32e1149d3477af98aca2be49c8877cbc903dc5fca916a54f5?apiKey=70bbbe661cc747b893a0c12c47223d3a&"
        />
        Overall Score
      </ScoreContainer>
      <SectionTitle>Overview of Keyword Check</SectionTitle>
      <KeywordCheckOverview>
        <OverviewImage
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e6261dddf7bc15a23721dff3739ec7c60108158812b4153b9ce54e81ca0e1415?apiKey=70bbbe661cc747b893a0c12c47223d3a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e6261dddf7bc15a23721dff3739ec7c60108158812b4153b9ce54e81ca0e1415?apiKey=70bbbe661cc747b893a0c12c47223d3a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e6261dddf7bc15a23721dff3739ec7c60108158812b4153b9ce54e81ca0e1415?apiKey=70bbbe661cc747b893a0c12c47223d3a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e6261dddf7bc15a23721dff3739ec7c60108158812b4153b9ce54e81ca0e1415?apiKey=70bbbe661cc747b893a0c12c47223d3a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e6261dddf7bc15a23721dff3739ec7c60108158812b4153b9ce54e81ca0e1415?apiKey=70bbbe661cc747b893a0c12c47223d3a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e6261dddf7bc15a23721dff3739ec7c60108158812b4153b9ce54e81ca0e1415?apiKey=70bbbe661cc747b893a0c12c47223d3a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e6261dddf7bc15a23721dff3739ec7c60108158812b4153b9ce54e81ca0e1415?apiKey=70bbbe661cc747b893a0c12c47223d3a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e6261dddf7bc15a23721dff3739ec7c60108158812b4153b9ce54e81ca0e1415?apiKey=70bbbe661cc747b893a0c12c47223d3a&"
        />
        <AttributeSection>
          <SectionTitle>Meta Attributes</SectionTitle>
          <ProgressContainer>
            <ProgressBar />
          </ProgressContainer>
        </AttributeSection>
        <AttributeSection>
          <SectionTitle>HTML Optimization</SectionTitle>
          <ProgressContainer>
            <ProgressBar />
          </ProgressContainer>
        </AttributeSection>
        <AttributeSection>
          <div>Others</div>
          <ProgressBarLarge />
        </AttributeSection>
      </KeywordCheckOverview>
    </Container>
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

const Container = styled.div`
  border-radius: 0px 0px 0px 0px;
  display: flex;
  max-width: 966px;
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

const ScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  border-radius: 0px 0px 0px 0px;
  align-self: end;
  aspect-ratio: 1.04;
  width: 365px;
  max-width: 100%;
  color: rgba(0, 0, 0, 1);
  text-align: center;
  margin: 55px 186px 0 0;
  padding: 296px 70px 17px;
  font: 700 32px Lato, sans-serif;
  @media (max-width: 991px) {
    margin: 40px 10px 0 0;
    padding: 100px 20px 0;
  }
`;

const ScoreImage = styled.img`
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
`;

const SectionTitle = styled.div`
  color: rgba(0, 0, 0, 1);
  text-align: center;
  align-self: start;
  margin-top: 74px;
  font: 700 48px Lato, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
    font-size: 40px;
  }
`;

const KeywordCheckOverview = styled.div`
  align-self: end;
  display: flex;
  margin-top: 96px;
  width: 100%;
  max-width: 738px;
  flex-direction: column;
  align-items: start;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const OverviewImage = styled.img`
  aspect-ratio: 1.52;
  object-fit: contain;
  object-position: center;
  width: 100%;
  align-self: stretch;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-right: 5px;
  }
`;

const AttributeSection = styled.div`
  display: flex;
  gap: 40px 100px;
  flex-wrap: wrap;
  margin: 90px 0 0 17px;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const ProgressContainer = styled.div`
  border-radius: 21px;
  background-color: rgba(217, 217, 217, 1);
  display: flex;
  flex-direction: column;
  align-items: start;
  margin: auto 0;
`;

const ProgressBar = styled.div`
  border-radius: 21px;
  background-color: rgba(55, 159, 255, 1);
  display: flex;
  width: 153px;
  height: 19px;
`;

const ProgressBarLarge = styled.div`
  border-radius: 21px;
  background-color: rgba(55, 159, 255, 1);
  display: flex;
  width: 415px;
  max-width: 100%;
  height: 19px;
  margin: auto 0;
`;


export default Keywordcheker;
