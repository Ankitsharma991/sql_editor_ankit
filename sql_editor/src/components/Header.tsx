import React from "react";
import styled from "styled-components";
import { FaDatabase } from "react-icons/fa";

const HeaderContainer = styled.header`
  background-color: #ffffff; /* Light background for a modern look */
  color: #333333; /* Darker text for contrast */
  padding: 0 32px;
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08); /* Subtle shadow for depth */
  border-bottom: 1px solid #eaeaea; /* Light border for separation */
  backdrop-filter: blur(8px);
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 1.8rem;
  font-weight: 600;
  color: #0070f3; /* Accent color on the logo for a modern feel */
`;

const Header: React.FC = () => (
  <HeaderContainer role="banner">
    <Logo>
      <FaDatabase size={28} /> SQL Editor
    </Logo>
  </HeaderContainer>
);

export default Header;
