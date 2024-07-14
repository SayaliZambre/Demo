import React from "react";
import styled from "styled-components";
import image1 from '../../Images/career1.png';
import image2 from '../../Images/career2.png';
import image3 from '../../Images/career3.png';
import star from '../../Images/Star 1.png';
import Vector from '../../Images/Vector 9.png';

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
        <Column>
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
        </Column>
      </ContentWrapper>
    </MainContainer>
    <StyledContainer>
      <StyledDiv2 />
      <StyledDiv3>
        <StyledDiv4>
          <StyledDiv5>
            {/* <StyledColumn> */}
              <StyledDiv6>
                <StyledDiv7>Benefits</StyledDiv7>
                <StyledDiv8>
                  <StyledDiv9>
                    <StyledImg
                      src={star} alt=""   />
                    <StyledImg2
                     src={star} alt=""   />
                  </StyledDiv9>
                  <StyledDiv10>
                    <StyledDiv11>Competitive salary</StyledDiv11>
                    <StyledDiv12>Work From Home</StyledDiv12>
                  </StyledDiv10>
                </StyledDiv8>
              </StyledDiv6>
            {/* </StyledColumn> */}
            {/* <StyledColumn2> */}
              <StyledDiv13>
                <StyledDiv14>
                  <img
                    src={star} alt=""   />
                  <StyledDiv15>Competitive salary</StyledDiv15>
                </StyledDiv14>
                <StyledDiv16>
                  <img
                    src={star} alt=""   />
                  <StyledDiv17>Work From Home</StyledDiv17>
                </StyledDiv16>
              </StyledDiv13>
            {/* </StyledColumn2> */}
          </StyledDiv5>
        </StyledDiv4>
        <StyledDiv18>
          <StyledDiv19>
            <img
              src={star} alt=""   />
            <StyledDiv20>Incentives</StyledDiv20>
          </StyledDiv19>
          <StyledDiv21>
            <img
            src={star} alt=""   />
            <StyledDiv22>Incentives</StyledDiv22>
          </StyledDiv21>
        </StyledDiv18>
        <StyledDiv23>
          <StyledDiv24>
            <StyledDiv25>
              <img
                src={star} alt=""   />
              <StyledDiv26>Lorem ipsum</StyledDiv26>
            </StyledDiv25>
            <StyledDiv27>
              <img
                src={star} alt=""   />
              <StyledDiv28>Lorem ipsum dolor</StyledDiv28>
            </StyledDiv27>
          </StyledDiv24>
          <StyledDiv29>
            <StyledDiv30>
              <img
               src={star} alt=""   />
              <StyledDiv31>Lorem ipsum</StyledDiv31>
            </StyledDiv30>
            <StyledDiv32>
              <img
                src={star} alt=""   />
              <StyledDiv33>Lorem ipsum dolor</StyledDiv33>
            </StyledDiv32>
          </StyledDiv29>
        </StyledDiv23>
      </StyledDiv3>
      <StyledImg11
        src={Vector} alt=""   />
    </StyledContainer>

    <Container1>
          <Section1>
            <Column2>
            <Title1>Job Openings</Title1>
              <JobCategory1>
                <Subtitle>Business Development</Subtitle>
                <Position>Associate Business Analyst</Position>
              </JobCategory1>
            </Column2>
            <Column2>
              <JobCategory1>
                <Subtitle>Software Development</Subtitle>
                <Position>Software Developer</Position>
                <Position>Software Analyst</Position>
                <Position>UX Designer</Position>
              </JobCategory1>
            </Column2>
          </Section1>
          <Section1>
            <Column2>
              <JobCategory1>
                <Subtitle>Design</Subtitle>
                <Position>Director, Research</Position>
              </JobCategory1>
            </Column2>
            <Column2>
              <JobCategory1>
                <Subtitle>Cloud Operations</Subtitle>
                <Position>Azure Specialist</Position>
                <Position>Amazon Cloud Operations</Position>
                <Position>AWS Key 2 Specialist</Position>
              </JobCategory1>
            </Column2>
          </Section1>
          <Section>
            <Column2>
              <JobCategory1>
                <Subtitle>Product</Subtitle>
                <Position>Product Designer</Position>
                <Position>Product Manager</Position>
              </JobCategory1>
            </Column2>
            <Column2>
              <JobCategory1>
                <Subtitle>Lorem ipsum dolor</Subtitle>
                <Position>Azure Specialist</Position>
                <Position>Amazon Cloud Operations</Position>
                <Position>AWS Key 2 Specialist</Position>
              </JobCategory1>
            </Column2>
          </Section>
          <Section1>
            <Column2>
              <JobCategory1>
                <Subtitle>Lorem ipsum</Subtitle>
                <Position>Lorem ipsum dolor</Position>
                <Position>Lorem ipsum dolor</Position>
              </JobCategory1>
            </Column2>
            <Column2>
              <JobCategory1>
                <Subtitle>Lorem ipsum dolor</Subtitle>
                <Position>Horem ipsum</Position>
                <Position>Yorem ipsum</Position>
                <Position>Rorem ipsum dolor</Position>
              </JobCategory1>
            </Column2>
          </Section1>
        </Container1>
    <Container>
      {/* <Section>
        <Column1>
          <JobCategory>
            <JobTitle1>Job Openings</JobTitle1>
            <JobRole>Business Development</JobRole>
            <JobPosition>Associate Business Analyst</JobPosition>
          </JobCategory>
        </Column1>
        <Column1>
          <JobCategory>
            <JobTitle1>Software Development</JobTitle1>
            <JobPosition>Software Developer</JobPosition>
            <JobPosition>Software Analyst</JobPosition>
            <JobPosition>UX Designer</JobPosition>
          </JobCategory>
        </Column1>
      </Section>

      <Section>
        <Column1>
          <JobCategory>
            <JobTitle1>Design</JobTitle1>
            <JobPosition>Director, Research</JobPosition>
          </JobCategory>
        </Column1>
        <Column1>
          <JobCategory>
            <JobTitle1>Cloud Operations</JobTitle1>
            <JobPosition>Azure Specialist</JobPosition>
            <JobPosition>Amazon Cloud Operations</JobPosition>
            <JobPosition>AWS Key 2 Specialist</JobPosition>
          </JobCategory>
        </Column1>
      </Section>

      <Section>
        <Column1>
          <JobCategory>
            <JobTitle1>Product</JobTitle1>
            <JobPosition>Product Designer</JobPosition>
            <JobPosition>Product Manager</JobPosition>
          </JobCategory>
        </Column1>
        <Column1>
          <JobCategory>
            <JobTitle1>Lorem ipsum dolor</JobTitle1>
            <JobPosition>Azure Specialist</JobPosition>
            <JobPosition>Amazon Cloud Operations</JobPosition>
            <JobPosition>AWS Key 2 Specialist</JobPosition>
          </JobCategory>
        </Column1>
      </Section>

      <Section>
        <Column1>
          <JobCategory>
            <JobTitle1>Lorem ipsum</JobTitle1>
            <JobPosition>Lorem ipsum dolor</JobPosition>
            <JobPosition>Lorem ipsum dolor</JobPosition>
          </JobCategory>
        </Column1>
        <Column1>
          <JobCategory>
            <JobTitle1>Lorem ipsum dolor</JobTitle1>
            <JobPosition>Horem ipsum</JobPosition>
            <JobPosition>Yorem ipsum</JobPosition>
            <JobPosition>Rorem ipsum dolor</JobPosition>
          </JobCategory>
        </Column1>
      </Section> */}

      <HighlightedSection>
        <Section>
          <ImageColumn>
            <ImageContainer>
              <StyledImg1 src="https://cdn.builder.io/api/v1/image/assets/TEMP/e3a7cd37d66cf81c8dad52c7e76794d7add3d9781058b7775a3bb433879a26bb?apiKey=70bbbe661cc747b893a0c12c47223d3a&" />
              <StyledImg1 src="https://cdn.builder.io/api/v1/image/assets/TEMP/e3a7cd37d66cf81c8dad52c7e76794d7add3d9781058b7775a3bb433879a26bb?apiKey=70bbbe661cc747b893a0c12c47223d3a&" />
              <StyledImg1 src="https://cdn.builder.io/api/v1/image/assets/TEMP/e3a7cd37d66cf81c8dad52c7e76794d7add3d9781058b7775a3bb433879a26bb?apiKey=70bbbe661cc747b893a0c12c47223d3a&" />
              <StyledImg1 src="https://cdn.builder.io/api/v1/image/assets/TEMP/e3a7cd37d66cf81c8dad52c7e76794d7add3d9781058b7775a3bb433879a26bb?apiKey=70bbbe661cc747b893a0c12c47223d3a&" />
              <StyledImg1 src="https://cdn.builder.io/api/v1/image/assets/TEMP/e3a7cd37d66cf81c8dad52c7e76794d7add3d9781058b7775a3bb433879a26bb?apiKey=70bbbe661cc747b893a0c12c47223d3a&" />
            </ImageContainer>
          </ImageColumn>
          <DescriptionColumn>
            <DescriptionContainer>
              <DescriptionTitle>SEO Impact</DescriptionTitle>
              <DescriptionImg srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2038f2a800a68a7ca4ef6a3bd0524083b163091f1dbcbf0a66d3fdac564d4d59?apiKey=70bbbe661cc747b893a0c12c47223d3a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2038f2a800a68a7ca4ef6a3bd0524083b163091f1dbcbf0a66d3fdac564d4d59?apiKey=70bbbe661cc747b893a0c12c47223d3a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2038f2a800a68a7ca4ef6a3bd0524083b163091f1dbcbf0a66d3fdac564d4d59?apiKey=70bbbe661cc747b893a0c12c47223d3a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2038f2a800a68a7ca4ef6a3bd0524083b163091f1dbcbf0a66d3fdac564d4d59?apiKey=70bbbe661cc747b893a0c12c47223d3a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2038f2a800a68a7ca4ef6a3bd0524083b163091f1dbcbf0a66d3fdac564d4d59?apiKey=70bbbe661cc747b893a0c12c47223d3a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2038f2a800a68a7ca4ef6a3bd0524083b163091f1dbcbf0a66d3fdac564d4d59?apiKey=70bbbe661cc747b893a0c12c47223d3a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2038f2a800a68a7ca4ef6a3bd0524083b163091f1dbcbf0a66d3fdac564d4d59?apiKey=70bbbe661cc747b893a0c12c47223d3a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2038f2a800a68a7ca4ef6a3bd0524083b163091f1dbcbf0a66d3fdac564d4d59?apiKey=70bbbe661cc747b893a0c12c47223d3a&" />
            </DescriptionContainer>
          </DescriptionColumn>
        </Section>
      </HighlightedSection>
     
    </Container>



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
const StyledContainer = styled.div`
  background-color: #007bfe;
  padding-top: 7rem;
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: space-between;
  padding: 74px 0;
  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

const StyledDiv2 = styled.div`
  border-radius: 0px 12px 12px 0px;
  background-color: #fff;
  align-self: stretch;
  width: 96px;
  height: 48px;
  margin: auto 0;
