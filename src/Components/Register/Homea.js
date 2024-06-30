import React from "react";
import styled from "styled-components";

const Homea = () => {
  return (
    <Container>
      <Image
        loading="lazy"
        srcSet="..."
        alt="Placeholder"
      />
      <Content>
        <Title>
          <span style={{ color: 'rgba(55,159,255,1)' }}>“SEO Impact</span> a Keyword Research tool like Google Trends, Woorank, Seobility”
        </Title>
        <ProfileImage
          loading="lazy"
          srcSet="..."
          alt="Profile"
        />
        <ProfileInfo>
          <ProfileImageSmall
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c62efbbb3a27b995143a1fea99779e949e69a1157d92ac62c9557c4412612892?"
            alt="Emily Brown"
          />
          <ProfileName>Emily Brown</ProfileName>
        </ProfileInfo>
        <Position>SEO Impact, Marketing Specialist</Position>
        <Source>Source: SEO Impact Reviews</Source>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 24px;
  color: #000;
  font-weight: 700;
`;

const Image = styled.img`
  aspect-ratio: 1.23;
  object-fit: auto;
  object-position: center;
  width: 100%;
  border-radius: 40px;
  box-shadow: 0px 1px 30px 0px rgba(0, 0, 0, 0.16);
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Content = styled.div`
  align-self: center;
  display: flex;
  margin-top: 155px;
  width: 1055px;
  max-width: 100%;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const Title = styled.div`
  text-align: center;
  align-self: stretch;
  font-size: 48px;
  font-family: Lato, sans-serif;
  @media (max-width: 991px) {
    font-size: 40px;
  }
`;

const ProfileImage = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 250px;
  border-radius: 50%;
  margin-top: 74px;
  max-width: 100%;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const ProfileInfo = styled.div`
  align-self: start;
  display: flex;
  margin-top: 31px;
  width: 626px;
  max-width: 100%;
  gap: 20px;
  font-size: 36px;
  text-align: center;
  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

const ProfileImageSmall = styled.img`
  aspect-ratio: 1.35;
  object-fit: auto;
  object-position: center;
  width: 72px;
  fill: #f5f5f7;
`;

const ProfileName = styled.div`
  font-family: Lato, sans-serif;
  flex-grow: 1;
  flex-basis: auto;
  margin: auto 0;
`;

const Position = styled.div`
  text-align: center;
  font-family: Lato, sans-serif;
  font-weight: 600;
  margin-top: 19px;
`;

const Source = styled.div`
  font-family: Lato, sans-serif;
  font-weight: 500;
  margin-top: 19px;
`;

export default Homea;
