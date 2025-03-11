import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

// Multiple direction keyframes
const floatTopRightToBottomLeft = keyframes`
  0% { 
    transform: translate(0, 0) rotate(0deg);
    opacity: 0;
  }
  20% { opacity: 0.7; }
  80% { opacity: 0.7; }
  100% { 
    transform: translate(-120vw, 120vh) rotate(360deg);
    opacity: 0;
  }
`;

const floatTopLeftToBottomRight = keyframes`
  0% { 
    transform: translate(0, 0) rotate(0deg);
    opacity: 0;
  }
  20% { opacity: 0.7; }
  80% { opacity: 0.7; }
  100% { 
    transform: translate(120vw, 120vh) rotate(360deg);
    opacity: 0;
  }
`;

const floatBottomToTop = keyframes`
  0% { 
    transform: translate(0, 0) rotate(0deg);
    opacity: 0;
  }
  20% { opacity: 0.7; }
  80% { opacity: 0.7; }
  100% { 
    transform: translate(0, -120vh) rotate(360deg);
    opacity: 0;
  }
`;

// Base asteroid component
const AsteroidBase = styled(motion.div)`
  position: fixed;
  border-radius: 40% 60% 55% 45% / 45% 50% 50% 55%;
  background: linear-gradient(
    45deg,
    ${props => props.theme.colors.background} 0%,
    #2a2a2a 45%,
    #3a3a3a 90%
  );
  box-shadow: inset -4px -4px 8px rgba(0, 0, 0, 0.8),
             0 0 25px rgba(255, 255, 255, 0.65);
  pointer-events: none;
`;

// Different sized asteroids with different directions
const LargeAsteroid = styled(AsteroidBase)`
  width: 50px;
  height: 44px;
  animation: ${props => props.direction === 'right' ? floatTopLeftToBottomRight : 
              props.direction === 'up' ? floatBottomToTop :
              floatTopRightToBottomLeft} 15s linear infinite;
`;

const MediumAsteroid = styled(AsteroidBase)`
  width: 36px;
  height: 32px;
  animation: ${props => props.direction === 'right' ? floatTopLeftToBottomRight : 
              props.direction === 'up' ? floatBottomToTop :
              floatTopRightToBottomLeft} 12s linear infinite;
`;

const SmallAsteroid = styled(AsteroidBase)`
  width: 24px;
  height: 20px;
  animation: ${props => props.direction === 'right' ? floatTopLeftToBottomRight : 
              props.direction === 'up' ? floatBottomToTop :
              floatTopRightToBottomLeft} 10s linear infinite;
`;

// Updated asteroid positions and paths with fewer asteroids
const AsteroidField = () => {
  const asteroids = [
    // Large asteroids - 2 total
    { size: 'large', top: '10%', right: '-5%', delay: 0, direction: 'left' },
    { size: 'large', top: '5%', left: '-15%', delay: 5, direction: 'right' },
    
    // Medium asteroids - 2 total
    { size: 'medium', top: '15%', right: '-10%', delay: 2, direction: 'left' },
    { size: 'medium', bottom: '-8%', left: '40%', delay: 7, direction: 'up' },
    
    // Small asteroids - 2 total
    { size: 'small', top: '20%', right: '-5%', delay: 1, direction: 'left' },
    { size: 'small', bottom: '-15%', left: '70%', delay: 3, direction: 'up' }
  ];

  return (
    <>
      {asteroids.map((asteroid, index) => {
        const AsteroidComponent = 
          asteroid.size === 'large' ? LargeAsteroid :
          asteroid.size === 'medium' ? MediumAsteroid :
          SmallAsteroid;

        return (
          <AsteroidComponent
            key={index}
            direction={asteroid.direction}
            style={{
              top: asteroid.top,
              left: asteroid.left,
              right: asteroid.right,
              bottom: asteroid.bottom,
              animationDelay: `${asteroid.delay}s`
            }}
          />
        );
      })}
    </>
  );
};

export default AsteroidField; 