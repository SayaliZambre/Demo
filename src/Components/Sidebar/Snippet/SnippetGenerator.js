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
        <Sidebar />
        <Container>
          <Header>Snippet Generator</Header>
          <Input placeholder="cbb.coastalbroadband.in" />
          <WebView>Webview</WebView>

          <Card>
            <Row>
              <Icon loading="lazy" src={icon1} />
              <Url>www.google.co.in</Url>
              <ActionIcon loading="lazy" src={icon2} />
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

const Wrapper = styled.div`
  display: flex;
  gap: 20px;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Header = styled.h1`
  color: black;
  font-weight: 600;
  font-size: 3rem;
  margin-bottom: 20px;
  align-self: flex-start;
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Input = styled.input`
  font-family: Lato, sans-serif;
  border-radius: 12px;
  border: 1px solid grey;
  margin-bottom: 24px;
  background-color: #fff;
  color: #000;
  font-weight: 500;
  padding: 16px 20px;
  width: 100%;
  max-width: 400px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const WebView = styled.div`
  border-radius: 12px;
  background-color: #007bfe;
  color: white;
  text-align: center;
  padding: 16px 24px;
  font-weight: 600;
  font-size: 1.2rem;
  margin-bottom: 20px;
  width: fit-content;
`;

const Card = styled.div`
  border-radius: 10px;
  background-color: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  padding: 20px;
  width: 100%;
  max-width: 100%;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  font-weight: 400;
`;

const Icon = styled.img`
  width: 32px;
  height: 32px;
  object-fit: contain;
`;

const Url = styled.div`
  flex-grow: 1;
  font-size: 1rem;
  word-break: break-word;
`;

const ActionIcon = styled.img`
  width: 36px;
  height: 36px;
  object-fit: contain;
`;

const Title = styled.h2`
  color: #180ea4;
  font-size: 1.5rem;
  font-weight: 500;
  margin-top: 20px;
`;

const Description = styled.p`
  margin-top: 16px;
  line-height: 1.5;
`;

const Highlight = styled.span`
  font-weight: 500;
`;

const MutedText = styled.span`
  color: #999999;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
`;

const PixelInfo = styled.div`
  font-size: 1rem;
  text-align: right;
`;

const ProgressCard = styled.div`
  border-radius: 12px;
  background-color: black;
  display: flex;
  flex-direction: column;
  margin-top: 16px;
`;

const ProgressBar = styled.div`
  border-radius: 12px;
  background-color: #007bfe;
  height: 18px;
  width: ${({ wide }) => (wide ? '100%' : '70%')};
`;

const DescriptionCard = styled.div`
  border-radius: 12px;
  color: grey;
  background-color: white;
  margin-top: 24px;
  padding: 24px;
  font-size: 1rem;
  border: 1px solid grey;
`;

const Keyword = styled.h3`
  color: black;
  font-size: 2rem;
  text-align: center;
  margin-top: 24px;
`;

const Container1 = styled.div`
  border-radius: 0px 0px 0px 0px;
  display: flex;
  padding-top: 20px;
  flex-direction: column;
  align-items: center;
`;

const Header1 = styled.div`
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 1);
  width: 100%;
  max-width: 600px;
  color: rgba(0, 0, 0, 1);
  white-space: nowrap;
  padding: 24px;
  font-weight: 500;
  font-size: 1.5rem;
  border: 1px solid grey;
  text-align: center;
  @media (max-width: 991px) {
    white-space: initial;
    padding: 16px;
    font-size: 1.2rem;
  }
`;

const Content = styled.div`
  align-self: center;
  display: flex;
  width: 248px;
  max-width: 100%;
  gap: 20px;
  margin: 20px 0;
`;

const Box = styled.div`
  border-radius: 38px;
  background: var(--Main, #007bfe);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding: 10px;
`;

const Circle = styled.div`
  background-color: rgba(255, 255, 255, 1);
  border-radius: 50%;
  width: 36px;
  height: 36px;
`;

const DateText1 = styled.div`
  color: rgba(0, 0, 0, 1);
  font-weight: 600;
  font-size: 1.5rem;
`;

export default SnippetGenerator;
