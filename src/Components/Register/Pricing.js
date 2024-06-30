import * as React from "react";
import styled from "styled-components";
import image from '../../Images/pricing.png';
import Navbar from "./Navbar";
import Footer from './Footer';



function Pricing() {
  return (
<>
<Navbar/>
    <Container>
      <Column>
        <TextContainer>
          <Heading>Unlock</Heading>
          <Subheading>success with our SEO tools.</Subheading>
          <Description>Don’t wait just buy the plan and enjoy your success</Description>
        </TextContainer>
      </Column>
      <ColumnWide>
        <PricingContainer>
          <PricingTitle>Pricing</PricingTitle>
          <StyledImg
            src={image} alt="Email Icon"
          />
        </PricingContainer>
      </ColumnWide>
    </Container>
    <Footer/>
    </>

  );
}

const Container = styled.div`
  gap: 20px;
  display: flex;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 31%;
  margin-left: 0px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const TextContainer = styled.div`
  display: flex;
  margin-top: 500px;
  flex-direction: column;
  color: #000;
  font-weight: 600;
  padding: 0 20px;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const Heading = styled.div`
  color: #007bfe;
  font: 700 72px Lato, sans-serif;
  @media (max-width: 991px) {
    font-size: 40px;
  }
`;

const Subheading = styled.div`
  margin-top: 24px;
  font: 56px Lato, sans-serif;
  @media (max-width: 991px) {
    font-size: 40px;
  }
`;

const Description = styled.div`
  margin-top: 71px;
  font: 48px Lato, sans-serif;
  @media (max-width: 991px) {
    margin-top: 40px;
    font-size: 40px;
  }
`;

const ColumnWide = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 69%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const PricingContainer = styled.div`
  display: flex;
  /* flex-grow: 1; */
  flex-direction: column;
  font-size: 54px;
  /* color: #000; */
  font-weight: 700;
  white-space: nowrap;
  padding: 0 20px;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
    font-size: 40px;
    white-space: initial;
  }
`;

const PricingTitle = styled.div`
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  -webkit-text-stroke-width: 1;
  -webkit-text-stroke-color: #000;
  font-family: Lato, sans-serif;
  /* border-color: rgba(0, 0, 0, 1); */
  /* border-style: solid; */
  border-width: 1px;
  @media (max-width: 991px) {
    max-width: 100%;
    font-size: 40px;
  }
`;

const StyledImg = styled.img`
  aspect-ratio: 1.15;
  object-fit: auto;
  object-position: center;
  width: 910px;
  fill: rgba(55, 159, 255, 0.07);
  align-self: end;
  margin-top: 204px;
  max-width: 100%;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

export default Pricing;
