import styled from "styled-components";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import image from "../../../Images/Search.png";
import Navbar from '../../Public/Navbar';
import Sidebar from '../../Public/Sidebar';
import Footer from '../../Public/Footer';
import image from "./image.png";

const Homemain = () => {

    const [activeSection, setActiveSection] = useState('My Projects');
    // const navigate = useNavigate(); 
    const handleSectionClick = (section) => {
      setActiveSection(section);
      console.log(`Section clicked: ${section}`);
    };


    return (
        <>
        <Navbar/>
        <Wrapper>
          <Sidebar activeSection={activeSection} onSectionClick={handleSectionClick}/>
    <Div>

    <Container>
      <SearchContainer>
        <Icon
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/139faca0077538a1b4be10eef43a9472617f83f3716897d39a03edf4b6b4c064?placeholderIfAbsent=true&apiKey=70bbbe661cc747b893a0c12c47223d3a"
          alt="Search Icon"
        />
        <SearchText>Search your domain, URL, or keyword..</SearchText>
      </SearchContainer>

      <ResultsContainer>
        <ResultTitle>Your results for cbb.coastalbroadband.in</ResultTitle>

        <ScoreContainer>
          <ScoreBackground
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2a9c26deb77c1abe5f30ef0ce0aee806265c914932c355f69ea5da780c0c9bae?placeholderIfAbsent=true&apiKey=70bbbe661cc747b893a0c12c47223d3a"
            alt="Score Background"
          />
          <ScoreValueContainer>
            <ScoreIcon
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/09835bc333492c9744e04821ed02896f7e88ed3f8730a61f090c12d2f4db570b?placeholderIfAbsent=true&apiKey=70bbbe661cc747b893a0c12c47223d3a"
              alt="Score Icon"
            />
            76
          </ScoreValueContainer>
        </ScoreContainer>

        <ScoreLabel>Overall Score</ScoreLabel>

        <MetricsContainer>
          <Metric>
            <MetricIcon
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9522af1418a96c8f2ad72f05b4ffaedc432af07d76c56c29dd673e62d831769a?placeholderIfAbsent=true&apiKey=70bbbe661cc747b893a0c12c47223d3a"
              alt="Performance Icon"
            />
            <MetricText>Performance</MetricText>
            <MetricBar>
              <MetricProgress />
            </MetricBar>
          </Metric>
          <Metric>
            <MetricIcon
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c531a5ed879ec562705b66d77830147120891d36c5fbdc93884a8ba666063565?placeholderIfAbsent=true&apiKey=70bbbe661cc747b893a0c12c47223d3a"
              alt="SEO Icon"
            />
            <MetricText>SEO</MetricText>
            <MetricBar>
              <MetricProgress />
            </MetricBar>
          </Metric>
          <Metric>
            <MetricIcon
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5262c326ad63c77daf52dce69680e008b7ff62a170b3c134d6b32b0b0403c2e3?placeholderIfAbsent=true&apiKey=70bbbe661cc747b893a0c12c47223d3a"
              alt="Security Icon"
            />
            <MetricText>Security</MetricText>
            <MetricBar>
              <MetricProgress />
            </MetricBar>
          </Metric>
        </MetricsContainer>

        <ActionContainer>
          <ActionButton>Download PDF</ActionButton>
          <ActionButton>Share</ActionButton>
        </ActionContainer>
      </ResultsContainer>
    </Container>

    <Container1>
      <Title>Performance</Title>
      <MainImage
        loading="lazy"
        src={image}         />
      <ContentWrapper>
        <ImageTextWrapper>
          <Thumbnail
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b2d210881e4716a4998eeefcf1850d5ece8f0f972df2d87678143cfe1aab3d4d?placeholderIfAbsent=true&apiKey=70bbbe661cc747b893a0c12c47223d3a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b2d210881e4716a4998eeefcf1850d5ece8f0f972df2d87678143cfe1aab3d4d?placeholderIfAbsent=true&apiKey=70bbbe661cc747b893a0c12c47223d3a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b2d210881e4716a4998eeefcf1850d5ece8f0f972df2d87678143cfe1aab3d4d?placeholderIfAbsent=true&apiKey=70bbbe661cc747b893a0c12c47223d3a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b2d210881e4716a4998eeefcf1850d5ece8f0f972df2d87678143cfe1aab3d4d?placeholderIfAbsent=true&apiKey=70bbbe661cc747b893a0c12c47223d3a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b2d210881e4716a4998eeefcf1850d5ece8f0f972df2d87678143cfe1aab3d4d?placeholderIfAbsent=true&apiKey=70bbbe661cc747b893a0c12c47223d3a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b2d210881e4716a4998eeefcf1850d5ece8f0f972df2d87678143cfe1aab3d4d?placeholderIfAbsent=true&apiKey=70bbbe661cc747b893a0c12c47223d3a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b2d210881e4716a4998eeefcf1850d5ece8f0f972df2d87678143cfe1aab3d4d?placeholderIfAbsent=true&apiKey=70bbbe661cc747b893a0c12c47223d3a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b2d210881e4716a4998eeefcf1850d5ece8f0f972df2d87678143cfe1aab3d4d?placeholderIfAbsent=true&apiKey=70bbbe661cc747b893a0c12c47223d3a"
          />
          <SubTitle>Performance</SubTitle>
        </ImageTextWrapper>
        <Separator>
          <SeparatorLine />
        </Separator>
      </ContentWrapper>
      <StatsWrapper>
        <StatColumn>
          <StatBlock>
            <StatTitle>Page Size</StatTitle>
            <StatImage
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d7347b8c65ce95f1420a008c0b987ede270c42684a08ff3aba8a08263b8d570e?placeholderIfAbsent=true&apiKey=70bbbe661cc747b893a0c12c47223d3a"
            />
            <StatValue>2.2 MB</StatValue>
            <StatDescription>So fast! So light!</StatDescription>
            <StatDetails>
              Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.
            </StatDetails>
          </StatBlock>
        </StatColumn>
        <StatColumn>
          <StatBlock>
            <StatTitle>Page Requests</StatTitle>
            <StatImage
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e8b68f62fc66058ff65f3f9511fc9380f1b4494e15fc408c73dc66128d6a1b1a?placeholderIfAbsent=true&apiKey=70bbbe661cc747b893a0c12c47223d3a"
            />
            <StatValue>15</StatValue>
            <StatDescription>You make this look easy!</StatDescription>
            <div>
              Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.
            </div>
          </StatBlock>
        </StatColumn>
      </StatsWrapper>
      <ResultsWrapper>
        <ResultBlock>
          <ResultColumn>
            <ResultTitle1>Fail</ResultTitle1>
            <ResultDetails>
              <ResultSubtitle>Minified Javascript</ResultSubtitle>
              <ResultImage
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/07e7b1c891fa47eaac4dda70c4a53128926a35c599136f4604a45895808039bc?placeholderIfAbsent=true&apiKey=70bbbe661cc747b893a0c12c47223d3a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/07e7b1c891fa47eaac4dda70c4a53128926a35c599136f4604a45895808039bc?placeholderIfAbsent=true&apiKey=70bbbe661cc747b893a0c12c47223d3a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/07e7b1c891fa47eaac4dda70c4a53128926a35c599136f4604a45895808039bc?placeholderIfAbsent=true&apiKey=70bbbe661cc747b893a0c12c47223d3a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/07e7b1c891fa47eaac4dda70c4a53128926a35c599136f4604a45895808039bc?placeholderIfAbsent=true&apiKey=70bbbe661cc747b893a0c12c47223d3a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/07e7b1c891fa47eaac4dda70c4a53128926a35c599136f4604a45895808039bc?placeholderIfAbsent=true&apiKey=70bbbe661cc747b893a0c12c47223d3a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/07e7b1c891fa47eaac4dda70c4a53128926a35c599136f4604a45895808039bc?placeholderIfAbsent=true&apiKey=70bbbe661cc747b893a0c12c47223d3a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/07e7b1c891fa47eaac4dda70c4a53128926a35c599136f4604a45895808039bc?placeholderIfAbsent=true&apiKey=70bbbe661cc747b893a0c12c47223d3a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/07e7b1c891fa47eaac4dda70c4a53128926a35c599136f4604a45895808039bc?placeholderIfAbsent=true&apiKey=70bbbe661cc747b893a0c12c47223d3a"
              />
              <ResultTag>Missed</ResultTag>
              <ResultDescription>
                Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
              </ResultDescription>
            </ResultDetails>
          </ResultColumn>
        </ResultBlock>
      </ResultsWrapper>
    </Container1>
    
    </Div>
    </Wrapper>
      <Footer/>
    </>
  );
}

