import React from 'react';
import styled from '@emotion/styled';
import { FlexContainer } from 'styles/container/styles';
import { spinReverse, spin } from 'styles/keyframes';
import ReactIcon from 'assets/react.png';
import WebpackIcon from 'assets/webpack.png';

const Main = () => {
  return (
    <FlexContainer>
      <MainTitle>
        <ReactImg src={ReactIcon} alt="webpack" />
        <WebpackImg src={WebpackIcon} alt="react" />
        <br /> Webpack으로 React.js 빌드하기
        <a
          href="https://github.com/gparkkii/react_webpack_template"
          target="_blank"
          rel="noreferrer noopener"
        >
          <p>© gparkkii : build react with webpack</p>
        </a>
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
  width: 108px;
  margin: 0px 5px;
  transition: 0.5s all linear;
  animation: ${spinReverse} 15s linear infinite;
`;

const WebpackImg = styled.img`
  width: 108px;
  margin: 0px 5px;
  transition: 0.5s all linear;
  animation: ${spin} 15s linear infinite;
`;
