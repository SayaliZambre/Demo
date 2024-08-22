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

  console.log('Rendering Project with handleSectionClick:', handleSectionClick);

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

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Content = styled.div`
  flex: 1;
  padding: 24px;

  @media (max-width: 768px) {
    padding: 16px;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Logo = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 16px;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 8px;
  }
`;

const SearchInput = styled.input`
  flex: 1;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 8px;
  }
`;

const MainContent = styled.div`
  background-color: #fff;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 16px;
  }
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const ProjectContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ProjectItem = styled.div`
  width: calc(50% - 16px);
  margin-bottom: 16px;
  padding: 16px;
  background-color: #f5f5f5;
  border-radius: 8px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ProjectName = styled.div`
  font-weight: bold;
  margin-bottom: 8px;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const Actions = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    font-size: 14px;
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
  align-items: center;
  margin-top: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ProjectImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 16px;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 8px;
  }
`;

const Details = styled.div`
  flex: 1;
`;

const Detail = styled.div`
  margin-bottom: 4px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export default Project;
