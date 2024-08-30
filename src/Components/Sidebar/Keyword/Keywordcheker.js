import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import icon from './icon.png';
import icon1 from './icon1.png';
import circle from './circle.png';
import Slice from './Slice.png';
import Seo from './Seo.png';

import Navbar from '../../Public/Navbar';
import Sidebar from '../../Public/Sidebar';
import Footer from '../../Public/Footer';

const KeywordChecker = () => {
  const [activeSection, setActiveSection] = useState('My Projects');
  const navigate = useNavigate();

  const handleSectionClick = (section) => {
    setActiveSection(section);
    console.log(`Section clicked: ${section}`);
  };

  const handleClick = () => {
    navigate('/KeywordChecker');
  };

  return (
    <>
      <Navbar />
      <Wrapper>
        <Sidebar activeSection={activeSection} onSectionClick={handleSectionClick} />
        <MainContent>
          <ContentContainer>
            <ContentTitle>Keyword Checker</ContentTitle>
            <Form>
              <FormField>
                <input
                  type="text"
                  name="keyword"
                  id="keyword"
                  placeholder="Enter your keyword here...."
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
            <KeywordScore>Your Keyword Score</KeywordScore>
            <ScoreWrapper>
              <Image src={icon} alt="Overall Score" />
              <div>Overall Score</div>
            </ScoreWrapper>
            <KeywordCheckOverview>Overview of Keyword Check</KeywordCheckOverview>
            <DetailsWrapper>
              <DetailImage src={icon1} alt="Meta Attributes" />
              <MetaSection>
                <MetaText>Meta Attributes</MetaText>
                <MetaContent>
                  <MetaBar />
                </MetaContent>
              </MetaSection>
              <HtmlSection>
                <HtmlText>HTML Optimization</HtmlText>
                <HtmlContent>
                  <HtmlBar />
                </HtmlContent>
              </HtmlSection>
              <OthersSection>
                <div>Others</div>
                <OthersBar />
              </OthersSection>
            </DetailsWrapper>
          </Container>

          <AttributesContainer>
            <Section>
              <Heading>Meta Attributes</Heading>
              <Percentage>60%</Percentage>
            </Section>
            <DetailSection>
              <Title>Title</Title>
              <StatusCircles>
                <Circle />
                <Circle />
                <Circle />
              </StatusCircles>
            </DetailSection>
            <SubSection>
              <SectionTitle>Google</SectionTitle>
              <TextDetail>In the title: Google</TextDetail>
              <StatusImage src={circle} alt="Google" />
            </SubSection>
            <SubSection>
              <SectionTitle>Meta Description</SectionTitle>
              <StatusCircles>
                <Circle />
                <Circle />
                <Circle />
              </StatusCircles>
            </SubSection>
            <SubSection>
              <SectionTitle>Not within the first 120 characters: Google</SectionTitle>
            </SubSection>
            <Section>
              <SectionTitle>HTML Content</SectionTitle>
              <Percentage>60%</Percentage>
            </Section>
            <SubSection>
              <SectionTitle>Image SEO</SectionTitle>
              <StatusCircles>
                <Circle />
                <Circle />
                <Circle />
              </StatusCircles>
            </SubSection>
            <SubSection>
              <TextDetail>Not found in an image title: Google</TextDetail>
              <StatusImage src={circle} alt="Google" />
            </SubSection>
            <SubSection>
              <TextDetail>Found an attribute of an image: Google</TextDetail>
              <StatusImage src={circle} alt="Google" />
            </SubSection>
            <SubSection>
              <TextDetail>Found in the image URLs: Google</TextDetail>
              <StatusImage src={circle} alt="Google" />
            </SubSection>
            <Section>
              <SectionTitle>Content</SectionTitle>
              <StatusCircles>
                <Circle />
                <Circle />
                <Circle />
              </StatusCircles>
            </Section>
            <SubSection>
              <TextDetail>The term is used 3 times in 12 words</TextDetail>
            </SubSection>
            <Section>
              <SectionTitle>Bold and Strong Tags</SectionTitle>
              <StatusCircles>
                <Circle />
                <Circle />
                <Circle />
              </StatusCircles>
            </Section>
            <SubSection>
              <TextDetail>No strong tag contains the following keyword: Google</TextDetail>
            </SubSection>
          </AttributesContainer>

          <Container1>
            <Section>
              <Heading>Headings</Heading>
              <CircleGroup>
                <Circle color="#379FFF" />
                <Circle color="#000" />
                <Circle color="#000" />
              </CircleGroup>
            </Section>
            <Separator />
            <HighlightedText bgColor="#F1D2CE">
              Not used within the headings: Google
            </HighlightedText>
            <Section>
              <Heading variant="h1">H1 Headings</Heading>
              <CircleGroup>
                <Circle color="#379FFF" />
                <Circle color="#379FFF" />
                <Circle color="#000" />
              </CircleGroup>
            </Section>
            <Separator />
            <HighlightedText bgColor="#F1D2CE">
              Missing keywords in H1 headings: Google
            </HighlightedText>

            <Count>
              <ContainerRow>
                <MainTitle>Others</MainTitle>
                <Percentage>60%</Percentage>
              </ContainerRow>

              <Sub>
                <SubTitle>Domain</SubTitle>
                <ColorCircles>
                  <CircleBlue />
                  <CircleBlack />
                  <CircleBlack />
                </ColorCircles>
              </Sub>

              <Divider />

              <DomainSection>
                <img src={Slice} alt="Domain" />
                <KeywordsText>Occurs in the domain: Google</KeywordsText>
              </DomainSection>

              <Sub>
                <SubTitle>Stop Words</SubTitle>
                <ColorCircles>
                  <CircleBlue />
                  <CircleBlack />
                  <CircleBlack />
                </ColorCircles>
              </Sub>

              <Divider />

              <DomainSection>
                <img
                 src={Slice} alt="Keyword"
                />
                <KeywordsText>None of the keyword is known as stop word</KeywordsText>
              </DomainSection>

              <Sub>
                <SubTitle>SEO Improvements
                  <Image1 src={Seo} alt="SEO" />
                </SubTitle>
              </Sub>

              <HighlightBox>
                <SuggestionsIconRed />
                <SuggestionText>Use good headings</SuggestionText>
              </HighlightBox>

              <HighlightBox>
                <SuggestionsIconRed />
                <SuggestionText>Add H1 Heading to this page</SuggestionText>
              </HighlightBox>

              <HighlightBox>
                <SuggestionsIconRed />
                <SuggestionText>Add meta description</SuggestionText>
              </HighlightBox>

              <HighlightBox>
                <HighlightIconYellow />
                <HighlightText>Improve keyword distribution</HighlightText>
              </HighlightBox>

              <HighlightBox>
                <HighlightIconYellow />
                <HighlightText>Improve the page title</HighlightText>
              </HighlightBox>
            </Count>
          </Container1>
        </MainContent>
      </Wrapper>
      <Footer />
    </>
  );
};

