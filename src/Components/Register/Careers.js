import React from "react";
import styled from "styled-components";
import image1 from '../../Images/career1.png';
import image2 from '../../Images/career2.png';
import image3 from '../../Images/career3.png';
import image from '../../Images/solar_user-bold.png';
import Navbar from "./Navbar";
import Footer from './Footer';



const Careers = () => {
  return (
    <>
    <Navbar/>
    <Main>
    <MainContainer>
      <Heading1>Careers</Heading1>
      <Heading2>Join Us</Heading2>
      <Description>
        Lorem ipsum dolor sit amet consectetur. Luctus in convallis odio eu
        egestas lectus.
      </Description>
      <Button>More about us</Button>
      <ContentWrapper>
        <Column>
          <Card>
            <Image
              src={image1} alt=""   />
            <JobTitle>Product Designer</JobTitle>
            <Divider />
            <JobDescription>
              Lorem ipsum dolor sit amet consectetur. In rhoncus aliquet nunc
              cursus. Eu aliquam egestas donec facilisi. Accumsan urna
              consectetur facilisis ante facilisi ut ut.
            </JobDescription>
            <ApplyButton>
              <ApplyImage
                  src={image} alt=""   />
              <ApplyText>View Openings</ApplyText>
            </ApplyButton>
          </Card>
        </Column>
        <Column>
          <Card>
            <Image
               src={image2} alt=""   />
            <JobTitle>Production Development</JobTitle>
            <Divider />
            <JobDescription>
              Lorem ipsum dolor sit amet consectetur. In rhoncus aliquet nunc
              cursus. Eu aliquam egestas donec facilisi. Accumsan urna
              consectetur facilisis ante facilisi ut ut.
            </JobDescription>
            <ApplyButton>
              <ApplyImage
                 src={image} alt=""   />
              <ApplyText>View Openings</ApplyText>
            </ApplyButton>
          </Card>
        </Column>
        <Column1>
          <Card>
            <Image
                             src={image3} alt=""   />

            <JobTitle>Marketing</JobTitle>
            <Divider />
            <JobDescription>
              Lorem ipsum dolor sit amet consectetur. In rhoncus aliquet nunc
              cursus. Eu aliquam egestas donec facilisi. Accumsan urna
              consectetur facilisis ante facilisi ut ut.
            </JobDescription>
            <ApplyButton>
              <ApplyImage
                              src={image} alt=""   />

              <ApplyText>View Openings</ApplyText>
            </ApplyButton>
          </Card>
        </Column1>
      </ContentWrapper>
    </MainContainer>
    <Container>
      <SideBar />
      <Content>
        <Section>
          <Header>
            <Title>Benefits</Title>
            <BenefitsList>
              <Benefit>
                <BenefitIcon
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/dd600fa6dd75844d2bed727b7a1365044b8c88574f88a674eb1cba502dc092ec?apiKey=70bbbe661cc747b893a0c12c47223d3a&"
                />
                <BenefitText>Competitive salary</BenefitText>
              </Benefit>
              <Benefit>
                <BenefitIcon
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/dd600fa6dd75844d2bed727b7a1365044b8c88574f88a674eb1cba502dc092ec?apiKey=70bbbe661cc747b893a0c12c47223d3a&"
                />
                <BenefitText>Work From Home</BenefitText>
              </Benefit>
            </BenefitsList>
          </Header>
        </Section>
        <Section>
          <Incentives>
            <Incentive>
              <IncentiveIcon
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/dd600fa6dd75844d2bed727b7a1365044b8c88574f88a674eb1cba502dc092ec?apiKey=70bbbe661cc747b893a0c12c47223d3a&"
              />
              <IncentiveText>Incentives</IncentiveText>
            </Incentive>
            <Incentive>
              <IncentiveIcon
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/dd600fa6dd75844d2bed727b7a1365044b8c88574f88a674eb1cba502dc092ec?apiKey=70bbbe661cc747b893a0c12c47223d3a&"
              />
              <IncentiveText>Incentives</IncentiveText>
            </Incentive>
          </Incentives>
        </Section>
        <Section>
          <OtherBenefits>
            <OtherBenefit>
              <OtherBenefitIcon
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/dd600fa6dd75844d2bed727b7a1365044b8c88574f88a674eb1cba502dc092ec?apiKey=70bbbe661cc747b893a0c12c47223d3a&"
              />
              <OtherBenefitText>Lorem ipsum</OtherBenefitText>
            </OtherBenefit>
            <OtherBenefit>
              <OtherBenefitIcon
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/dd600fa6dd75844d2bed727b7a1365044b8c88574f88a674eb1cba502dc092ec?apiKey=70bbbe661cc747b893a0c12c47223d3a&"
              />
              <OtherBenefitText>Lorem ipsum dolor</OtherBenefitText>
            </OtherBenefit>
          </OtherBenefits>
        </Section>
      </Content>
      <FooterImage
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/64f0e95010d34274c0254c7a18e1e25985af297de509b70b2170851122fbe1b5?apiKey=70bbbe661cc747b893a0c12c47223d3a&"
      />
    </Container>


    <Container1>
      <Section1>
        <Column1>
          <JobCategory>
            <JobTitle>Job Openings</JobTitle>
            <JobRole>Business Development</JobRole>
            <JobPosition>Associate Business Analyst</JobPosition>
          </JobCategory>
        </Column1>
        <Column1>
          <JobCategory>
            <JobTitle>Software Development</JobTitle>
            <JobPosition>Software Developer</JobPosition>
            <JobPosition>Software Analyst</JobPosition>
            <JobPosition>UX Designer</JobPosition>
          </JobCategory>
        </Column1>
      </Section1>

      <Section1>
        <Column1>
          <JobCategory>
            <JobTitle>Design</JobTitle>
            <JobPosition>Director, Research</JobPosition>
          </JobCategory>
        </Column1>
        <Column1>
          <JobCategory>
            <JobTitle>Cloud Operations</JobTitle>
            <JobPosition>Azure Specialist</JobPosition>
            <JobPosition>Amazon Cloud Operations</JobPosition>
            <JobPosition>AWS Key 2 Specialist</JobPosition>
          </JobCategory>
        </Column1>
      </Section1>

      <Section1>
        <Column1>
          <JobCategory>
            <JobTitle>Product</JobTitle>
            <JobPosition>Product Designer</JobPosition>
            <JobPosition>Product Manager</JobPosition>
          </JobCategory>
        </Column1>
        <Column1>
          <JobCategory>
            <JobTitle>Lorem ipsum dolor</JobTitle>
            <JobPosition>Azure Specialist</JobPosition>
            <JobPosition>Amazon Cloud Operations</JobPosition>
            <JobPosition>AWS Key 2 Specialist</JobPosition>
          </JobCategory>
        </Column1>
      </Section1>

      <Section1>
        <Column1>
          <JobCategory>
            <JobTitle>Lorem ipsum</JobTitle>
            <JobPosition>Lorem ipsum dolor</JobPosition>
            <JobPosition>Lorem ipsum dolor</JobPosition>
          </JobCategory>
        </Column1>
        <Column1>
          <JobCategory>
            <JobTitle>Lorem ipsum dolor</JobTitle>
            <JobPosition>Horem ipsum</JobPosition>
            <JobPosition>Yorem ipsum</JobPosition>
            <JobPosition>Rorem ipsum dolor</JobPosition>
          </JobCategory>
        </Column1>
      </Section1>

      <HighlightedSection>
        <Section1>
          <ImageColumn>
            <ImageContainer>
              <StyledImg src="https://cdn.builder.io/api/v1/image/assets/TEMP/e3a7cd37d66cf81c8dad52c7e76794d7add3d9781058b7775a3bb433879a26bb?apiKey=70bbbe661cc747b893a0c12c47223d3a&" />
              <StyledImg src="https://cdn.builder.io/api/v1/image/assets/TEMP/e3a7cd37d66cf81c8dad52c7e76794d7add3d9781058b7775a3bb433879a26bb?apiKey=70bbbe661cc747b893a0c12c47223d3a&" />
              <StyledImg src="https://cdn.builder.io/api/v1/image/assets/TEMP/e3a7cd37d66cf81c8dad52c7e76794d7add3d9781058b7775a3bb433879a26bb?apiKey=70bbbe661cc747b893a0c12c47223d3a&" />
              <StyledImg src="https://cdn.builder.io/api/v1/image/assets/TEMP/e3a7cd37d66cf81c8dad52c7e76794d7add3d9781058b7775a3bb433879a26bb?apiKey=70bbbe661cc747b893a0c12c47223d3a&" />
              <StyledImg src="https://cdn.builder.io/api/v1/image/assets/TEMP/e3a7cd37d66cf81c8dad52c7e76794d7add3d9781058b7775a3bb433879a26bb?apiKey=70bbbe661cc747b893a0c12c47223d3a&" />
            </ImageContainer>
          </ImageColumn>
          <DescriptionColumn>
            <DescriptionContainer>
              <DescriptionTitle>SEO Impact</DescriptionTitle>
              <DescriptionImg srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2038f2a800a68a7ca4ef6a3bd0524083b163091f1dbcbf0a66d3fdac564d4d59?apiKey=70bbbe661cc747b893a0c12c47223d3a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2038f2a800a68a7ca4ef6a3bd0524083b163091f1dbcbf0a66d3fdac564d4d59?apiKey=70bbbe661cc747b893a0c12c47223d3a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2038f2a800a68a7ca4ef6a3bd0524083b163091f1dbcbf0a66d3fdac564d4d59?apiKey=70bbbe661cc747b893a0c12c47223d3a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2038f2a800a68a7ca4ef6a3bd0524083b163091f1dbcbf0a66d3fdac564d4d59?apiKey=70bbbe661cc747b893a0c12c47223d3a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2038f2a800a68a7ca4ef6a3bd0524083b163091f1dbcbf0a66d3fdac564d4d59?apiKey=70bbbe661cc747b893a0c12c47223d3a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2038f2a800a68a7ca4ef6a3bd0524083b163091f1dbcbf0a66d3fdac564d4d59?apiKey=70bbbe661cc747b893a0c12c47223d3a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2038f2a800a68a7ca4ef6a3bd0524083b163091f1dbcbf0a66d3fdac564d4d59?apiKey=70bbbe661cc747b893a0c12c47223d3a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2038f2a800a68a7ca4ef6a3bd0524083b163091f1dbcbf0a66d3fdac564d4d59?apiKey=70bbbe661cc747b893a0c12c47223d3a&" />
            </DescriptionContainer>
          </DescriptionColumn>
        </Section1>
      </HighlightedSection>

    </Container1>



    </Main>
    <Footer/>
    </>
  );
};

