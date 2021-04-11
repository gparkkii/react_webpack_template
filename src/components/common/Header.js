import React from 'react';
import styled from '@emotion/styled';

const Header = () => {
  return (
    <StyledHeader>
      <nav>
        <h2>👩🏼‍💻</h2>
        gparkkii
      </nav>
      <nav>---</nav>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  z-index: 99999;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
  font-size: 20px;
  font-weight: 600;
  padding: 0px 24px;
  border-bottom: 1px solid #3c3f43;
  & nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    & h2 {
      font-size: 28px;
      margin-right: 8px;
    }
  }
`;
