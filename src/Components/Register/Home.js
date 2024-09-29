import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';
import image from '../../Images/carbon_arrow-up.png';
import image1 from '../../Images/Group 11.png';
import image3 from '../../Images/Homeprofile.png';
import image4 from '../../Images/Apple logo.png';
import image5 from '../../Images/Nvidia logo.png';
import image6 from '../../Images/Samsung logo.png';
import image7 from '../../Images/Microsoft logo.png';
import image8 from '../../Images/Quick.png';
import image9 from '../../Images/Actionable.png';
import image10 from '../../Images/Focussed.png';
import image11 from '../../Images/Homelast.png';
import icon1 from '../../Images/heart.png';
import icon2 from '../../Images/daimond.png';
import icon3 from '../../Images/starhome.png';
import Home1 from '../../Images/Homeicon.png';
import Home3 from '../../Images/Home3.png';
import intro from '../../Images/Introducing.png';

import Navbar from "../Public/Navbar";
import Footer from './Footer';

const Home = () => {
  const [activeSection, setActiveSection] = useState('My Projects');
  const navigate = useNavigate();

  const handleSectionClick = (section) => {
    setActiveSection(section);
    console.log(`Section clicked: ${section}`);
  };

  const handleClick = () => {
    navigate('/KeywordResearchToolmain');
  };

  return (
    <>
      <Navbar />
      <Main>
        <HeroSection>
          <HeroContent>
            <TitleSection>
            <GlobalStyle />
            {/* <Image1 src={intro} alt="Arrow" /> */}
              <Title style={{ fontFamily: 'Waltograph' }}>Introducing</Title>
              <Subtitle>SEO Impact</Subtitle>
            </TitleSection>
            <Description>
              Korem ipsum dolor sit amet, consectetur adipiscing elit. 
              Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
            </Description>
            <ActionRow>
              <Button>Get Started</Button>
              <Icon src={image} alt="Arrow" />
              <MoreInfo>Click here to know more!</MoreInfo>
            </ActionRow>
            <InputField>
              <input type="email" name="email" id="email" placeholder="Enter your website here..." />
            </InputField>
            <CheckScoreButton>Check Score</CheckScoreButton>
          </HeroContent>
          <ImageColumn>
            <ResponsiveImage src={image1} alt="SEO Impact" />
          </ImageColumn>
        </HeroSection>

        <BlueSection>
          <BlueBackground>
            <TopImage src={Home1} alt="Home1" />
          </BlueBackground>
          <BottomImage src={Home3} alt="Home1" />
        </BlueSection>

        <TestimonialContent>
          <TestimonialText>
            <Highlight>“SEO Impact</Highlight> - a Keyword Research tool like Google Trends, Woorank, Seobility”
          </TestimonialText>
          <ProfileImage src={image3} alt="Profile" />
          <ProfileInfo>
            <ProfileName>Emily Brown</ProfileName>
            <ProfileTitle>SEO Impact, Marketing Specialist</ProfileTitle>
            <SourceText>Source: SEO Impact Reviews</SourceText>
          </ProfileInfo>
        </TestimonialContent>

        <TrustedCompaniesSection>
          <SectionHeader>Trusted By Many Companies</SectionHeader>
          <PartnerLogos>
            <PartnerLogosContainer>
              <PartnerLogosWrapper>
                <PartnerLogo src={image4} alt="Apple" />
                <PartnerLogo src={image7} alt="Microsoft" />
                <PartnerLogo src={image6} alt="Samsung" />
                <PartnerLogo src={image5} alt="Nvidia" />
              </PartnerLogosWrapper>
            </PartnerLogosContainer>
          </PartnerLogos>
        </TrustedCompaniesSection>

        <MarketingStats>
          <StatsRow>
            <StatItem>
              <StatIcon bgColor="rgba(249, 47, 96, 1)">
                <StatIconImg src={icon1} alt="Marketing professionals icon" />
              </StatIcon>
              <StatNumber bgColor="rgba(249, 47, 96, 0.1)">5M</StatNumber>
              <Bold>
                Marketing professionals <StatsTextLight>are using SEO Impact!</StatsTextLight>
              </Bold>
            </StatItem>
            <StatItem>
              <StatIcon bgColor="rgba(255, 92, 0, 1)">
                <StatIconImg src={icon2} alt="International awards icon" />
              </StatIcon>
              <StatNumber bgColor="rgba(255, 92, 0, 0.3)">21</StatNumber>
              <Bold>
                International Awards <StatsTextLight>as best SEO suite software</StatsTextLight>
              </Bold>
            </StatItem>
            <StatItem>
              <StatIcon bgColor="rgba(0, 123, 254, 1)">
                <StatIconImg src={icon3} alt="Companies using SEO Impact icon" />
              </StatIcon>
              <StatNumber bgColor="rgba(235, 245, 255, 1)">30%</StatNumber>
              <Bold>
                Over 300 Companies <StatsTextLight>use SEO Impact as their Marketing tool!</StatsTextLight>
              </Bold>
            </StatItem>
          </StatsRow>
        </MarketingStats>

        <CallToAction>
          Unlock your success now with our <Seo>SEO Tools</Seo>
        </CallToAction>

        <FeaturesSection>
          <Feature><FeatureIcon src={image8} alt="Quick" /></Feature>
          <Feature><FeatureIcon src={image10} alt="Focused" /></Feature>
          <Feature><FeatureIcon src={image9} alt="Actionable" /></Feature>
        </FeaturesSection>

        <InsightsSection>
          <InsightsContent>
            <InsightsTitle>Increase your Market Insights</InsightsTitle>
            <InsightsDescription>
              Lorem ipsum dolor sit amet consectetur. Quis eget vivamus neque velit enim id urna pharetra vel.
            </InsightsDescription>
            <LearnMoreButton>Learn More</LearnMoreButton>
          </InsightsContent>
          <InsightsImage src={image11} alt="Insights" />
        </InsightsSection>

        <FooterCallToAction>
          <CallToActionText>Get Started with SEO Impact today!</CallToActionText>
          <TrialOffer>Get 7 days access to all tools.</TrialOffer>
          <StartTrialButton>Start Trial</StartTrialButton>
        </FooterCallToAction>
      </Main>
      <Footer />
    </>
  );
};

