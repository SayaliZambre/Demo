import styled from "styled-components";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import image1 from "../../../Images/Search.png";
import Navbar from '../../Public/Navbar';
import Sidebar from '../../Public/Sidebar';
import Footer from '../../Public/Footer';


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
    {/* <Div> */}
      <Div2>
        <Img
          loading="lazy"
          src={image1}        />
        <Searchyourdomainurlorkeyword>
          Search your domain,url or keyword..
        </Searchyourdomainurlorkeyword>
      </Div2>
      <Div3>
        <Yourresultsforcbbcoastalbroadbandin>
          Your results for cbb.coastalbroadband.in{" "}
        </Yourresultsforcbbcoastalbroadbandin>
        <Div4>
          <Img2
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2a9c26deb77c1abe5f30ef0ce0aee806265c914932c355f69ea5da780c0c9bae?apiKey=70bbbe661cc747b893a0c12c47223d3a&"
          />
          <Div5>
            <Img3
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/09835bc333492c9744e04821ed02896f7e88ed3f8730a61f090c12d2f4db570b?apiKey=70bbbe661cc747b893a0c12c47223d3a&"
            />
            76
          </Div5>
        </Div4>
        <OverallScore>Overall Score</OverallScore>
        <Div7>
          <Div8>
            <Div9>
              <Div10>
                <Img4
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9522af1418a96c8f2ad72f05b4ffaedc432af07d76c56c29dd673e62d831769a?apiKey=70bbbe661cc747b893a0c12c47223d3a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9522af1418a96c8f2ad72f05b4ffaedc432af07d76c56c29dd673e62d831769a?apiKey=70bbbe661cc747b893a0c12c47223d3a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9522af1418a96c8f2ad72f05b4ffaedc432af07d76c56c29dd673e62d831769a?apiKey=70bbbe661cc747b893a0c12c47223d3a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9522af1418a96c8f2ad72f05b4ffaedc432af07d76c56c29dd673e62d831769a?apiKey=70bbbe661cc747b893a0c12c47223d3a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9522af1418a96c8f2ad72f05b4ffaedc432af07d76c56c29dd673e62d831769a?apiKey=70bbbe661cc747b893a0c12c47223d3a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9522af1418a96c8f2ad72f05b4ffaedc432af07d76c56c29dd673e62d831769a?apiKey=70bbbe661cc747b893a0c12c47223d3a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9522af1418a96c8f2ad72f05b4ffaedc432af07d76c56c29dd673e62d831769a?apiKey=70bbbe661cc747b893a0c12c47223d3a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9522af1418a96c8f2ad72f05b4ffaedc432af07d76c56c29dd673e62d831769a?apiKey=70bbbe661cc747b893a0c12c47223d3a&"
                />
                <Img5
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5262c326ad63c77daf52dce69680e008b7ff62a170b3c134d6b32b0b0403c2e3?apiKey=70bbbe661cc747b893a0c12c47223d3a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5262c326ad63c77daf52dce69680e008b7ff62a170b3c134d6b32b0b0403c2e3?apiKey=70bbbe661cc747b893a0c12c47223d3a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5262c326ad63c77daf52dce69680e008b7ff62a170b3c134d6b32b0b0403c2e3?apiKey=70bbbe661cc747b893a0c12c47223d3a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5262c326ad63c77daf52dce69680e008b7ff62a170b3c134d6b32b0b0403c2e3?apiKey=70bbbe661cc747b893a0c12c47223d3a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5262c326ad63c77daf52dce69680e008b7ff62a170b3c134d6b32b0b0403c2e3?apiKey=70bbbe661cc747b893a0c12c47223d3a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5262c326ad63c77daf52dce69680e008b7ff62a170b3c134d6b32b0b0403c2e3?apiKey=70bbbe661cc747b893a0c12c47223d3a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5262c326ad63c77daf52dce69680e008b7ff62a170b3c134d6b32b0b0403c2e3?apiKey=70bbbe661cc747b893a0c12c47223d3a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5262c326ad63c77daf52dce69680e008b7ff62a170b3c134d6b32b0b0403c2e3?apiKey=70bbbe661cc747b893a0c12c47223d3a&"
                />
              </Div10>
              <Div11>
                <Performance>Performance</Performance>
                <Div12>
                  <Div13 />
                </Div12>
              </Div11>
            </Div9>
            <Div14>
              <Div15>
                <Column>
                  <Div16>
                    <Div17>
                      <Img6
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c531a5ed879ec562705b66d77830147120891d36c5fbdc93884a8ba666063565?apiKey=70bbbe661cc747b893a0c12c47223d3a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c531a5ed879ec562705b66d77830147120891d36c5fbdc93884a8ba666063565?apiKey=70bbbe661cc747b893a0c12c47223d3a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c531a5ed879ec562705b66d77830147120891d36c5fbdc93884a8ba666063565?apiKey=70bbbe661cc747b893a0c12c47223d3a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c531a5ed879ec562705b66d77830147120891d36c5fbdc93884a8ba666063565?apiKey=70bbbe661cc747b893a0c12c47223d3a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c531a5ed879ec562705b66d77830147120891d36c5fbdc93884a8ba666063565?apiKey=70bbbe661cc747b893a0c12c47223d3a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c531a5ed879ec562705b66d77830147120891d36c5fbdc93884a8ba666063565?apiKey=70bbbe661cc747b893a0c12c47223d3a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c531a5ed879ec562705b66d77830147120891d36c5fbdc93884a8ba666063565?apiKey=70bbbe661cc747b893a0c12c47223d3a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c531a5ed879ec562705b66d77830147120891d36c5fbdc93884a8ba666063565?apiKey=70bbbe661cc747b893a0c12c47223d3a&"
                      />
                      <Seo>SEO</Seo>
                    </Div17>
                    <Div18>
                      <Div19 />
                      <Mobile>Mobile</Mobile>
                    </Div18>
                    <Div20>
                      <Div21 />
                      <Security>Security</Security>
                    </Div20>
                  </Div16>
                </Column>
                <Column2>
                  <Div22>
                    <Div23>
                      <Div24>
                        <Div25 />
                      </Div24>
                      <Div26 />
                      <Div27>
                        <Div28 />
                      </Div27>
                    </Div23>
                    <Text>Download PDF</Text>
                    <Text2>Share</Text2>
                  </Div22>
                </Column2>
              </Div15>
            </Div14>
          </Div8>
        </Div7>
      </Div3>
    {/* </Div> */}
    </Wrapper>
      <Footer/>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
