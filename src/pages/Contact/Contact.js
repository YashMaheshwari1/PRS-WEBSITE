import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram, FaLinkedin, FaEnvelope, FaUserClock } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ContactContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding-top: 80px;
`;

const ScrollContainer = styled.div`
  height: 100vh;
  overflow-y: auto;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;

  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
`;

const Section = styled(motion.section)`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  scroll-snap-align: start;
`;

// Footer Styles
const Footer = styled.footer`
  background: rgba(58, 12, 163, 0.15);
  backdrop-filter: blur(10px);
  padding: 3rem 0;
  border-top: 1px solid ${props => props.theme.colors.primary};
  width: 100%;
  margin-bottom: 0;
  position: relative;
  bottom: 0;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2rem;
  padding: 0 8rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
    padding: 0 2rem;
  }
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h3 {
    color: ${props => props.theme.colors.accent};
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
    text-align: left;
  }

  @media (max-width: 768px) {
    align-items: center;
    
    h3 {
      text-align: center;
    }
  }
`;

const CompanyLogo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;
  width: 100%;

  @media (max-width: 768px) {
    align-items: center;
  }

  p {
    color: ${props => props.theme.colors.text};
    opacity: 0.8;
    font-size: 1rem;
  }
`;

const Logo = styled.h1`
  color: ${props => props.theme.colors.accent};
  font-size: 2rem;
  text-shadow: 0 0 10px rgba(76, 201, 240, 0.3);
  margin: 0;
`;

const SocialLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-top: 1rem;
  align-items: flex-start;
  width: 100%;
  
  a {
    color: ${props => props.theme.colors.text};
    text-decoration: none;
    transition: color 0.3s ease;
    font-size: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    justify-content: flex-start;
    width: 100%;
    
    &:hover {
      color: ${props => props.theme.colors.accent};
    }
  }

  @media (max-width: 768px) {
    align-items: center;
    
    a {
      justify-content: center;
    }
  }
`;

const EmailSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  align-items: flex-start;
  width: 100%;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

const SupportText = styled.p`
  color: ${props => props.theme.colors.text};
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const EmailLink = styled.a`
  color: ${props => props.theme.colors.text} !important;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;
  width: 100%;

  svg {
    font-size: 1.2rem;
  }

  &:hover {
    color: ${props => props.theme.colors.accent} !important;
  }

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const ContactContent = styled.div`
  flex: 1;
`;

const HelpfulLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  align-items: flex-start;
  width: 100%;

  a, Link {
    color: ${props => props.theme.colors.text};
    text-decoration: none;
    transition: color 0.3s ease;
    font-size: 1rem;
    
    &:hover {
      color: ${props => props.theme.colors.accent};
    }
  }

  @media (max-width: 768px) {
    align-items: center;
  }
`;

const Contact = ({ setShowRefundPolicy }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: 'maheshwariyash727@gmail.com',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      // Add your form submission logic here
      await new Promise(resolve => setTimeout(resolve, 1500));
      setStatus('success');
      // Reset form except email which is readonly
      setFormData(prev => ({ ...prev, name: '', message: '' }));
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <ContactContainer>
      <ContactContent>
        <ScrollContainer>
          <Section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {/* Contact Form Section */}
          </Section>

          <Section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {/* Social Links Section */}
          </Section>
        </ScrollContainer>
      </ContactContent>
      
      <Footer>
        <FooterContent>
          <FooterSection>
            <CompanyLogo>
              <Logo>PRS Vision</Logo>
              <p>Creating Next-Gen Gaming Experiences</p>
            </CompanyLogo>
          </FooterSection>

          <FooterSection>
            <h3>HELPFUL LINKS</h3>
            <HelpfulLinks>
              <Link to="/privacy-policy">Privacy Policy</Link>
              <Link 
                to="refund-policy" 
                onClick={(e) => {
                  e.preventDefault();
                  setShowRefundPolicy(true);
                  window.scrollTo(0, 0);
                }}
              >
                Refund Policy
              </Link>
              <Link to="/terms-conditions">Terms & Conditions</Link>
            </HelpfulLinks>
          </FooterSection>

          <FooterSection>
            <h3>GET IN TOUCH</h3>
            <EmailSection>
              <EmailLink href="mailto:maheshwariyash727@gmail.com">
                <FaEnvelope />
                maheshwariyash727@gmail.com
              </EmailLink>
              <SupportText>
                <FaUserClock /> Support Team : 10am-7pm
              </SupportText>
            </EmailSection>
          </FooterSection>

          <FooterSection>
            <h3>CONNECT WITH US</h3>
            <SocialLinks>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook /> Facebook
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter /> Twitter
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <FaYoutube /> Youtube
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram /> Instagram
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin /> LinkedIn
              </a>
            </SocialLinks>
          </FooterSection>
        </FooterContent>
      </Footer>
    </ContactContainer>
  );
};

export default Contact; 