const Main = styled.div`
  
`;

const MainContainer = styled.div`
  display: flex;
  padding-left: 80px;
  flex-direction: column;
  align-items: start;
  @media (max-width: 991px) {
    padding-left: 20px;
  }
`;

const Heading1 = styled.div`
  color: #000;
  align-self: center;
  margin-left: 73px;
  font: 700 72px Lato, sans-serif;
  @media (max-width: 991px) {
    font-size: 40px;
  }
`;

const Heading2 = styled.div`
  color: #000;
  text-align: center;
  margin: 128px 0 0 113px;
  font: 700 72px Lato, sans-serif;
  @media (max-width: 991px) {
    font-size: 40px;
    margin: 40px 0 0 10px;
  }
`;

const Description = styled.div`
  color: #000;
  text-align: center;
  width: 656px;
  margin: 54px 0 0 116px;
  font: 500 36px Lato, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const Button = styled.div`
  border-radius: 12px;
  background-color: #007bfe;
  color: #fff;
  text-align: center;
  justify-content: center;
  margin: 71px 0 0 112px;
  padding: 21px 37px;
  font: 600 18px Lato, sans-serif;
  @media (max-width: 991px) {
    margin: 40px 0 0 10px;
    padding: 0 20px;
  }
`;

const ContentWrapper = styled.div`
  align-self: center;
  margin-top: 530px;
  width: 100%;
  max-width: 1537px;
  display: flex;
  gap: 20px;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 33%;
  margin-left: 0px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Card = styled.div`
  border-radius: 12px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25),
    0px 4px 20px 0px rgba(0, 0, 0, 0.25);
  background-color: #fff;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
  color: #000;
  font-weight: 300;
  width: 75%;
  padding: 53px 36px;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
    padding: 0 20px;
  }
`;

