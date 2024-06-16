import React, { useState } from "react";
import styled from "styled-components";
import image5 from '../../Images/Vector.png';


function Signup() {
  const [user, setUserDetails] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...user,
      [name]: value,
    });
  };

  return (
    <Container>
     <Badge />
      <Title>Signup</Title>
      <Form>
        <InputField>
          <input
            type="text"
            name="fname"
            id="fname"
            placeholder="First Name"
            onChange={changeHandler}
            value={user.fname}
          />
        </InputField>
        <InputField>
          <input
            type="text"
            name="lname"
            id="lname"
            placeholder="Last Name"
            onChange={changeHandler}
            value={user.lname}
          />
        </InputField>
        <InputField>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            onChange={changeHandler}
            value={user.email}
          />
        </InputField>
        <InputField>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            onChange={changeHandler}
            value={user.password}
          />
        </InputField>
        <InputField>
          <input
            type="password"
            name="cpassword"
            id="cpassword"
            placeholder="Confirm Password"
            onChange={changeHandler}
            value={user.cpassword}
          />
        </InputField>
        <Div19>I agree to the terms and conditions</Div19>
        <Div22>I agree to receive SeoImpact updates</Div22>

        <SubmitButton>Signup</SubmitButton>
      </Form>
      <FooterImage src={image5} alt="Footer Decoration" />
    </Container>
  );
}

const Container = styled.div`
  background-color: #fff;
  display: flex;
  max-width: 480px;
  width: 100%;
  padding-top: 17px;
  flex-direction: column;
  margin: 0 auto;
`;

const Title = styled.div`
  color: #000;
  font: 600 32px Lato, sans-serif;
  padding-top: 20px;
  padding-bottom:20px
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0 39px;
`;
const Badge = styled.div`
  border-radius: 0px 12px 12px 0px;
  background-color: rgba(55, 159, 255, 0.19);
  align-self: start;
  width: 105px;
  height: 49px;
`;
const InputField = styled.div`
  border-radius: 12px;
  border-color: rgba(0, 0, 0, 0.2);
  border-style: solid;
  border-width: 1px;
  background-color: #fff;
  display: flex;
  align-items: flex-start;
  padding: 16px 18px;
  input {
    font-family: Lato, sans-serif;
    flex-grow: 1;
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
  width: 232px;
  max-width: 100%;
  align-items: center;
  color: #fff;
  text-align: center;
  justify-content: center;
  padding: 18px 60px;
`;

const FooterImage = styled.img`
  aspect-ratio: 5.26;
  object-fit: auto;
  object-position: center;
  width: 100%;
  fill: #007bfe;
  margin-top: 90px;
`;
const Div19 = styled.div`
  color: #000;
  text-align: center;
  flex-grow: 1;
  flex-basis: auto;
  margin: auto 0;
  font: 500 14px Lato, sans-serif;
`;
const Div22 = styled.div`
  font-family: Lato, sans-serif;
  flex-grow: 1;
  flex-basis: auto;
  margin: auto 0;
`;


export default Signup;
