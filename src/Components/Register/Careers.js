import React from "react";
import styled from "styled-components";
import image1 from '../../Images/career1.png';
import image2 from '../../Images/career2.png';
import image3 from '../../Images/career3.png';
import last from '../../Images/lastcareer.png';
import back from '../../Images/careereback.png';
import star from '../../Images/career.png';
import icon from '../../Images/solar_user-bold.png';
import Navbar from "../Public/Navbar";
import Footer from './Footer';

const Careers = () => {
  return (
    <>
      <Navbar />
      <Heading1>Careers</Heading1>
      <Main>
        <MainContainer>
          <Head>
            <Heading2>Join Us</Heading2>
            <Description>
              Lorem ipsum dolor sit amet consectetur.
              <P> Luctus in convallis odio eu egestas lectus.</P>
            </Description>
            <Button>More about us</Button>
          </Head>
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

<Blue>
<Benifit>
Benifit
</Benifit>

</Blue>


<Tittl>Job Openings</Tittl>
        <JobOpeningsContainer>
          <JobOpeningsContent>
            {jobOpenings.map(({ category, positions }, index) => (
              <JobCategory key={index}>
                <CategoryTitle>{category}</CategoryTitle>
                {positions.map((position, posIndex) => (
                  <Position key={posIndex}>{position}</Position>
                ))}
              </JobCategory>
            ))}
            
          </JobOpeningsContent>
          <JobOpeningsContent>
            {jobOpenings1.map(({ category, positions }, index) => (
              <JobCategory key={index}>
                <CategoryTitle>{category}</CategoryTitle>
                {positions.map((position, posIndex) => (
                  <Position key={posIndex}>{position}</Position>
                ))}
              </JobCategory>
            ))}
            
          </JobOpeningsContent>
          <JobOpeningsContent>
            {jobOpenings2.map(({ category, positions }, index) => (
              <JobCategory key={index}>
                <CategoryTitle>{category}</CategoryTitle>
                {positions.map((position, posIndex) => (
                  <Position key={posIndex}>{position}</Position>
                ))}
              </JobCategory>
            ))}
          </JobOpeningsContent>
          <JobOpeningsContent>
            {jobOpenings3.map(({ category, positions }, index) => (
              <JobCategory key={index}>
                <CategoryTitle>{category}</CategoryTitle>
                {positions.map((position, posIndex) => (
                  <Position key={posIndex}>{position}</Position>
                ))}
              </JobCategory>
            ))}
          </JobOpeningsContent>
        </JobOpeningsContainer>

        <ImageGallery>
      <GalleryContainer>
        <ImageRow>
          {/* <ImageColumn left> */}
            <GalleryImage
              className="gallery-image-left"
              src={star} 
            />
          {/* </ImageColumn> */}
        
        </ImageRow>
      </GalleryContainer>
    </ImageGallery>

        
      </Main>



      <FooterContainer>
        <Footer />
      </FooterContainer>
    </>
  );
};

// Job card data
const jobCards = [
  {
    image: image1,
    title: "Product Designer",
    description: "Lorem ipsum dolor sit amet consectetur. SEO, or Search Engine Optimization, is the practice of enhancing a website's visibility on search engines like Google, Bing, and Yahoo. The main goal of SEO Impact is to improve a site's ranking in search.",
  },
  {
    image: image2,
    title: "Production Development",
    description: "Lorem ipsum dolor sit amet consectetur. SEO, or Search Engine Optimization, is the practice of enhancing a website's visibility on search engines like Google, Bing, and Yahoo. The main goal of SEO Impact is to improve a site's ranking in search.",
  },
  {
    image: image3,
    title: "Marketing",
    description: "Lorem ipsum dolor sit amet consectetur. SEO, or Search Engine Optimization, is the practice of enhancing a website's visibility on search engines like Google, Bing, and Yahoo. The main goal of SEO Impact is to improve a site's ranking in search.",
  }
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
];
const jobOpenings1 = [
  {
    category: "Design",
    positions: ["Director,Research"],
  },
  {
    category: "Cloud Operations",
    positions: ["Azure Specialist", "Amazon Cloud Operations", "AWS Key 2 Specialist"],
  },
];
const jobOpenings2 = [
  {
    category: " Producr",
    positions: [" Product Designer","Product Manager"],
  },
  {
    category: "Lorem ipsum dolor",
    positions: ["Azure Specialist", "Amazon Cloud Operations", "AWS Key 2 Specialist"],
  },
];
const jobOpenings3 = [
  {
    category: "Lorem ipsum ",
    positions: ["Lorem ipsum dolor","Lorem ipsum dolor"],
  },
  {
    category: "Lorem ipsum dolor",
    positions: ["Horem ipsum", "Yorem ipsum", "Lorem ipsum dolor"],
  },
];
// Styled components
const Main = styled.div`
  width: 100rem;
  height: auto; /* Change height to auto to adapt to content */
`;

