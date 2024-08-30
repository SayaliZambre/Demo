import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Navbar from '../../Public/Navbar';
import Sidebar from '../../Public/Sidebar'; 
import Footer from '../../Public/Footer';
import icon1 from './icon1.png';
import icon2 from './icon2.png';
import icon3 from './icon3.png';

function Backlinkchecker() {
  const [activeSection, setActiveSection] = useState('My Projects');
  const navigate = useNavigate(); 
  
  const handleSectionClick = (section) => {
    setActiveSection(section);
    console.log(`Section clicked: ${section}`);
  };

  const handleClick = () => {
    navigate('/Backlinkchecker');  
  };

  console.log('Rendering Project with handleSectionClick:', handleSectionClick);

  return (
    <>
      <Navbar />
      <Wrapper>
        <Sidebar activeSection={activeSection} onSectionClick={handleSectionClick} />
        <Container>
          <Header>Backlink Checker</Header>
          <Content>
            <BacklinkInput placeholder="cbb.coastalbroadband.in" />
            <StatsSection>
              <StatColumn>
                <StatCard>
                  <StatIcon loading="lazy" src={icon1} />
                  <Label>Domain Rating</Label>
                  <Value>5</Value>
                </StatCard>
              </StatColumn>
              <StatColumn>
                <StatCard>
                  <StatIcon loading="lazy" src={icon1} />
                  <Label>Domains</Label>
                  <Value>1</Value>
                </StatCard>
              </StatColumn>
              <StatColumn>
                <StatCard>
                  <StatIcon loading="lazy" src={icon2} />
                  <Label>Backlinks</Label>
                  <Value>7</Value>
                </StatCard>
              </StatColumn>
            </StatsSection>
            <FollowStats>
              <FollowColumn>
                <FollowCard>
                  <Label>Do Follow</Label>
                  <Value>7</Value>
                </FollowCard>
              </FollowColumn>
              <FollowColumn>
                <FollowCard>
                  <Label>No Follow</Label>
                  <Value>0</Value>
                </FollowCard>
              </FollowColumn>
            </FollowStats>
            <Details>
              <DomainInfo>
                <DomainLabel>
                  Domain: <DomainLink>https://sms.tcndigital.in</DomainLink>
                </DomainLabel>
              </DomainInfo>
              <DomainDetails>
                <BacklinkDetails>
                  <BacklinksLabel>Backlinks: 7</BacklinksLabel>
                  <DetailIcon loading="lazy" src={icon3} />
                </BacklinkDetails>
              </DomainDetails>
              <DoFollowLabel>Do - Follow: 7</DoFollowLabel>
              <FirstSeenLabel>First - Seen -</FirstSeenLabel>
              <FirstSeenDate>2022 - 10 - 15 13:39:29 +00.00</FirstSeenDate>
            </Details>
          </Content>
        </Container>
      </Wrapper>
      <Footer/>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  padding: 20px;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0;
    padding: 10px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Header = styled.h1`
  color: black;
  font-size: 40px;
  font-weight: 600;
  margin-bottom: 48px;
  text-align: center;
  @media (max-width: 991px) {
    font-size: 32px;
    margin-bottom: 32px;
  }
  @media (max-width: 576px) {
    font-size: 28px;
    margin-bottom: 24px;
  }
`;

const BacklinkInput = styled.input`
  font-family: Lato, sans-serif;
  border-radius: 12px;
  border: 1px solid grey;
  background-color: #fff;
  color: #000;
  font-weight: 500;
  padding: 16px;
  width: 100%;
  max-width: 25rem;
  margin-bottom: 1.5rem;
  @media (max-width: 991px) {
    padding: 12px;
    max-width: 100%;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 873px;
  margin: 48px auto;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 32px;
  }
  @media (max-width: 576px) {
    margin-top: 24px;
  }
`;

const StatsSection = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  margin-bottom: 48px;
  @media (max-width: 991px) {
    flex-direction: column;
    gap: 16px;
  }
`;

const StatColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 3rem;
  margin-bottom: 20px; /* Add this line to create space between StatColumn and StatCard */
`;

const StatCard = styled.div`
  background-color: #379fff;
  color: black;
  font-weight: 400;
  width: 100%;
  max-width: 9rem;
  height: 9rem;
  padding: 10px 24px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const StatIcon = styled.img`
  width: 32px;
  aspect-ratio: 1;
  object-fit: contain;
`;

const Label = styled.div`
  font-size: 16px;
`;

const Value = styled.div`
  font-size: 28px;
  margin-top: 16px;
`;

const FollowStats = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  margin-bottom: 72px;
  @media (max-width: 991px) {
    flex-direction: column;
    gap: 16px;
  }
`;

const FollowColumn = styled.div`
  flex: 1;
  display: flex;
  margin-left: 3rem;
  flex-direction: column;
  align-items: center;
`;

const FollowCard = styled.div`
  background-color: #379fff;
  color: black;
  font-weight: 600;
  padding: 20px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  max-width: 9rem;
  height: 9rem;
`;

const Details = styled.div`
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  padding: 48px 32px;
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  @media (max-width: 991px) {
    padding: 24px;
  }
`;

const DomainInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

const DomainLabel = styled.div`
  font-size: 24px;
  color: grey;
  font-weight: 500;
`;

const BacklinksLabel = styled.div`
  font-size: 24px;
  color: grey;
  font-weight: 500;
`;

const DomainDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

const DomainLink = styled.div`
  color: #379fff;
  font-size: 24px;
  font-weight: 500;
`;

const BacklinkDetails = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;
  gap: 16px;
`;

const DetailIcon = styled.img`
  width: 32px;
  aspect-ratio: 1;
  object-fit: contain;
`;

const DoFollowLabel = styled.div`
  font-size: 24px;
  font-weight: 500;
  color: grey;
  margin-top: 16px;
`;

const FirstSeenLabel = styled.div`
  font-size: 24px;
  font-weight: 500;
  color: grey;
  margin-top: 16px;
`;

const FirstSeenDate = styled.div`
  font-size: 24px;
  font-weight: 500;
  color: grey;
  margin-top: 16px;
`;

export default Backlinkchecker;
