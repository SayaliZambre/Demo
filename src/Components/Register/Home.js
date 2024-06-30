import * as React from "react";
import styled from "styled-components";
import image4 from '../../Images/Group 11.png';
import Navbar from './Navbar';
import Footer from './Footer';

function Home() {
  return (
    <>
      <Navbar />
      <Main>
        <Container>
          <Title>Introducing</Title>
          <Subtitle>SEO Impact</Subtitle>
          <Description>
            Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
            libero et velit interdum, ac aliquet odio mattis.
          </Description>
          <ActionSection>
            <ButtonContainer>
              <Button>Get Started</Button>
            </ButtonContainer>
            <StyledImg
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9011d9ca7314e9053250a7a6dfbde7038b3c6fb928203c0ae26cbeba732b5937?"
            />
            <LinkText>Click here to know more!</LinkText>
          </ActionSection>
          <InputBox placeholder="Enter your website here...."></InputBox>
          <CheckButton>Check Score</CheckButton>
        </Container>
        <Right>
          <Image src={image4} alt="Right Section Image" />
        </Right>
      </Main>
      <Footer/>
    </>
  );
}

const Main = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Right = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  margin-top: 20px;

  @media (min-width: 768px) {
    margin-top: 0;
  }
`;

const Image = styled.img`
  /* max-width: 50%; */
  height: auto;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 467px;
  font-size: 18px;
  font-weight: 500;
  padding: 20px;
  flex: 1;
  margin-left: 20px;
  margin-top: 20px;

  @media (min-width: 768px) {
    margin-left: 40px;
    margin-top: 40px;
  }
`;

const Title = styled.div`
  color: #212121;
  font-size: 48px;
  font-family: 'Waltograph', sans-serif;

  @media (min-width: 768px) {
    font-size: 108px;
  }
`;

const Subtitle = styled.div`
  color: #379fff;
  margin-top: 20px;
  font-size: 36px;
  font-weight: 700;
  font-family: 'Lato', sans-serif;

  @media (min-width: 768px) {
    margin-top: 52px;
    font-size: 72px;
  }
`;

const Description = styled.div`
  color: #000;
  margin-top: 20px;
  font-size: 18px;
  font-family: 'Lato', sans-serif;

  @media (min-width: 768px) {
    margin-top: 45px;
    font-size: 24px;
  }
`;

const ActionSection = styled.div`
  display: flex;
  margin-top: 20px;
  align-items: center;
  gap: 16px;
  font-weight: 600;

  @media (min-width: 768px) {
    margin-top: 49px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  font-family: 'Lato', sans-serif;
  border-radius: 12px;
  background-color: #007bfe;
  color: #fff;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  font-size: 16px;

  @media (min-width: 768px) {
    padding: 21px 49px;
  }
`;

const StyledImg = styled.img`
  width: 24px;
  height: 24px;
`;

const LinkText = styled.div`
  color: #000;
  font-family: 'Lato', sans-serif;
`;

const InputBox = styled.input`
  font-family: 'Lato', sans-serif;
  border-radius: 12px;
  border: 1px solid #000;
  background-color: #f5f5f7;
  margin-top: 20px;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;

  @media (min-width: 768px) {
    padding: 27px 48px;
    margin-top: 49px;
  }
`;

const CheckButton = styled.button`
  font-family: 'Lato', sans-serif;
  border-radius: 12px;
  background-color: #007bfe;
  color: #fff;
  font-weight: 600;
  margin-top: 20px;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  text-align: center;

  @media (min-width: 768px) {
    padding: 21px 46px;
    margin-top: 30px;
  }
`;

export default Home;
