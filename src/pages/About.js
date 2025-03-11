import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutContainer = styled.div`
  width: 100%;
`;

const HeaderSection = styled.div`
  text-align: center;
  margin: 0 auto 4rem;
  padding: 0 2rem;
  width: 100%;
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SmallTitle = styled.h2`
  font-size: 1.2rem;
  color: ${props => props.theme.colors.text};
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const MainTitle = styled.h1`
  font-size: 3.5rem;
  color: ${props => props.theme.colors.text};
  margin-bottom: 2rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: bold;
`;

const SubHeader = styled.p`
  font-size: 1.2rem;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
  opacity: 0.9;
  text-align: center;
  padding: 0 1rem;
`;

const ValuesNav = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin: 6rem 0;
  padding: 0 2rem;
  position: relative;
  width: 100%;
  max-width: 1400px;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -3rem;
    left: 0;
    width: 100%;
    height: 1px;
    background: rgba(255, 255, 255, 0.1);
  }
`;

const ValueButton = styled.button`
  background: none;
  border: none;
  color: ${props => props.active ? props.theme.colors.accent : props.theme.colors.text};
  opacity: ${props => props.active ? 1 : 0.7};
  font-size: 1.1rem;
  cursor: pointer;
  padding: 0.5rem;
  position: relative;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;

  &:before {
    content: "${props => props.number}";
    position: absolute;
    top: -2rem;
    left: 0;
    font-size: 0.9rem;
    opacity: 0.7;
  }

  &:hover {
    color: ${props => props.theme.colors.accent};
  }
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  width: 90%;
  max-width: 1400px;
  margin: 6rem auto 0;
  padding: 0 2rem;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  text-align: center;
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ValueCard = styled.div`
  background: rgba(58, 12, 163, 0.15);
  backdrop-filter: blur(10px);
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: 10px;
  padding: 2rem;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease;
  box-sizing: border-box;

  &:hover {
    transform: translateY(-5px);
  }

  h3 {
    font-size: 1.8rem;
    color: ${props => props.theme.colors.text};
    margin-bottom: 1.5rem;
    font-weight: 500;
    text-align: center;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.6;
    opacity: 0.8;
    margin: 0;
    text-align: center;
  }
`;

const About = () => {
  const [activeValue, setActiveValue] = useState(1);

  const values = [
    { id: 1, title: "PLAYER-CENTRIC APPROACH" },
    { id: 2, title: "PASSION FOR GAMING" },
    { id: 3, title: "INNOVATION AND CREATIVITY" },
    { id: 4, title: "FUTURE VISION" },
    { id: 5, title: "UNITY" }
  ];

  return (
    <AboutContainer>
      <HeaderSection>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <SmallTitle>OUR MISSION</SmallTitle>
          <MainTitle>WE ARE GAMERS</MainTitle>
          <SubHeader>
          Our mission is to create immersive gaming experiences that inspire, connect, and empower players worldwide.
          </SubHeader>
        </motion.div>
      </HeaderSection>

      <ValuesNav>
        {values.map((value) => (
          <ValueButton
            key={value.id}
            active={activeValue === value.id}
            number={value.id.toString().padStart(2, '0')}
            onClick={() => setActiveValue(value.id)}
          >
            {value.title}
          </ValueButton>
        ))}
      </ValuesNav>

      <ValuesGrid>
        <ValueCard>
          <h3>Focus on Core Players</h3>
          <p>
            We focus on the players who care the most, knowing their passion will inspire others to join our community.
          </p>
        </ValueCard>
        <ValueCard>
        <h3>Community Engagement</h3>
          <p>
            We actively engage with our community, listening to feedback and creating games that resonate with their needs.
          </p>
        </ValueCard>
        <ValueCard>
          <h3>Inclusive Gaming Ecosystem</h3>
          <p>
            We strive to create a fair, safe, and welcoming environment for all players to enjoy and thrive.
          </p>
        </ValueCard>
        <ValueCard>
          <h3>Global Player Support</h3>
          <p>
            We are committed to supporting players worldwide through innovative features, inclusive design, and meaningful interactions.
          </p>
        </ValueCard>
      </ValuesGrid>
    </AboutContainer>
  );
};

export default About; 