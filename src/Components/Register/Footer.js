import * as React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <LogoContainer>
          <Logo
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3fa99d40416e727e7f2d3d0136190937cb356d01e59da6c79dfc7ce4884fc3d9?"
          />
          <Logo
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/72c20c4aee2348f0e424685ac58c78eb4fbeec56ed23110895e92efe55d77864?"
          />
        </LogoContainer>
        <Separator />
        <Navigation>
          <NavSection>
            <NavItem>SEO Impact</NavItem>
            <NavItem>Home</NavItem>
            <NavItem>Pricing</NavItem>
          </NavSection>
          <NavSection>
            <NavItem>Resources</NavItem>
            <NavItem>Keyword Checker</NavItem>
            <NavItem>Ranking Checker</NavItem>
            <NavItem>Backlink Checker</NavItem>
            <NavItem>Snippet Generator</NavItem>
            <NavItem>Keyword Research Tool</NavItem>
          </NavSection>
        </Navigation>
        <ContactSection>
          <ContactColumn>
            <ContactItem>Contact</ContactItem>
            <ContactItem>About Us</ContactItem>
            <ContactItem>Contact Us</ContactItem>
          </ContactColumn>
          <CallToActionColumn>
            <CallToAction>Try SEO Impact</CallToAction>
          </CallToActionColumn>
        </ContactSection>
        <NewsletterSection>
          <NewsletterText>Subscribe to our Newsletter and recommendations</NewsletterText>
          <NewsletterForm>
            <Input placeholder="Enter your email address...." />
            <Button>Send</Button>
          </NewsletterForm>
        </NewsletterSection>
      </FooterContent>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  background-color: #f5f5f7;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FooterContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const LogoContainer = styled.div`
  display: flex;
  flex: 0 1 auto;
  gap: 10px;
`;

const Logo = styled.img`
  width: 120px;
  height: auto;
`;

const Separator = styled.div`
  border-left: 1px solid #000;
  height: 40px;
  margin: 0 20px;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const Navigation = styled.div`
  display: flex;
  gap: 20px;
  flex: 1 1 300px;
`;

const NavSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const NavItem = styled.div`
  font-family: Lato, sans-serif;
  font-weight: 700;
`;

const ContactSection = styled.div`
  display: flex;
  gap: 20px;
  flex: 1 1 300px;
  
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const ContactColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1 1 auto;
`;

const ContactItem = styled.div`
  font-family: Lato, sans-serif;
`;

const CallToActionColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1 1 auto;
`;

const CallToAction = styled.div`
  border-radius: 12px;
  background-color: #007bfe;
  color: #f5f5f7;
  text-align: center;
  padding: 15px 0;
  font: 600 18px Lato, sans-serif;
`;

const NewsletterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 1 1 300px;
`;

const NewsletterText = styled.div`
  font-weight: 700;
  font-size: 14px;
  font-family: Lato, sans-serif;
`;

const NewsletterForm = styled.form`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const Input = styled.input`
  flex-grow: 1;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  font-size: 14px;
  font-family: Lato, sans-serif;
`;

const Button = styled.button`
  border: none;
  border-radius: 5px;
  background-color: #007bfe;
  color: #fff;
  padding: 10px 20px;
  font-size: 14px;
  font-family: Lato, sans-serif;
  cursor: pointer;
`;

export default Footer;
