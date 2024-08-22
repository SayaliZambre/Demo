import * as React from "react";
import styled from "styled-components";
import icon1 from './icon1.png';
import icon2 from './icon2.png';
import Navbar from '../../Public/Navbar';
import Sidebar from '../../Public/Sidebar';
import Footer from '../../Public/Footer';


function SnippetGenerator() {
  return (
    <>
      <Navbar />
      <Wrapper>
        <Sidebar/>
    <Container>
      <Header>Snippet Generator</Header>
      <Input placeholder="cbb.coastalbroadband.in" />

      {/* <Domain>cbb.coastalbroadband.in</Domain> */}
      <WebView>Webview</WebView>

      <Card>
        <Row>
          <Icon
            loading="lazy"
            src={icon1}          />
          <Url>www.google.co.in</Url>
          <ActionIcon
            loading="lazy"
            src={icon2}        
          />
        </Row>
        <Title>Google</Title>
        <Description>
          <Highlight>Gorem </Highlight>
          <MutedText>
            ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
            libero et velit interdum, ac aliquet odio mattis. Class aptent
            taciti sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos.
          </MutedText>
        </Description>
      </Card>

      <Card>
        <CardTitle>Title</CardTitle>
        <PixelInfo>205/280 Pixel</PixelInfo>

        <ProgressCard>
        <ProgressBar />
      </ProgressCard>

      </Card>


      <Card>
        <CardTitle>Google</CardTitle>
        <PixelInfo>400/900 Pixel</PixelInfo>
        <ProgressCard>
        <ProgressBar wide />
      </ProgressCard>
     
     
      <DescriptionCard>
        Lorem ipsum dolor sit amet consectetur. Porttitor sollicitudin at
        laoreet donec. Non nunc a aliquam elit interdum sociis id. Lacus
        pellentesque tempus magna ultrices. Velit vel mauris ante volutpat
        gravida. Sed lectus in mi molestie non.
        <br />
        Tincidunt purus pretium vel feugiat. Fermentum lobortis enim sit
        ultrices auctor tempor. Nunc a interdum at nibh pellentesque. Purus
        blandit laoreet quis at mauris cursus ante vel nulla. Sed condimentum
        sed ultrices nulla nunc vel pharetra lacus. Est pharetra nascetur quam
        luctus mattis habitant felis.
      </DescriptionCard>

      </Card>

      <Keyword>Keyword</Keyword>
      <Container1>
      <Header1>Google</Header1>
      <Content>
        <Box>
          <Circle />
        </Box>
        <DateText1>Date</DateText1>
      </Content>
    </Container1>
    </Container>
    </Wrapper>
    <Footer />

    </>
  );
}

const Container1 = styled.div`
  border-radius: 0px 0px 0px 0px;
  display: flex;
  padding-top: 55px;
  flex-direction: column;
`;

const Header1 = styled.div`
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 1);
  width: 60rem;
  color: rgba(0, 0, 0, 1);
  white-space: nowrap;
  padding: 24px 56px;
  font: 500 24px Lato, sans-serif;
  border: 1px solid grey;
  @media (max-width: 991px) {
    max-width: 100%;
    white-space: initial;
    padding: 0 20px;
  }
`;

const Content = styled.div`
  align-self: center;
  display: flex;
  width: 248px;
  max-width: 100%;
  gap: 36px;
  margin: 36px 0 0 20px;
`;

const Box = styled.div`
  border-radius: 38px;
  background: var(--Main, #007bfe);
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: center;
  flex: 1;
  margin: auto 0;
  padding: 6px 22px;
  @media (max-width: 991px) {
    padding-left: 20px;
  }
`;

const Circle = styled.div`
  background-color: rgba(255, 255, 255, 1);
  border-radius: 50%;
  display: flex;
  width: 36px;
  height: 36px;
`;

const DateText1 = styled.div`
  color: rgba(0, 0, 0, 1);
  flex-grow: 1;
  width: 82px;
  font: 600 48px Lato, sans-serif;
  @media (max-width: 991px) {
    font-size: 40px;
  }
`;


const Wrapper = styled.div`
  gap: 20px;
  display: flex;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
`;



const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  color: black;
  font-weight: 600;
  font-size: 48px;
  align-self: flex-start;
`;

const Domain = styled.div`
  border-radius: 12px;
  background-color: white;
  align-self: center;
  margin-top: 72px;
  width: 467px;
  color: black;
  padding: 24px 59px;
  font-weight: 500;
  font-size: 18px;
  border: 1px solid black;
`;

const WebView = styled.div`
  border-radius: 12px;
  background-color: #007bfe;
  align-self: flex-start;
  margin-top: 72px;
  color: white;
  text-align: center;
  padding: 16px 57px;
  font-weight: 600;
  font-size: 18px;
`;




const Card = styled.div`
  border-radius: 10px;
  background-color: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  font-size: 22px;
  flex-direction: column;
  margin-top: 52px;
  padding: 14px 50px;
  width: 65rem;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 34px;
  font-weight: 400;
`;

const Icon = styled.img`
  width: 32px;
  aspect-ratio: 1;
  object-fit: contain;
`;

const Url = styled.div`
  flex-grow: 1;
`;

const ActionIcon = styled.img`
  width: 36px;
  aspect-ratio: 1;
  object-fit: contain;
`;

const Title = styled.div`
  color: #180ea4;
  font-size: 36px;
  font-weight: 500;
  /* text-align: center; */
  margin-top: 36px;
`;

const Description = styled.div`
  margin-top: 36px;
`;

const Highlight = styled.span`
  font-weight: 500;
  /* padding-right: 20rem; */
`;

const MutedText = styled.span`
  font-weight: 500;
  color: #999999;
`;

const CardTitle = styled.div`
  font-size: 48px;
`;

const PixelInfo = styled.div`
  font-size: 32px;
  text-align: right;
`;

const ProgressCard = styled.div`
  border-radius: 12px;
  background-color: black;
  display: flex;
  flex-direction: column;
  margin-top: 36px;
`;

const Input = styled.input`
  font-family: Lato, sans-serif;
  border-radius: 12px;
  border-color: grey;
  border: 1px solid ;
  margin-left: 23rem;
  background-color: #fff;
  align-items: center;
  color: #000;
  font-weight: 500;
  justify-content: center;
  padding: 22px 4px;
  padding-left: 3rem;
  width: 25rem;
  @media (max-width: 991px) {
    max-width: 100%;
    padding: 0 20px;
  }
  &:not(:first-child) {
    margin-top: 48px;

  }
`;

const ProgressBar = styled.div`
  border-radius: 12px;
  background-color: #007bfe;
  height: 18px;
  width: ${({ wide }) => (wide ? '704px' : '546px')};
`;

const DescriptionCard = styled.div`
  border-radius: 12px;
  color: grey;
  background-color: white;
  margin-top: 48px;
  padding: 24px 56px 66px;
  font-size: 24px;
  border: 1px solid grey;
`;

const Keyword = styled.div`
  color: black;
  align-self: center;
  margin-top: 72px;
  font-size: 48px;
`;

const DateContainer = styled.div`
  display: flex;
  align-self: center;
  margin-top: 36px;
  gap: 36px;
`;

const RoundButton = styled.div`
  background-color: #007bfe;
  border-radius: 50%;
  width: 36px;
  height: 36px;
`;

const DateText = styled.div`
  font-size: 48px;
  font-weight: 600;
`;

export default SnippetGenerator;