`;

const Div = styled.div`
  border-radius: 0px 0px 0px 0px;
  display: flex;
  flex-direction: column;
`;

const Div2 = styled.div`
  border-radius: 12px;
  background-color: rgba(229, 229, 229, 1);
  align-self: start;
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: rgba(0, 0, 0, 1);
  flex-wrap: wrap;
  padding: 15px 38px;
  font: 600 18px Lato, sans-serif;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const Img = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 20px;
  align-self: start;
`;

const Searchyourdomainurlorkeyword = styled.div`
  flex-basis: auto;
  flex-grow: 1;
`;

const Div3 = styled.div`
  align-self: end;
  display: flex;
  margin-top: 96px;
  width: 100%;
  max-width: 848px;
  flex-direction: column;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const Yourresultsforcbbcoastalbroadbandin = styled.div`
  color: rgba(0, 0, 0, 1);
  align-self: start;
  font: 600 36px Lato, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div4 = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  align-self: center;
  position: relative;
  aspect-ratio: 1.12;
  margin-top: 89px;
  width: 262px;
  max-width: 100%;
  color: rgba(0, 0, 0, 1);
  white-space: nowrap;
  justify-content: center;
  padding: 1px 2px;
  font: 700 72px Lato, sans-serif;
  @media (max-width: 991px) {
    margin-top: 40px;
    font-size: 40px;
    white-space: initial;
  }
`;

const Img2 = styled.img`
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
`;

const Div5 = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  border-radius: 50%;
  aspect-ratio: 1.116;
  padding: 90px 70px;
  @media (max-width: 991px) {
    font-size: 40px;
    white-space: initial;
    padding: 0 20px;
  }
`;

const Img3 = styled.img`
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
`;

const Div6 = styled.div`
  position: relative;
`;

const OverallScore = styled.div`
  color: rgba(0, 0, 0, 1);
  text-align: center;
  align-self: center;
  margin-top: 21px;
  font: 700 32px Lato, sans-serif;
`;

const Div7 = styled.div`
  border-radius: 15px;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0px 2px 2px rgba(16, 24, 40, 0.1);
  display: flex;
  margin-top: 77px;
  flex-direction: column;
  align-items: center;
  padding: 449px 80px 48px;
  border: 1px solid rgba(224, 226, 231, 1);
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
    padding: 100px 20px 0;
  }
`;

const Div8 = styled.div`
  display: flex;
  width: 475px;
  max-width: 100%;
  flex-direction: column;
`;

const Div9 = styled.div`
  display: flex;
  gap: 9px;
`;

const Div10 = styled.div`
  display: flex;
