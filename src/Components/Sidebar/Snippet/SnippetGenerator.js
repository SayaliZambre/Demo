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
      <Domain>cbb.coastalbroadband.in</Domain>
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
      </Card>

      <ProgressCard>
        <ProgressBar />
      </ProgressCard>

      <Card>
        <CardTitle>Google</CardTitle>
        <PixelInfo>400/900 Pixel</PixelInfo>
      </Card>

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

      <Keyword>Keyword</Keyword>
      <Card>
        <CardTitle>Google</CardTitle>
        <PixelInfo>400/900 Pixel</PixelInfo>
      </Card>

      <DateContainer>
        <RoundButton />
        <DateText>Date</DateText>
      </DateContainer>
    </Container>
    </Wrapper>
    <Footer />

    </>
  );
}

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
  border-radius: 12px;
  background-color: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  margin-top: 72px;
  padding: 24px 80px;
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
  text-align: center;
  margin-top: 36px;
`;

const Description = styled.div`
  margin-top: 36px;
`;

const Highlight = styled.span`
  font-weight: 500;
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

const ProgressBar = styled.div`
  border-radius: 12px;
  background-color: #007bfe;
  height: 18px;
  width: ${({ wide }) => (wide ? '704px' : '546px')};
`;

const DescriptionCard = styled.div`
  border-radius: 12px;
  background-color: white;
  margin-top: 48px;
  padding: 24px 56px 66px;
  font-size: 24px;
  border: 1px solid black;
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
