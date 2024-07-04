import React from 'react';
import styled from 'styled-components';
import image from '../../Images/pana.png';
import Navbar from './Navbar';

function About() {
  return (
    <>
      <Navbar />
      <Main>
        <Container>
          <Header>About Us</Header>
          <Content>
            <ContentWrapper>
              <TextColumn>
                <TextBlock>
                  <Title>SEO Impact</Title>
                  <Description>
                    SEO, or Search Engine Optimization, is the practice of enhancing
                    a website's visibility on search engines like Google, Bing, and
                    Yahoo. The main goal of SEO Impact is to improve a site's
                    ranking in search engine results pages (SERPs) to attract more
                    organic (non-paid) traffic.
                  </Description>
                  <LearnMoreButton>Learn More</LearnMoreButton>
                </TextBlock>
              </TextColumn>
              <ImageColumn>
                <StyledImg src={image} alt="Email Icon" />
              </ImageColumn>
            </ContentWrapper>
          </Content>
          <Footer />
        </Container>

        {/* <Container1>
          <Section>
            <Column>
              <JobCategory>
                <Title1>Job Openings</Title1>
                <Subtitle>Business Development</Subtitle>
                <Position>Associate Business Analyst</Position>
              </JobCategory>
            </Column>
            <Column>
              <JobCategory>
                <Subtitle>Software Development</Subtitle>
                <Position>Software Developer</Position>
                <Position>Software Analyst</Position>
                <Position>UX Designer</Position>
              </JobCategory>
            </Column>
          </Section>
          <Section>
            <Column>
              <JobCategory>
                <Subtitle>Design</Subtitle>
                <Position>Director, Research</Position>
              </JobCategory>
            </Column>
            <Column>
              <JobCategory>
                <Subtitle>Cloud Operations</Subtitle>
                <Position>Azure Specialist</Position>
                <Position>Amazon Cloud Operations</Position>
                <Position>AWS Key 2 Specialist</Position>
              </JobCategory>
            </Column>
          </Section>
          <Section>
            <Column>
              <JobCategory>
                <Subtitle>Product</Subtitle>
                <Position>Product Designer</Position>
                <Position>Product Manager</Position>
              </JobCategory>
            </Column>
            <Column>
              <JobCategory>
                <Subtitle>Lorem ipsum dolor</Subtitle>
                <Position>Azure Specialist</Position>
                <Position>Amazon Cloud Operations</Position>
                <Position>AWS Key 2 Specialist</Position>
              </JobCategory>
            </Column>
          </Section>
          <Section>
            <Column>
              <JobCategory>
                <Subtitle>Lorem ipsum</Subtitle>
                <Position>Lorem ipsum dolor</Position>
                <Position>Lorem ipsum dolor</Position>
              </JobCategory>
            </Column>
            <Column>
              <JobCategory>
                <Subtitle>Lorem ipsum dolor</Subtitle>
                <Position>Horem ipsum</Position>
                <Position>Yorem ipsum</Position>
                <Position>Rorem ipsum dolor</Position>
              </JobCategory>
            </Column>
          </Section>
        </Container1> */}
      </Main>
    </>
  );
}

// Styled components
const Main = styled.div`
  padding-left: 3rem;
  display: flex;
  flex-direction: column;
  z-index: 0;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 10px;
`;

const Header = styled.div`
  color: #000;
  font: 700 50px Lato, sans-serif;
  @media (max-width: 991px) {
    font-size: 35px;
  }
`;

const Content = styled.div`
  margin-top: 60px;
  width: 100%;
  max-width: 1200px;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 30px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  gap: 10px;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0;
  }
`;

const TextColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 44%;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  color: #000;
  margin-top: 6px;
  @media (max-width: 991px) {
    margin-top: 20px;
  }
`;

const Title = styled.div`
  font: 700 40px Lato, sans-serif;
  @media (max-width: 991px) {
    font-size: 30px;
  }
`;

const Description = styled.div`
  margin-top: 20px;
  font: 500 24px Lato, sans-serif;
  @media (max-width: 991px) {
    margin-top: 20px;
  }
`;

const LearnMoreButton = styled.div`
  border-radius: 8px;
  background-color: #007bfe;
  color: #fff;
  text-align: center;
  padding: 10px 30px;
  font: 600 16px Lato, sans-serif;
  align-self: start;
  margin-top: 30px;
  @media (max-width: 991px) {
    margin-top: 20px;
    padding: 0 10px;
  }
`;

const ImageColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 56%;
  margin-left: 10px;
  @media (max-width: 991px) {
    width: 100%;
    margin-top: 20px;
  }
`;

const StyledImg = styled.img`
  aspect-ratio: 1.52;
  object-fit: cover;
  width: 100%;
`;

const Footer = styled.div`
  background-color: #007bfe;
  align-self: stretch;
  min-height: 150px;
  margin-top: 100px;
  width: 100%;
  @media (max-width: 991px) {
    margin-top: 30px;
  }
`;

const Container1 = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10%;
  padding-right:10%;
`;

const Section = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  justify-content: space-between;
  margin-top: 60px;
  @media (max-width: 991px) {
    flex-wrap: wrap;
    padding-right: 10px;
    margin-top: 30px;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 48%;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const JobCategory = styled.div`
  display: flex;
  flex-direction: column;
  color: #007bfe;
  font-weight: 600;
  padding: 0 10px;
  margin-top: 30px;
`;

const Title1 = styled.div`
  font-size: 60px;
  font-family: Lato, sans-serif;
  @media (max-width: 991px) {
    font-size: 35px;
  }
`;

const Subtitle = styled.div`
  color: #000;
  margin-top: 60px;
  font-size: 36px;
  font-family: Lato, sans-serif;
  font-weight: 700;
  @media (max-width: 991px) {
    margin-top: 30px;
    font-size: 30px;
  }
`;

const Position = styled.div`
  margin-top: 20px;
  font-size: 24px;
  font-family: Lato, sans-serif;
  @media (max-width: 991px) {
    margin-top: 20px;
  }
`;

export default About;
