import React from "react";
import styled from "styled-components";
import image1 from '../../Images/career1.png';
import image2 from '../../Images/career2.png';
import image3 from '../../Images/career3.png';
import star from '../../Images/Star 1.png';
import back from '../../Images/careereback.png';
import vector from '../../Images/Vector 9.png';
import icon from '../../Images/solar_user-bold.png';
import Navbar from "../Public/Navbar";
import Footer from './Footer';

const Careers = () => {
  return (
    <>
      <Navbar />
      <Main>
        <MainContainer>
          <Heading1>Careers</Heading1>
          <Heading2>Join Us</Heading2>
          <Description>
            Lorem ipsum dolor sit amet consectetur. Luctus in convallis odio eu egestas lectus.
          </Description>
          <Button>More about us</Button>
          <ContentWrapper>
            {jobCards.map(({ image, title, description }, index) => (
              <Card key={index}>
                <Image src={image} alt={title} />
                <JobTitle>{title}</JobTitle>
                <Divider />
                <JobDescription>{description}</JobDescription>
                <ApplyButton>
                  <ApplyImage src={icon} alt="Apply" />
                  <ApplyText>View Openings</ApplyText>
                </ApplyButton>
              </Card>
            ))}
          </ContentWrapper>
        </MainContainer>

        <BenefitsSection>
          {benefits.map(({ icon, title, subtitle }, index) => (
            <Benefit key={index}>
              <BenefitIcon src={icon} alt={title} />
              <BenefitText>
                <Title>{title}</Title>
                <Subtitle>{subtitle}</Subtitle>
              </BenefitText>
            </Benefit>
          ))}
          <StyledImage src={vector} alt="Decorative vector" />
        </BenefitsSection>

        <JobOpeningsContainer>
          {jobOpenings.map(({ category, positions }, index) => (
            <JobCategory key={index}>
              <CategoryTitle>{category}</CategoryTitle>
              {positions.map((position, posIndex) => (
                <Position key={posIndex}>{position}</Position>
              ))}
            </JobCategory>
          ))}
        </JobOpeningsContainer>
      </Main>
      <Footer />
    </>
  );
};

// Job card data
const jobCards = [
  {
    image: image1,
    title: "Product Designer",
    description: "Lorem ipsum dolor sit amet consectetur. In rhoncus aliquet nunc cursus.",
  },
  {
    image: image2,
    title: "Production Development",
    description: "Lorem ipsum dolor sit amet consectetur. In rhoncus aliquet nunc cursus.",
  },
  {
    image: image3,
    title: "Marketing",
    description: "Lorem ipsum dolor sit amet consectetur. In rhoncus aliquet nunc cursus.",
  }
];

// Benefits data
const benefits = [
  { icon: star, title: "Competitive Salary", subtitle: "Work From Home" },
  { icon: star, title: "Incentives", subtitle: "Bonuses and Rewards" },
  { icon: star, title: "Healthcare", subtitle: "Full coverage" },
  { icon: star, title: "Flexible Hours", subtitle: "Work-life balance" }
];

// Job openings data
const jobOpenings = [
  {
    category: "Business Development",
    positions: ["Associate Business Analyst"],
  },
  {
    category: "Software Development",
    positions: ["Software Developer", "Software Analyst", "UX Designer"],
  },
  {
    category: "Design",
    positions: ["Director, Research"],
  },
  {
    category: "Cloud Operations",
    positions: ["Azure Specialist", "Amazon Cloud Operations", "AWS Key 2 Specialist"],
  }
];

// Styled components
const Main = styled.div``;

const MainContainer = styled.div`
  padding: 0 80px;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const Heading1 = styled.h1`
  text-align: center;
  font-size: 72px;
  font-weight: 700;
  margin-top: 50px;
  @media (max-width: 991px) {
    font-size: 40px;
  }
`;

const Heading2 = styled.h2`
  text-align: center;
  font-size: 48px;
  font-weight: 700;
  margin-top: 20px;
  @media (max-width: 991px) {
    font-size: 32px;
  }
`;

const Description = styled.p`
  text-align: center;
  font-size: 24px;
  margin: 20px auto;
  max-width: 600px;
  @media (max-width: 991px) {
    font-size: 18px;
  }
`;

const Button = styled.button`
  display: block;
  margin: 40px auto;
  padding: 15px 30px;
  background-color: #007bfe;
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  border: none;
  border-radius: 12px;
  cursor: pointer;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  gap: 20px;
  flex-wrap: wrap;
  @media (max-width: 991px) {
    flex-direction: column;
  }
`;

const Card = styled.div`
  flex: 1;
  max-width: 30%;
  background-color: #fff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  @media (max-width: 991px) {
    max-width: 100%;
    margin-bottom: 20px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

const JobTitle = styled.h3`
  font-size: 24px;
  margin: 20px 0 10px;
`;

const Divider = styled.hr`
  width: 50px;
  border: 2px solid #007bfe;
  margin-bottom: 10px;
`;

const JobDescription = styled.p`
  font-size: 16px;
  color: #555;
`;

const ApplyButton = styled.button`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  background-color: #007bfe;
  color: #fff;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;

const ApplyImage = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

const ApplyText = styled.span``;

const BenefitsSection = styled.div`
  background-color: #f9f9f9;
  padding: 50px 80px;
  display: flex;
  justify-content: space-between;
  position: relative;
  @media (max-width: 991px) {
    flex-direction: column;
    padding: 50px 20px;
  }
`;

const Benefit = styled.div`
  display: flex;
  align-items: center;
  max-width: 25%;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-bottom: 20px;
  }
`;

const BenefitIcon = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 20px;
`;

const BenefitText = styled.div``;

const Title = styled.h4`
  font-size: 20px;
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: #555;
`;

const StyledImage = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 200px;
  height: auto;
`;

const JobOpeningsContainer = styled.div`
  padding: 50px 80px;
  @media (max-width: 991px) {
    padding: 50px 20px;
  }
`;

const JobCategory = styled.div`
  margin-bottom: 30px;
`;

const CategoryTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 15px;
`;

const Position = styled.p`
  font-size: 18px;
  color: #007bfe;
  margin-bottom: 10px;
`;

export default Careers;
