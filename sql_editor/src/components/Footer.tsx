import * as React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #ffffff;
  color: #333333; 
  padding: 16px 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.05);
  border-top: 1px solid #eaeaea;
  margin-top: auto;
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
