import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import image from '../../Images/carbon_arrow-up.png';
import image1 from '../../Images/Group 11.png';
import image2 from '../../Images/homeimage.png';
import image3 from '../../Images/Homeprofile.png';
import image4 from '../../Images/Apple logo.png';
import image5 from '../../Images/Nvidia logo.png';
import image6 from '../../Images/Samsung logo.png';
import image7 from '../../Images/Microsoft logo.png';
import image8 from '../../Images/Quick.png';
import image9 from '../../Images/Actionable.png';
import image10 from '../../Images/Focussed.png';
import image11 from '../../Images/Homelast.png';
import Sidebar from '../Public/Sidebar';

import Navbar from "./Navbar";
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

  console.log('Rendering Project with handleSectionClick:', handleSectionClick);



  return (
    <>
      <Navbar />
      <Sidebar activeSection={activeSection} onSectionClick={handleSectionClick}/>
      <Main>

        <HeroSection>
          <HeroContent>
            <TitleSection>
              <Title>Introducing</Title>
              <Subtitle>SEO Impact</Subtitle>
            </TitleSection>
            <Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.
            </Description>
            <ActionRow>
              <Button>Get Started</Button>
              <Icon src={image} alt="Arrow" />
              <MoreInfo>Click here to know more!</MoreInfo>
            </ActionRow>
            <InputField>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your website here..."
              />
            </InputField>
            <CheckScoreButton>Check Score</CheckScoreButton>
          </HeroContent>
          <ImageColumn>
            <ResponsiveImage src={image1} alt="SEO Impact" />
          </ImageColumn>
        </HeroSection>

        <TestimonialSection>
          <TestimonialImage src={image2} alt="SEO Tool" />
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
        </TestimonialSection>

        <TrustedCompaniesSection>
          <SectionHeader>
            Trusted <Highlight>By Many Companies</Highlight>
          </SectionHeader>
          <LogoGrid>
            <CompanyLogo src={image4} alt="Apple" />
            <CompanyLogo src={image7} alt="Microsoft" />
            <CompanyLogo src={image6} alt="Samsung" />
            <CompanyLogo src={image5} alt="Nvidia" />
          </LogoGrid>
        </TrustedCompaniesSection>

        <StatisticsSection>
          <Statistic>
            <StatValue>5M</StatValue>
            <StatDescription>
              Marketing professionals <Highlight>are using SEO Impact!</Highlight>
            </StatDescription>
          </Statistic>
          <Statistic>
            <StatValue>21</StatValue>
            <StatDescription>
              International Awards <Highlight>as best SEO suite software</Highlight>
            </StatDescription>
          </Statistic>
          <Statistic>
            <StatValue>30%</StatValue>
            <StatDescription>
              Over 300 Companies <Highlight>use SEO Impact as their Marketing tool!</Highlight>
            </StatDescription>
          </Statistic>
        </StatisticsSection>

        <CallToAction>
          Unlock your success now with our <Highlight>SEO Tools</Highlight>
        </CallToAction>

        <FeaturesSection>
          <Feature>
            <FeatureIcon src={image8} alt="Quick" />
            <FeatureText>Quick</FeatureText>
          </Feature>
          <Feature>
            <FeatureIcon src={image9} alt="Actionable" />
            <FeatureText>Actionable</FeatureText>
          </Feature>
          <Feature>
            <FeatureIcon src={image10} alt="Focused" />
            <FeatureText>Focused</FeatureText>
          </Feature>
        </FeaturesSection>

        <InsightsSection>
          <InsightsContent>
            <InsightsTitle>Increase your Market Insights</InsightsTitle>
            <InsightsDescription>
              Lorem ipsum dolor sit amet consectetur. Quis eget vivamus neque
              velit enim id urna pharetra vel. Sapien ut natoque facilisi tortor
              viverra eget. Amet rhoncus leo sed nulla est senectus morbi tellus
              ornare. Justo curabitur iaculis id senectus sodales mattis sed
              mattis nisl. Phasellus ipsum ultricies.
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
`;

const Title = styled.h1`
  font-size: 50px;
  color: #212121;
  margin: 0;
`;

const Subtitle = styled.h2`
  font-size: 42px;
  color: #379fff;
  margin: 0;
`;

const Description = styled.p`
  font-size: 20px;
  color: grey;
  margin-bottom: 20px;
`;

const ActionRow = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 20px;
`;

const Button = styled.button`
  padding: 16px 40px;
  background-color: #007bfe;
  color: #fff;
  border-radius: 12px;
  border: none;
`;

const Icon = styled.img`
  width: 20px;
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
  padding: 16px 18px;
  margin-bottom: 20px;

  input {
    flex: 1;
    border: none;
    outline: none;
  }
`;

const CheckScoreButton = styled(Button)`
  align-self: center;
`;

const ImageColumn = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ResponsiveImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const TestimonialSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding: 40px 20px;
`;

const TestimonialImage = styled.img`
  width: 100%;
  max-width: 800px;
  border-radius: 40px;
  box-shadow: 0px 1px 30px 0px rgba(0, 0, 0, 0.16);
`;

const TestimonialContent = styled.div`
  text-align: center;
`;

const TestimonialText = styled.p`
  font-size: 40px;
  font-weight: 600;
  padding: 0 20px;
`;

const Highlight = styled.span`
  color: #379fff;
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-top: 40px;
`;

const ProfileInfo = styled.div`
  margin-top: 20px;
  text-align: center;
`;

const ProfileName = styled.p`
  font-size: 24px;
  font-weight: 700;
`;

const ProfileTitle = styled.p`
  color: #a4a4a4;
`;

const SourceText = styled.p`
  color: #7a7a7b;
`;

const TrustedCompaniesSection = styled.div`
  text-align: center;
  padding: 60px 20px;
`;

const SectionHeader = styled.h2`
  font-size: 52px;
  font-weight: 300;
  color: #212121;
`;

const LogoGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;
  margin-top: 40px;
`;

const CompanyLogo = styled.img`
  width: 170px;
  height: auto;
`;

const StatisticsSection = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 60px 20px;
  background-color: #ebf5ff;
  flex-wrap: wrap;
  gap: 20px;
`;

const Statistic = styled.div`
  text-align: center;
  flex: 1;
  max-width: 200px;
`;

const StatValue = styled.h3`
  font-size: 48px;
  color: #212121;
`;

const StatDescription = styled.p`
  font-size: 20px;
  color: grey;
`;

const CallToAction = styled.div`
  text-align: center;
  padding: 40px 20px;
  font-size: 36px;
`;

const FeaturesSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
  padding: 60px 20px;
`;

const Feature = styled.div`
  text-align: center;
  flex: 1;
  max-width: 200px;
`;

const FeatureIcon = styled.img`
  width: 100px;
  height: auto;
`;

const FeatureText = styled.p`
  font-size: 24px;
  font-weight: 600;
  margin-top: 20px;
`;

const InsightsSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 20px;
  background-color: #f7f7f7;
  gap: 20px;
`;

const InsightsContent = styled.div`
  text-align: center;
  max-width: 600px;
`;

const InsightsTitle = styled.h2`
  font-size: 36px;
`;

const InsightsDescription = styled.p`
  font-size: 20px;
  color: grey;
  margin-top: 20px;
`;

const LearnMoreButton = styled(Button)`
  margin-top: 20px;
`;

const InsightsImage = styled.img`
  width: 100%;
  max-width: 800px;
  height: auto;
`;

const FooterCallToAction = styled.div`
  text-align: center;
  padding: 60px 20px;
  background-color: #FF5C00;
  color: white;
`;

const CallToActionText = styled.h3`
  font-size: 36px;
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
