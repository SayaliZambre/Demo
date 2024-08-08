import React from "react";
import styled from "styled-components";

// Styled-components
const StyledDiv = styled.div`
  border-radius: 0px;
  display: flex;
  flex-direction: column;
`;

const StyledDiv2 = styled.div`
  background-color: rgba(55, 159, 255, 0.1);
  display: flex;
  width: 100%;
  gap: 40px 100px;
  font-family: Lato, sans-serif;
  color: rgba(0, 0, 0, 1);
  flex-wrap: wrap;
  padding: 54px 62px;

  @media (max-width: 991px) {
    max-width: 100%;
    padding: 0 20px;
  }
`;

const StyledDiv3 = styled.div`
  display: flex;
  align-items: start;
  gap: 40px 48px;
  font-size: 24px;
  font-weight: 500;
  justify-content: start;
  flex-wrap: wrap;
  margin: auto 0;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Home = styled.div`
  color: rgba(188, 196, 204, 1);
  font-weight: 700;
`;

const StyledDiv4 = styled.div`
  display: flex;
  gap: 18px;
  font-size: 14px;
  font-weight: 600;
`;

const Img = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 36px;
`;

const SaiChittala = styled.div`
  margin: auto 0;
`;

const StyledDiv5 = styled.div`
  align-self: end;
  display: flex;
  width: 1066px;
  max-width: 100%;
  flex-direction: column;
  margin: 36px 200px 0 0;

  @media (max-width: 991px) {
    margin-right: 10px;
  }
`;

const BacklinkChecker = styled.div`
  color: rgba(0, 0, 0, 1);
  align-self: start;
  font: 600 48px Lato, sans-serif;

  @media (max-width: 991px) {
    font-size: 40px;
  }
`;

const Text = styled.div`
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 1);
  align-self: center;
  width: 467px;
  max-width: 100%;
  color: rgba(0, 0, 0, 1);
  white-space: nowrap;
  margin: 72px 0 0 65px;
  padding: 24px 59px;
  font: 500 18px Lato, sans-serif;
  border: 1px solid rgba(0, 0, 0, 1);

  @media (max-width: 991px) {
    margin-top: 40px;
    white-space: initial;
    padding: 0 20px;
  }
`;

const StyledDiv6 = styled.div`
  align-self: end;
  width: 810px;
  max-width: 100%;
  margin: 77px 63px 0 0;

  @media (max-width: 991px) {
    margin: 40px 10px 0 0;
  }
`;

const StyledDiv7 = styled.div`
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
  width: 33%;
  margin-left: 0px;

  @media (max-width: 991px) {
    width: 100%;
  }
`;

const StyledDiv8 = styled.div`
  border-radius: 12px;
  background-color: rgba(55, 159, 255, 1);
  display: flex;
  width: 100%;
  flex-direction: column;
  font-family: Lato, sans-serif;
  color: rgba(0, 0, 0, 1);
  font-weight: 600;
  margin: 0 auto;
  padding: 15px 32px;

  @media (max-width: 991px) {
    margin-top: 24px;
    padding: 0 20px;
  }
`;

const StyledDiv9 = styled.div`
  display: flex;
  gap: 36px;
  font-size: 18px;
`;

const DomainRating = styled.div`
  flex-grow: 1;
  width: 111px;
  margin: auto 0;
`;

// React component
function BackliteChesker() {
  return (
    <StyledDiv>
      <StyledDiv2>
        <StyledDiv3>
          <Home>Home</Home>
          <div>Pricing</div>
          <div>Careers</div>
          <div>Resources</div>
          <div>Contact Us</div>
          <div>About Us</div>
        </StyledDiv3>
        <StyledDiv4>
          <Img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b536249ce73390c5061783169e2b0271422634eb1498aae12ff862d8e09f2e2b?apiKey=70bbbe661cc747b893a0c12c47223d3a&&apiKey=70bbbe661cc747b893a0c12c47223d3a"
          />
          <SaiChittala>Sai Chittala</SaiChittala>
        </StyledDiv4>
      </StyledDiv2>
      <StyledDiv5>
        <BacklinkChecker>Backlink Checker</BacklinkChecker>
        <Text>cbb.coastalbroadband.in</Text>
        <StyledDiv6>
          <StyledDiv7>
            <Column>
              <StyledDiv8>
                <StyledDiv9>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/bc320f9469d8c4b91e3e9969f2e1176da5b949a038991b5daf99ab5afa0225bb?apiKey=70bbbe661cc747b893a0c12c47223d3a&&apiKey=70bbbe661cc747b893a0c12c47223d3a"
                  />
                  <DomainRating>Domain Rating</DomainRating>
                </StyledDiv9>
                <div>5</div>
              </StyledDiv8>
            </Column>
            {/* Continue with the rest of the structure */}
          </StyledDiv7>
        </StyledDiv6>
        {/* Add the remaining structure similarly... */}
      </StyledDiv5>
    </StyledDiv>
  );
}

export default BackliteChesker;
