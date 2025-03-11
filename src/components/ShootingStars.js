import styled from 'styled-components';
import { motion } from 'framer-motion';

const ShootingStarComponent = styled(motion.div)`
  position: absolute;
  width: 2.5vw;    // Changed from 10vw to 2.5vw (1/4 of original)
  height: 0.05vh;  // Changed from 0.2vh to 0.05vh (1/4 of original)
  min-width: 12px; // Changed from 50px to 12px (1/4 of original)
  min-height: 1px; // Kept at 1px as minimum to ensure visibility
  background: linear-gradient(90deg, ${props => props.theme.colors.star}, transparent);
  opacity: 0.8;
`;

const ShootingStars = () => {
  return (
    <>
      {/* First group - Left to right, bottom to top */}
      {[...Array(3)].map((_, i) => (
        <ShootingStarComponent
          key={`group1-${i}`}
          initial={{
            x: '-30vw',           // Start outside left viewport
            y: '80vh',            // Start near bottom
            opacity: 0,
            rotate: 135,
          }}
          animate={{
            x: '100vw',           // Move beyond right viewport
            y: '0vh',             // Move to top
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatDelay: Math.random() * 7 + 1,
            ease: "linear"
          }}
        />
      ))}

      {/* Second group - Left to right, bottom to top, different starting point */}
      {[...Array(3)].map((_, i) => (
        <ShootingStarComponent
          key={`group2-${i}`}
          initial={{
            x: '-10vw',           // Start just outside left viewport
            y: '120vh',           // Start from bottom
            opacity: 0,
            rotate: 135,
          }}
          animate={{
            x: '100vw',           // Move beyond right viewport
            y: '0vh',             // Move to top
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatDelay: Math.random() * 7 + 1,
            ease: "linear"
          }}
        />
      ))}

      {/* Third group - Right to left, bottom to top */}
      {[...Array(3)].map((_, i) => (
        <ShootingStarComponent
          key={`group3-${i}`}
          initial={{
            x: '100vw',           // Start from right viewport
            y: '120vh',           // Start from bottom
            opacity: 0,
            rotate: 45,
          }}
          animate={{
            x: '-10vw',           // Move beyond left viewport
            y: '0vh',             // Move to top
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatDelay: Math.random() * 7 + 1,
            ease: "linear"
          }}
        />
      ))}
    </>
  );
};

export default ShootingStars; 