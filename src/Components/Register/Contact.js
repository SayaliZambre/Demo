import React, { useState } from "react";
import styled from "styled-components";
import image from '../../Images/Contact.png';
import Navbar from './Navbar';
import Footer from './Footer';

function Contact() {
    const [user, setUserDetails] = useState({
        email: "",
        password: "",
      });
      const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
    
      const changeHandler = (e) => {
        const { name, value } = e.target;
        setUserDetails({
          ...user,
          [name]: value,
        });
      };
    
  return (
<>
<Navbar />
    <Main>
    <div>
      <PageContainer>
        <Column>
          <TitleSection>
            <Title>Contact Us</Title>
            <StyledImg src={image} alt="Email Icon" />
          </TitleSection>
        </Column>
        <Column2>
          <FormSection>
          <InputField>
          <input
            type="name"
            name="name"
            id="name"
            placeholder="Name"
            onChange={changeHandler}
            value={user.name}
          />
        </InputField>
        <InputField>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="email"
            onChange={changeHandler}
            value={user.email}
          />
        </InputField>
            <DescriptionField> 
            <textarea
      value={inputValue}
      onChange={handleChange}
      rows={10} 
      cols={50}
      placeholder="Description"
    />
      </DescriptionField>
            <SubmitButton>Send</SubmitButton>
          </FormSection>
        </Column2>
      </PageContainer>
    </div>
    </Main>
    <Footer/>
    </>

  );
}
const Main = styled.div`
  padding-left: 5rem ;
  padding-right: 5rem;
  display: flex;
  z-index: 0;
`;

const PageContainer = styled.div`
  gap: 20px;
  display: flex;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 69%;
  margin-left: 0px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const TitleSection = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  font-size: 72px;
  color: #000;
  font-weight: 700;
  padding: 0 20px;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
    font-size: 40px;
  }
`;

const Title = styled.div`
  font-family: Lato, sans-serif;
  align-self: end;
  @media (max-width: 991px) {
    font-size: 40px;
  }
`;

const StyledImg = styled.img`
  aspect-ratio: 1.92;
  object-fit: auto;
  object-position: center;
  width: 100%;
  margin-top: 86px;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 31%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const FormSection = styled.div`
  display: flex;
  margin-top: 149px;
  flex-direction: column;
  font-size: 18px;
  color: #000;
  font-weight: 500;
  white-space: nowrap;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
    white-space: initial;
  }
`;

const InputField = styled.div`
  border-radius: 12px;
  border-color: rgba(0, 0, 0, 0.2);
  border-style: solid;
  border-width: 1px;
  background-color: #fff;
  display: flex;
  margin-top: 25px;
  align-items: center; /* Centering items vertically */
  gap: 6px;
  font-size: 16px;
  color: #000;
  font-weight: 500;
  padding: 16px 18px;

  input {
    font-family: Lato, sans-serif;
    flex-grow: 1;
    flex-basis: auto;
    border: none;
    outline: none;
    padding-left: 10px; /* Adding padding to the left for better spacing */
  }

  img {
    width: 24px; /* Adjust the size of the icon */
    height: 24px; /* Adjust the size of the icon */
  }
`;

const DescriptionField = styled.div`
  font-family: Lato, sans-serif;
  border-radius: 12px;
  border-color: rgba(0, 0, 0, 0.2);
  border-style: solid;
  border-width: 1px;
  display: flex;
  background-color: #fff;
  margin-top: 36px;
  align-items: start;
  padding: 20px 20px 130px;
  
  textarea {
    font-family: Lato, sans-serif;
    flex-grow: 1;
    flex-basis: auto;
    border: none;
    outline: none;
    padding-left: 10px; /* Adding padding to the left for better spacing */
  }
  @media (max-width: 991px) {
    max-width: 100%;
    white-space: initial;
    padding: 0 20px 40px;
     /* Adding padding to the left for better spacing */
  }  
`;


const SubmitButton = styled.div`
  font-family: Lato, sans-serif;
  border-radius: 12px;
  background-color: #007bfe;
  align-self: center;
  margin-top: 48px;
  width: 188px;
  max-width: 100%;
  align-items: center;
  color: #fff;
  font-weight: 600;
  text-align: center;
  justify-content: center;
  padding: 21px 60px;
  @media (max-width: 991px) {
    margin-top: 40px;
    white-space: initial;
    padding: 0 20px;
  }
`;

export default Contact;
