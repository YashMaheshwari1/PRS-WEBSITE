import styled from 'styled-components';
import { motion } from 'framer-motion';

const EarthContainer = styled(motion.div)`
  position: absolute;
  width: min(9vw, 9vh);   // Changed to 9vw/9vh (3x bigger than original 3vw/3vh)
  height: min(9vw, 9vh);  // Changed to 9vw/9vh (3x bigger than original 3vw/3vh)
  min-width: 60px;        // Changed to 60px (3x bigger than original 20px)
  min-height: 60px;       // Changed to 60px (3x bigger than original 20px)
  max-width: 90px;        // Changed to 90px (3x bigger than original 30px)
  max-height: 90px;       // Changed to 90px (3x bigger than original 30px)
  border-radius: 50%;
  background: radial-gradient(circle at 30% 30%,
    rgba(63, 159, 255, 0.8),  // Ocean blue
    rgba(29, 78, 216, 0.8)    // Deeper ocean
  );
  box-shadow:
    inset -1.2vmin -1.2vmin 3.75vmin rgba(0, 0, 0, 0.6),    // Adjusted shadow sizes proportionally
    0 0 3vmin rgba(120, 180, 255, 0.3),            // Atmosphere glow
    0 0 1.2vmin rgba(255, 255, 255, 0.4);            // Bright edge
  overflow: hidden;
  z-index: 2;
`;

const Continents = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 50% 50%,
    rgba(76, 175, 80, 0.6),   // Land masses
    rgba(46, 125, 50, 0.6)    // Darker land
  );
  mask-image: url('/earth-mask.png');
  -webkit-mask-image: url('/earth-mask.png');
  animation: rotate 60s linear infinite;
`;

const Clouds = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 50% 50%,
    rgba(255, 255, 255, 0.8),
    rgba(255, 255, 255, 0.2)
  );
  mask-image: url('/clouds-mask.png');
  -webkit-mask-image: url('/clouds-mask.png');
  opacity: 0.7;
  animation: rotate 45s linear infinite;
`;

const Atmosphere = styled.div`
  position: absolute;
  width: 120%;
  height: 120%;
  top: -10%;
  left: -10%;
  background: radial-gradient(circle at 50% 50%,
    rgba(255, 255, 255, 0.2),
    rgba(100, 150, 255, 0.1),
    transparent 70%
  );
  pointer-events: none;
`;

const Earth = ({ earth }) => {
  return (
    <EarthContainer
      key={earth.id}
      initial={earth.initial}
      animate={earth.animate}
      transition={{
        x: {
          duration: earth.duration,
          repeat: Infinity,
          ease: "linear"
        },
        y: {
          duration: earth.duration,
          repeat: Infinity,
          ease: "linear"
        },
        rotate: {
          duration: earth.duration * 1.5,
          repeat: Infinity,
          ease: "linear"
        }
      }}
    >
      <Atmosphere />
      <Continents />
      <Clouds />
    </EarthContainer>
  );
};

export default Earth; 