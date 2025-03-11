import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const HomeContainer = styled.div`
  width: 100%;
  padding-top: 80px;
`;

const Section = styled(motion.section)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

const HeroSectionContainer = styled(motion.div)`
  text-align: center;
  padding: 2rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  z-index: 1;
  width: 100%;
  padding-top: 100px;
  gap: 4rem;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  color: ${props => props.theme.colors.accent};
  text-shadow: 0 0 10px rgba(76, 201, 240, 0.3);
  margin: 3rem 0 0 0;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  margin: 0;
  opacity: 0.8;
  color: ${props => props.theme.colors.text};
`;

const GamingCategories = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  width: 100%;
  max-width: 1200px;
  margin-top: 2rem;
`;

// New flip card components
const CardContainer = styled.div`
  perspective: 1000px;
  height: 400px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const CardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  cursor: pointer;
  transform: ${props => props.isFlipped ? 'rotateY(180deg)' : 'rotateY(0)'};

  &:hover {
    box-shadow: 0 0 20px rgba(76, 201, 240, 0.2);
  }
`;

const NavigationArrow = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: rgba(76, 201, 240, 0.5);
  font-size: 1.8rem;
  cursor: pointer;
  z-index: 2;
  transition: all 0.3s ease;
  padding: 1rem;

  &:hover {
    color: ${props => props.theme.colors.accent};
    transform: translateY(-50%) scale(1.2);
  }
`;

const LeftArrow = styled(NavigationArrow)`
  left: 1rem;
`;

const RightArrow = styled(NavigationArrow)`
  right: 1rem;
`;

const CardSide = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background: rgba(76, 201, 240, 0.1);
  border-radius: 10px;
  backdrop-filter: blur(5px);
  padding: 2.5rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid rgba(76, 201, 240, 0.3);
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(76, 201, 240, 0.5);
  }

  h3 {
    color: ${props => props.theme.colors.accent};
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
    opacity: 0.8;
    margin: 0;
    padding: 0 1rem;
    color: ${props => props.theme.colors.text};
  }
`;

const CardFront = styled(CardSide)``;

const CardBack = styled(CardSide)`
  transform: rotateY(180deg);
`;

const FlipCard = ({ title, frontContent, backContent }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = (e, direction) => {
    e.stopPropagation();
    setIsFlipped(direction === 'next');
  };

  return (
    <CardContainer>
      <CardInner isFlipped={isFlipped}>
        <CardFront>
          <LeftArrow onClick={(e) => handleFlip(e, 'prev')}>
            <FaChevronLeft />
          </LeftArrow>
          <h3>{title}</h3>
          <p>{frontContent}</p>
          <RightArrow onClick={(e) => handleFlip(e, 'next')}>
            <FaChevronRight />
          </RightArrow>
        </CardFront>
        <CardBack>
          <LeftArrow onClick={(e) => handleFlip(e, 'prev')}>
            <FaChevronLeft />
          </LeftArrow>
          <h3>{title}</h3>
          <p>{backContent}</p>
          <RightArrow onClick={(e) => handleFlip(e, 'next')}>
            <FaChevronRight />
          </RightArrow>
        </CardBack>
      </CardInner>
    </CardContainer>
  );
};

const Home = () => {
  return (
    <HomeContainer>
      <Section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <HeroSectionContainer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Title>Welcome to PRS Vision</Title>
          <Subtitle>Where Innovation Meets Gaming Excellence</Subtitle>
          <GamingCategories>
            <FlipCard
              title="Virtual Reality"
              frontContent="Virtual Reality (VR) games are interactive experiences that transport players into fully immersive, three-dimensional worlds."
              backContent={
                <>
                  At PRS Vision, we aim to revolutionize VR gaming with:
                  <br/><br/>
                  • Innovative Gameplay
                  <br/>
                  • Immersive Storytelling
                  <br/>
                  • Cross-Platform Integration
                  <br/>
                  • Global Accessibility
                </>
              }
            />
            <FlipCard
              title="Mobile Gaming"
              frontContent="Next-gen mobile game development with cutting-edge features."
              backContent="Experience mobile gaming with advanced graphics, seamless multiplayer, and innovative controls."
            />
            <FlipCard
              title="Console Games"
              frontContent="High-end console game production"
              backContent="Pushing the boundaries of console gaming with stunning visuals and immersive gameplay."
            />
          </GamingCategories>
        </HeroSectionContainer>
      </Section>

      <Section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Features Section */}
      </Section>

      <Section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Another Section */}
      </Section>
    </HomeContainer>
  );
};

export default Home; 