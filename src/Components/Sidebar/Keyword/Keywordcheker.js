import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import icon from './icon.png';
import icon1 from './icon1.png';

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
      <KeywordScore>Your Keyword Score</KeywordScore>
      <ScoreWrapper>
        <Image
          loading="lazy"
          src={icon}         />
        Overall Score
      </ScoreWrapper>
      <KeywordCheckOverview>Overview of Keyword Check</KeywordCheckOverview>
      <DetailsWrapper>
        <DetailImage
          loading="lazy"
          src={icon1}         />
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


    <Div>
      <Div2>
        <MetaAttributes>Meta Attributes</MetaAttributes>
        <Div3>60%</Div3>
      </Div2>
      <Div4>
        <Title>Title</Title>
        <Div5>
          <Div6 />
          <Div7 />
          <Div8 />
        </Div5>
      </Div4>
      <Div9 />
      <Google>Google</Google>
      <Div10>
        <Img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/bdd27c24c60d8292a66f0268004f5a338c45b64cf22a3b67b88a06d212d8db61?placeholderIfAbsent=true&apiKey=70bbbe661cc747b893a0c12c47223d3a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/bdd27c24c60d8292a66f0268004f5a338c45b64cf22a3b67b88a06d212d8db61?placeholderIfAbsent=true&apiKey=70bbbe661cc747b893a0c12c47223d3a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bdd27c24c60d8292a66f0268004f5a338c45b64cf22a3b67b88a06d212d8db61?placeholderIfAbsent=true&apiKey=70bbbe661cc747b893a0c12c47223d3a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/bdd27c24c60d8292a66f0268004f5a338c45b64cf22a3b67b88a06d212d8db61?placeholderIfAbsent=true&apiKey=70bbbe661cc747b893a0c12c47223d3a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/bdd27c24c60d8292a66f0268004f5a338c45b64cf22a3b67b88a06d212d8db61?placeholderIfAbsent=true&apiKey=70bbbe661cc747b893a0c12c47223d3a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bdd27c24c60d8292a66f0268004f5a338c45b64cf22a3b67b88a06d212d8db61?placeholderIfAbsent=true&apiKey=70bbbe661cc747b893a0c12c47223d3a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/bdd27c24c60d8292a66f0268004f5a338c45b64cf22a3b67b88a06d212d8db61?placeholderIfAbsent=true&apiKey=70bbbe661cc747b893a0c12c47223d3a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/bdd27c24c60d8292a66f0268004f5a338c45b64cf22a3b67b88a06d212d8db61?placeholderIfAbsent=true&apiKey=70bbbe661cc747b893a0c12c47223d3a"
        />
        <InthetitleGoogle>In the title : Google</InthetitleGoogle>
      </Div10>
      <Div11>
        <MetaDescription>Meta Description</MetaDescription>
        <Div12>
          <Div13 />
          <Div14 />
          <Div15 />
        </Div12>
      </Div11>
      <Div16 />
      <NotwithinthefirstcharactersGoogle>
        Not within the first 120 characters : Google
      </NotwithinthefirstcharactersGoogle>
      <Div17>
        <HtmlContent>HTML Content</HtmlContent>
        <Div18>60%</Div18>
      </Div17>
      <Div19>
        <ImageSeo>Image Seo</ImageSeo>
        <Div20>
          <Div21 />
          <Div22 />
          <Div23 />
        </Div20>
      </Div19>
      <Div24 />
      <NotfoundinanimagetitleGoogle>
        Not found in an image title : Google
      </NotfoundinanimagetitleGoogle>
      <Div25>
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/bdd27c24c60d8292a66f0268004f5a338c45b64cf22a3b67b88a06d212d8db61?placeholderIfAbsent=true&apiKey=70bbbe661cc747b893a0c12c47223d3a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/bdd27c24c60d8292a66f0268004f5a338c45b64cf22a3b67b88a06d212d8db61?placeholderIfAbsent=true&apiKey=70bbbe661cc747b893a0c12c47223d3a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bdd27c24c60d8292a66f0268004f5a338c45b64cf22a3b67b88a06d212d8db61?placeholderIfAbsent=true&apiKey=70bbbe661cc747b893a0c12c47223d3a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/bdd27c24c60d8292a66f0268004f5a338c45b64cf22a3b67b88a06d212d8db61?placeholderIfAbsent=true&apiKey=70bbbe661cc747b893a0c12c47223d3a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/bdd27c24c60d8292a66f0268004f5a338c45b64cf22a3b67b88a06d212d8db61?placeholderIfAbsent=true&apiKey=70bbbe661cc747b893a0c12c47223d3a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bdd27c24c60d8292a66f0268004f5a338c45b64cf22a3b67b88a06d212d8db61?placeholderIfAbsent=true&apiKey=70bbbe661cc747b893a0c12c47223d3a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/bdd27c24c60d8292a66f0268004f5a338c45b64cf22a3b67b88a06d212d8db61?placeholderIfAbsent=true&apiKey=70bbbe661cc747b893a0c12c47223d3a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/bdd27c24c60d8292a66f0268004f5a338c45b64cf22a3b67b88a06d212d8db61?placeholderIfAbsent=true&apiKey=70bbbe661cc747b893a0c12c47223d3a"
        />
        <FoundanattributeofanimageGoogle>
          Found an attribute of an image : Google
        </FoundanattributeofanimageGoogle>
      </Div25>
      <Div26>
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/bdd27c24c60d8292a66f0268004f5a338c45b64cf22a3b67b88a06d212d8db61?placeholderIfAbsent=true&apiKey=70bbbe661cc747b893a0c12c47223d3a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/bdd27c24c60d8292a66f0268004f5a338c45b64cf22a3b67b88a06d212d8db61?placeholderIfAbsent=true&apiKey=70bbbe661cc747b893a0c12c47223d3a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bdd27c24c60d8292a66f0268004f5a338c45b64cf22a3b67b88a06d212d8db61?placeholderIfAbsent=true&apiKey=70bbbe661cc747b893a0c12c47223d3a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/bdd27c24c60d8292a66f0268004f5a338c45b64cf22a3b67b88a06d212d8db61?placeholderIfAbsent=true&apiKey=70bbbe661cc747b893a0c12c47223d3a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/bdd27c24c60d8292a66f0268004f5a338c45b64cf22a3b67b88a06d212d8db61?placeholderIfAbsent=true&apiKey=70bbbe661cc747b893a0c12c47223d3a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bdd27c24c60d8292a66f0268004f5a338c45b64cf22a3b67b88a06d212d8db61?placeholderIfAbsent=true&apiKey=70bbbe661cc747b893a0c12c47223d3a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/bdd27c24c60d8292a66f0268004f5a338c45b64cf22a3b67b88a06d212d8db61?placeholderIfAbsent=true&apiKey=70bbbe661cc747b893a0c12c47223d3a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/bdd27c24c60d8292a66f0268004f5a338c45b64cf22a3b67b88a06d212d8db61?placeholderIfAbsent=true&apiKey=70bbbe661cc747b893a0c12c47223d3a"
        />
        <FoundintheimageUrlsGoogle>
          Found in the image URLS : Google
        </FoundintheimageUrlsGoogle>
      </Div26>
      <Div27>
        <Content>Content</Content>
        <Div28>
          <Div29 />
          <Div30 />
          <Div31 />
        </Div28>
      </Div27>
      <Div32 />
      <Thetermisusedtimesinwords>
        The term is used 3 times in 12 words{" "}
      </Thetermisusedtimesinwords>
      <Div33>
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/bdd27c24c60d8292a66f0268004f5a338c45b64cf22a3b67b88a06d212d8db61?placeholderIfAbsent=true&apiKey=70bbbe661cc747b893a0c12c47223d3a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/bdd27c24c60d8292a66f0268004f5a338c45b64cf22a3b67b88a06d212d8db61?placeholderIfAbsent=true&apiKey=70bbbe661cc747b893a0c12c47223d3a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bdd27c24c60d8292a66f0268004f5a338c45b64cf22a3b67b88a06d212d8db61?placeholderIfAbsent=true&apiKey=70bbbe661cc747b893a0c12c47223d3a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/bdd27c24c60d8292a66f0268004f5a338c45b64cf22a3b67b88a06d212d8db61?placeholderIfAbsent=true&apiKey=70bbbe661cc747b893a0c12c47223d3a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/bdd27c24c60d8292a66f0268004f5a338c45b64cf22a3b67b88a06d212d8db61?placeholderIfAbsent=true&apiKey=70bbbe661cc747b893a0c12c47223d3a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bdd27c24c60d8292a66f0268004f5a338c45b64cf22a3b67b88a06d212d8db61?placeholderIfAbsent=true&apiKey=70bbbe661cc747b893a0c12c47223d3a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/bdd27c24c60d8292a66f0268004f5a338c45b64cf22a3b67b88a06d212d8db61?placeholderIfAbsent=true&apiKey=70bbbe661cc747b893a0c12c47223d3a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/bdd27c24c60d8292a66f0268004f5a338c45b64cf22a3b67b88a06d212d8db61?placeholderIfAbsent=true&apiKey=70bbbe661cc747b893a0c12c47223d3a"
        />
        <div>Found an attribute of an image : Google</div>
      </Div33>
      <Div34>
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/bdd27c24c60d8292a66f0268004f5a338c45b64cf22a3b67b88a06d212d8db61?placeholderIfAbsent=true&apiKey=70bbbe661cc747b893a0c12c47223d3a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/bdd27c24c60d8292a66f0268004f5a338c45b64cf22a3b67b88a06d212d8db61?placeholderIfAbsent=true&apiKey=70bbbe661cc747b893a0c12c47223d3a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bdd27c24c60d8292a66f0268004f5a338c45b64cf22a3b67b88a06d212d8db61?placeholderIfAbsent=true&apiKey=70bbbe661cc747b893a0c12c47223d3a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/bdd27c24c60d8292a66f0268004f5a338c45b64cf22a3b67b88a06d212d8db61?placeholderIfAbsent=true&apiKey=70bbbe661cc747b893a0c12c47223d3a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/bdd27c24c60d8292a66f0268004f5a338c45b64cf22a3b67b88a06d212d8db61?placeholderIfAbsent=true&apiKey=70bbbe661cc747b893a0c12c47223d3a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bdd27c24c60d8292a66f0268004f5a338c45b64cf22a3b67b88a06d212d8db61?placeholderIfAbsent=true&apiKey=70bbbe661cc747b893a0c12c47223d3a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/bdd27c24c60d8292a66f0268004f5a338c45b64cf22a3b67b88a06d212d8db61?placeholderIfAbsent=true&apiKey=70bbbe661cc747b893a0c12c47223d3a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/bdd27c24c60d8292a66f0268004f5a338c45b64cf22a3b67b88a06d212d8db61?placeholderIfAbsent=true&apiKey=70bbbe661cc747b893a0c12c47223d3a"
        />
        <div>Found in the image URLS : Google</div>
      </Div34>
      <Div35>
        <BoldandStrongtags>Bold and Strong tags</BoldandStrongtags>
        <Div36>
          <Div37 />
          <Div38 />
          <Div39 />
        </Div36>
      </Div35>
      <Div40 />
      <NostrongtagcontainsfollowingkeywordGoogle>
        No strong tag contains following keyword : Google
      </NostrongtagcontainsfollowingkeywordGoogle>
    </Div>



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
        Not used within the headings : Google
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
        Missing keywords in H1 headings : Google
      </HighlightedText>

      <Section>
        <Label>Others</Label>
        <PercentageCircle>60%</PercentageCircle>
      </Section>

      <Section>
        <Label>Domain</Label>
        <CircleGroup>
          <Circle color="#379FFF" />
          <Circle color="#000" />
          <Circle color="#000" />
        </CircleGroup>
      </Section>

      <Separator />

      <ImageSection>
        <CircleImage
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ad2314d05b64ae7ee2a9b0d994738b4d14a35ffcf6b26a9a6a0d67613513362e"
        />
        <Description>Occurs in the domain : Google</Description>
      </ImageSection>

      <Section>
        <Label>Stop Words</Label>
        <CircleGroup>
          <Circle color="#E5E5E5" />
          <Circle color="#000" />
          <Circle color="#000" />
        </CircleGroup>
      </Section>

      <Separator />

      <ImageSection>
        <CircleImage
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ad2314d05b64ae7ee2a9b0d994738b4d14a35ffcf6b26a9a6a0d67613513362e"
        />
        <Description>None of the keyword is known as stop word</Description>
      </ImageSection>

      <SEOSection>
        <SEOText>SEO Improvements</SEOText>
        <SEOItem>Use good headings</SEOItem>
        <SEOItem>Add H1 Heading to this page</SEOItem>
        <SEOItem>Add meta description</SEOItem>
        <SEOItem>Improve keyword distribution</SEOItem>
        <SEOItem>Improve the page title</SEOItem>
      </SEOSection>
    </Container1>

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
  border-radius: 10px;
  border-color: grey;  
  border-style: solid;
  border-width: 1px;
  background-color: #fff;
  align-items: start;
  justify-content: center;
  padding: 18px 3px;
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
  margin-top: 52px;
  width: 168px;
  max-width: 100%;
  align-items: center;
  color: #fff;
  font-weight: 500;
  white-space: nowrap;
  text-align: center;
  justify-content: center;
  padding: 15px 40px;
  @media (max-width: 991px) {
    margin-top: 40px;
    white-space: initial;
    padding: 0 20px;
  }
