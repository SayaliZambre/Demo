import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import image1 from "../../../Images/Search.png";
import image2 from "../../../Images/Group 187.png";
import Navbar from '../../Public/Navbar';
import Sidebar from '../../Public/Sidebar'; 
import Footer from '../../Public/Footer';
import styled from "styled-components";

const Sidehome = () => {
    const [activeSection, setActiveSection] = useState('My Projects');
    const navigate = useNavigate(); 
    const handleSectionClick = (section) => {
      setActiveSection(section);
      console.log(`Section clicked: ${section}`);
    };
  
    const handleClick = () => {
      navigate('/Homemain');  
    };
  
    console.log('Rendering Project with handleSectionClick:', handleSectionClick);
  

    return (
        <>
            <Navbar />
            <MainContainer>
                <Sidebar // Using the imported Sidebar component
                    activeSection={activeSection}
                    onSectionClick={handleSectionClick}
                />
                <ContentContainer>
                    <Header>
                        <Logo loading="lazy" src={image1} />
                        <SearchInput>
                            Search your domain, url, or keyword...
                        </SearchInput>
                    </Header>
                    <Content>
                        <TextContainer>
                            <Title>
                                <span style={{ fontFamily: 'Lato, sans-serif', color: 'rgba(0,123,254,1)' }}>
                                    Experience{" "}
                                </span>
                                <span style={{ fontFamily: 'Lato, sans-serif' }}>
                                    seamless elegance on the go
                                </span>
                            </Title>
                            <ImageContainer>
                                <FeatureImage
                                    loading="lazy"
                                    src={image2} />
                            </ImageContainer>
                        </TextContainer>
                    </Content>
                    <Input placeholder="Enter your website..." />

                    {/* <InputText>Enter your website...</InputText> */}
                    <ActionButton onClick={handleClick}>Check Score</ActionButton>
                </ContentContainer>
            </MainContainer>
            <Footer />
        </>
    );
};

// Styled components
const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    @media (min-width: 768px) {
        flex-direction: row;
    }
`;

const ContentContainer = styled.div`
    border-radius: 0px;
    display: flex;
    width: 100%;
    flex-direction: column;
    @media (min-width: 768px) {
        width: 75%;
    }
`;

const Header = styled.div`
    border-radius: 12px;
    background-color: rgba(229, 229, 229, 1);
    align-self: start;
    display: flex;
    margin: 2rem 1rem 0 1rem;
    gap: 18px;
    color: rgba(0, 0, 0, 1);
    flex-wrap: wrap;
    padding: 14px 36px;
    font: 600 18px Lato, sans-serif;
    @media (max-width: 991px) {
        padding: 14px 20px;
        margin: 1rem;
    }
`;

const Logo = styled.img`
    aspect-ratio: 1;
    object-fit: contain;
    object-position: center;
    width: 24px;
`;

const Input = styled.input`
  font-family: Lato, sans-serif;
  border-radius: 12px;
  border-color: grey;
  border: 2px solid grey;
  background-color: #fff;
  color: #000;
  margin: 2rem 1rem 0 1rem;
  font-weight: 500;
  padding: 22px 3rem;
  width: 100%;
  max-width: 25rem;
  @media (max-width: 768px) {
    margin-left: 0;
    padding-left: 1rem;
  }
`;

const SearchInput = styled.div`
    flex-basis: auto;
    flex-grow: 1;
`;

const Content = styled.div`
    margin-top: 40px;
    width: 100%;
    @media (max-width: 991px) {
        margin-top: 20px;
    }
`;

const TextContainer = styled.div`
    gap: 20px;
    margin: 0 1rem;
    display: flex;
    flex-direction: column;
    @media (min-width: 768px) {
        flex-direction: row;
    }
`;

const Title = styled.div`
    color: rgba(0, 0, 0, 1);
    font: 600 40px Proxima Nova, sans-serif;
    margin-bottom: 20px;
    @media (min-width: 768px) {
        font-size: 72px;
        margin-bottom: 0;
    }
`;

const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    @media (min-width: 768px) {
        width: 87%;
        margin-left: 20px;
    }
`;

const FeatureImage = styled.img`
    aspect-ratio: 3.12;
    object-fit: contain;
    object-position: center;
    width: 100%;
    border-radius: 0px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin-top: 40px;
    @media (min-width: 768px) {
        margin-top: 108px;
    }
`;

const ActionButton = styled.div`
    border-radius: 12px;
    background-color: rgba(0, 123, 254, 1);
    align-self: center;
    margin: 40px 1rem;
    width: 100%;
    max-width: 188px;
    color: rgba(255, 255, 255, 1);
    text-align: center;
    padding: 16px 45px;
    font: 600 18px Lato, sans-serif;
    @media (max-width: 991px) {
        margin-top: 20px;
    }
`;

export default Sidehome;
