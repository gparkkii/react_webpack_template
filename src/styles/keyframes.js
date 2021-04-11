import { keyframes } from '@emotion/react';

export const bounce = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0);
  }

  40%, 43% {
    transform: translate3d(0, -30px, 0);
  }

  70% {
    transform: translate3d(0, -15px, 0);
  }

  90% {
    transform: translate3d(0,-4px,0);
  }
`;

export const spin = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

export const spinReverse = keyframes`
  100% {
    transform: rotate(-360deg);
  }
`;
