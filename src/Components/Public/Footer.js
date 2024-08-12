import * as React from "react";
import styled from "styled-components";
import image from '../../Images/Group 27.png';
import image1 from '../../Images/Group 29.png';

function Footer() {
  return (
    <FooterContainer>
      <LogoSection>
        <Logo src={image} alt="Right Section Image" />
        <SecondaryLogo src={image1} alt="Right Section Image" />
      </LogoSection>
      <Divider />
      <ContentSection>
        <MainLinks>
          <MainLinkTitle>SEO Impact</MainLinkTitle>
          <MainLink>Home</MainLink>
          <MainLink>Pricing</MainLink>
        </MainLinks>
        <Resources>
          <ResourceTitle>Resources</ResourceTitle>
          <ResourceLink>Keyword Checker</ResourceLink>
          <ResourceLink>Ranking Checker</ResourceLink>
          <ResourceLink>Backlink Checker</ResourceLink>
          <ResourceLink>Snippet Generator</ResourceLink>
          <ResourceLink>Keyword Research Tool</ResourceLink>
        </Resources>
        <ContactSection>
          <ContactContainer>
            <ContactDetails>
              <ContactColumn>
                <ContactInfo>Contact</ContactInfo>
                <ContactLink>About Us</ContactLink>
                <ContactLink>Contact us</ContactLink>
              </ContactColumn>
              <SignupColumn>
                <SignupButton>Try SEO Impact</SignupButton>
              </SignupColumn>
            </ContactDetails>
          </ContactContainer>
          <Newsletter>
            <NewsletterText>Subscribe to our Newsletter and recommendations</NewsletterText>
            <NewsletterForm>
              <EmailInput placeholder="Enter your email address..." />
              <SubmitButton>Send</SubmitButton>
            </NewsletterForm>
          </Newsletter>
        </ContactSection>
      </ContentSection>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  background-color: #fff;
  display: flex;
  align-items: flex-start;
  gap: 20px;
  justify-content: space-between;
  padding: 30px 20px; /* Reduced padding */
  flex-wrap: wrap;
  @media (max-width: 991px) {
    padding: 15px;
  }
`;

const LogoSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  padding-left: 3rem;
  padding-right: 5rem;
  /* max-width: 35%; */
  /* margin-top: 10; */
  margin:3rem 0;
  @media (max-width: 991px) {
    max-width: 100%;
    align-items: center;
  }
`;

const Logo = styled.img`
  aspect-ratio: 3.85;
  object-fit: auto;
  object-position: center;
  width: 100%;
  align-self: start;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const SecondaryLogo = styled.img`
  aspect-ratio: 5.56;
  object-fit: auto;
  object-position: center;
  width: 396px;
  align-self: end;
  margin-top: 40px; /* Reduced margin */
  max-width: 100%;
  @media (max-width: 991px) {
    margin-top: 30px;
  }
`;

const Divider = styled.div`
  border-color: grey;
  border-style: solid;
  border-width: 1px;
  background-color: grey;
  align-self: start;
  width: 1px;
  height: 300px;
  @media (max-width: 991px) {
    display: none;
  }
`;

const ContentSection = styled.div`
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
  gap: 20px; /* Reduced gap */
  @media (max-width: 991px) {
    flex-direction: column;
  }
`;

const MainLinks = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 18px; /* Smaller font size */
  color: #000;
  font-weight: 500;
`;

const MainLinkTitle = styled.div`
  font-family: Lato, sans-serif;
  font-weight: 700;
`;

const MainLink = styled.div`
  font-family: Lato, sans-serif;
  margin-top: 30px; /* Reduced margin */
`;

const Resources = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 18px; /* Smaller font size */
  color: #000;
  font-weight: 500;
`;

const ResourceTitle = styled.div`
  font-family: Lato, sans-serif;
  font-weight: 700;
`;

const ResourceLink = styled.div`
  font-family: Lato, sans-serif;
  margin-top: 30px; /* Reduced margin */
  @media (max-width: 991px) {
    margin-top: 20px;
  }
`;

const ContactSection = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const ContactContainer = styled.div`
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const ContactDetails = styled.div`
  gap: 1px; /* Reduced gap */
  display: flex;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
`;

const ContactColumn = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 25%;
  margin-left: 0px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  margin-top: 6px;
  flex-grow: 1;
  flex-direction: column;
  font-size: 18px; /* Smaller font size */
  color: #000;
  font-weight: 500;
  @media (max-width: 991px) {
    margin-top: 20px;
  }
`;

const ContactLink = styled.div`
  font-family: Lato, sans-serif;
  margin-top: 30px; /* Reduced margin */
  @media (max-width: 991px) {
    margin-top: 20px;
  }
`;

const SignupColumn = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 66%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const SignupButton = styled.div`
  border-radius: 12px;
  background-color: #007bfe;
  color: #fff;
  width: 100%;
  justify-content: center;
  padding: 20px 40px; /* Reduced padding */
  font: 600 18px Lato, sans-serif; /* Smaller font size */
  @media (max-width: 991px) {
    margin-top: 20px;
    padding: 15px;
  }
`;

const Newsletter = styled.div`
  border-radius: 12px;
  background-color: #ebf5ff;
  display: flex;
  margin-top: 50px; /* Reduced margin */
  flex-direction: column;
  color: #000;
  padding: 20px 30px; /* Reduced padding */
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 20px;
    padding: 15px;
  }
`;

const NewsletterText = styled.div`
  font: 700 12px Lato, sans-serif; /* Smaller font size */
`;

const NewsletterForm = styled.div`
  display: flex;
  gap: 10px; /* Reduced gap */
  font-weight: 500;
  margin: 30px 20px 0; /* Reduced margin */
  @media (max-width: 991px) {
    flex-direction: column;
    margin: 20px 0 0;
  }
`;

const EmailInput = styled.input`
  border-radius: 12px;
  background-color: #fff;
  align-items: start;
  justify-content: center;
  flex-grow: 1;
  width: fit-content;
  padding: 15px 20px; /* Reduced padding */
  font: 14px Lato, sans-serif;
  @media (max-width: 991px) {
    padding: 10px;
  }
`;

const SubmitButton = styled.button`
  margin: auto 0;
  font: 18px Lato, sans-serif; /* Smaller font size */
  padding: 10px 15px; /* Reduced padding */
  background-color: #007bfe;
  color: #fff;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  @media (max-width: 991px) {
    padding: 8px;
  }
`;

export default Footer;
