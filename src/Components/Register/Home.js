import * as React from "react";
import styled from "styled-components";
import image from '../../Images/carbon_arrow-up.png';
import image1 from '../../Images/Group 11.png';
import image2 from '../../Images/homeimage.png';
import image3 from '../../Images/Homeprofile.png';
import image4 from '../../Images/Apple logo.png';
import image5 from '../../Images/Nvidia logo.png';
import image6 from '../../Images/Samsung logo.png';
import image7 from '../../Images/Microsoft logo.png';
import image8 from '../../Images/Quick.png';
import image9 from '../../Images/Actionable.png';
import image10 from '../../Images/Focussed.png';
import image11 from '../../Images/Homelast.png';
import Navbar from "./Navbar";
import Footer from './Footer';



const Home = () => {
  return (
    <>
    <Navbar/>
    <Main>
    <Container>
    <Column>
      <Content>
        <Title>Introducing</Title>
        <Subtitle>SEO Impact</Subtitle>
        <Description>
          Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis.
        </Description>
        <ActionRow>
          <Button>Get Started</Button>
          <Icon
            src={image}  />
          <MoreInfo>Click here to know more!</MoreInfo>
        </ActionRow>
        <InputField>
          {/* <img src={image3} alt="Password Icon" /> */}
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your website here...."
            // onChange={changeHandler}
            // value={user.email}
          />
        </InputField>    
        
                <CheckScore>Check Score</CheckScore>
      </Content>
    </Column>
    <ImageColumn>
      <ResponsiveImage
      src={image1}  />
    </ImageColumn>
  </Container>

  <Div>
      <Img
       src={image2}  />
      <Div2>
        <Div3>
          <span style={{ color: 'rgba(55,159,255,1)' }}>“SEO Impact</span> a Keyword
          Research tool like Google Trends, Woorank, Seobility”
        </Div3>
        <Img2
              src={image3}  />

        <Div4>
          {/* <Img3
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c62efbbb3a27b995143a1fea99779e949e69a1157d92ac62c9557c4412612892?apiKey=70bbbe661cc747b893a0c12c47223d3a&"
          /> */}
          <Div5>Emily Brown</Div5>
        </Div4>
        <Div6>SEO Impact, Marketing Specialist</Div6>
        <Div7>Source: SEO Impact Reviews</Div7>
      </Div2>
    </Div>

    <Wrapper>
      <Header>
        Trusted <Highlight>By Many Companies</Highlight>
      </Header>
      <ImageSection>
        <ImageContainer>
          <StyledImg      src={image4} />
            <StyledImg2   src={image7} />
            <StyledImg3 src={image6} />
            <StyledImg4 src={image5} />

        </ImageContainer>
      </ImageSection>
      <StatisticsSection>
        <StatisticsContainer>
          <StatisticColumn>
            <Statistic>
              <StatValue>5M</StatValue>
              <StatDescription>
                Marketing professions{" "}
                <StatHighlight>are using SEO Impact!</StatHighlight>
              </StatDescription>
            </Statistic>
          </StatisticColumn>
          <StatisticColumn>
            <Statistic>
              <StatValue>21</StatValue>
              <StatDescription>
                International Awards{" "}
                <StatHighlight>as best SEO suite software</StatHighlight>
              </StatDescription>
            </Statistic>
          </StatisticColumn>
          <StatisticColumn>
            <Statistic>
              <StatValue>30%</StatValue>
              <StatDescription>
                Over 300 Companies{" "}
                <StatHighlight>
                  use SEO Impact as their Marketing tool!
                </StatHighlight>
              </StatDescription>
            </Statistic>
          </StatisticColumn>
        </StatisticsContainer>
      </StatisticsSection>
      <CallToAction>
    Unlock your success now with our
    <span>SEO Tools</span>
  </CallToAction>
      <FeaturesSection>
        <FeaturesContainer>
          <FeatureColumn>
            <Feature>
              <FeatureIconContainer>
                <FeatureIcon
                src={image8}  />
              </FeatureIconContainer>
              {/* <FeatureText>QUICK</FeatureText> */}
            </Feature>
          </FeatureColumn>
          <FeatureColumn>
            <Feature>
              <FeatureIconContainer>
                <FeatureIcon
                src={image9}  />
              </FeatureIconContainer>
              {/* <FeatureText>FOCUSSED</FeatureText> */}
            </Feature>
          </FeatureColumn>
          <FeatureColumn>
            <Feature>
              <FeatureIconContainer>
                <FeatureIcon
                 src={image10}  />
              </FeatureIconContainer>
              {/* <FeatureText>ACTIONABLE</FeatureText> */}
            </Feature>
          </FeatureColumn>
        </FeaturesContainer>
      </FeaturesSection>
    </Wrapper>


    <Container1>
      <Content1>
        <TextSection>
          <Title1>Increase your Market Insights</Title1>
          <Description1>
            Lorem ipsum dolor sit amet consectetur. Quis eget vivamus neque
            velit enim id urna pharetra vel. Sapien ut natoque facilisi tortor
            viverra eget. Amet rhoncus leo sed nulla est senectus morbi tellus
            ornare. Justo curabitur iaculis id senectus sodales mattis sed
            mattis nisl. Phasellus ipsum ultricies.
          </Description1>
          <LearnMoreButton>Learn More</LearnMoreButton>
        </TextSection>
        <ImageSection1>
          <Image
            src={image11} 
          />
        </ImageSection1>
      </Content1>
    </Container1>

    <StyledDiv>
      <StyledDiv2>
        <StyledDiv3>Get Started with SEO Impact todayy!</StyledDiv3>
        <StyledDiv4>Get 7 days access to all tools.</StyledDiv4>
        <StyledDiv5>Start Trial</StyledDiv5>
      </StyledDiv2>
    </StyledDiv>

  </Main>

  <Footer/>
  </>
  );
};


