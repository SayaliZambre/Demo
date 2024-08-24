import React from "react";
import styled, { css } from "styled-components";
import { Link } from 'react-router-dom';
import image1 from '../../Images/codicon_tools.png';
import image2 from '../../Images/fluent_home-12-filled.png';

function Sidebar({ activeSection, onSectionClick }) {
  console.log('Sidebar props:', { activeSection, onSectionClick });

  return (
    <Container>

<Section
        isActive={activeSection === 'My Projects'}
        onClick={() => onSectionClick && onSectionClick('My Projects')}
      >
        <StyledImg src={image2} alt="Home" />
        <Link to="/Sidehome">
          <Title>Home</Title>
        </Link>
      </Section>

      <Section
        isActive={activeSection === 'My Projects'}
        onClick={() => onSectionClick && onSectionClick('My Projects')}
      >
        <StyledImg src={image2} alt="Home" />
        <Link to="/Project">
          <Title>My Project</Title>
        </Link>
      </Section>

      <Section
        isActive={activeSection === 'Keyword Checker'}
        onClick={() => onSectionClick && onSectionClick('Keyword Checker')}
      >
        <StyledImg src={image1} alt="Tools" />
        <Link to="/keyword">
          <Title>Keyword Checker</Title>
        </Link>
      </Section>

      <Section
        isActive={activeSection === 'Ranking Checker'}
        onClick={() => onSectionClick && onSectionClick('Ranking Checker')}
      >
        <StyledImg src={image1} alt="Tools" />
        <Link to="/Ranking">
          <Title>Ranking Checker</Title>
        </Link>
        
          </Section>

      <Section
        isActive={activeSection === 'Backlink Checker'}
        onClick={() => onSectionClick && onSectionClick('Backlink Checker')}
      >
        <StyledImg src={image1} alt="Tools" />
        <Link to="/Backlink">
          <Title>Backlink Checker</Title>
        </Link>
            </Section>

      <Section
        isActive={activeSection === 'Snippet Generator'}
        onClick={() => onSectionClick && onSectionClick('Snippet Generator')}
      >
        <StyledImg src={image1} alt="Tools" />
        <Link to="/Snippet">
          <Title>Snippet Generator</Title>
        </Link>
        
            </Section>

      <Section
        isActive={activeSection === 'Keyword Research Tool'}
        onClick={() => onSectionClick && onSectionClick('Keyword Research Tool')}
      >
        <StyledImg src={image1} alt="Tools" />
        <Link to="/KeywordResearchTool">
          <Title>Keyword Research Tool</Title>
        </Link>    
          </Section>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 70vh;
  padding: 16px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
`;

const Section = styled.div`
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: #fff;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  margin-top: 16px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  ${({ isActive }) =>
    isActive &&
    css`
      background-color: #ebf5ff;
      color: #007bfe;
    `}

  &:first-child {
    margin-top: 0;
  }
`;

const StyledImg = styled.img`
  width: 24px;
  height: 24px;
  object-fit: cover;
`;

const Title = styled.div`
  font-family: Lato, sans-serif;
  flex-grow: 1;
`;

export default Sidebar;
