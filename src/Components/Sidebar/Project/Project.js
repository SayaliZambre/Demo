import React, { useState } from "react";
import styled from "styled-components";
import Navbar from '../../Public/Navbar';
import Sidebar from '../../Public/Sidebar';
import Footer from '../../Public/Footer';

import image1 from "../../../Images/ic_round-plus.png";
import image2 from "../../../Images/Rectangle 147.png";

function Project() {
  const [activeSection, setActiveSection] = useState('My Projects');

  const handleSectionClick = (section) => {
    setActiveSection(section);
    console.log(`Section clicked: ${section}`);
  };

  return (
    <>
      <Navbar />
      <Wrapper>
        <Sidebar activeSection={activeSection} onSectionClick={handleSectionClick}/>
        <Content>
          <Header>
            <Logo src={image1} alt="logo" />
            <SearchInput
              type="text"
              placeholder="Search your domain, url or keyword..."
            />
          </Header>
          <MainContent>
            <Title>{activeSection}</Title>
            {activeSection === 'My Projects' && (
              <ProjectContainer>
                <ProjectItem>
                  <ProjectName>Project 01</ProjectName>
                  <Actions>
                    <Action>Edit</Action>
                    <Divider />
                    <Action>Delete</Action>
                  </Actions>
                  <ProjectDetails>
                    <ProjectImage src={image2} alt="project" />
                    <Details>
                      <Detail>Name: Network Development</Detail>
                      <Detail>Domain: cbb.coastalbroadband.in</Detail>
                    </Details>
                  </ProjectDetails>
                </ProjectItem>
              </ProjectContainer>
            )}
          </MainContent>
        </Content>
      </Wrapper>
      <Footer />
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Content = styled.div`
  flex: 1;
  padding: 16px;

  @media (min-width: 768px) {
    padding: 24px;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    margin-bottom: 24px;
  }
`;

const Logo = styled.img`
  width: 40px;
  height: 40px;
  margin-bottom: 8px;

  @media (min-width: 768px) {
    margin-right: 16px;
    margin-bottom: 0;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-top: 8px;

  @media (min-width: 768px) {
    flex: 1;
    margin-top: 0;
  }
`;

const MainContent = styled.div`
  background-color: #fff;
  padding: 16px;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    padding: 24px;
  }
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const ProjectItem = styled.div`
  width: 100%;
  margin-bottom: 16px;
  padding: 16px;
  background-color: #f5f5f5;
  border-radius: 8px;

  @media (min-width: 768px) {
    width: calc(50% - 16px);
    margin-bottom: 16px;
    margin-right: 16px;
  }

  &:nth-child(2n) {
    margin-right: 0;
  }
`;

const ProjectName = styled.div`
  font-weight: bold;
  margin-bottom: 8px;
  font-size: 18px;

  @media (min-width: 768px) {
    font-size: 20px;
  }
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

const Action = styled.div`
  color: #007bfe;
  cursor: pointer;
  margin-right: 8px;
`;

const Divider = styled.div`
  width: 1px;
  height: 12px;
  background-color: #ccc;
  margin: 0 8px;
`;

const ProjectDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 8px;

  @media (min-width: 768px) {
    width: 100px;
    height: 100px;
    margin-right: 16px;
    margin-bottom: 0;
  }
`;

const Details = styled.div`
  flex: 1;
`;

const Detail = styled.div`
  margin-bottom: 4px;
  font-size: 14px;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

export default Project;