const Div = styled.div`
  /* display: flex; */
`;
const Wrapper = styled.div`
  display: flex;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #e5e5e5;
  border-radius: 12px;
  padding: 15px 38px;
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: 600;
`;

const Icon = styled.img`
  width: 20px;
  margin-right: 20px;
`;

const SearchText = styled.div`
  flex-grow: 1;
`;

const ResultsContainer = styled.div`
  max-width: 848px;
  width: 100%;
  text-align: center;
  margin-top: 40px;
`;

const ResultTitle = styled.h2`
  font-size: 36px;
  font-weight: 600;
`;

const ScoreContainer = styled.div`
  position: relative;
  width: 262px;
  height: 262px;
  margin: 40px auto;
`;

const ScoreBackground = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`;

const ScoreValueContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: 72px;
  font-weight: 700;
  position: relative;
`;

const ScoreIcon = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;

const ScoreLabel = styled.div`
  font-size: 32px;
  font-weight: 700;
`;

const MetricsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 40px 0;
  flex-wrap: wrap;
`;

const Metric = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: 30%;
  margin-bottom: 20px;
`;

const MetricIcon = styled.img`
  width: 37px;
  margin-bottom: 10px;
`;

const MetricText = styled.div`
  font-size: 18px;
  font-weight: 600;
`;

