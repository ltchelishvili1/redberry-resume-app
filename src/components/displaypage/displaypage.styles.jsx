import styled, { css } from "styled-components";

export const MainContainer = styled.div`
  height: 1000px;
  padding: 48px 80px 44px 75px;

  ${({ wholePage }) =>
    wholePage &&
    css`
      margin: auto;
      width: 822px;
      border: 0.8px solid #000000;
      margin: 54px auto;
      padding: 0 80px;
    `}
`;
