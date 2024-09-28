import React from 'react';
import styled from 'styled-components';
import image from '../../Images/pana.png';
import Navbar from "../Public/Navbar";
import Footer from './Footer';


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
                <StyledImg src={image} alt="SEO Impact Illustration" />
              </ImageColumn>
            </ContentWrapper>
          </Content>
          {/* <Footer /> */}
        </Container>
      </Main>
      <Footer/>
    </>
  );
}

// Styled components
const Main = styled.div`
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  z-index: 0;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1rem;
`;

const Header = styled.h1`
  color: #000;
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-top: 2rem;
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-top: 1.5rem;
  }
`;

const Content = styled.div`
  margin-top: 3rem;
  width: 100%;
  max-width: 1200px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const TextColumn = styled.div`
  flex: 1;
  min-width: 300px;
`;

const TextBlock = styled.div`
  color: #000;
  margin-top: 1rem;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Description = styled.p`
  margin-top: 1rem;
  font-size: 1.25rem;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const LearnMoreButton = styled.button`
  border-radius: 8px;
  background-color: #007bfe;
  color: #fff;
  text-align: center;
  padding: 0.5rem 1.5rem;
  font-weight: 600;
  margin-top: 1.5rem;
  border: none;
  cursor: pointer;
  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
  }
`;

const ImageColumn = styled.div`
  flex: 1;
  min-width: 300px;
`;

const StyledImg = styled.img`
  width: 100%;
  height: auto;
  max-width: 100%;
`;

// const Footer = styled.div`
//   background-color: #007bfe;
//   width: 100%;
//   min-height: 150px;
//   margin-top: 3rem;
//   @media (max-width: 768px) {
//     margin-top: 2rem;
//     min-height: 100px;
//   }
// `;

export default About;