`;
const Container1 = styled.div`
  border-radius: 0px 0px 0px 0px;
  display: flex;
  max-width: 866px;
  flex-direction: column;
`;

const KeywordScore = styled.div`
  color: rgba(0, 0, 0, 1);
  align-self: start;
  padding-top: 3rem;
  font: 400 38px Lato, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
    font-size: 40px;
  }
`;

const ScoreWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  border-radius: 0px 0px 0px 0px;
  align-self: end;
  aspect-ratio: 1.04;
  width: 265px;
  max-width: 100%;
  color: rgba(0, 0, 0, 1);
  text-align: center;
  margin: 45px 166px 0 0;
  padding: 276px 50px 17px;
  font: 700 32px Lato, sans-serif;
  @media (max-width: 991px) {
    margin: 40px 10px 0 0;
    padding: 100px 20px 0;
  }
`;

const Image = styled.img`
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
`;

const KeywordCheckOverview = styled.div`
  color: rgba(0, 0, 0, 1);
  text-align: center;
  align-self: start;
  margin-top: 74px;
  font: 400 38px Lato, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
    font-size: 40px;
  }
`;

const DetailsWrapper = styled.div`
  align-self: end;
  display: flex;
  margin-top: 76px;
  width: 100%;
  max-width: 638px;
  flex-direction: column;
  align-items: start;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const DetailImage = styled.img`
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

