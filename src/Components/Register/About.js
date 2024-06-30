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
            <StyledImg
              src={image} alt="Email Icon"
            />
          </ImageColumn>
        </ContentWrapper>
      </Content>
      <Footer />
    </Container>
    </Main>
    </>
  );
}

// Styled components
const Main = styled.div`
  padding-left: 5rem;
  display: flex;
  z-index: 0;
`;


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
`;

const Header = styled.div`
  color: #000;
  font: 700 60px Lato, sans-serif;
  @media (max-width: 991px) {
    font-size: 40px;
  }
`;

const Content = styled.div`
  margin-top: 98px;
  width: 100%;
  max-width: 1511px;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  gap: 20px;
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
    margin-top: 31px;
  }
`;

const Title = styled.div`
  font: 700 56px Lato, sans-serif;
  @media (max-width: 991px) {
    font-size: 40px;
  }
`;

const Description = styled.div`
  margin-top: 59px;
  font: 500 36px Lato, sans-serif;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const LearnMoreButton = styled.div`
  border-radius: 12px;
  background-color: #007bfe;
  color: #fff;
  text-align: center;
  padding: 21px 50px;
  font: 600 18px Lato, sans-serif;
  align-self: start;
  margin-top: 54px;
  @media (max-width: 991px) {
    margin-top: 40px;
    padding: 0 20px;
  }
`;

const ImageColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 56%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
    margin-top: 25px;
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
  min-height: 183px;
  margin-top: 157px;
  width: 100%;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

export default About;
