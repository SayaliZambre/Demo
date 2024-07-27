import React from 'react';
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from './Footer';
import styled from 'styled-components';

const Snippet = () => {
  return (
    <>
    <Navbar/>
    <Wrapper>
      <Sidebar/>

      <Container>
      <Title>Snippet Generator</Title>
      <Content>
        {/* <WebsiteLink>cbb.coastalbroadband.in</WebsiteLink> */}
        <WebsiteLink>
              <input
            type="Enter Keyword"
            name="Enter Keyword"
            id="Enter Keyword"
            placeholder="Enter your website here...."
            // onChange={changeHandler}
            // value={user.email}
          />
              </WebsiteLink>
        <AnalyzeButton>Analyze Website</AnalyzeButton>
      </Content>
    </Container>
</Wrapper>
    <Footer/>
    </>
  );
};

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
  margin-top: 49px;
  flex-direction: column;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const Title = styled.div`
  color: #000;
  font: 600 48px Lato, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
    font-size: 40px;
  }
`;

const Content = styled.div`
  align-self: end;
  display: flex;
  margin-top: 74px;
  width: 467px;
  max-width: 100%;
  flex-direction: column;
  font-size: 18px;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const WebsiteLink = styled.div`
  font-family: Lato, sans-serif;
  border-radius: 12px;
  border-color: rgba(0, 0, 0, 1);
  border-style: solid;
  border-width: 1px;
  background-color: #fff;
  align-items: start;
  color: #000;
  font-weight: 500;
  white-space: nowrap;
  justify-content: center;
  padding: 29px 48px;
  @media (max-width: 991px) {
    max-width: 100%;
    white-space: initial;
    padding: 0 20px;
  }
`;

const AnalyzeButton = styled.div`
  font-family: Lato, sans-serif;
  border-radius: 12px;
  background-color: #007bfe;
  align-self: center;
  margin-top: 72px;
  color: #fff;
  font-weight: 600;
  text-align: center;
  justify-content: center;
  padding: 19px 28px;
  @media (max-width: 991px) {
    margin-top: 40px;
    padding: 0 20px;
  }
`;

export default Snippet;
