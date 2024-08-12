import React, { useState } from "react";
// import styles from './MyComponent.module.css';

import image1 from "../../../Images/Search.png";
import image2 from "../../../Images/Group 187.png";

import Navbar from '../../Public/Navbar';
import Sidebar from '../../Public/Sidebar';
import Footer from '../../Public/Footer';

// import React from "react";
import styled from "styled-components";

const Homeapp = () => {


    const [activeSection, setActiveSection] = useState('My Projects');

    const handleSectionClick = (section) => {
      setActiveSection(section);
      console.log(`Section clicked: ${section}`);
    };
  
    console.log('Rendering Project with handleSectionClick:', handleSectionClick);

    
  return (
    <>
    <Navbar />
    <MainContainer>
    <Sidebar activeSection={activeSection} onSectionClick={handleSectionClick}/>

      <TopSection>
        <Icon
          loading="lazy"
          src={image1}        
        />
        <SearchPlaceholder>
          Search your domain, url or keyword..
        </SearchPlaceholder>
      </TopSection>
      <ContentSection>
        <ContentWrapper>
          <TextColumn>
            <Heading>
              <span style={{ fontFamily: "Lato, sans-serif", color: "rgba(0,123,254,1)" }}>
                Experience{" "}
              </span>
              <span style={{ fontFamily: "Lato, sans-serif" }}>
                seamless elegance on the go{" "}
              </span>
            </Heading>
          </TextColumn>
          <ImageColumn>
            <MainImage
              loading="lazy"
              src={image2}            
            />
          </ImageColumn>
        </ContentWrapper>
      </ContentSection>
      <InputField>Enter your website....</InputField>
      <Button>Check Score</Button>
    </MainContainer>
    <Footer />
    </>
  );
};

// Styled components
const MainContainer = styled.div`
  /* border-radius: 0; */
  display: flex;
  /* flex-direction: column; */
`;

const TopSection = styled.div`
  border-radius: 12px;
  background-color: rgba(229, 229, 229, 1);
  align-self: start;
  display: flex;
  gap: 18px;
  color: rgba(0, 0, 0, 1);
  flex-wrap: wrap;
  padding: 14px 36px;
  font: 600 18px Lato, sans-serif;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const Icon = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 24px;
`;

const SearchPlaceholder = styled.div`
  flex-basis: auto;
  flex-grow: 1;
`;

const ContentSection = styled.div`
  margin-top: 48px;
  width: 100%;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const ContentWrapper = styled.div`
  gap: 20px;
  display: flex;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0;
  }
`;

const TextColumn = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 43%;
  margin-left: 0;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Heading = styled.div`
  color: rgba(0, 0, 0, 1);
  font: 700 72px Proxima Nova, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 4px;
    font-size: 40px;
  }
`;

const ImageColumn = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 57%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const MainImage = styled.img`
  aspect-ratio: 3.12;
  object-fit: contain;
  object-position: center;
  width: 100%;
  border-radius: 0;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  margin-top: 108px;
  flex-grow: 1;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const InputField = styled.div`
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 1);
  align-self: center;
  margin-top: 144px;
  width: 467px;
  max-width: 100%;
  color: rgba(0, 0, 0, 1);
  padding: 24px 59px;
  font: 500 18px Lato, sans-serif;
  border: 1px solid rgba(0, 0, 0, 1);
  @media (max-width: 991px) {
    margin-top: 40px;
    padding: 0 20px;
  }
`;

const Button = styled.div`
  border-radius: 12px;
  background-color: rgba(0, 123, 254, 1);
  align-self: center;
  margin-top: 72px;
  width: 188px;
  max-width: 100%;
  color: rgba(255, 255, 255, 1);
  text-align: center;
  padding: 16px 45px;
  font: 600 18px Lato, sans-serif;
  @media (max-width: 991px) {
    margin-top: 40px;
    padding: 0 20px;
  }
`;

export default Homeapp;