`;

const StyledDiv3 = styled.div`
  align-self: start;
  display: flex;
  flex-direction: column;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const StyledDiv4 = styled.div`
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const StyledDiv5 = styled.div`
  gap: 20px;
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
  width: 50%;
  margin-left: 0px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const StyledDiv6 = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  padding: 0 20px;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const StyledDiv7 = styled.div`
  color: #fff;
  align-self: center;
  font: 600 48px Lato, sans-serif;
  @media (max-width: 991px) {
    font-size: 40px;
  }
`;

const StyledDiv8 = styled.div`
  display: flex;
  margin-top: 67px;
  gap: 20px;
  justify-content: space-between;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const StyledDiv9 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledImg = styled.img`
  aspect-ratio: 1.08;
  object-fit: auto;
  object-position: center;
  width: 30px;
  fill: #fff;
`;

const StyledImg2 = styled.img`
  aspect-ratio: 1.08;
  object-fit: auto;
  object-position: center;
  width: 30px;
  fill: #fff;
  margin-top: 36px;
`;

const StyledDiv10 = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 24px;
  color: #fff;
  font-weight: 600;
  margin: auto 0;
`;

const StyledDiv11 = styled.div`
  font-family: Lato, sans-serif;
`;

const StyledDiv12 = styled.div`
  font-family: Lato, sans-serif;
  margin-top: 42px;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const StyledColumn2 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 50%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const StyledDiv13 = styled.div`
  display: flex;
  margin-top: 103px;
  flex-grow: 1;
  flex-direction: column;
  font-size: 24px;
  color: #fff;
  font-weight: 600;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const StyledDiv14 = styled.div`
  display: flex;
  gap: 20px;
`;

