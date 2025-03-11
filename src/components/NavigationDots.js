import React from 'react';
import styled from 'styled-components';

const DotsContainer = styled.div`
  position: fixed;
  right: 2rem;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  z-index: 100;
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${props => props.active ? props.theme.colors.accent : 'rgba(255, 255, 255, 0.3)'};
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid ${props => props.theme.colors.primary};

  &:hover {
    background: ${props => props.theme.colors.accent};
    transform: scale(1.2);
  }
`;

const NavigationDots = ({ activeSection, onDotClick }) => {
  const sections = ['home', 'about', 'contact'];

  return (
    <DotsContainer>
      {sections.map((section, index) => (
        <Dot
          key={section}
          active={activeSection === index}
          onClick={() => onDotClick(index)}
          title={section.charAt(0).toUpperCase() + section.slice(1)}
        />
      ))}
    </DotsContainer>
  );
};

export default NavigationDots; 