const Main = styled.div`
  
  
`;

const Container = styled.div`
  gap: 20px;
  display: flex;
  /* padding: 20px; Added padding */
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
`;

const Column = styled.div`
  display: flex;
  padding-left: 4rem;
  flex-direction: column;
  line-height: normal;
  width: 50%;
  margin-left: 0px;
  /* padding: 10px; Added padding */
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  font-size: 12px; /* Decreased font size */
  font-weight: 500;
  margin: auto 0;
  padding: 10px 20px; /* Added padding */
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const Title = styled.div`
padding-top: 3rem;
  color: #212121;
  font: 64px Waltograph, sans-serif; /* Decreased font size */
  @media (max-width: 991px) {
    max-width: 100%;
    font-size: 36px; /* Decreased font size */
  }
`;

const Subtitle = styled.div`
  color: #379fff;
  margin-top: 25px;
  font: 700 48px Lato, sans-serif; /* Decreased font size */
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
    font-size: 32px; /* Decreased font size */
  }
`;

const Description = styled.div`
  color: grey;
  margin-top: 25px;
  font: 20px Lato, sans-serif; /* Decreased font size */
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const ActionRow = styled.div`
  display: flex;
  margin-top: 30px;
  align-items: center;
  gap: 16px;
  font-weight: 600;
  @media (max-width: 991px) {
    flex-wrap: wrap;
    margin-top: 40px;
  }
`;

const Button = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  color: #f5f5f7;
  text-align: center;
  justify-content: center;
  font-family: Lato, sans-serif;
  border-radius: 12px;
  background-color: #007bfe;
  padding: 16px 40px; /* Adjusted padding */
  @media (max-width: 991px) {
    padding: 10px 20px; /* Adjusted padding */
  }
`;

const Icon = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 20px; /* Decreased size */
  align-self: stretch;
  margin: auto 0;
`;

const MoreInfo = styled.div`
  color: grey;
  font-size: 13px;
  font-family: Lato, sans-serif;
  align-self: stretch;
  flex-grow: 1;
  flex-basis: auto;
  margin: auto 0;
`;

const InputField = styled.div`
  border-radius: 12px;
  border-color: rgba(0, 0, 0, 0.2);
  border-style: solid;
  border-width: 1px;
  background-color: #fff;
  display: flex;
  margin-top: 25px;
  align-items: flex-start;
  gap: 6px;
  font-size: 16px;
  color: #000;
  font-weight: 500;
  padding: 16px 18px;

  input {
    font-family: Lato, sans-serif;
    flex-grow: 1;
    flex-basis: auto;
    margin: auto 0;
    border: none; /* Removing the default border for the input */
    outline: none; /* Removing the default outline for the input */
  }
`;
const InputPlaceholder = styled.div`
  font-family: Lato, sans-serif;
  border-radius: 12px;
  border-color: #ACACAD;
  /* border-color: rgba(0, 0, 0, 1); */
  border-style: solid;
  border-width: 1px;
  background-color: #f5f5f7;
  margin-top: 49px;
  align-items: start;
  color: #000;
  justify-content: center;
  padding: 20px 40px; /* Adjusted padding */
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
    padding: 10px 20px; /* Adjusted padding */
  }
`;

