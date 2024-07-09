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
<Navbar/>
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
          <StyledImg
            src={image} alt=""
          />
        </PricingContainer>
      </ColumnWide>
    </Container>
    {/* <Container2> */}
      <Image
         src={image2} alt="Email Icon"
      />
      {/* <DotsContainer> */}
        {/* {Array.from({ length: 9 }).map((_, index) => (
          <Dot key={index} />
        ))} */}
      {/* </DotsContainer> */}
    {/* </Container2> */}

    <Container1>
      <PlansWrapper>
        <PlanColumn>
          <PlanCard>
            <PlanContent>
              <PlanHeader>
                <PlanTitle>Basic</PlanTitle>
                <PlanPrice>$350.00</PlanPrice>
                <PlanDiscount>
                  <OriginalPrice>$450.00</OriginalPrice>
                  <Discount>35% OFF</Discount>
                </PlanDiscount>
              </PlanHeader>
              <PlanDescription>
                <Separator />
                <PlanSummary>More data and insights for growing businesses</PlanSummary>
                <FeaturesHeader>Top Features :</FeaturesHeader>
                <FeatureItem>
                  <FeatureIcon
                   src={image3} alt="Email Icon"  />
                  <FeatureText>1 Project to optimize your website</FeatureText>
                </FeatureItem>
                <FeatureItem>
                  <FeatureIcon
                                       src={image3} alt="Email Icon"  />

                  <FeatureText>Track 50 keywords</FeatureText>
                </FeatureItem>
                <FeatureItem>
                  <FeatureIcon
                                    src={image3} alt="Email Icon"  />

                  <FeatureText>Analyze up to 2500 pages</FeatureText>
                </FeatureItem>
                <FeatureItem>
                  <FeatureIcon
                                     src={image3} alt="Email Icon"  />

                  <FeatureText>Unlimited PDF Reports</FeatureText>
                </FeatureItem>
              </PlanDescription>
              <ActionButton>Try Basic</ActionButton>
            </PlanContent>
          </PlanCard>
        </PlanColumn>
        <PlanColumn>
          <PlanCard>
            <PlanContent>
              <PlanHeader>
                <PlanTitle>Premium</PlanTitle>
                <PlanPrice>$850.00</PlanPrice>
                <PlanDiscount>
                  <OriginalPrice>$1050.00</OriginalPrice>
                  <Discount>35% OFF</Discount>
                </PlanDiscount>
              </PlanHeader>
              <PlanDescription>
                <Separator />
                <PlanSummary>More data and insights for growing businesses</PlanSummary>
                <FeaturesHeader>Top Features :</FeaturesHeader>
                <FeatureItem>
                  <FeatureIcon
                                     src={image3} alt="Email Icon"  />

                  <FeatureText>3 Project to optimize your website</FeatureText>
                </FeatureItem>
                <FeatureItem>
                  <FeatureIcon
                                     src={image3} alt="Email Icon"  />

                  <FeatureText>Track 200 keywords</FeatureText>
                </FeatureItem>
                <FeatureItem>
                  <FeatureIcon
                                    src={image3} alt="Email Icon"  />

                  <FeatureText>Analyze up to 2500 pages</FeatureText>
                </FeatureItem>
                <FeatureItem>
                  <FeatureIcon
                                      src={image3} alt="Email Icon"  />

                  <FeatureText>Unlimited PDF Reports</FeatureText>
                </FeatureItem>
              </PlanDescription>
              <ActionButton>Try Premium</ActionButton>
            </PlanContent>
          </PlanCard>
        </PlanColumn>

        <PlanColumn>
          <PlanCard>
            <PlanContent>
              <PlanHeader>
                <PlanTitle>Enterprise</PlanTitle>
                <PlanPrice>$2050.00</PlanPrice>
                <PlanDiscount>
                  <OriginalPrice>$2550.00</OriginalPrice>
                  <Discount>35% OFF</Discount>
                </PlanDiscount>
              </PlanHeader>
              <PlanDescription>
                <Separator />
                <PlanSummary>More data and insights for growing businesses</PlanSummary>
                <FeaturesHeader>Top Features :</FeaturesHeader>
                <FeatureItem>
                  <FeatureIcon
                                   src={image3} alt="Email Icon"  />

                  <FeatureText>5 Project to optimize your website</FeatureText>
                </FeatureItem>
                <FeatureItem>
                  <FeatureIcon
                                      src={image3} alt="Email Icon"  />

                  <FeatureText>Track 5000 keywords</FeatureText>
                </FeatureItem>
                <FeatureItem>
                  <FeatureIcon
                                     src={image3} alt="Email Icon"  />

                  <FeatureText>Analyze up to 2500 pages</FeatureText>
                </FeatureItem>
                <FeatureItem>
                  <FeatureIcon
                                     src={image3} alt=""  />

                  <FeatureText>Unlimited PDF Reports</FeatureText>
                </FeatureItem>
              </PlanDescription>
              <ActionButton>Try Enterprise</ActionButton>
            </PlanContent>
          </PlanCard>
        </PlanColumn>
        {/* Repeat for Premium and Enterprise plans */}
        
      </PlansWrapper>
    </Container1>


        <div>
      <StyledDiv>
        <StyledColumn>
          <StyledDiv2>
            <StyledDiv3>Why you’re waiting for?? </StyledDiv3>
            <StyledDiv4>Buy Now!!!</StyledDiv4>
          </StyledDiv2>
        </StyledColumn>
        <StyledColumn2>
          <StyledImg1
           src={image5} alt="  "  />
        </StyledColumn2>
      </StyledDiv>
    </div>
