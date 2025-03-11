import styled from 'styled-components';

const PlanetaryRingsContainer = styled.div`
  position: fixed;
  bottom: 6%;
  left: 50%;
  transform: translateX(-50%);
  width: 75px;
  height: 75px;
  pointer-events: none;
  z-index: 0;
  filter: contrast(1.1);
  perspective: 250px;
`;

const RingBase = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform-origin: center;
  border-radius: 50%;
  transform: translate(-50%, -50%) rotateX(30deg) rotateY(-15deg);
  background: transparent;
  border-style: dashed;
  border-color: transparent;
`;

const OuterRingLayer = styled(RingBase)`
  height: 20px;
  width: 360%;
  border-width: 1px;
  box-shadow: 0 0 5px rgba(255, 231, 205, 0.1),
             inset 0 0 4px rgba(255, 231, 205, 0.08);
  background: linear-gradient(90deg,
    transparent 15%,
    rgba(255, 231, 205, 0.12) 25%,
    rgba(255, 231, 205, 0.15) 50%,
    rgba(255, 231, 205, 0.12) 75%,
    transparent 85%
  );
`;

const MainRingLayer = styled(RingBase)`
  height: 17.5px;
  width: 340%;
  border-width: 1px;
  box-shadow: 0 0 5px rgba(255, 220, 180, 0.1),
             inset 0 0 4px rgba(255, 220, 180, 0.08);
  background: linear-gradient(90deg,
    transparent 12%,
    rgba(255, 220, 180, 0.15) 25%,
    rgba(255, 220, 180, 0.18) 50%,
    rgba(255, 220, 180, 0.15) 75%,
    transparent 88%
  );
`;

const InnerRingLayer = styled(RingBase)`
  height: 15px;
  width: 320%;
  border-width: 0.5px;
  box-shadow: 0 0 5px rgba(255, 210, 160, 0.1),
             inset 0 0 4px rgba(255, 210, 160, 0.08);
  background: linear-gradient(90deg,
    transparent 10%,
    rgba(255, 210, 160, 0.1) 25%,
    rgba(255, 210, 160, 0.13) 50%,
    rgba(255, 210, 160, 0.1) 75%,
    transparent 90%
  );
`;

const GapRingLayer = styled(RingBase)`
  height: 16.25px;
  width: 330%;
  border-width: 0.5px;
  box-shadow: 0 0 5px rgba(255, 215, 170, 0.1),
             inset 0 0 4px rgba(255, 215, 170, 0.08);
  background: linear-gradient(90deg,
    transparent 11%,
    rgba(255, 215, 170, 0.12) 25%,
    rgba(255, 215, 170, 0.15) 50%,
    rgba(255, 215, 170, 0.12) 75%,
    transparent 89%
  );
`;

const PlanetaryRings = () => {
  return (
    <PlanetaryRingsContainer>
      <OuterRingLayer />
      <MainRingLayer />
      <GapRingLayer />
      <InnerRingLayer />
    </PlanetaryRingsContainer>
  );
};

export default PlanetaryRings; 