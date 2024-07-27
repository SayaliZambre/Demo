import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from './Footer';
import styled from "styled-components";

const Keyword = () => {
  return (
    <>
      <Navbar/>
      <Wrapper>
        <Sidebar/>
        <MainContent>
          <ContentContainer>
            <ContentTitle>Keyword Checker</ContentTitle>
            <Form>
              <FormField>
              <input
            type="Enter Keyword"
            name="Enter Keyword"
            id="Enter Keyword"
            placeholder="Enter your website here...."
            // onChange={changeHandler}
            // value={user.email}
          />
              </FormField>
              <FormField>
              <input
            type="Enter your website...."
            name="Enter your website...."
            id="Enter your website...."
            placeholder="Enter your website here...."
            // onChange={changeHandler}
            // value={user.email}
          />
          </FormField>
              <SubmitButton>Check</SubmitButton>
            </Form>
          </ContentContainer>
        </MainContent>
      </Wrapper>
      <Footer/>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

const StyledSidebar = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 30%;
  margin-left: 0px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const ProjectItem = styled.div`
  border-radius: 12px;
  border-color: rgba(128, 128, 128, 1);  /* Grey color */
  border-style: solid;
  border-width: 1px;
  background-color: #fff;
  display: flex;
  margin-top: 24px;
  gap: 18px;
  padding: 24px 48px;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const ItemImage = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 24px;
`;

const ItemText = styled.div`
  font-family: Lato, sans-serif;
  flex-grow: 1;
  flex-basis: auto;
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 70%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  margin-top: 48px;
  flex-direction: column;
  color: #000;
  /* padding: 0 20px; */
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const ContentTitle = styled.div`
  font: 400 38px Lato, sans-serif;
  padding-left: 1rem;
  @media (max-width: 991px) {
    max-width: 100%;
    font-size: 40px;
  }
`;

const Form = styled.div`
  align-self: end;
  display: flex;
  margin-top: 64px;
  width: 467px;
  padding-right: 20rem;
  max-width: 50%;
  flex-direction: column;
  font-size: 15px;
  font-weight: 400;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const FormField = styled.div`
  font-family: Lato, sans-serif;
  border-radius: 12px;
  border-color: grey;  /* Grey color */
  border-style: solid;
  border-width: 1px;
  background-color: #fff;
  align-items: start;
  justify-content: center;
  padding: 22px 4px;
  @media (max-width: 991px) {
    max-width: 100%;
    padding: 0 20px;
  }
  &:not(:first-child) {
    margin-top: 48px;

  }

  input {
    font-family: Lato, sans-serif;
    flex-grow: 1;
    flex-basis: auto;
    margin: auto 0;
    border: none; /* Removing the default border for the input */
    outline: none; /* Removing the default outline for the input */
  }
`;

const SubmitButton = styled.div`
  font-family: Lato, sans-serif;
  border-radius: 12px;
  background-color: #007bfe;
  align-self: center;
  margin-top: 72px;
  width: 188px;
  max-width: 100%;
  align-items: center;
  color: #fff;
  font-weight: 600;
  white-space: nowrap;
  text-align: center;
  justify-content: center;
  padding: 21px 60px;
  @media (max-width: 991px) {
    margin-top: 40px;
    white-space: initial;
    padding: 0 20px;
  }
`;

export default Keyword;
