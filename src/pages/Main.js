import React from 'react';
import styled from '@emotion/styled';
import { FlexContainer } from 'styles/container/styles';
import ReactIcon from 'assets/react.png';
import WebpackIcon from 'assets/webpack.png';

const Main = () => {
  return (
    <FlexContainer>
      <MainTitle>
        <ReactImg src={ReactIcon} alt="webpack" />
        <WebpackImg src={WebpackIcon} alt="react" />
        <br /> Webpack으로 React.js 빌드하기
        <p>© gparkkii : build react with webpack</p>
      </MainTitle>
    </FlexContainer>
  );
};

export default Main;

const MainTitle = styled.h2`
  font-size: 56px;
  font-weight: 500;
  text-align: center;
  & p {
    margin-top: 30px;
    font-size: 15px;
    color: #757575;
  }
`;

const ReactImg = styled.img`
  width: 148px;
`;

const WebpackImg = styled.img`
  width: 108px;
`;
