import styled from 'styled-components';
import { motion } from 'framer-motion';

// Base planet components
const StaticPlanet = styled.div`
  position: fixed;
  border-radius: 50%;
  pointer-events: none;
  opacity: 0.32;
  animation: rotateOnAxis 60s linear infinite;
  overflow: hidden;
`;

const PlanetShadow = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    circle at 70% 70%,
    rgba(0, 0, 0, 0.6) 0%,
    transparent 70%
  );
`;

const PlanetFeatures = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    45deg,
    transparent 45%,
    rgba(255, 255, 255, 0.15) 45%,
    rgba(255, 255, 255, 0.15) 55%,
    transparent 55%
  );
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      circle at 30% 30%,
      rgba(255, 255, 255, 0.2) 0%,
      transparent 20%
    );
  }
`;

// Large planets
const GiantRedPlanet = styled(StaticPlanet)`
  width: 72px;
  height: 72px;
  top: 25%;
  right: 15%;
  background: radial-gradient(
    circle at 30% 30%,
    rgba(255, 107, 107, 0.7), 
    rgba(201, 42, 42, 0.7)
  );
  box-shadow: inset -12px -12px 30px rgba(0,0,0,0.5);
  animation: rotateOnAxis 80s linear infinite;
  position: fixed;
  z-index: 1;
`;

const LargeBluePlanet = styled(StaticPlanet)`
  width: 60px;
  height: 60px;
  bottom: 20%;
  left: 10%;
  background: radial-gradient(
    circle at 30% 30%,
    rgba(77, 171, 247, 0.7), 
    rgba(24, 100, 171, 0.7)
  );
  box-shadow: inset -10px -10px 25px rgba(0,0,0,0.5);
  animation: rotateOnAxis 70s linear infinite;
  position: fixed;
  z-index: 1;
`;

// Medium planets
const MediumPurplePlanet = styled(StaticPlanet)`
  width: 40px;
  height: 40px;
  top: 60%;
  right: 25%;
  background: radial-gradient(circle at 30% 30%, 
    rgba(204, 93, 232, 0.7), 
    rgba(134, 46, 156, 0.7)
  );
  box-shadow: 
    inset -4px -4px 20px rgba(0,0,0,0.35),
    0 0 12px rgba(204, 93, 232, 0.25);
  animation: rotateOnAxis 50s linear infinite;
`;

const MediumGreenPlanet = styled(StaticPlanet)`
  width: 36px;
  height: 36px;
  top: 35%;
  left: 30%;
  background: radial-gradient(
    circle at 30% 30%,
    rgba(105, 219, 124, 0.7), 
    rgba(43, 138, 62, 0.7)
  );
  box-shadow: inset -7px -7px 20px rgba(0,0,0,0.5);
  animation: rotateOnAxis 45s linear infinite;
  position: fixed;
  z-index: 1;
`;

const MediumOrangePlanet = styled(StaticPlanet)`
  width: 44px;
  height: 44px;
  bottom: 40%;
  right: 35%;
  background: radial-gradient(circle at 30% 30%, 
    rgba(255, 169, 77, 0.7), 
    rgba(217, 72, 15, 0.7)
  );
  box-shadow: 
    inset -4px -4px 20px rgba(0,0,0,0.35),
    0 0 12px rgba(255, 169, 77, 0.25);
  animation: rotateOnAxis 55s linear infinite;
`;

// Small planets
const SmallTealPlanet = styled(StaticPlanet)`
  width: 20px;
  height: 20px;
  top: 45%;
  left: 45%;
  background: radial-gradient(circle at 30% 30%, 
    rgba(59, 201, 219, 0.7), 
    rgba(11, 114, 133, 0.7)
  );
  box-shadow: 
    inset -2.5px -2.5px 10px rgba(0,0,0,0.3),
    0 0 7px rgba(59, 201, 219, 0.2);
  animation: rotateOnAxis 30s linear infinite;
`;

const TinyPinkPlanet = styled(StaticPlanet)`
  width: 16px;
  height: 16px;
  top: 15%;
  left: 60%;
  background: radial-gradient(circle at 30% 30%, 
    rgba(250, 162, 193, 0.7), 
    rgba(166, 30, 77, 0.7)
  );
  box-shadow: 
    inset -2px -2px 7px rgba(0,0,0,0.3),
    0 0 6px rgba(250, 162, 193, 0.2);
  animation: rotateOnAxis 25s linear infinite;
`;

const SmallYellowPlanet = styled(StaticPlanet)`
  width: 24px;
  height: 24px;
  bottom: 25%;
  right: 55%;
  background: radial-gradient(circle at 30% 30%, 
    rgba(255, 212, 59, 0.7), 
    rgba(230, 119, 0, 0.7)
  );
  box-shadow: 
    inset -2.5px -2.5px 10px rgba(0,0,0,0.3),
    0 0 7px rgba(255, 212, 59, 0.2);
  animation: rotateOnAxis 35s linear infinite;
`;

// Corner planets
const TopLeftPlanet = styled(StaticPlanet)`
  width: 56px;
  height: 56px;
  top: 8%;
  left: 8%;
  background: radial-gradient(
    circle at 30% 30%,
    rgba(130, 255, 214, 0.7), 
    rgba(46, 176, 134, 0.7)
  );
  box-shadow: inset -10px -10px 25px rgba(0,0,0,0.5);
  animation: rotateOnAxis 65s linear infinite;
  position: fixed;
  z-index: 1;
  transform-style: preserve-3d;
`;

const BottomRightPlanet = styled(StaticPlanet)`
  width: 64px;
  height: 64px;
  bottom: 8%;
  right: 8%;
  background: radial-gradient(circle at 30% 30%, 
    rgba(121, 80, 242, 0.7), 
    rgba(76, 29, 149, 0.7)
  );
  box-shadow: 
    inset -6px -6px 27px rgba(0,0,0,0.4),
    0 0 17px rgba(233, 168, 255, 0.3);
  z-index: 1;
  animation: rotateOnAxis 75s linear infinite;
`;

export {
  StaticPlanet,
  PlanetShadow,
  PlanetFeatures,
  GiantRedPlanet,
  LargeBluePlanet,
  MediumPurplePlanet,
  MediumGreenPlanet,
  MediumOrangePlanet,
  SmallTealPlanet,
  TinyPinkPlanet,
  SmallYellowPlanet,
  TopLeftPlanet,
  BottomRightPlanet
}; 