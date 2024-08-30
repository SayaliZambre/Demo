import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../Public/Navbar';
import Sidebar from '../../Public/Sidebar';
import Footer from '../../Public/Footer';
import styled from 'styled-components';

const Snippet = () => {
  const navigate = useNavigate();

  const handleAnalyzeClick = () => {
    navigate('/SnippetGenerator');
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
  padding: 20px;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    padding: 10px;
    gap: 10px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin-top: 50px;
  padding: 0 20px;
  @media (max-width: 991px) {
    margin-top: 30px;
    padding: 0 10px;
  }
`;

const Title = styled.h1`
  color: #000;
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 20px;
  text-align: center;
  line-height: 1.2;
  @media (max-width: 991px) {
    font-size: 2rem;
    margin-bottom: 15px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 40px;
  width: 100%;
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
  border: 1px solid #ccc;
  background-color: #fff;
  padding: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  
  input {
    width: 100%;
    border: none;
    outline: none;
    font-size: 1rem;
    padding: 10px;
    background-color: transparent;
    &::placeholder {
      color: #999;
    }
  }

  @media (max-width: 991px) {
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
  transition: background-color 0.3s ease, transform 0.2s ease;
  
  &:hover {
    background-color: #005bb5;
    transform: scale(1.05);
  }

  @media (max-width: 991px) {
    padding: 12px 20px;
  }
`;

export default Snippet;