const Image = styled.img`
  aspect-ratio: 1.33;
  object-fit: auto;
  object-position: center;
  width: 239px;
  max-width: 100%;
`;

const JobTitle = styled.div`
  margin-top: 39px;
  font: 500 30px Lato, sans-serif;
`;

const Divider = styled.div`
  border-color: rgba(0, 0, 0, 1);
  border-style: solid;
  border-width: 1px;
  background-color: #000;
  align-self: stretch;
  margin-top: 32px;
  height: 1px;
`;

const JobDescription = styled.div`
  font-family: Lato, sans-serif;
  align-self: stretch;
  margin-top: 42px;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const ApplyButton = styled.div`
  border-radius: 12px;
  background-color: #f1f8ff;
  display: flex;
  margin-top: 53px;
  gap: 18px;
  padding: 29px 50px;
  @media (max-width: 991px) {
    margin-top: 40px;
    padding: 0 20px;
  }
`;

const ApplyImage = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 32px;
  fill: #f1f8ff;
`;

const ApplyText = styled.div`
  font-family: Lato, sans-serif;
  flex-grow: 1;
  flex-basis: auto;
`;
const Container = styled.div`
  background-color: #007bfe;
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: space-between;
  padding: 44px 0 80px;
  flex-wrap: wrap;
`;

