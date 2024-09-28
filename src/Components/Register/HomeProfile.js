import * as React from "react";
import styled from "styled-components";
import Navbar from "../Public/Navbar";
import Sidebar from "./Sidebar";
import Footer from './Footer';
import image1 from "../../Images/ic_round-plus.png";
import image2 from "../../Images/Rectangle 147.png";
import image3 from "../../Images/ri_search-line.png";

const HomeProfile= () => {
  return (
<>
<Navbar/>
<Wrapper>
<Sidebar/>

    <Container>
      <Header>
        <Logo
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e490ac2c4523655630e94f97e2f2195a0cab7fea10e3b122c7e0cb1b2d60602?apiKey=70bbbe661cc747b893a0c12c47223d3a&"
        />
        <SearchBar>Search your domain, url or keyword..</SearchBar>
      </Header>
      <Content>
        <Description>
          <span>Experience</span>
          <span>seamless elegance on the go</span>
        </Description>
        <Image
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1b68ac64a95b124894a1c78a2cfba69299edee497f602eadd0b3d0945cd83f22?apiKey=70bbbe661cc747b893a0c12c47223d3a&"
        />
      </Content>
      <Input placeholder="Enter your website...." />
      <Button>Check Score</Button>
    </Container>

    </Wrapper>
    <Footer/>
</>

  );
};

const Wrapper = styled.div`
  display: flex;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  border-radius: 12px;
  background-color: #e5e5e5;
  align-self: start;
  display: flex;
  gap: 18px;
  font-size: 18px;
  color: #000;
  font-weight: 600;
  padding: 14px 36px;
  @media (max-width: 991px) {
    flex-wrap: wrap;
    padding: 0 20px;
  }
`;

const Logo = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 24px;
`;

const SearchBar = styled.div`
  font-family: Lato, sans-serif;
  flex-grow: 1;
  flex-basis: auto;
`;

const Content = styled.div`
  margin-top: 66px;
  width: 100%;
  padding: 0 20px;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 41%;
  margin-left: 0px;
  color: #000;
  font: 700 72px Proxima Nova, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
    font-size: 40px;
  }
`;

const Image = styled.img`
  aspect-ratio: 3.13;
  object-fit: auto;
  object-position: center;
  width: 100%;
  margin-top: 90px;
  flex-grow: 1;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const Input = styled.div`
  border-radius: 12px;
  border-color: rgba(0, 0, 0, 1);
  border-style: solid;
  border-width: 1px;
  background-color: #fff;
  align-self: center;
  margin-top: 146px;
  width: 467px;
  max-width: 100%;
  align-items: start;
  color: #000;
  justify-content: center;
  padding: 27px 54px;
  font: 500 18px Lato, sans-serif;
  @media (max-width: 991px) {
    margin-top: 40px;
    padding: 0 20px;
  }
`;

const Button = styled.div`
  border-radius: 12px;
  background-color: #007bfe;
  align-self: center;
  margin-top: 72px;
  color: #fff;
  text-align: center;
  justify-content: center;
  padding: 21px 46px;
  font: 600 18px Lato, sans-serif;
  @media (max-width: 991px) {
    margin-top: 40px;
    padding: 0 20px;
  }
`;

export default HomeProfile;