const CheckScore = styled.div`
  font-family: Lato, sans-serif;
  border-radius: 12px;
  background-color: #007bfe;
  align-self: center;
  margin-top: 30px;
  color: #f5f5f7;
  font-weight: 600;
  text-align: center;
  justify-content: center;
  padding: 16px 40px; /* Adjusted padding */
  @media (max-width: 991px) {
    padding: 10px 20px; /* Adjusted padding */
  }
`;

const ImageColumn = styled.div`
  display: flex;
  flex-direction: column;
  /* line-height: normal; */
  width: 60%;
  /* margin-left: 20px; */
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const ResponsiveImage = styled.img`
  aspect-ratio: 1.11;
  object-fit: auto;
  object-position: center;
  /* width: 80%; Adjusted size */
  /* box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25); */
  flex-grow: 1;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const Div = styled.div`
  display: flex;
  padding-top: 1rem;
  flex-direction: column;
  font-size: 24px;
  color: #000;
  font-weight: 700;
`;

const Img = styled.img`
  aspect-ratio: 1.23;
  object-fit: auto;
  object-position: center;
  width: 100%;
  border-radius: 40px;
  box-shadow: 0px 1px 30px 0px rgba(0, 0, 0, 0.16);
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div2 = styled.div`
  align-self: center;
  display: flex;
  margin-top: 155px;
  width: 1055px;
  max-width: 100%;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const Div3 = styled.div`
  text-align: center;
  align-self: stretch;
  /* font-weight: 800; */
  padding-left: 2rem;
  padding-right: 2rem;
  font: 600 40px Lato, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
    font-size: 40px;
  }
`;

const Img2 = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 250px;
  border-radius: 50%;
  margin-top: 74px;
  max-width: 100%;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const Div4 = styled.div`
  align-self: start;
  display: flex;
  margin-top: 31px;
  width: 626px;
  max-width: 100%;
  gap: 20px;
  font-size: 36px;
  text-align: center;
  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

const Img3 = styled.img`
  aspect-ratio: 1.35;
  object-fit: auto;
  object-position: center;
  width: 72px;
  fill: #f5f5f7;
`;

const Div5 = styled.div`
  font-family: Lato, sans-serif;
  flex-grow: 1;
  padding-left: 25rem;
  flex-basis: auto;
  margin: auto 0;
`;

const Div6 = styled.div`
  text-align: center;
  color: #A4A4A4;
  font-family: Lato, sans-serif;
  font-weight: 300;
  margin-top: 19px;
`;

const Div7 = styled.div`
  font-family: Lato, sans-serif;
  font-weight: 400;
  color: #7A7A7B;
  margin-top: 19px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
  padding-top: 5rem;
`;

const Header = styled.div`
  color: #212121;
  text-align: center;
  font: 300 52px Lato, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
    font-size: 40px;
  }
`;

const Highlight = styled.span`
  color: rgba(33, 33, 33, 1);
`;

const ImageSection = styled.div`
  background-color: #ebf5ff;
  align-self: stretch;
  display: flex;
  margin-top: 75px;
  width: 100%;
  /* align-items: center; */
  /* justify-content: center; */
  padding: 73px 60px;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
    padding: 0 20px;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  width: 70rem;
  padding-right: 1rem;
  padding-right: 1rem;
  /* max-width: 1238px; */
  /* align-items: start; */
  gap: 10px;
  justify-content: space-between;
  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
  }
`;

const StyledImg = styled.img`
  aspect-ratio: 2.94;
  object-fit: auto;
  object-position: center;
  width: 170px;
  max-width: 100%;
`;

const ImageRow = styled.div`
  display: flex;
  gap: 17px;
`;




const StyledImg2 = styled.img`
  aspect-ratio: 5;
  object-fit: auto;
  object-position: center;
  width: 170px;
  fill: #737373;
  max-width: 100%;
  margin: auto 0;
`;

// const ImageColumn1 = styled.div`
//   align-self: stretch;
//   display: flex;
//   gap: 20px;
//   justify-content: space-between;
//   @media (max-width: 991px) {
//     max-width: 100%;
//     flex-wrap: wrap;
//   }
// `;

const StyledImg3 = styled.img`
  aspect-ratio: 3.03;
  object-fit: auto;
  object-position: center;
  width: 170px;
  max-width: 100%;
`;

const StyledImg4 = styled.img`
  aspect-ratio: 5.26;
  object-fit: auto;
  object-position: center;
  width: 170px;
  max-width: 100%;
  margin: auto 0;
`;

const StatisticsSection = styled.div`
  margin-top: 144px;
  width: 100%;
  max-width: 1642px;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const StatisticsContainer = styled.div`
  gap: 20px;
  display: flex;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
`;

const StatisticColumn = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 100%;
  align-items: center;
`;

