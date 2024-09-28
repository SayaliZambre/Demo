import React, { useState } from "react";
import styled from "styled-components";
import image from '../../Images/Contact.png';
import Navbar from "../Public/Navbar";
import Footer from './Footer';

function Contact() {
    const [user, setUserDetails] = useState({
        name: "",
        email: "",
    });
    const [description, setDescription] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "description") {
            setDescription(value);
        } else {
            setUserDetails({
                ...user,
                [name]: value,
            });
        }
    };

    return (
        <>
            <Navbar />
            <Main>
            <Title>Contact Us</Title>
                <PageContainer>
                    <Column>
                        {/* <TitleSection> */}
                            <StyledImg src={image} alt="Contact" />
                        {/* </TitleSection> */}
                    </Column>
                    <Column2>
                        <FormSection>
                            <InputField>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Name"
                                    onChange={handleChange}
                                    value={user.name}
                                />
                            </InputField>
                            <InputField>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Email"
                                    onChange={handleChange}
                                    value={user.email}
                                />
                            </InputField>
                            <DescriptionField>
                                <textarea
                                    name="description"
                                    value={description}
                                    onChange={handleChange}
                                    rows={5}
                                    placeholder="Description"
                                />
                            </DescriptionField>
                            <SubmitButton>Send</SubmitButton>
                        </FormSection>
                    </Column2>
                </PageContainer>
            </Main>
            <Footer />
        </>
    );
}

const Main = styled.div`
  padding: 2rem 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 0;
  @media (max-width: 768px) {
    padding: 1rem 2rem;
  }
`;

const PageContainer = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  max-width: 1200px;
  @media (max-width: 991px) {
    flex-direction: column;
    gap: 0;
  }
`;

const Column = styled.div`
  flex: 1;
  margin-left: -10rem;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: flex-start;
  @media (max-width: 991px) {
    align-items: center;
    margin-bottom: 20px;
  }
`;

const TitleSection = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* text-align: center; */
  font-size: 2.5rem;
  color: #000;
  font-weight: 700;
  padding: 20px;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Title = styled.h1`
  font-family: Lato, sans-serif;
  margin-bottom: 50px;
  font-size: 3rem;
  font-weight: 700;
`;

const StyledImg = styled.img`
  width: 800px;
  
  /* /max-width: 400px; */ 
  object-fit: contain;
  @media (max-width: 768px) {
    max-width: 300px;
  }
`;

const Column2 = styled.div`
  flex: 1;
  display: flex;
  max-width: 50%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FormSection = styled.form`
  width: 100%;
  margin-top: -3rem;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const InputField = styled.div`
  display: flex;
  border-radius: 12px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 20px 20px;
  background-color: #fff;

  input {
    width: 100%;
    border: none;
    outline: none;
    font-family: Lato, sans-serif;
    font-size: 1rem;
    padding-left: 10px;
  }
`;

const DescriptionField = styled.div`
  display: flex;
  border-radius: 12px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 20px 40px;
  background-color: #fff;

  textarea {
    width: 100%;
    border: none;
    outline: none;
    font-family: Lato, sans-serif;
    font-size: 1rem;
    resize: none;
  }
`;

const SubmitButton = styled.button`
  background-color: #007bfe;
  color: #fff;
  font-weight: 600;
  text-align: center;  padding: 16px;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  font-family: Lato, sans-serif;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #005bb5;
  }
`;

export default Contact;