const MetaSection = styled.div`
  display: flex;
  gap: 30px 80px;
  flex-wrap: wrap;
  margin: 70px 0 0 15px;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const MetaText = styled.div`
  color: rgba(0, 0, 0, 1);
  flex-basis: auto;
  font: 300 20px Lato, sans-serif;
`;

const MetaContent = styled.div`
  border-radius: 15px;
  background-color: rgba(217, 217, 217, 1);
  display: flex;
  flex-direction: column;
  align-items: start;
  margin: auto 0;
`;

const MetaBar = styled.div`
  border-radius: 15px;
  background-color: rgba(55, 159, 255, 1);
  display: flex;
  width: 125px;
  height: 15px;
`;

const HtmlSection = styled.div`
  display: flex;
  gap: 30px 74px;
  flex-wrap: wrap;
  margin: 40px 0 0 13px;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const HtmlText = styled.div`
  color: rgba(0, 0, 0, 1);
  flex-basis: auto;
  font: 300 20px Lato, sans-serif;
`;

const HtmlContent = styled.div`
  border-radius: 21px;
  background-color: rgba(217, 217, 217, 1);
  display: flex;
  flex-direction: column;
  align-items: start;
  flex-grow: 1;
  flex-basis: 0;
  width: fit-content;
  margin: auto 0;
`;