const MetricBar = styled.div`
  width: 134px;
  height: 21px;
  background-color: #d9d9d9;
  border-radius: 21px;
  margin-top: 10px;
`;

const MetricProgress = styled.div`
  width: 70%;
  height: 100%;
  background-color: #f84b4c;
  border-radius: 21px;
`;

const ActionContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

const ActionButton = styled.button`
  background-color: #d9d9d9;
  border: none;
  padding: 10px 20px;
  border-radius: 12px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
`;
const Container1 = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 20px;
`;

const MainImage = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 20px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const ImageTextWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Thumbnail = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;
`;

const SubTitle = styled.h2`
  font-size: 1.5rem;
`;

const Separator = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;

const SeparatorLine = styled.hr`
  border: 0;
  height: 1px;
  background-color: #ccc;
`;

const StatsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const StatColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-right: 20px;
`;

const StatBlock = styled.div`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const StatTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

const StatImage = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 10px;
`;

const StatValue = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
`;

const StatDescription = styled.p`
  margin-bottom: 10px;
`;

const StatDetails = styled.p`
  font-size: 0.9rem;
  color: #777;
`;

const ResultsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ResultBlock = styled.div`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 20px;
`;

const ResultColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const ResultTitle1 = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

const ResultDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const ResultSubtitle = styled.h4`
  font-size: 1rem;
  margin-bottom: 10px;
`;

const ResultImage = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 10px;
`;

const ResultTag = styled.span`
  background-color: red;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  align-self: flex-start;
`;

const ResultDescription = styled.p`
  font-size: 0.9rem;
  color: #777;
`;

export default Homemain;
