import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #ffffff; /* Clean, modern background */
  color: #333333; /* Dark text for readability */
  padding: 16px 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.05); /* Subtle shadow for depth */
  border-top: 1px solid #eaeaea; /* Delicate separation line */
  margin-top: auto; /* Allows the footer to settle at the bottom of the page content */
`;

const FooterText = styled.p`
  font-size: 0.9rem;
  font-weight: 400;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterText>&copy; 2025 SQL Editor. All rights reserved.</FooterText>
    </FooterContainer>
  );
};

export default Footer;