const HtmlBar = styled.div`
  border-radius: 15px;
  background-color: rgba(55, 159, 255, 1);
  display: flex;
  width: 220px;
  height: 15px;
`;

const OthersSection = styled.div`
  display: flex;
  gap: 30px 80px;
  color: rgba(0, 0, 0, 1);
  white-space: nowrap;
  flex-wrap: wrap;
  margin: 42px 0 0 17px;
  font: 300 20px Lato, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
    white-space: initial;
  }
`;

const OthersBar = styled.div`
  border-radius: 15px;
  background-color: rgba(55, 159, 255, 1);
  display: flex;
  width: 315px;
  max-width: 100%;
  height: 15px;
  margin: auto 0;
`;
const Div = styled.div`
  display: flex;
  max-width: 767px;
  flex-direction: column;
  align-items: start;
`;

const Div2 = styled.div`
  display: flex;
  width: 317px;
  max-width: 100%;
  gap: 20px 56px;
  font-family: Lato, sans-serif;
  flex-wrap: wrap;
`;

const MetaAttributes = styled.div`
  color: rgba(0, 0, 0, 1);
  font-size: 36px;
  font-weight: 500;
  flex-grow: 1;
  width: 294px;
  flex-basis: auto;
  @media (max-width: 991px) {
    font-size: 40px;
  }
`;