// Styled Components
const Main = styled.div``;

const HeroSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
  align-items: center;
`;

const HeroContent = styled.div`
  flex: 1;
  padding: 20px;
  max-width: 100%;
`;

const TitleSection = styled.div`
  margin-bottom: 16px;
  margin-top: -5rem;
`;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const Title = styled.h1`
  font-family: 'Waltograph', sans-serif;
  font-size: 5rem;
  font-weight: 700;
  margin-left: 6rem;
  margin-bottom: -0.5rem;
`;

const Subtitle = styled.h2`
  font-size: 62px;
  font-weight: 600;
  color: #379fff;
  margin: -20px -5px;
  margin-bottom: 1rem;
  margin-left: 6rem;
`;

const Description = styled.p`
  font-size: 20px;
  color: grey;
  margin-left: 6rem;
  margin-bottom: 20px;
`;

const ActionRow = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 20px;
  margin-left: 6rem;
`;

const Button = styled.button`
  padding: 16px 40px;
  background-color: #007bfe;
  color: #fff;
  border-radius: 12px;
  border: none;
`;

const Icon = styled.img`
  width: 50px;
  height: 20px;
`;

const MoreInfo = styled.span`
  font-size: 13px;
  color: grey;
`;

const InputField = styled.div`
  display: flex;
  gap: 6px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  padding: 16px 16px;
  margin-bottom: 20px;
  margin-left: 6rem;

  input {
    flex: 1;
    border: none;
    outline: none;
  }
`;

const CheckScoreButton = styled(Button)`
  align-self: center;
  margin-left: 14rem;
`;

const ImageColumn = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image1 = styled.div`
  /* flex: 1; */
  /* display: flex; */
  /* justify-content: center; */
  width: 100px;
  align-items: center;
`;

const ResponsiveImage = styled.img`
  max-width: 55rem;
  height: auto;
`;

// Continue adding styled-components for the remaining sections...

const TestimonialSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding: 40px 20px;
`;
const Image = styled.div`
 height: 60px;
 width: 50px;

`;

const SectionTitle = styled.h2`
  margin-top: 27px;
  margin-left: 50rem;
  color: white;
  flex-grow: 1;
  width: 995px;

  @media (max-width: 991px) {
    max-width: 100%;
    font-size: 40px;
  }
`;

const SeeInsideContainer = styled.section`
border-radius: 0;
display: flex;
flex-direction: column;
color: #f5f5f7;
font: 600 48px Lato, sans-serif;

@media (max-width: 991px) {
  font-size: 40px;
}
`;


const BlueSection = styled.section`
  display: flex;
  /* padding-left: 1px; */
  flex-direction: column;
  border-radius: 0;
`;

const BlueBackground = styled.div`
  background-color: #007bfe;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px 0 296px;

  @media (max-width: 991px) {
    max-width: 100%;
    padding: 0 20px 100px 0;
  }
`;

const TopImage = styled.img`
  aspect-ratio: 1.52;
  object-fit: contain;
  object-position: center;
  width: 394px;
  border-radius: 0;
  margin-bottom: -59px;
  max-width: 100%;

  @media (max-width: 991px) {
    margin-bottom: 10px;
  }
`;

const BottomImage = styled.img`
  aspect-ratio: 1.39;
  object-fit: contain;
  object-position: center;
  width: 100%;
  border-radius: 0;
  align-self: center;
  z-index: 10;
  margin-top: -313px;
  max-width: 1580px;

  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: -200px;
  }
`;

const TestimonialContent = styled.div`
  text-align: center;
`;

const TestimonialText = styled.p`
  font-size: 45px;
  align-items: center;
margin-left: 5rem;
margin-right: 2rem;
  font-weight: 625;
  padding: 0 25px;
  /* padding-left: 30px; */
