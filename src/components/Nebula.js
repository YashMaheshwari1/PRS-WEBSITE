import styled from 'styled-components';
import { motion } from 'framer-motion';

const NebulaContainer = styled.div`
  position: absolute;
  width: ${props => typeof props.size === 'string' ? props.size : `${props.size/4}px`};
  height: ${props => typeof props.size === 'string' ? props.size : `${props.size/4}px`};
  min-width: 50px;
  min-height: 50px;
  background: radial-gradient(circle at center,
    ${props => props.color.replace(/[0-9\.]+\)/, '0.2)')} 0%,
    ${props => props.color.replace(/[0-9\.]+\)/, '0.2)')} 20%,
    rgba(${props => props.color.split(',')[0].slice(5)}, 
         ${props => props.color.split(',')[1]}, 
         ${props => props.color.split(',')[2]}, 0.075) 50%,
    rgba(0,0,0,0) 75%
  );
  filter: drop-shadow(0 0 3.75px ${props => props.color.replace(/[0-9\.]+\)/, '0.2)')});
  mix-blend-mode: screen;
  border-radius: 50%;
  transform: scale(1.2);
  overflow: hidden;
  -webkit-mask-image: radial-gradient(circle at center, black 0%, black 70%, transparent 100%);
  mask-image: radial-gradient(circle at center, black 0%, black 70%, transparent 100%);
`;

const AnimatedBackground = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  background: 
    radial-gradient(circle at 20% 20%, ${props => props.theme.colors.nebula1} 0%, transparent 70%),
    radial-gradient(circle at 80% 80%, ${props => props.theme.colors.nebula2} 0%, transparent 70%);
`;

// Add new styled components for specific nebulas
const PurpleNebula = styled(NebulaContainer)`
  top: 70%;
  left: 75%;
  filter: brightness(1.2) contrast(1.1) drop-shadow(0 0 0.3vw rgba(72, 61, 139, 0.225));
  border-radius: 50%;
  animation: pulse 10s infinite ease-in-out;
  min-width: 50px;
  min-height: 50px;
`;

const BlueNebula = styled(NebulaContainer)`
  top: 15%;
  left: 20%;
  filter: brightness(1.03) contrast(1.02) drop-shadow(0 0 0.075vw rgba(138, 43, 226, 0.0525));
  border-radius: 50%;
  animation: pulse 9s infinite ease-in-out;
  min-width: 62px;
  min-height: 62px;
`;

// Add keyframes for pulse animation
const pulseKeyframes = `
  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
  }
`;

// Update Nebula component to handle different types
const Nebula = ({ type = 'default', size, color }) => {
  if (type === 'purple') {
    return (
      <PurpleNebula 
        size="6.25vw"
        color="rgba(72, 61, 139, 0.225)"
      />
    );
  }
  if (type === 'blue') {
    return (
      <BlueNebula 
        size="7.5vw"
        color="rgba(138, 43, 226, 0.0525)"
      />
    );
  }
  // Default case
  return (
    <NebulaContainer 
      size={size} 
      color={color}
    />
  );
};

export { Nebula, AnimatedBackground, pulseKeyframes }; 