const SideBar = styled.div`
  border-radius: 0px 12px 12px 0px;
  background-color: #fff;
  width: 96px;
  height: 48px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (max-width: 991px) {
    gap: 0;
    margin-top: 40px;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  color: #fff;
  font-size: 48px;
  font-weight: 600;
  font-family: Lato, sans-serif;
  @media (max-width: 991px) {
    font-size: 40px;
  }
`;

const BenefitsList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 67px;
  gap: 20px;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const Benefit = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const BenefitIcon = styled.img`
  width: 30px;
`;

const BenefitText = styled.div`
  color: #fff;
  font-size: 24px;
  font-weight: 600;
  font-family: Lato, sans-serif;
`;

const Incentives = styled.div`
  display: flex;
  gap: 20px;
  font-size: 24px;
  color: #fff;
  font-weight: 600;
  flex-wrap: wrap;
  margin-top: 36px;
`;

const Incentive = styled.div`
  display: flex;
  gap: 20px;
  flex: 1;
`;

const IncentiveIcon = styled.img`
  width: 30px;
`;

const IncentiveText = styled.div`
  font-family: Lato, sans-serif;
  margin: auto 0;
`;

const OtherBenefits = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
  font-size: 24px;
  color: #fff;
  font-weight: 600;
`;

const OtherBenefit = styled.div`
  display: flex;
  gap: 20px;
`;

const OtherBenefitIcon = styled.img`
  width: 30px;
`;

const OtherBenefitText = styled.div`
  font-family: Lato, sans-serif;
`;

const FooterImage = styled.img`
  width: 100%;
  aspect-ratio: 2.44;
  object-fit: auto;
  border: 5px dashed #fff;
  align-self: stretch;
  margin: auto 0;
`;
const Container1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Section1 = styled.div`
  width: 100%;
  max-width: 1198px;
  display: flex;
  gap: 20px;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0;
  }
`;

const Column1 = styled.div`
  display: flex;
  flex-direction: column;
  width: 55%;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const JobCategory = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
`;

const JobTitle1 = styled.div`
  font-size: 36px;
  color: #007bfe;
  font-weight: 600;
  @media (max-width: 991px) {
    font-size: 20px;
  }
`;

const JobRole = styled.div`
  margin-top: 55px;
  font-size: 24px;
  font-weight: 700;
  color: #000;
  @media (max-width: 991px) {
    margin-top: 20px;
    font-size: 20px;
  }
`;

const JobPosition = styled.div`
  margin-top: 22.5px;
  font-size: 16px;
  @media (max-width: 991px) {
    margin-top: 20px;
  }
`;

const HighlightedSection = styled.div`
  width: 100%;
  max-width: 1198px;
  display: flex;
  margin-top: 50px;
  padding: 10px;
  background: #eef1ff;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0;
  }
`;

const ImageColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 55%;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 20px;
`;

const StyledImg = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
`;

const DescriptionColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const DescriptionTitle = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: #007bfe;
  margin-bottom: 10px;
`;

const DescriptionImg = styled.img`
  width: 100%;
  height: auto;
  max-width: 600px;
`;

const Footer = styled.div`
  height: 88px;
  background: #fcfcfc;
  border-top: 1px solid #e6e8ec;
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;


export default Careers;
