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
                type="text"
                name="website"
                id="website"
                placeholder="Enter your website here...."
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
  display: flex;
  gap: 20px;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin-top: 50px;
  padding: 0 20px;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const Title = styled.h1`
  color: #000;
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 20px;
  text-align: center;
  @media (max-width: 991px) {
    font-size: 2rem;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 40px;
  @media (max-width: 991px) {
    margin-top: 30px;
    gap: 15px;
  }
`;

const WebsiteLink = styled.div`
  width: 100%;
  max-width: 400px;
  font-family: Lato, sans-serif;
  border-radius: 12px;
  border: 1px solid grey;
  background-color: #fff;
  padding: 20px;
  input {
    width: 100%;
    border: none;
    outline: none;
    font-size: 1rem;
    padding: 10px;
  }
`;

const AnalyzeButton = styled.button`
  font-family: Lato, sans-serif;
  border-radius: 12px;
  background-color: #007bfe;
  color: #fff;
  font-weight: 600;
  padding: 15px 25px;
  cursor: pointer;
  border: none;
  width: 100%;
  max-width: 200px;
  text-align: center;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #005bb5;
  }
`;

export default Snippet;