// Styled Components
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
  width: 100%;
  margin: 0 auto;
  max-width: 1200px;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 32px;
  padding: 0 16px;
`;

const ContentTitle = styled.div`
  font-size: 16px;
  font-weight: 400;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormField = styled.div`
  margin-bottom: 16px;
  input {
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
    width: 100%;
    outline: none;
    font-size: 14px;
  }
`;

const SubmitButton = styled.button`
  background-color: blue;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 32px;
  padding: 16px;
`;

const KeywordScore = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 16px;
`;

const ScoreWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  div {
    margin-left: 8px;
  }
`;

const KeywordCheckOverview = styled.div`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 16px;
`;

const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const MetaSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

const MetaText = styled.div`
  font-size: 14px;
  font-weight: 600;
`;

const MetaContent = styled.div`
  background-color: #f1f1f1;
  height: 8px;
  border-radius: 4px;
`;

const MetaBar = styled.div`
  background-color: blue;
  height: 100%;
  width: 60%; /* Example width, adjust as necessary */
`;

const HtmlSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

const HtmlText = styled.div`
  font-size: 14px;
  font-weight: 600;
`;

const HtmlContent = styled.div`
  background-color: #f1f1f1;
  height: 8px;
  border-radius: 4px;
`;

const HtmlBar = styled.div`
  background-color: blue;
  height: 100%;
  width: 60%; /* Example width, adjust as necessary */
`;