const Div3 = styled.div`
  background-color: rgba(55, 159, 255, 1);
  border-radius: 50%;
  align-self: start;
  margin-top: 7px;
  font-size: 15px;
  color: rgba(255, 255, 255, 1);
  font-weight: 400;
  white-space: nowrap;
  width: 36px;
  height: 36px;
  padding: 16px 9px 27px;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div4 = styled.div`
  display: flex;
  margin-top: 52px;
  width: 183px;
  max-width: 100%;
  gap: 150px;
  justify-content: space-between;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const Title = styled.div`
  color: rgba(0, 0, 0, 1);
  font: 400 38px Lato, sans-serif;
  @media (max-width: 991px) {
    font-size: 40px;
  }
`;

const Div5 = styled.div`
  display: flex;
  gap: 8px;
  margin: auto 0;
`;

const Div6 = styled.div`
  background-color: rgba(55, 159, 255, 1);
  border-radius: 50%;
  display: flex;
  width: 26px;
  height: 26px;
`;

const Div7 = styled.div`
  background-color: rgba(55, 159, 255, 1);
  border-radius: 50%;
  display: flex;
  width: 26px;
  height: 26px;
`;

const Div8 = styled.div`
  background-color: rgba(55, 159, 255, 1);
  border-radius: 50%;
  display: flex;
  width: 26px;
  height: 26px;
`;

const Div9 = styled.div`
  align-self: stretch;
  min-height: 1px;
  margin-top: 25px;
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 1);
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Google = styled.div`
  background-color: rgba(55, 159, 255, 0.21);
  align-self: stretch;
  margin-top: 52px;
  width: 100%;
  color: rgba(0, 0, 0, 1);
  white-space: nowrap;
  padding: 26px;
  font: 400 22px Lato, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
    white-space: initial;
    padding: 0 20px;
  }
`;

const Div10 = styled.div`
  display: flex;
  margin-top: 26px;
  gap: 20px;
  color: rgba(0, 0, 0, 1);
  font: 500 24px Lato, sans-serif;
`;

const Img = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 35px;
  border-radius: 50%;
`;

const InthetitleGoogle = styled.div`
  flex-basis: auto;
  margin: auto 0;
`;

const Div11 = styled.div`
  display: flex;
  margin-top: 38px;
  width: 458px;
  max-width: 100%;
  gap: 30px 36px;
  flex-wrap: wrap;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const MetaDescription = styled.div`
  color: rgba(0, 0, 0, 1);
  flex-grow: 1;
  width: 244px;
  flex-basis: auto;
  font: 400 38px Lato, sans-serif;
  @media (max-width: 991px) {
    font-size: 40px;
  }
`;

const Div12 = styled.div`
  display: flex;
  gap: 8px;
  margin: auto 0;
`;

const Div13 = styled.div`
  background-color: rgba(55, 159, 255, 1);
  border-radius: 50%;
  display: flex;
  width: 26px;
  height: 26px;
`;

const Div14 = styled.div`
  background-color: rgba(55, 159, 255, 1);
  border-radius: 50%;
  display: flex;
  width: 26px;
  height: 26px;
`;

const Div15 = styled.div`
  background-color: rgba(55, 159, 255, 1);
  border-radius: 50%;
  display: flex;
  width: 26px;
  height: 26px;
`;

const Div16 = styled.div`
  align-self: stretch;
  min-height: 1px;
  margin-top: 25px;
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 1);
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const NotwithinthefirstcharactersGoogle = styled.div`
  background-color: rgba(251, 246, 221, 1);
  align-self: stretch;
  margin-top: 52px;
  width: 100%;
  color: rgba(0, 0, 0, 1);
  padding: 26px;
  font: 400 22px Lato, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
    padding: 0 20px;
  }
`;

