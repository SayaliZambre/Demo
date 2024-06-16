import React from "react";
import styled from "styled-components";

function Home() {
  return (
    <Container>
      <ContentContainer>
        <TimeContainer>
          <Time>9:41</Time>
          <IconsContainer>
            <Icon
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/eda7be301e8ec8b14cba6264f901b55f576029dc36b19d846955fc48f24feb36?"
            />
            <Icon
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8121caa7c23de625c53e5f006c86c7270cd204af28bf3771bccbdd25dfe051bb?"
            />
            <Icon
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/908eb71ce98fc43565468400eba7039a9b76c33e079f51d79913e1920cf8c47f?"
            />
          </IconsContainer>
        </TimeContainer>
        <FeatureContainer>
          <FeatureContent>
            <FeatureTitle>
              <strong>SEO</strong> Impact
            </FeatureTitle>
            <FeatureInfo>
              <FeatureIcon
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c0fe72117b551720634b6abc733acabb7648991a786dd6d06a6972464fd11249?"
              />
              <FeatureText>Sign In</FeatureText>
            </FeatureInfo>
          </FeatureContent>
        </FeatureContainer>
      </ContentContainer>
      <DetailsContainer>
        <DetailsTitle>
          <span>Experience</span> seamless elegance on the go
        </DetailsTitle>
        <InputContainer>
          <InputIcon
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/cbb2ea1c29be99c31a3ddf3e754c7a0bb0305ab69ac8defc4366ecebea00f204?"
          />
          <InputText>Enter your Website</InputText>
        </InputContainer>
        <ActionButton>Check Website Score</ActionButton>
        <Separator />
        <UnlockText>
          <span>Unlock</span> a world of possibilities
        </UnlockText>
      </DetailsContainer>
      <PlanContainer>
        <PlanText>Get your Plan</PlanText>
        <PlanIcon
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ae04cff32b333c95c3b80662ab1302e0e560b1b0711a811fee989f2fcae7e05f?"
        />
      </PlanContainer>
    </Container>
  );
}

const Container = styled.div`
  background-color: #fff;
  display: flex;
  max-width: 480px;
  width: 100%;
  padding-bottom: 30px;
  flex-direction: column;
  margin: 0 auto;
`;

const ContentContainer = styled.div`
  background-color: rgba(0, 123, 254, 0.1);
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 17px 29px 37px;
`;

const TimeContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;
  justify-content: space-between;
`;

const Time = styled.div`
  color: var(--Text-Color, #1e1e1e);
  text-align: center;
  letter-spacing: -0.3px;
  font: 500 15px Plus Jakarta Sans, sans-serif;
`;

const IconsContainer = styled.div`
  align-self: start;
  display: flex;
  align-items: start;
  gap: 5px;
`;

const Icon = styled.img`
  aspect-ratio: 1.69;
  object-fit: auto;
  object-position: center;
  width: 17px;
  fill: var(--Text-Color, #1e1e1e);
`;

const FeatureContainer = styled.div`
  align-self: end;
  display: flex;
  margin-top: 25px;
  width: 228px;
  max-width: 100%;
  gap: 20px;
`;

const FeatureContent = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 12px;
  color: #000;
  font-weight: 400;
  line-height: 67%;
`;

const FeatureTitle = styled.div`
  color: #212121;
  align-self: start;
  margin-top: 14px;
  flex-grow: 1;
  flex-basis: auto;
  font: 500 40px Proxima Nova, sans-serif;
`;

const FeatureIcon = styled.img`
  aspect-ratio: 1.41;
  object-fit: auto;
  object-position: center;
  width: 34px;
  align-self: center;
`;

const FeatureText = styled.div`
  font-family: Lato, sans-serif;
`;
const FeatureInfo = styled.div`
  font-family: Lato, sans-serif;
`;

const DetailsContainer = styled.div`
  display: flex;
  margin-top: 53px;
  width: 100%;
  flex-direction: column;
  font-size: 16px;
  color: #000;
  font-weight: 700;
  padding: 0 33px;
`;

const DetailsTitle = styled.div`
  font: 50px Proxima Nova, sans-serif;
`;

const InputContainer = styled.div`
  border-radius: 12px;
  border-color: rgba(0, 0, 0, 0.2);
  border-style: solid;
  border-width: 1px;
  background-color: #fff;
  align-self: center;
  display: flex;
  margin-top: 26px;
  gap: 12px;
  font-weight: 500;
  padding: 16px 12px;
`;

const InputIcon = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 24px;
`;

const InputText = styled.div`
  font-family: Lato, sans-serif;
  flex-grow: 1;
  flex-basis: auto;
  margin: auto 0;
`;

const ActionButton = styled.div`
  border-radius: 12px;
  background-color: #007bfe;
  align-self: center;
  margin-top: 36px;
  color: #fff;
  font-weight: 600;
  text-align: center;
  justify-content: center;
  padding: 20px 42px;
`;

const Separator = styled.div`
  border-color: rgba(0, 0, 0, 1);
  border-style: solid;
  border-width: 1px;
  background-color: #000;
  margin-top: 37px;
  height: 1px;
`;

const UnlockText = styled.div`
  margin-top: 47px;
  font: 40px Proxima Nova, sans-serif;
`;

const PlanContainer = styled.div`
  border-radius: 0px 12px 12px 0px;
  background-color: #007bfe;
  display: flex;
  margin-top: 39px;
  width: 100%;
  flex-direction: column;
  align-items: start;
  font-size: 25px;
  color: #fff;
  font-weight: 600;
  padding: 30px 0 0 61px;
`;

const PlanText = styled.div`
  font-family: Lato, sans-serif;
`;

const PlanIcon = styled.img`
  aspect-ratio: 20;
  object-fit: auto;
  object-position: center;
  width: 444px;
  z-index: 10;
  margin-bottom: -4px;
`;

export default Home;
