import * as React from "react";
import styled from "styled-components";

function Signup() {
  return (
    <Container>
      <ContentWrapper>
        <FormColumn>
          <FormWrapper>
            <Header>
              <span style={{ fontWeight: 700, color: "rgba(0,123,254,1)" }}>
                SEO
              </span>{" "}
              Impact
            </Header>
            <Title>Signup</Title>
            <Label>Name</Label>
            <Form>
              <FormInner>
                <FormColumnLeft>
                  <FormGroup>
                    <InputLabel>E-Mail</InputLabel>
                    <InputLabel>Mobile</InputLabel>
                    <InputLabel>Password</InputLabel>
                    <InputLabel>Confirm password</InputLabel>
                    <Agreement>
                      <Icon
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/65261aa2c5e2028e76d949ae73a63193bb9d14a9c6418b4bb7abf7b5538811de?"
                      />
                      <AgreementText>
                        <span style={{ color: "rgba(178,178,178,1)" }}>
                          I agree to all{" "}
                        </span>
                        <span style={{ color: "rgba(0,123,254,1)" }}>
                          terms and conditions
                        </span>
                      </AgreementText>
                    </Agreement>
                    <SubmitButton>Signup</SubmitButton>
                  </FormGroup>
                </FormColumnLeft>
                <FormColumnRight>
                  <Image
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/d73a7c466bd80c7e064dfc145730724bf0b420b42763e7af7310fe52800706fc?"
                  />
                </FormColumnRight>
              </FormInner>
            </Form>
          </FormWrapper>
        </FormColumn>
        <BackgroundColumn>
          <BackgroundCircle />
        </BackgroundColumn>
      </ContentWrapper>
    </Container>
  );
}

const Container = styled.div`
  background-color: #fff;
  padding: 80px 0 0 80px;
  @media (max-width: 991px) {
    padding-left: 20px;
  }
`;

const ContentWrapper = styled.div`
  gap: 20px;
  display: flex;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
`;

const FormColumn = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 55%;
  margin-left: 0px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const FormWrapper = styled.div`
  z-index: 10;
  display: flex;
  margin-top: 6px;
  flex-direction: column;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const Header = styled.div`
  color: #000;
  align-self: start;
  margin-left: 57px;
  font: 500 24px Proxima Nova, sans-serif;
  @media (max-width: 991px) {
    margin-left: 10px;
  }
`;

const Title = styled.div`
  color: #000;
  margin-top: 118px;
  font: 700 72px Lato, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
    font-size: 40px;
  }
`;

const Label = styled.div`
  border-radius: 12px;
  border-color: rgba(0, 0, 0, 1);
  border-style: solid;
  border-width: 1px;
  background-color: #fff;
  margin-top: 74px;
  width: 467px;
  max-width: 100%;
  align-items: start;
  color: #000;
  white-space: nowrap;
  justify-content: center;
  padding: 29px 48px;
  font: 500 18px Lato, sans-serif;
  @media (max-width: 991px) {
    margin-top: 40px;
    white-space: initial;
    padding: 0 20px;
  }
`;

const Form = styled.div`
  margin-top: 5px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const FormInner = styled.div`
  gap: 20px;
  display: flex;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
`;

const FormColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 41%;
  margin-left: 0px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  font-size: 18px;
  color: #000;
  font-weight: 500;
  margin: auto 0;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const InputLabel = styled.div`
  font-family: Lato, sans-serif;
  border-radius: 12px;
  border-color: rgba(0, 0, 0, 1);
  border-style: solid;
  border-width: 1px;
  background-color: #fff;
  align-items: start;
  white-space: nowrap;
  justify-content: center;
  padding: 29px 48px;
  @media (max-width: 991px) {
    max-width: 100%;
    white-space: initial;
    padding: 0 20px;
  }
`;

const Agreement = styled.div`
  display: flex;
  margin-top: 36px;
  gap: 12px;
  color: #007bfe;
  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

const Icon = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 36px;
`;

const AgreementText = styled.div`
  font-family: Lato, sans-serif;
  flex-grow: 1;
  flex-basis: auto;
  margin: auto 0;
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
  white-space: nowrap;
  text-align: center;
  justify-content: center;
  padding: 19px 60px;
  @media (max-width: 991px) {
    margin-top: 40px;
    white-space: initial;
    padding: 0 20px;
  }
`;

const FormColumnRight = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 59%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Image = styled.img`
  aspect-ratio: 0.99;
  object-fit: auto;
  object-position: center;
  width: 100%;
  flex-grow: 1;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const BackgroundColumn = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 45%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const BackgroundCircle = styled.div`
  border-radius: 50%;
  background-color: #007bfe;
  width: 839px;
  max-width: 100%;
  height: 1139px;
  margin: 6px auto 0;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

export default Signup;