const Div17 = styled.div`
  display: flex;
  margin-top: 52px;
  width: 386px;
  max-width: 100%;
  gap: 30px 36px;
  font-family: Lato, sans-serif;
  flex-wrap: wrap;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

// const HtmlContent = styled.div`
//   color: rgba(0, 0, 0, 1);
//   font-size: 56px;
//   font-weight: 700;
//   flex-grow: 1;
//   width: 363px;
//   flex-basis: auto;
//   @media (max-width: 991px) {
//     font-size: 40px;
//   }
// `;

const Div18 = styled.div`
  background-color: rgba(55, 159, 255, 1);
  border-radius: 50%;
  align-self: start;
  margin-top: 8px;
  font-size: 15px;
  color: rgba(255, 255, 255, 1);
  font-weight: 400;
  white-space: nowrap;
  width: 36px;
  height: 36px;
  padding: 12px 7px 20px;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div19 = styled.div`
  display: flex;
  margin-top: 52px;
  width: 313px;
  max-width: 100%;
  gap: 30px 36px;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const ImageSeo = styled.div`
  color: rgba(0, 0, 0, 1);
  flex-grow: 1;
  width: 171px;
  font: 300 38px Lato, sans-serif;
  @media (max-width: 991px) {
    font-size: 40px;
  }
`;

const Div20 = styled.div`
  display: flex;
  gap: 8px;
  margin: auto 0;
`;

const Div21 = styled.div`
  background-color: rgba(55, 159, 255, 1);
  border-radius: 40%;
  display: flex;
  width: 26px;
  height: 26px;
`;

const Div22 = styled.div`
  background-color: rgba(0, 0, 0, 1);
  border-radius: 40%;
  display: flex;
  width: 26px;
  height: 26px;
`;

const Div23 = styled.div`
  background-color: rgba(0, 0, 0, 1);
  border-radius: 50%;
  display: flex;
  width: 26px;
  height: 26px;
`;

const Div24 = styled.div`
  align-self: stretch;
  min-height: 1px;
  margin-top: 25px;
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 1);
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const NotfoundinanimagetitleGoogle = styled.div`
  background-color: rgba(251, 246, 221, 1);
  align-self: stretch;
  margin-top: 52px;
  width: 100%;
  color: rgba(0, 0, 0, 1);
  padding: 26px;
  font: 400 22px Lato, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
    padding: 0 20px;
  }
`;

const Div25 = styled.div`
  display: flex;
  margin-top: 26px;
  gap: 15px;
  color: rgba(0, 0, 0, 1);
  flex-wrap: wrap;
  font: 300 20px Lato, sans-serif;
`;

const FoundanattributeofanimageGoogle = styled.div`
  flex-basis: auto;
  flex-grow: 1;
  margin: auto 0;
`;

const Div26 = styled.div`
  display: flex;
  margin-top: 18px;
  gap: 20px;
  color: rgba(0, 0, 0, 1);
  font: 300 20px Lato, sans-serif;
`;

const FoundintheimageUrlsGoogle = styled.div`
  flex-basis: auto;
  flex-grow: 1;
  margin: auto 0;
`;

const Div27 = styled.div`
  display: flex;
  margin-top: 38px;
  width: 331px;
  max-width: 100%;
  gap: 30px 36px;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const Content = styled.div`
  color: rgba(0, 0, 0, 1);
  flex-grow: 1;
  width: 127px;
  font: 400 38px Lato, sans-serif;
  @media (max-width: 991px) {
    font-size: 40px;
  }
`;

const Div28 = styled.div`
  display: flex;
  gap: 8px;
  margin: auto 0;
`;

const Div29 = styled.div`
  background-color: rgba(55, 159, 255, 1);
  border-radius: 40%;
  display: flex;
  width: 26px;
  height: 26px;
`;

const Div30 = styled.div`
  background-color: rgba(55, 159, 255, 1);
  border-radius: 40%;
  display: flex;
  width: 26px;
  height: 26px;
`;

const Div31 = styled.div`
  background-color: rgba(55, 159, 255, 1);
  border-radius: 40%;
  display: flex;
  width: 26px;
  height: 26px;
`;

const Div32 = styled.div`
  align-self: stretch;
  min-height: 1px;
  margin-top: 30px;
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 1);
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Thetermisusedtimesinwords = styled.div`
  background-color: rgba(55, 159, 255, 0.21);
  align-self: stretch;
  margin-top: 52px;
  width: 100%;
  color: rgba(0, 0, 0, 1);
  padding: 26px 35px;
  font: 400 25px Lato, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
    padding: 0 20px;
  }
