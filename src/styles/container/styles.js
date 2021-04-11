import styled from '@emotion/styled';
import { media } from '../media_query';

export const MainContainer = styled.div`
  display: flex;
  margin: 0 auto;
  transition: all 0.2s;

  ${media.mobile`
      width: calc(100% - 1rem);        
  `}
  ${media.tablet`
      width: calc(100% - 2rem);
  `}
  ${media.desktop`
      width: 1200px;
  `}
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  transition: all 0.2s;

  width: calc(100%-2rem);
  height: calc(100vh - 140px);

  /* height: calc(100vh - (header + footer height)); */

  ${media.tablet`
    width: calc(100%-1rem);
  `}
  ${media.desktop`
    width: 100%;
  `}
`;