const StyledDiv15 = styled.div`
  font-family: Lato, sans-serif;
  flex-grow: 1;
  flex-basis: auto;
`;

const StyledDiv16 = styled.div`
  display: flex;
  margin-top: 36px;
  gap: 20px;
`;

const StyledDiv17 = styled.div`
  font-family: Lato, sans-serif;
  flex-grow: 1;
  flex-basis: auto;
  margin: auto 0;
`;

const StyledDiv18 = styled.div`
  display: flex;
  margin-top: 36px;
  width: 100%;
  gap: 20px;
  font-size: 24px;
  color: #fff;
  font-weight: 600;
  white-space: nowrap;
  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
    padding-right: 20px;
    white-space: initial;
  }
`;

const StyledDiv19 = styled.div`
  display: flex;
  gap: 20px;
  flex: 1;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const StyledDiv20 = styled.div`
  font-family: Lato, sans-serif;
  flex-grow: 1;
  flex-basis: auto;
  margin: auto 0;
`;

const StyledDiv21 = styled.div`
  display: flex;
  gap: 20px;
  flex: 1;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const StyledDiv22 = styled.div`
  font-family: Lato, sans-serif;
  flex-grow: 1;
  flex-basis: auto;
  margin: auto 0;
`;

const StyledDiv23 = styled.div`
  display: flex;
  margin-top: 36px;
  gap: 20px;
  font-size: 24px;
  color: #fff;
  font-weight: 600;
  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
  }
`;

