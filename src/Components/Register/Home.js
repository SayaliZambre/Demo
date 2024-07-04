import * as React from "react";
import styled from "styled-components";
import image from '../../Images/carbon_arrow-up.png';
import image1 from '../../Images/Group 11.png';


const Home = () => {
  return (
    <Container>
      <Content>
        <LeftColumn>
          <TextContainer>
            <Title>Introducing</Title>
            <Subtitle>SEO Impact</Subtitle>
            <Description>
              Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.
            </Description>
            <CallToActionContainer>
              <Button>Get Started</Button>
              <Icon
                  src={image} alt="Email Icon" />
              <Link>Click here to know more!</Link>
            </CallToActionContainer>
            <InputContainer>Enter your website here....</InputContainer>
            <SubmitButton>Check Score</SubmitButton>
          </TextContainer>
        </LeftColumn>
        <RightColumn>
          <Image
          src={image1} alt="Email Icon" />
        </RightColumn>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
`;

const Content = styled.div`
  gap: 20px;
  display: flex;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 32%;
  margin-left: 0px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  font-size: 18px;
  font-weight: 500;
  margin: auto 0;
  padding: 0 20px;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const Title = styled.div`
  color: #212121;
  font: 108px Waltograph, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
    font-size: 40px;
  }
`;

const Subtitle = styled.div`
  color: #379fff;
  margin-top: 52px;
  font: 700 72px Lato, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
    font-size: 40px;
  }
`;

const Description = styled.div`
  color: #000;
  margin-top: 45px;
  font: 24px Lato, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const CallToActionContainer = styled.div`
  display: flex;
  margin-top: 49px;
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
  justify-content: center;
  padding: 21px 49px;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const Icon = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 24px;
  align-self: stretch;
  margin: auto 0;
`;

const Link = styled.div`
  color: #000;
  font-family: Lato, sans-serif;
  align-self: stretch;
  flex-grow: 1;
  flex-basis: auto;
  margin: auto 0;
`;

const InputContainer = styled.div`
  font-family: Lato, sans-serif;
  border-radius: 12px;
  border-color: rgba(0, 0, 0, 1);
  border-style: solid;
  border-width: 1px;
  background-color: #f5f5f7;
  margin-top: 49px;
  align-items: start;
  color: #000;
  justify-content: center;
  padding: 27px 48px;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
    padding: 0 20px;
  }
`;

const SubmitButton = styled.div`
  font-family: Lato, sans-serif;
  border-radius: 12px;
  background-color: #007bfe;
  align-self: center;
  margin-top: 30px;
  color: #f5f5f7;
  font-weight: 600;
  text-align: center;
  justify-content: center;
  padding: 21px 46px;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 68%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Image = styled.img`
  aspect-ratio: 1.11;
  object-fit: auto;
  object-position: center;
  width: 100%;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  flex-grow: 1;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

export default Home;