const OthersSection = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  div {
    font-size: 14px;
  }
`;

const OthersBar = styled.div`
  background-color: #f1f1f1;
  height: 8px;
  border-radius: 4px;
`;

const AttributesContainer = styled.div`
  margin-top: 32px;
  padding: 16px;
`;

const Section = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const Heading = styled.div`
  font-size: 16px;
  font-weight: 600;
`;

const Percentage = styled.div`
  font-size: 14px;
  font-weight: 400;
`;

const DetailSection = styled.div`
  margin-bottom: 16px;
`;

const Title = styled.div`
  font-size: 14px;
  font-weight: 600;
`;

const StatusCircles = styled.div`
  display: flex;
  gap: 4px;
`;

const Circle = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${(props) => props.color || '#000'};
`;

const SubSection = styled.div`
  margin-bottom: 16px;
`;

const SectionTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
`;

const TextDetail = styled.div`
  font-size: 14px;
  color: #555;
`;

const StatusImage = styled.img`
  width: 16px;
  height: 16px;
  margin-left: 8px;
`;

const Container1 = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 32px;
  padding: 16px;
`;

const Count = styled.div`
  margin-top: 16px;
`;

const ContainerRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MainTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
`;

const ColorCircles = styled.div`
  display: flex;
  gap: 4px;
`;

const CircleBlue = styled(Circle)`
  background-color: #379FFF;
`;

const CircleBlack = styled(Circle)`
  background-color: #000;
`;

const Divider = styled.div`
  height: 1px;
  background-color: #ddd;
  margin: 16px 0;
`;

const DomainSection = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const KeywordsText = styled.div`
  font-size: 14px;
  color: #555;
  margin-left: 8px;
`;

const SuggestionsBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const SuggestionsIconRed = styled.div`
  width: 16px;
  height: 16px;
  background-color: #FF0000;
  border-radius: 50%;
  margin-right: 8px;
`;

const SuggestionText = styled.div`
  font-size: 14px;
  color: #555;
`;

const HighlightBox = styled.div`
  display: flex;
  align-items: center;
  background-color: #F1D2CE;
  padding: 8px;
  margin-bottom: 16px;
`;

const HighlightIconYellow = styled.div`
  width: 16px;
  height: 16px;
  background-color: #FFFF00;
  border-radius: 50%;
  margin-right: 8px;
`;

const HighlightText = styled.div`
  font-size: 14px;
  color: #555;
`;

const Separator = styled.div`
  height: 1px;
  background-color: #ddd;
  margin: 16px 0;
`;

const SuggestionsTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Image = styled.img`
  width: 500px;
  height: 500px;
`;

const Image1 = styled.img`
  width: 50px;
  height: 50px;
`;


const CircleGroup = styled.div`
  display: flex;
  gap: 4px;
`;
const DetailImage = styled.img`
  width: 100%; /* Makes the image responsive */
  height: auto; /* Maintains aspect ratio */
  
  /* Adjustments for different screen sizes */
  @media (min-width: 600px) {
    width: 700px; /* Default width for larger screens */
    height: 300px; /* Default height for larger screens */
  }

  @media (max-width: 599px) {
    width: 100%; /* Full width for smaller screens */
    height: auto; /* Maintain aspect ratio */
  }
`;
const HighlightedText = styled.div`
  background-color: ${(props) => props.bgColor || '#fff'};
  padding: 8px;
  font-size: 14px;
  color: #555;
`;

const Sub = styled.div`
  margin-bottom: 16px;
`;

const SubTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
  display: flex;
  align-items: center;
`;

export default KeywordChecker;
