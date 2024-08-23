import * as React from "react";
import styled from "styled-components";
import image from '../../Images/Group 1000001826.png';
import image3 from '../../Images/click.png';
import image5 from '../../Images/Price2img.png';
import image2 from '../../Images/Pricedots.png';
import Navbar from "./Navbar";
import Footer from './Footer';

function Pricing() {
  return (
    <>
      <Navbar />
      <Main>
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
              <StyledImg src={image} alt="Pricing Image" />
            </PricingContainer>
          </ColumnWide>
        </Container>

        <Image src={image2} alt="Decorative Dots" />

        <Container1>
          <PlansWrapper>
            {plans.map((plan, index) => (
              <PlanColumn key={index}>
                <PlanCard>
                  <PlanContent>
                    <PlanHeader>
                      <PlanTitle>{plan.title}</PlanTitle>
                      <PlanPrice>{plan.price}</PlanPrice>
                      <PlanDiscount>
                        <OriginalPrice>{plan.originalPrice}</OriginalPrice>
                        <Discount>{plan.discount}</Discount>
                      </PlanDiscount>
                    </PlanHeader>
                    <PlanDescription>
                      <Separator />
                      <PlanSummary>{plan.summary}</PlanSummary>
                      <FeaturesHeader>Top Features :</FeaturesHeader>
                      {plan.features.map((feature, index) => (
                        <FeatureItem key={index}>
                          <FeatureIcon src={image3} alt="Feature Icon" />
                          <FeatureText>{feature}</FeatureText>
                        </FeatureItem>
                      ))}
                    </PlanDescription>
                    <ActionButton>{`Try ${plan.title}`}</ActionButton>
                  </PlanContent>
                </PlanCard>
              </PlanColumn>
            ))}
          </PlansWrapper>
        </Container1>

        <StyledDiv>
          <StyledColumn>
            <StyledDiv2>
              <StyledDiv3>Why are you waiting?</StyledDiv3>
              <StyledDiv4>Buy Now!!!</StyledDiv4>
            </StyledDiv2>
          </StyledColumn>
          <StyledColumn2>
            <StyledImg1 src={image5} alt="Promotional Image" />
          </StyledColumn2>
        </StyledDiv>
      </Main>
      <Footer />
    </>
  );
}

const plans = [
  {
    title: "Basic",
    price: "$350.00",
    originalPrice: "$450.00",
    discount: "35% OFF",
    summary: "More data and insights for growing businesses",
    features: [
      "1 Project to optimize your website",
      "Track 50 keywords",
      "Analyze up to 2500 pages",
      "Unlimited PDF Reports",
    ],
  },
  {
    title: "Premium",
    price: "$850.00",
    originalPrice: "$1050.00",
    discount: "35% OFF",
    summary: "More data and insights for growing businesses",
    features: [
      "3 Projects to optimize your website",
      "Track 200 keywords",
      "Analyze up to 2500 pages",
      "Unlimited PDF Reports",
    ],
  },
  {
    title: "Enterprise",
    price: "$2050.00",
    originalPrice: "$2550.00",
    discount: "35% OFF",
    summary: "More data and insights for growing businesses",
    features: [
      "5 Projects to optimize your website",
      "Track 5000 keywords",
      "Analyze up to 2500 pages",
      "Unlimited PDF Reports",
    ],
  },
];

const Main = styled.main`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 20px;
`;

const Container = styled.div`
  display: flex;
  gap: 20px;
  padding: 2rem 5rem;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Column = styled.div`
  flex: 1;
  min-width: 300px;
  margin-bottom: 2rem;
`;

const TextContainer = styled.div`
  margin-top: 4rem;
  padding: 0 20px;
  color: #000;
  @media (max-width: 768px) {
    margin-top: 2rem;
  }
`;

const Heading = styled.h1`
  color: #007bfe;
  font-size: 4rem;
  margin: 0;
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subheading = styled.h2`
  margin-top: 1rem;
  font-size: 2.5rem;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  margin-top: 1.5rem;
  font-size: 1.8rem;
  color: #a4a4a4;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const ColumnWide = styled.div`
  flex: 2;
  min-width: 300px;
`;

const PricingContainer = styled.div`
  padding: 0 20px;
`;

const PricingTitle = styled.h2`
  text-align: center;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-size: 3rem;
  color: #000;
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const StyledImg = styled.img`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  display: block;
`;

const Image = styled.img`
  width: 100%;
  margin: 2rem 0;
`;

const Container1 = styled.div`
  padding: 0 20px;
`;

const PlansWrapper = styled.div`
  display: flex;
  gap: 25px;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const PlanColumn = styled.div`
  flex: 1;
  min-width: 300px;
`;

const PlanCard = styled.div`
  background-color: #fff;
  border-radius: 20px;
  border: 2px solid #d3d3d3;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const PlanContent = styled.div`
  padding: 2rem;
  text-align: center;
`;

const PlanHeader = styled.div``;

const PlanTitle = styled.h3`
  background-color: #007bfe;
  color: #fff;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin: 0 auto;
`;

const PlanPrice = styled.p`
  font-size: 2rem;
  color: #007bfe;
  margin-top: 1rem;
`;

const PlanDiscount = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  font-size: 1rem;
  color: #d9d9d9;
`;

const OriginalPrice = styled.span`
  text-decoration: line-through;
`;

const Discount = styled.span``;

const PlanDescription = styled.div`
  margin-top: 1.5rem;
`;

const Separator = styled.div`
  border-top: 1px solid #000;
  margin: 1.5rem 0;
`;

const PlanSummary = styled.p`
  font-size: 1rem;
`;

const FeaturesHeader = styled.h4`
  color: #007bfe;
  font-size: 1.2rem;
  margin-top: 1rem;
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 0.5rem;
`;

const FeatureIcon = styled.img`
  width: 20px;
`;

const FeatureText = styled.p`
  font-size: 1rem;
  margin: 0;
`;

const ActionButton = styled.button`
  margin-top: 2rem;
  padding: 0.75rem 2rem;
  border-radius: 12px;
  background-color: #007bfe;
  color: #fff;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #005bb5;
  }
`;

const StyledDiv = styled.div`
  display: flex;
  gap: 20px;
  padding: 3rem;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
  }
`;

const StyledColumn = styled.div`
  flex: 1;
  min-width: 300px;
`;

const StyledDiv2 = styled.div`
  margin-top: 4rem;
  color: #000;
`;

const StyledDiv3 = styled.h1`
  color: #007bfe;
  font-size: 4rem;
  margin: 0;
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const StyledDiv4 = styled.h2`
  margin-top: 1rem;
  font-size: 2.5rem;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const StyledColumn2 = styled.div`
  flex: 2;
  min-width: 300px;
`;

const StyledImg1 = styled.img`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  display: block;
`;

export default Pricing;
