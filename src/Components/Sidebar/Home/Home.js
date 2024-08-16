import React, { useState } from "react";
import image1 from "../../../Images/Search.png";
import image2 from "../../../Images/Group 187.png";

import Navbar from '../../Public/Navbar';
import Sidebar from '../../Public/Sidebar'; // Importing the Sidebar component
import Footer from '../../Public/Footer';

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
                    <InputText>Enter your website...</InputText>
                    <ActionButton>Check Score</ActionButton>
                </ContentContainer>
            </MainContainer>
            <Footer />
        </>
    );
};

// Styled components
const MainContainer = styled.div`
    display: flex;

`;

const ContentContainer = styled.div`
    border-radius: 0px;
    display: flex;
    width: 75%;
    flex-direction: column;
`;

const Header = styled.div`
    border-radius: 12px;
    background-color: rgba(229, 229, 229, 1);
    align-self: start;
    display: flex;
    margin-top: 2rem;
    margin-left: 3rem;
    gap: 18px;
    color: rgba(0, 0, 0, 1);
    flex-wrap: wrap;
    padding: 14px 36px;
    font: 600 18px Lato, sans-serif;
    @media (max-width: 991px) {
        padding: 0 20px;
    }
`;

const Logo = styled.img`
    aspect-ratio: 1;
    object-fit: contain;
    object-position: center;
    width: 24px;
`;

const SearchInput = styled.div`
    flex-basis: auto;
    flex-grow: 1;
`;

const Content = styled.div`
    margin-top: 48px;
    width: 100%;
    @media (max-width: 991px) {
        max-width: 100%;
        margin-top: 40px;
    }
`;

const TextContainer = styled.div`
    gap: 20px;
    margin-left: 2rem;
    display: flex;
    @media (max-width: 991px) {
        flex-direction: column;
        align-items: stretch;
        gap: 0px;
    }
`;

const Title = styled.div`
    color: rgba(0, 0, 0, 1);
    font: 700 72px Proxima Nova, sans-serif;
    @media (max-width: 991px) {
        max-width: 100%;
        margin-top: 4px;
        font-size: 40px;
    }
`;

const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    line-height: normal;
    width: 87%;
    margin-left: 20px;
    @media (max-width: 991px) {
        width: 100%;
    }
`;

const FeatureImage = styled.img`
    aspect-ratio: 3.12;
    object-fit: contain;
    object-position: center;
    width: 100%;
    border-radius: 0px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin-top: 108px;
    flex-grow: 1;
    @media (max-width: 991px) {
        max-width: 100%;
        margin-top: 40px;
    }
`;

const InputText = styled.div`
    border-radius: 12px;
    background-color: rgba(255, 255, 255, 1);
    align-self: center;
    margin-top: 144px;
    width: 467px;
    max-width: 100%;
    color: rgba(0, 0, 0, 1);
    padding: 24px 59px;
    font: 500 18px Lato, sans-serif;
    border: 1px solid grey;
    @media (max-width: 991px) {
        margin-top: 40px;
        padding: 0 20px;
    }
`;

const ActionButton = styled.div`
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
