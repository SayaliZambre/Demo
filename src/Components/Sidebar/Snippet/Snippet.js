import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import Navbar from '../../Public/Navbar';
import Sidebar from '../../Public/Sidebar';
import Footer from '../../Public/Footer';

import styled from 'styled-components';

const Snippet = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleAnalyzeClick = () => {
    navigate('/SnippetGenerator'); // Navigate to SnippetGenerator page
  };

  return (
    <>
      <Navbar />
      <Wrapper>
        <Sidebar />
        <Container>
          <Title>Snippet Generator</Title>
          <Content>
            <WebsiteLink>
              <input
                type="text" // Changed to "text" instead of "Enter Keyword"
                name="website"
                id="website"
                placeholder="Enter your website here...."
                // onChange={changeHandler}
                // value={user.email}
              />
            </WebsiteLink>
            <AnalyzeButton onClick={handleAnalyzeClick}>Analyze Website</AnalyzeButton>
          </Content>
        </Container>
      </Wrapper>
      <Footer />
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
  border-color: grey;
  border-style: solid;
  border-width: 1px;
  margin-left: 18rem;
  background-color: #fff;
  align-items: start;
  width: 25rem;
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
  margin-left: 40rem;
  width: 15rem;
  justify-content: center;
  padding: 19px 28px;
  cursor: pointer; // Added cursor style to indicate it's clickable
  @media (max-width: 991px) {
    margin-top: 40px;
    padding: 0 20px;
  }
`;

export default Snippet;