const StyledDiv24 = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  flex-grow: 1;
  flex-basis: 0;
  width: fit-content;
`;

const StyledDiv25 = styled.div`
  display: flex;
  gap: 20px;
`;

const StyledDiv26 = styled.div`
  font-family: Lato, sans-serif;
  flex-grow: 1;
  flex-basis: auto;
`;

const StyledDiv27 = styled.div`
  display: flex;
  margin-top: 36px;
  gap: 20px;
`;

const StyledDiv28 = styled.div`
  font-family: Lato, sans-serif;
  flex-grow: 1;
  flex-basis: auto;
`;

const StyledDiv29 = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  flex-grow: 1;
  flex-basis: 0;
  width: fit-content;
`;

const StyledDiv30 = styled.div`
  display: flex;
  gap: 20px;
`;

const StyledDiv31 = styled.div`
  font-family: Lato, sans-serif;
  flex-grow: 1;
  flex-basis: auto;
`;

const StyledDiv32 = styled.div`
  display: flex;
  margin-top: 36px;
  gap: 20px;
`;

const StyledDiv33 = styled.div`
  font-family: Lato, sans-serif;
  flex-grow: 1;
  flex-basis: auto;
`;

const StyledImg11 = styled.img`
  /* aspect-ratio: 2.44; */
  /* object-fit: auto; */
  object-position: center;
  width: 33%;
  /* stroke-width: 5px; */
  stroke: #fff;
  /* border-color: rgba(255, 255, 255, 1); */
  /* border-style: dashed; */
  /* border-width: 5px; */
  /* align-self: stretch; */
  /* margin: auto 0; */
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Section = styled.div`
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
// `;

// const JobCategory = styled.div`
//   display: flex;
//   flex-direction: column;
//   padding: 0 20px;
// `;

// const JobTitle1 = styled.div`
//   font-size: 72px;
//   color: #007bfe;
//   font-weight: 600;
//   @media (max-width: 991px) {
//     font-size: 40px;
//   }
// `;

// const JobRole = styled.div`
//   margin-top: 110px;
//   font-size: 48px;
//   font-weight: 700;
//   color: #000;
//   @media (max-width: 991px) {
//     margin-top: 40px;
//     font-size: 40px;
//   }
// `;

// const JobPosition = styled.div`
//   margin-top: 45px;
//   font-size: 32px;
//   @media (max-width: 991px) {
//     margin-top: 40px;
//   }
// `;

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

const StyledImg1 = styled.img`
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
  font-size: 48px;
  font-weight: 600;
  color: #007bfe;
  margin-bottom: 10px;
`;

const DescriptionImg = styled.img`
  width: 100%;
  height: auto;
  max-width: 600px;
`;
const Container1 = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10%;
  padding-right:10%;
`;

const Section1 = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  justify-content: space-between;
  margin-top: 60px;
  @media (max-width: 991px) {
    flex-wrap: wrap;
    padding-right: 10px;
    margin-top: 30px;
  }
`;

const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 48%;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const JobCategory1 = styled.div`
  display: flex;
  flex-direction: column;
  color: #007bfe;
  font-weight: 600;
  padding: 0 10px;
  margin-top: 30px;
`;

const Title1 = styled.div`
  font-size: 60px;
  font-family: Lato, sans-serif;
  @media (max-width: 991px) {
    font-size: 35px;
  }
`;

const Subtitle = styled.div`
  color: #000;
  margin-top: 60px;
  font-size: 36px;
  font-family: Lato, sans-serif;
  font-weight: 700;
  @media (max-width: 991px) {
    margin-top: 30px;
    font-size: 30px;
  }
`;

const Position = styled.div`
  margin-top: 20px;
  font-size: 24px;
  font-family: Lato, sans-serif;
  @media (max-width: 991px) {
    margin-top: 20px;
  }
`;




export default Careers;
