
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";import styled from "styled-components";
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
        <Sidebar activeSection={activeSection} onSectionClick={handleSectionClick}/>

    <Container>
      <Header>Backlink Checker</Header>
      <Content>
      <BacklinkInput placeholder="cbb.coastalbroadband.in" />
        {/* <Text>cbb.coastalbroadband.in</Text> */}
        <StatsSection>
          <StatColumn>
            <StatCard>
              <StatIcon
                loading="lazy"
                src={icon1}         />
              <Label>Domain Rating</Label>
              <Value>5</Value>
            </StatCard>
          </StatColumn>
          <StatColumn>
            <StatCard>
              <StatIcon
                loading="lazy"
                src={icon1}         />
              <Label>Domains</Label>
              <Value>1</Value>
            </StatCard>
          </StatColumn>
          <StatColumn>
            <StatCard>
              <StatIcon
                loading="lazy"
                src={icon2}      />
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
            <DomainLabel>Domain:
            <DomainLink>https://sms.tcndigital.in</DomainLink>
            </DomainLabel>
          </DomainInfo>
          <DomainDetails>

            <BacklinkDetails>
            <BacklinksLabel>Backlinks: 7</BacklinksLabel>

              <DetailIcon
                loading="lazy"
                src={icon3}                />
            </BacklinkDetails>
          </DomainDetails>
          <DoFollowLabel>Do - Follow:  7</DoFollowLabel>
          {/* <DoFollowValue></DoFollowValue> */}
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

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.h1`
  color: black;
  font-size: 48px;
  font-weight: 600;
  margin-bottom: 72px;
  @media (max-width: 991px) {
    font-size: 40px;
  }
`;

const Wrapper = styled.div`
  gap: 20px;
  display: flex;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
`;
const BacklinkInput = styled.input`
  font-family: Lato, sans-serif;
  border-radius: 12px;
  border-color: grey;
  margin-bottom: 5rem;
  border: 1px solid ;
  background-color: #fff;
  align-items: start;
  color: #000;
  font-weight: 500;
  justify-content: center;
  padding: 22px 4px;
  padding-left: 3rem;
  width: 25rem;
  @media (max-width: 991px) {
    max-width: 100%;
    padding: 0 20px;
  }
  &:not(:first-child) {
    margin-top: 48px;

  }
`;


const Content = styled.div`
  display: flex;
  margin-left: 10rem;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 873px;
  margin-top: 72px;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const Text = styled.div`
  background-color: white;
  color: black;
  font-size: 18px;
  font-weight: 500;
  padding: 24px 59px;
  border: 1px solid black;
  border-radius: 12px;
  white-space: nowrap;
  margin-bottom: 77px;
  @media (max-width: 991px) {
    padding: 0 20px;
    white-space: initial;
  }
`;

const StatsSection = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 56px;
  @media (max-width: 991px) {
    flex-direction: column;
    gap: 0;
  }
`;

const StatColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StatCard = styled.div`
  background-color: #379fff;
  color: black;
  font-weight: 400;
  width: 10rem;
  height: 10rem;
  padding: 11px 28px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const StatIcon = styled.img`
  width: 36px;
  aspect-ratio: 1;
  object-fit: contain;
`;

const Label = styled.div`
  font-size: 18px;
`;

const Value = styled.div`
  font-size: 36px;
  margin-top: 24px;
`;

const FollowStats = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 94px;
  @media (max-width: 991px) {
    flex-direction: column;
    gap: 0;
  }
`;

const FollowColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FollowCard = styled.div`
  background-color: #379fff;
  color: black;
  font-weight: 600;
  padding: 24px 51px 12px;
  border-radius: 12px;
  display: flex;
  width: 10rem;
  height: 10rem8;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Details = styled.div`
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  padding: 61px 44px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const DomainInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const DomainLabel = styled.div`
  font-size: 32px;
  font-weight: 500;
`;

const BacklinksLabel = styled.div`
  /* margin-left: 20px; */
  font-size: 32px;
  font-weight: 500;
`;

const DomainDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const DomainLink = styled.div`
  color: #379fff;
  font-size: 32px;
  font-weight: 500;
`;

const BacklinkDetails = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  gap: 20px;
`;

const DetailIcon = styled.img`
  width: 36px;
  aspect-ratio: 1;
  object-fit: contain;
`;

const DoFollowLabel = styled.div`
  font-size: 32px;
  font-weight: 500;
  margin-top: 20px;
`;

const DoFollowValue = styled.div`
  font-size: 32px;
  font-weight: 500;
`;

const FirstSeenLabel = styled.div`
  font-size: 32px;
  font-weight: 500;
  margin-top: 20px;
`;

const FirstSeenDate = styled.div`
  font-size: 32px;
  font-weight: 500;
  margin-left: 7rem;
  margin-top: 20px;
`;

export default Backlinkchecker;