`;

const Div33 = styled.div`
  display: flex;
  margin-top: 26px;
  gap: 20px;
  color: rgba(0, 0, 0, 1);
  flex-wrap: wrap;
  font: 300 18px Lato, sans-serif;
`;

const Div34 = styled.div`
  display: flex;
  margin-top: 24px;
  gap: 20px;
  color: rgba(0, 0, 0, 1);
  font: 300 18px Lato, sans-serif;
`;

const Div35 = styled.div`
  display: flex;
  margin-top: 38px;
  width: 426px;
  max-width: 100%;
  gap: 30px 36px;
  flex-wrap: wrap;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const BoldandStrongtags = styled.div`
  color: rgba(0, 0, 0, 1);
  flex-grow: 1;
  flex-basis: auto;
  font: 400 38px Lato, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
    font-size: 40px;
  }
`;

const Div36 = styled.div`
  display: flex;
  gap: 8px;
  margin: auto 0;
`;

const Div37 = styled.div`
  background-color: rgba(55, 159, 255, 1);
  border-radius: 40%;
  display: flex;
  width: 26px;
  height: 26px;
`;

const Div38 = styled.div`
  background-color: rgba(0, 0, 0, 1);
  border-radius: 40%;
  display: flex;
  width: 26px;
  height: 26px;
`;

const Div39 = styled.div`
  background-color: rgba(0, 0, 0, 1);
  border-radius: 40%;
  display: flex;
  width: 26px;
  height: 26px;
`;

const Div40 = styled.div`
  align-self: stretch;
  min-height: 1px;
  margin-top: 25px;
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 1);
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const NostrongtagcontainsfollowingkeywordGoogle = styled.div`
  background-color: rgba(251, 246, 221, 1);
  align-self: stretch;
  margin-top: 62px;
  width: 100%;
  color: rgba(0, 0, 0, 1);
  padding: 26px 35px;
  font: 400 22px Lato, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
    padding: 0 20px;
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 967px;
`;

const Section = styled.div`
  display: flex;
  gap: 40px 56px;
  margin-top: 48px;

  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const Heading = styled.div`
  color: #000;
  font-weight: 600;
  font-size: ${(props) => (props.variant === "h1" ? "48px" : "56px")};
  flex-grow: 1;

  @media (max-width: 991px) {
    font-size: 40px;
  }
`;

const CircleGroup = styled.div`
  display: flex;
  gap: 12px;
  margin: auto 0;
`;

const Circle = styled.div`
  background-color: ${(props) => props.color};
  border-radius: 50%;
  width: 36px;
  height: 36px;
`;

const Separator = styled.div`
  margin-top: 35px;
  width: 100%;
  border: 1px solid #000;
`;

const HighlightedText = styled.div`
  background-color: ${(props) => props.bgColor};
  margin-top: 72px;
  padding: 36px 45px;
  font-weight: 600;
  font-size: 32px;
  color: #000;

  @media (max-width: 991px) {
    margin-top: 40px;
    padding: 0 20px;
  }
`;

const Label = styled.div`
  color: #000;
  font-size: 48px;
  font-weight: 600;
  flex-grow: 1;

  @media (max-width: 991px) {
    font-size: 40px;
  }
`;

const PercentageCircle = styled.div`
  background-color: #379fff;
  border-radius: 50%;
  font-size: 18px;
  color: #fff;
  font-weight: 600;
  width: 56px;
  height: 56px;
  padding: 16px 9px 27px;
  align-self: start;
  margin-top: 11px;

  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const ImageSection = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 48px;
  color: #000;
  font-weight: 500;
  font-size: 24px;

  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const CircleImage = styled.img`
  width: 45px;
  border-radius: 50%;
  object-fit: contain;
`;

const Description = styled.div`
  flex-grow: 1;
  margin: auto 0;
`;

const SEOSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 72px;
`;

const SEOText = styled.div`
  color: #000;
  font-size: 48px;
  font-weight: 600;
`;

const SEOItem = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  padding-left: 24px;
  color: #000;
  font-weight: 500;
  font-size: 24px;
`;



export default Keywordcheker;
