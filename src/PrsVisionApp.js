import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { createGlobalStyle } from 'styled-components';
import { Nebula, AnimatedBackground } from './components/Nebula';
import {
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
} from './components/Planets';
import PlanetaryRings from './components/PlanetaryRings';
import Earth from './components/Earth';
import Stars from './components/Stars';
import ShootingStars from './components/ShootingStars';
import AsteroidField from './components/Asteroids';
import Contact from './pages/Contact';
import About from './pages/About';
import Home from './pages/Home';

// Theme configuration
const theme = {
  colors: {
    primary: '#7B2CBF',
    secondary: '#3A0CA3',
    accent: '#4CC9F0',
    background: '#0B0014',
    text: '#FFFFFF',
    star: '#FFFFFF',
    nebula1: 'rgba(123, 44, 191, 0.2)',
    nebula2: 'rgba(76, 201, 240, 0.2)',
    planet1: '#FF6B6B',
    planet2: '#4ECDC4',
    planet3: '#FFE66D',
    earth: '#4A90E2',
    earthAtmosphere: 'rgba(74, 144, 226, 0.2)'
  }
};

// Animated Background Components
const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
  background: ${props => props.theme.colors.background};
`;

// Global styles
const GlobalStyles = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Rajdhani', sans-serif;
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    overflow-x: hidden;
    
    /* Hide scrollbar but keep functionality */
    &::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;

// Navbar component
const Navbar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(58, 12, 163, 0.15);
  backdrop-filter: blur(10px);
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  border-bottom: 1px solid ${props => props.theme.colors.primary};
`;

const Logo = styled.h1`
  color: ${props => props.theme.colors.accent};
  font-size: 2rem;
  text-shadow: 0 0 10px rgba(76, 201, 240, 0.3);
  display: inline-block;
  margin: 0;
  padding: 0;
`;

const HeaderSubtitle = styled.span`
  color: ${props => props.theme.colors.text};
  font-size: 1.4rem;
  opacity: 0.7;
  font-weight: normal;
  margin: 0;
  padding: 0;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
`;

const StyledNavLink = styled.button`
  background: none;
  border: none;
  color: ${props => props.theme.colors.text};
  text-decoration: none;
  transition: color 0.3s ease;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    color: ${props => props.theme.colors.accent};
  }
`;

const AppContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
`;

const NavbarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: ${props => props.theme.colors.secondary};
  backdrop-filter: none;
  border-bottom: 1px solid ${props => props.theme.colors.primary};
`;

const MainContent = styled.div`
  position: relative;
  z-index: 1;
  margin-top: 80px;
  scroll-behavior: smooth;
  overflow-y: auto;

  /* Hide scrollbar */
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;

  & > div {
    scroll-margin-top: 80px;
    padding: 0;
    margin: 0;
  }
`;

function PrsVisionApp() {
  // Create Earth configurations with different positions
  const earths = [
    {
      id: 1,
      initial: { x: '5vw', y: '5vh' },  // Start from top-left area
      animate: {
        x: ['5vw', '85vw'],             // Move across 85% of viewport width
        y: ['5vh', '85vh'],             // Move across 85% of viewport height
        rotate: [0, 360],
      },
      duration: 15                       // Adjusted duration for smoother movement
    }
  ];

  // Add the scrollToSection function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AppContainer>
      <ThemeProvider theme={theme}>
        <GlobalStyles>
          <Router>
            <BackgroundContainer>
              <AnimatedBackground
                animate={{
                  backgroundPosition: ['0% 0%', '100% 100%'],
                }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              
              {/* Stars and Shooting Stars as separate components */}
              <Stars />
              <ShootingStars />
              <AsteroidField />
              
              {/* Earth with responsive animation */}
              {earths.map(earth => (
                <Earth 
                  key={earth.id} 
                  earth={earth}
                />
              ))}

              {/* Simplified Nebula components */}
              <Nebula type="purple" />
              <Nebula type="blue" />

              {/* Rest of the components */}
              <PlanetaryRings />
              
              {/* Planets */}
              <TopLeftPlanet>
                <PlanetShadow />
              </TopLeftPlanet>
              <BottomRightPlanet />
              
              {/* Red planet */}
              <GiantRedPlanet>
                <PlanetShadow />
              </GiantRedPlanet>

              {/* Clean blue planet */}
              <LargeBluePlanet>
                <PlanetShadow />
              </LargeBluePlanet>
              
              {/* Medium-sized (middle distance) planets */}
              <MediumPurplePlanet>
                <PlanetShadow style={{
                  background: `radial-gradient(
                    circle at 75% 75%,
                    rgba(0, 0, 0, 0.55) 0%,
                    transparent 70%
                  )`
                }} />
                <PlanetFeatures style={{
                  background: `
                    radial-gradient(
                      circle at 50% 50%,
                      transparent 30%,
                      rgba(255, 255, 255, 0.15) 40%,
                      transparent 50%
                    )
                  `
                }} />
              </MediumPurplePlanet>
              <MediumGreenPlanet>
                <PlanetShadow />
              </MediumGreenPlanet>
              <MediumOrangePlanet />
              
              {/* Smallest (farthest) planets */}
              <SmallTealPlanet />
              <TinyPinkPlanet />
              <SmallYellowPlanet />
            </BackgroundContainer>

            <NavbarContainer>
              <Navbar>
                <Logo>PRS Vision</Logo>
                <HeaderSubtitle>Creating Next-Gen Gaming Experiences</HeaderSubtitle>
                <NavLinks>
                  <StyledNavLink onClick={() => scrollToSection('home')}>
                    Home
                  </StyledNavLink>
                  <StyledNavLink onClick={() => scrollToSection('about')}>
                    About
                  </StyledNavLink>
                  <StyledNavLink onClick={() => scrollToSection('contact')}>
                    Contact
                  </StyledNavLink>
                </NavLinks>
              </Navbar>
            </NavbarContainer>

            <MainContent>
              <div id="home">
                <Home />
              </div>
              <div id="about">
                <About />
              </div>
              <div id="contact">
                <Contact />
              </div>
            </MainContent>
          </Router>
        </GlobalStyles>
      </ThemeProvider>
    </AppContainer>
  );
}

export default PrsVisionApp;