const Statistic = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 100%;
  align-items: center;
`;

const StatValue = styled.div`
  color: #f25022;
  font: 700 96px "Nunito Sans", sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
    font-size: 40px;
  }
`;

const StatDescription = styled.div`
  text-align: center;
  font: 700 28px "Nunito Sans", sans-serif;
  color: #212121;
  @media (max-width: 991px) {
    max-width: 100%;
    font-size: 20px;
  }
`;

const StatHighlight = styled.div`
  color: #737373;
  font: 700 28px "Nunito Sans", sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
    font-size: 20px;
  }
`;

const CallToAction = styled.div`
  color: black;
  text-align: center; /* Center align text */
  padding-left: 8rem;
  font: 600 56px "Lato", sans-serif;
  padding-top: 5rem;
  margin-top: 43px;
  @media (max-width: 991px) {
    max-width: 100%;
    font-size: 20px;
    padding-left: 0; /* Adjust padding for smaller screens */
  }

  span {
    display: block; /* Ensure "SEO Tools" is on a new line */
    color: black; /* Blue color for "SEO Tools" */
  }
`;

const FeaturesSection = styled.div`
  width: 100%;
  padding-top: 2rem;
  max-width: 1642px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const FeaturesContainer = styled.div`
  gap: 20px;
  display: flex;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
`;

const FeatureColumn = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 100%;
  align-items: center;
`;

const Feature = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 100%;
  align-items: center;
`;

const FeatureIconContainer = styled.div`
  padding: 33px 34px;
  display: flex;
  margin: 0 15px;
  align-items: center;
  justify-content: center;
  background-color: rgba(235, 245, 255, 1);
  border-radius: 6px;
`;

const FeatureIcon = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 118px;
  max-width: 100%;
  fill: #737373;
`;

const FeatureText = styled.div`
  color: #737373;
  font: 700 28px "Nunito Sans", sans-serif;
  margin-top: 33px;
  text-align: center;
  @media (max-width: 991px) {
    max-width: 100%;
    font-size: 20px;
  }
`;
const Container1 = styled.div`
  display: flex;
  /* padding-top: 8rem; */
  justify-content: center;
`;

const Content1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 18rem;
  width: 80%;
  gap: 20px;
  @media (max-width: 991px) {
    flex-direction: column;
  }
`;

const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  /* padding: 0 20px; */
  padding-top: 10rem;
  width: 50%;
  @media (max-width: 991px) {
    width: 100%;
    margin-top: 40px;
  }
`;

const Title1 = styled.div`
  color: #212121;
  padding-right: 1rem;
  font: 550 60px Lato, sans-serif;
  @media (max-width: 991px) {
    font-size: 40px;
  }
`;

const Description1 = styled.div`
  color: #A4A4A4;
  margin-top: 58px;
  font: 500 25px Lato, sans-serif;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const LearnMoreButton = styled.div`
  border-radius: 12px;
  background-color: #007bfe;
  align-self: start;
  margin-top: 100px;
  color: #f5f5f7;
  text-align: center;
  padding: 21px 50px;
  font: 600 18px Lato, sans-serif;
  cursor: pointer;
  @media (max-width: 991px) {
    margin-top: 40px;
    padding: 15px 30px;
  }
`;

const ImageSection1 = styled.div`
  width: 50%;
  padding-bottom: 10rem;
  @media (max-width: 991px) {
    width: 100%;
    margin-top: 40px;
  }
`;

const Image = styled.img`
  aspect-ratio: 0.68;
  object-fit: cover;
  width: 100%;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;
const StyledDiv = styled.div`
  background-color: #ff5c00;
  display: flex;
  align-items: center;
  color: #f5f5f7;
  font-weight: 600;
  text-align: center;
  justify-content: center;
  padding: 80px 60px;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const StyledDiv2 = styled.div`
  display: flex;
  margin-top: 2px;
  width: 1174px;
  max-width: 100%;
  flex-direction: column;
  align-items: center;
`;

const StyledDiv3 = styled.div`
  align-self: stretch;
  font: 550 56px Lato, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
    font-size: 40px;
  }
`;

const StyledDiv4 = styled.div`
  margin-top: 30px;
  font: 48px Lato, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
    font-size: 40px;
  }
`;

const StyledDiv5 = styled.div`
  border-radius: 12px;
  background-color: #f5f5f7;
  margin-top: 50px;
  color: #212121;
  justify-content: center;
  padding: 21px 57px;
  font: 18px Lato, sans-serif;
  @media (max-width: 991px) {
    margin-top: 40px;
    padding: 0 20px;
  }
`;


export default Home;