`;

const Highlight = styled.span`
  color: #379fff;
  /* font-size: 55px;
  font-weight: 500; */
`;

const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-top: 40px;
`;

const ProfileInfo = styled.div`
  margin-top: 20px;
  text-align: center;
`;

const ProfileName = styled.p`
  font-size: 32px;
  font-weight: 600;
`;

const ProfileTitle = styled.p`
  color: #7a7a7b;
  font-size: 24px;
  margin-top: -1rem;
  font-weight: 500;
`;

const SourceText = styled.p`
  color: #a4a4a4;
  font-size: 24px;
  margin-top: -1rem;
  font-weight: 500;
`;

const TrustedCompaniesSection = styled.div`
  text-align: center;
  padding: 60px 20px;
`;

const SectionHeader = styled.h2`
  font-size: 52px;
  font-weight: 600;
  color: #212121;
`;


const PartnerLogos = styled.section`
  display: flex;
  flex-direction: column;
`;

const PartnerLogosContainer = styled.div`
  background-color: #ebf5ff;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 73px;

  @media (max-width: 991px) {
    max-width: 100%;
    padding: 73px 20px;
  }
`;

const PartnerLogosWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 1238px;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const PartnerLogo = styled.img`
  object-fit: contain;
  object-position: center;
  max-width: 100%;
`;

const PartnerLogo1 = styled(PartnerLogo)`
  aspect-ratio: 2.9;
  width: 174px;
  align-self: start;
`;

const PartnerLogo2 = styled(PartnerLogo)`
  aspect-ratio: 4.72;
  width: 255px;
  align-self: start;
`;

const PartnerLogo3 = styled(PartnerLogo)`
  aspect-ratio: 3.01;
  width: 196px;
`;

const PartnerLogo4 = styled(PartnerLogo)`
  aspect-ratio: 5.32;
  width: 197px;
  margin: auto 0;
`;

const CallToAction = styled.div`
  text-align: center;
  padding: 100px 50px;
  font-size: 56px;
  font-weight: 500;
`;
const Seo = styled.div`
  text-align: center;
  padding: 0px 50px;
  font-size: 56px;
  font-weight: 500;
`;

const FeaturesSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
  padding: 60px 20px;
`;
const MarketingStats = styled.section`
  display: flex;
  justify-content: center;
  padding-left: 2rem; /* Add padding from the left */
`;

const StatsRow = styled.div`
  display: flex;
  gap: 20px; /* Space between the items */
`;

const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* Center items horizontally */
  text-align: center; /* Center text */
`;

const StatIcon = styled.div`
  border-radius: 50%;
  display: flex;
  width: 5rem;
  height: 5rem;
  margin-left: 15rem;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.bgColor};
`;

const StatIconImg = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  width: 60%;
`;

const StatNumber = styled.div`
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(0, 0, 0, 1);
  width: 300px; /* Adjust circle size */
  height: 300px; /* Make it a circle */
  font-size: 56px;
  background-color: ${(props) => props.bgColor};
  margin-top: 1rem;
`;

const StatsTextLight = styled.span`
  font-weight: 500;
  color: rgba(117, 117, 117, 1);
`;

const Bold = styled.span`
  font-weight: 600;
  font-size: 32px;
  padding: 0 2rem; /* Applies padding of 2rem to the left and right */
  margin-top: 1rem;
  text-align: center;
`;
const Feature = styled.div`
  text-align: center;
  flex: 1;
  max-width: 500px;
`;

const FeatureIcon = styled.img`
  width: 300px;
  height: auto;
`;

const FeatureText = styled.p`
  font-size: 24px;
  font-weight: 600;
  margin-top: 20px;
`;
const InsightsSection = styled.div`
  display: flex;
  flex-direction: row; /* Changed to row for left-right alignment */
  align-items: center; /* Center items vertically */
  padding: 60px 20px;
  background-color: #f7f7f7;
  gap: 20px; /* Space between content and image */
`;

const InsightsContent = styled.div`
  text-align: left; /* Changed to left for better readability */
  max-width: 500px;
  margin-left: 10rem;
`;

const InsightsTitle = styled.h2`
  font-size: 52px;
  /* margin-left: 5rem; */
  /* margin-right: 5rem; */
`;

const InsightsDescription = styled.p`
  font-size: 25px;
  color: grey;
  margin-top: 20px;
`;

const LearnMoreButton = styled(Button)`
  margin-top: 20px;
`;

const InsightsImage = styled.img`
  width: 600px;
  /* max-width: 800px; */
  margin-left: 15rem;
  height: auto;
`;


const FooterCallToAction = styled.div`
  text-align: center;
  padding: 60px 20px;
  background-color: #FF5C00;
  color: white;
`;

const CallToActionText = styled.h3`
  font-size: 40px;
`;

const TrialOffer = styled.p`
  font-size: 20px;
  margin-top: 20px;
`;

const StartTrialButton = styled(Button)`
  margin-top: 20px;
  background-color: white;
  color: #007bfe;
  border: 1px solid white;
`;

export default Home;