<Img 
 src={image5} alt="Email Icon"
 />





 
    </Main>
    <Footer/>
    </>

  );
}

const Img = styled.div`
width: 100%;
`;


const Main = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20rem;
  padding: 20px;
  gap: 20px;

  /* @media (min-width: 768px) {
    flex-direction: row;
  } */
`;

const Container = styled.div`
  gap: 0px;
  padding-top: 2rem;
  padding-left: 5rem;
  padding-right: 5rem;
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
  margin-top: 200px;
  flex-direction: column;
  color: #000;
  font-weight: 300;
  padding: 0 20px;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const Heading = styled.div`
  color: #007bfe;
  font: 600 66px Lato, sans-serif;
  @media (max-width: 991px) {
    font-size: 40px;
  }
`;

const Subheading = styled.div`
  margin-top: 14px;
  font: 46px Lato, sans-serif;
  @media (max-width: 991px) {
    font-size: 40px;
  }
`;

const Description = styled.div`
  margin-top: 21px;
  font: 300 36px Lato, sans-serif;
  color: #A4A4A4;
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

const StyledImg1 = styled.img`
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
const StyledDiv = styled.div`
  gap: 20px;
  padding-left: 3rem;
  padding-right: 3rem;
  display: flex;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
`;

const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 34%;
  margin-left: 0px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const StyledDiv2 = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  text-align: center;
  margin: auto 0;
  padding: 0 20px;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const StyledDiv3 = styled.div`
  color: #000;
  font: 700 48px Lato, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
    font-size: 40px;
  }
`;

const StyledDiv4 = styled.div`
  color: #ff3737;
  align-self: center;
  margin-top: 40px;
  font: 600 56px Lato, sans-serif;
  @media (max-width: 991px) {
    font-size: 40px;
  }
`;

const StyledColumn2 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 66%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const StyledImg = styled.img`
  aspect-ratio: 1.33;
  object-fit: auto;
  object-position: center;
  width: 100%;
  height: 100%;
  flex-grow: 1;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;


const Image = styled.img`
  aspect-ratio: 3.23;
  object-fit: auto;
  object-position: center;
  width: 100%;
  /* stroke-width: 4px; */
  /* stroke: #000; */
  /* border-color: rgba(0, 0, 0, 1); */
  /* border-style: dashed;
  border-width: 4px; */

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Container1 = styled.div`
  padding: 0 20px;
`;

const PlansWrapper = styled.div`
  gap: 25px;
  padding-left: 3rem;
  padding-right: 3rem;
  padding-top : 12rem;
  display: flex;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
`;

const PlanColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 33%;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const PlanCard = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const PlanContent = styled.div`
  border-radius: 40px;
  border: 1px solid rgba(0, 0, 0, 1);
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 700;
  padding: 49px 0;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const PlanHeader = styled.div`
  text-align: center;
`;

const PlanTitle = styled.div`
  background-color: #007bfe;
  border-radius: 50%;
  width: 182px;
  color: #fff;
  font: 600 32px Proxima Nova, sans-serif;
  height: 182px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const PlanPrice = styled.div`
  color: #007bfe;
  margin-top: 25px;
  font: 56px Proxima Nova, sans-serif;
  @media (max-width: 991px) {
    font-size: 40px;
  }
`;

const PlanDiscount = styled.div`
  display: flex;
  margin-top: 9px;
  gap: 20px;
  font-size: 24px;
  color: #d9d9d9;
`;

const OriginalPrice = styled.div`
  font-family: Proxima Nova, sans-serif;
`;

const Discount = styled.div`
  font-family: Proxima Nova, sans-serif;
`;

const PlanDescription = styled.div`
  align-self: stretch;
  display: flex;
  margin-top: 38px;
  flex-direction: column;
  font-size: 18px;
  color: #000;
  font-weight: 500;
  padding: 0 21px;
  @media (max-width: 991px) {
    padding-left: 20px;
  }
`;

const Separator = styled.div`
  border-top: 1px solid #000;
  height: 1px;
`;

const PlanSummary = styled.div`
  font-family: Lato, sans-serif;
  margin-top: 29px;
`;

const FeaturesHeader = styled.div`
  color: #007bfe;
  font-family: Lato, sans-serif;
  font-weight: 600;
  margin-top: 20px;
`;

const FeatureItem = styled.div`
  display: flex;
  margin-top: 14px;
  gap: 19px;
  align-items: center;
  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

const FeatureIcon = styled.img`
  width: 28px;
`;

const FeatureText = styled.div`
  font-family: Lato, sans-serif;
`;

const ActionButton = styled.div`
  border-radius: 12px;
  background-color: #007bfe;
  color: #fff;
  text-align: center;
  justify-content: center;
  padding: 19px 59px;
  font: 600 18px Lato, sans-serif;
  margin-top: 36px;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;


export default Pricing;