const MainContainer = styled.div`
  padding: 0 80px;
  background-image: url(${back});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 90rem;
  height: auto; /* Change height to auto to adapt to content */
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
  font-size: 52px;
  font-weight: 650;
  margin-top: 20px;
  margin-left: 1rem;
  margin-bottom: -0.5rem;
  @media (max-width: 991px) {
    font-size: 32px;
  }
`;

const Head = styled.p`
  font-size: 24px;
  max-width: 600px;
  @media (max-width: 991px) {
    font-size: 18px;
  }
`;

const Description = styled.p`
  font-size: 26px;
  padding: 1rem;
  margin-top: -1rem;
  color: lightgrey;
  max-width: 600px;
  @media (max-width: 991px) {
    font-size: 20px;
    padding: 0.75rem;
  }
`;

const P = styled.p`
  font-size: 26px;
  margin-top: -0.3rem;
  color: lightgrey;
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
  margin-top: 30rem;
  margin-right: 3rem;
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
  width: 300px;
  align-items: center;
  padding-left: 3rem;
  height: 300px;
  border-radius: 8px;
`;

const JobTitle = styled.h3`
  font-size: 32px;
  font-weight: 500;
  text-align: center;
`;

const Divider = styled.hr`
  width: 400px;
  margin-top: -0.5rem;
  border: 2px solid #D3D3D3;
  margin-bottom: 10px;
`;

const Blue = styled.span`
  color: blue;
  width: 20rem;
  height: 20rem;
`;
const Benifit = styled.span`
 color: white;
`;



const JobDescription = styled.p`
  font-size: 16px;
  color: #d3d3d3;
`;

const ApplyButton = styled.button`
  display: flex;
  margin-left: 7rem;
  align-items: center;
  padding: 15px 20px;
  background-color: #F1F8FF;
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

const ApplyText = styled.span`
  color: black;
`;
const Tittl = styled.h2`
  font-size: 52px;
  font-weight: 600;
  margin-top: 50px;
  margin-left: 20rem;
  margin-bottom: -1rem;
  color: #007BFE;
  @media (max-width: 991px) {
    font-size: 32px;
  }
`;
const JobOpeningsContainer = styled.div`
  padding: 50px 80px;
  margin-bottom: 100px; /* Add margin at the bottom to separate from the footer */
  @media (max-width: 991px) {
    padding: 50px 20px;
  }
`;

const JobOpeningsContent = styled.div`
  display: flex;
  padding-left: 15rem;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start; /* Aligns items to the left */
`;

const JobCategory = styled.div`
  margin-bottom: 30px;
  flex: 1; 
  min-width: 200px; /* Set a minimum width for each category */
`;

const CategoryTitle = styled.h3`
  font-size: 32px;
  font-weight: 500;
  margin-bottom: 15px;
`;

const Position = styled.p`
  font-size: 18px;
  color: #007bfe;
  font-weight: 500;
  margin-bottom: 10px;
`;

const ImageGallery = styled.section`
  display: flex;
  flex-direction: column;
  border-radius: 0;
  margin-left: 8rem;
`;

const GalleryContainer = styled.div`
  width: 70rem;
  padding: 60px;

  @media (max-width: 991px) {
    max-width: 100%;
    padding: 0 20px;
  }
`;

const ImageRow = styled.div`
  display: flex;
  gap: 20px;
  display: flex;
  flex-direction: column;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0;
  }
`;

const ImageColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: ${({ left }) => (left ? '46%' : '54%')};
`;

const GalleryImage = styled.img`
  object-fit: contain;
  object-position: center;
  width: 100%;
`;
const FooterContainer = styled.div`
  background-color: #f8f9fa; /* Optional: Add a background color to the footer area */
`;

export default Careers;
