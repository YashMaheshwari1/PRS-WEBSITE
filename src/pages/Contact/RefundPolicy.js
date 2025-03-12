import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const PolicyContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 120px 20px 40px;
  background: ${props => props.theme.colors.background};
`;

const PolicyContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  background: rgba(58, 12, 163, 0.1);
  backdrop-filter: blur(10px);
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(58, 12, 163, 0.3);
`;

const Title = styled(motion.h1)`
  color: ${props => props.theme.colors.accent};
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
`;

const Section = styled.div`
  margin-bottom: 2rem;

  h2 {
    color: ${props => props.theme.colors.accent};
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }

  p {
    color: ${props => props.theme.colors.text};
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 1rem;
  }

  ul {
    list-style-type: disc;
    margin-left: 20px;
    margin-bottom: 1rem;

    li {
      color: ${props => props.theme.colors.text};
      font-size: 1.1rem;
      line-height: 1.6;
      margin-bottom: 0.5rem;
    }
  }
`;

const RefundPolicy = () => {
  return (
    <PolicyContainer>
      <PolicyContent>
        <Title
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Refund Policy
        </Title>

        <Section>
          <h2>Our Refund Policy</h2>
          <p>
            At PRS Vision, we strive to ensure complete satisfaction with our gaming products and services. We understand that sometimes a purchase may not meet your expectations, and we have established this refund policy to address such situations.
          </p>
        </Section>

        <Section>
          <h2>Digital Products</h2>
          <p>For digital products and game downloads:</p>
          <ul>
            <li>Refund requests must be made within 14 days of purchase</li>
            <li>The game must have been played for less than 2 hours</li>
            <li>Refunds will be processed to the original payment method</li>
            <li>DLC and in-game purchases may have different refund eligibility</li>
          </ul>
        </Section>

        <Section>
          <h2>Refund Process</h2>
          <p>To request a refund:</p>
          <ul>
            <li>Log into your PRS Vision account</li>
            <li>Navigate to your purchase history</li>
            <li>Select the item you wish to refund</li>
            <li>Fill out the refund request form</li>
            <li>Our support team will review your request within 48 hours</li>
          </ul>
        </Section>

        <Section>
          <h2>Non-Refundable Items</h2>
          <p>The following items are not eligible for refunds:</p>
          <ul>
            <li>Virtual currency purchases</li>
            <li>Consumable in-game items</li>
            <li>Products where the seal is broken or activation key is used</li>
            <li>Accounts that have been banned or suspended</li>
          </ul>
        </Section>

        <Section>
          <h2>Processing Time</h2>
          <p>
            Once approved, refunds typically process within 5-7 business days, depending on your payment method and financial institution. Some payment methods may take longer to process.
          </p>
        </Section>

        <Section>
          <h2>Contact Us</h2>
          <p>
            If you have any questions about our refund policy or need assistance with a refund request, please contact our support team at maheshwariyash727@gmail.com. Our support hours are 10am-7pm.
          </p>
        </Section>
      </PolicyContent>
    </PolicyContainer>
  );
};

export default RefundPolicy;

