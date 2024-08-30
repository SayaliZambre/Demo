import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from '../../Public/Navbar';
import Sidebar from '../../Public/Sidebar'; 
import Footer from '../../Public/Footer';
import styled from "styled-components";

const Backlink = () => {
    const [activeSection, setActiveSection] = useState('My Projects');
    const navigate = useNavigate(); 

    const handleSectionClick = (section) => {
        setActiveSection(section);
        console.log(`Section clicked: ${section}`);
    };

    const handleClick = () => {
        navigate('/Backlinkchecker');  
    };

    return (
        <>
        <Navbar/>
        <Wrapper>
            <Sidebar/>
            <RightColumn>
                <BacklinkSection>
                    <BacklinkTitle>Backlink Checker</BacklinkTitle>
                    <BacklinkForm>
                        <BacklinkInput placeholder="Enter your website...." />
                        <CheckButton onClick={handleClick}>Check</CheckButton>
                    </BacklinkForm>
                </BacklinkSection>
            </RightColumn>
        </Wrapper>
        <Footer/>
        </>
    );
};

const Wrapper = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px;
  @media (max-width: 991px) {
    flex-direction: column;
    gap: 0;
    padding: 10px;
  }
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
    margin-left: 0;
  }
`;

const BacklinkSection = styled.div`
  margin-top: 38px;
  padding: 0 20px;
  @media (max-width: 991px) {
    margin-top: 20px;
    padding: 0 15px;
  }
`;

const BacklinkTitle = styled.div`
  color: #000;
  font-size: 32px;
  font-weight: 550;
  font-family: Lato, sans-serif;
  @media (max-width: 991px) {
    font-size: 28px;
  }
  @media (max-width: 768px) {
    font-size: 24px;
  }
  @media (max-width: 480px) {
    font-size: 22px;
  }
`;

const BacklinkForm = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 48px;
  font-size: 18px;
  @media (max-width: 991px) {
    margin-top: 20px;
  }
  @media (max-width: 768px) {
    margin-top: 16px;
  }
  @media (max-width: 480px) {
    margin-top: 12px;
  }
`;

const BacklinkInput = styled.input`
  font-family: Lato, sans-serif;
  border-radius: 12px;
  border: 1px solid grey;
  background-color: #fff;
  color: #000;
  font-weight: 500;
  padding: 22px 4px;
  padding-left: 1rem;
  width: 100%;
  max-width: 500px;
  @media (max-width: 991px) {
    padding-left: 20px;
  }
  @media (max-width: 768px) {
    padding: 16px 12px;
    max-width: 100%;
  }
  @media (max-width: 480px) {
    padding: 14px 10px;
  }
`;

const CheckButton = styled.button`
  font-family: Lato, sans-serif;
  border-radius: 12px;
  background-color: #007bfe;
  color: #fff;
  font-weight: 600;
  text-align: center;
  padding: 14px 24px;
  margin-top: 24px;
  border: none;
  cursor: pointer;
  @media (max-width: 991px) {
    padding: 12px 20px;
    margin-top: 20px;
  }
  @media (max-width: 768px) {
    padding: 10px 18px;
    margin-top: 16px;
  }
  @media (max-width: 480px) {
    padding: 8px 16px;
    margin-top: 14px;
  }
`;

export default Backlink;
