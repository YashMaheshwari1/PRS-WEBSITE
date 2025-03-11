import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const StarComponent = styled(motion.div)`
  position: absolute;
  width: ${props => props.size}vmin;
  height: ${props => props.size}vmin;
  background: ${props => props.theme.colors.star};
  border-radius: 50%;
  opacity: ${props => props.opacity};
  box-shadow: 0 0 ${props => props.size * 3}vmin ${props => props.theme.colors.star};
  min-width: 1px;
  min-height: 1px;
`;

const Stars = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const newStars = [...Array(150)].map((_, i) => ({
      id: i,
      size: Math.random() * 0.2 + 0.1,
      x: `${Math.random() * 100}vw`,
      y: `${Math.random() * 100}vh`,
      opacity: 0.75
    }));
    setStars(newStars);
  }, []);

  return (
    <>
      {stars.map(star => (
        <StarComponent
          key={star.id}
          size={star.size}
          opacity={star.opacity}
          initial={{ x: star.x, y: star.y }}
          animate={{
            opacity: [star.opacity, star.opacity * 0.6, star.opacity],
          }}
          transition={{
            duration: Math.random() * 2 + 1,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}
    </>
  );
};

export default Stars; 