`;

const Img4 = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 37px;
  border-radius: 50%;
`;

const Img5 = styled.img`
  aspect-ratio: 0.83;
  object-fit: contain;
  object-position: center;
  width: 10px;
  align-self: start;
  margin-top: 6px;
`;

const Div11 = styled.div`
  display: flex;
  gap: 40px 55px;
  flex-grow: 1;
  flex-basis: auto;
  margin: auto 0;
`;

const Performance = styled.div`
  color: rgba(0, 0, 0, 1);
  flex-basis: auto;
  font: 600 18px Lato, sans-serif;
`;

const Div12 = styled.div`
  border-radius: 21px;
  background-color: rgba(217, 217, 217, 1);
  display: flex;
  flex-direction: column;
  align-items: start;
  flex-grow: 1;
  flex-basis: 0;
  width: fit-content;
`;

const Div13 = styled.div`
  border-radius: 21px;
  background-color: rgba(248, 75, 76, 1);
  display: flex;
  width: 134px;
  height: 21px;
`;

const Div14 = styled.div`
  margin-top: 27px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div15 = styled.div`
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
  width: 25%;
  margin-left: 0px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Div16 = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: start;
  color: rgba(0, 0, 0, 1);
  white-space: nowrap;
  font: 600 18px Lato, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div17 = styled.div`
  display: flex;
  gap: 19px;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Img6 = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 37px;
  border-radius: 50%;
`;

const Seo = styled.div`
  margin: auto 0;
`;

const Div18 = styled.div`
  display: flex;
  margin-top: 27px;
  gap: 19px;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div19 = styled.div`
  background-color: rgba(203, 75, 248, 1);
  border-radius: 50%;
  display: flex;
  width: 37px;
  height: 37px;
`;

const Mobile = styled.div`
  margin: auto 0;
`;

const Div20 = styled.div`
  align-self: stretch;
  display: flex;
  margin-top: 27px;
  gap: 19px;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div21 = styled.div`
  background-color: rgba(248, 158, 75, 1);
  border-radius: 50%;
  display: flex;
  width: 37px;
  height: 37px;
`;

const Security = styled.div`
  margin: auto 0;
`;

const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 75%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Div22 = styled.div`
  display: flex;
  margin-top: 8px;
  flex-grow: 1;
  flex-direction: column;
  align-items: start;
`;

const Div23 = styled.div`
  align-self: stretch;
  display: flex;
  padding-left: 71px;
  flex-direction: column;
  align-items: start;
  @media (max-width: 991px) {
    padding-left: 20px;
  }
`;

const Div24 = styled.div`
  border-radius: 21px;
  background-color: rgba(217, 217, 217, 1);
  display: flex;
  width: 264px;
  max-width: 100%;
  flex-direction: column;
  align-items: start;
  @media (max-width: 991px) {
    padding-right: 20px;
  }
`;

const Div25 = styled.div`
  border-radius: 21px;
  background-color: rgba(3, 189, 165, 1);
  display: flex;
  height: 21px;
`;

const Div26 = styled.div`
  border-radius: 21px;
  background-color: rgba(203, 75, 248, 1);
  display: flex;
  margin-top: 43px;
  width: 264px;
  max-width: 100%;
  height: 21px;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const Div27 = styled.div`
  border-radius: 21px;
  background-color: rgba(217, 217, 217, 1);
  display: flex;
  margin-top: 43px;
  width: 264px;
  max-width: 100%;
  flex-direction: column;
  align-items: start;
  @media (max-width: 991px) {
    padding-right: 20px;
    margin-top: 40px;
  }
`;

const Div28 = styled.div`
  border-radius: 21px;
  background-color: rgba(248, 158, 75, 1);
  display: flex;
  width: 102px;
  height: 21px;
`;

const Text = styled.div`
  border-radius: 12px;
  background-color: rgba(0, 123, 254, 1);
  margin-top: 56px;
  color: rgba(255, 255, 255, 1);
  text-align: center;
  padding: 16px 62px;
  font: 600 16px Lato, sans-serif;
  @media (max-width: 991px) {
    margin-top: 40px;
    padding: 0 20px;
  }
`;

const Text2 = styled.div`
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 1);
  margin-top: 24px;
  width: 232px;
  max-width: 100%;
  color: rgba(0, 0, 0, 1);
  white-space: nowrap;
  text-align: center;
  padding: 16px 70px;
  font: 600 16px Lato, sans-serif;
  border: 1px solid rgba(0, 0, 0, 0.2);
  @media (max-width: 991px) {
    white-space: initial;
    padding: 0 20px;
  }
`;

export default Homemain;
